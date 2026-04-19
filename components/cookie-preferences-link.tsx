"use client";

import { showCookiePreferences } from "@/components/cookie-banner";

export function CookiePreferencesLink() {
  return (
    <button
      type="button"
      onClick={() => showCookiePreferences()}
      className="hover:text-white transition-colors cursor-pointer text-left"
    >
      Gestisci cookie
    </button>
  );
}
