"use client";

import { useEffect, useRef, useState } from "react";
import { getCheckoutError, type CheckoutFormData } from "@/app/lib/checkout-utils";

export function PayPalButton({
  serviceId,
  serviceTitle,
  price,
  checkoutData,
  onValidationError,
}: {
  serviceId: string;
  serviceTitle: string;
  price: number;
  checkoutData: CheckoutFormData;
  onValidationError: (message: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const checkoutDataRef = useRef(checkoutData);
  const onValidationErrorRef = useRef(onValidationError);
  const [status, setStatus] = useState<"loading" | "ready" | "success" | "error">("loading");

  useEffect(() => {
    checkoutDataRef.current = checkoutData;
  }, [checkoutData]);

  useEffect(() => {
    onValidationErrorRef.current = onValidationError;
  }, [onValidationError]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let buttonsInstance: any = null;
    let disposed = false;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const paypalReady = () => Boolean((window as any).paypal_sdk || (window as any).paypal);

    function renderButton() {
      if (disposed || !container) return;
      container.innerHTML = "";

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const paypal = (window as any).paypal_sdk || (window as any).paypal;
      if (!paypal) {
        setStatus("error");
        return;
      }

      buttonsInstance = paypal.Buttons({
        style: {
          layout: "horizontal",
          color: "gold",
          shape: "rect",
          label: "pay",
          height: 40,
          tagline: false,
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick: (_data: any, actions: any) => {
          const error = getCheckoutError(checkoutDataRef.current);
          if (error) {
            onValidationErrorRef.current(error);
            return actions.reject();
          }
          return actions.resolve();
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        createOrder: (_data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                custom_id: serviceId,
                description: serviceTitle,
                amount: { value: price.toFixed(2), currency_code: "EUR" },
              },
            ],
          });
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onApprove: async (data: any, actions: any) => {
          const order = await actions.order.capture();
          const form = checkoutDataRef.current;
          const response = await fetch("/api/paypal-notify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderId: data.orderID || order?.id || "N/A",
              serviceId,
              servizio: serviceTitle,
              importo: price.toFixed(2),
              fullName: form.fullName,
              email: form.email,
              taxCode: form.taxCode,
              vatNumber: form.vatNumber,
            }),
          });
          if (response.ok) {
            window.location.href = "/checkout/successo";
          } else {
            setStatus("error");
          }
        },
        onError: () => setStatus("error"),
      });

      buttonsInstance.render(container).then(
        () => {
          if (!disposed) setStatus("ready");
        },
        () => {
          if (!disposed) setStatus("error");
        }
      );
    }

    const existing = document.querySelector('script[src*="paypal.com/sdk"]');
    if (existing) {
      if (paypalReady()) {
        renderButton();
      } else {
        existing.addEventListener("load", renderButton, { once: true });
        existing.addEventListener("error", () => setStatus("error"), { once: true });
      }
    } else {
      const script = document.createElement("script");
      const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "sb";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=EUR&intent=capture`;
      script.setAttribute("data-namespace", "paypal_sdk");
      script.onload = () => renderButton();
      script.onerror = () => setStatus("error");
      document.head.appendChild(script);
    }

    return () => {
      disposed = true;
      if (buttonsInstance && typeof buttonsInstance.close === "function") {
        try {
          buttonsInstance.close();
        } catch {
          // noop
        }
      }
    };
  }, [serviceId, serviceTitle, price]);

  if (status === "success") {
    return (
      <div className="text-center py-3 text-green-600 font-medium text-sm">
        Pagamento completato!
      </div>
    );
  }

  return (
    <div>
      <div ref={containerRef} className="min-h-[40px]" />
      {status === "loading" && (
        <p className="text-xs text-zinc-400 text-center mt-1">Caricamento PayPal...</p>
      )}
      {status === "error" && (
        <p className="text-xs text-red-500 text-center mt-1">Errore PayPal. Ricarica la pagina.</p>
      )}
    </div>
  );
}
