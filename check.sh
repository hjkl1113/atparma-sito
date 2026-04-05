#!/usr/bin/env bash
# Script di verifica funzionamento sito atparma-sito.vercel.app
# Uso: bash check.sh

BASE="https://atparma-sito.vercel.app"
OK=0
FAIL=0

check() {
  local path="$1"
  local expected="${2:-200}"
  local code
  code=$(curl -s -o /dev/null -w "%{http_code}" "$BASE$path")
  if [ "$code" = "$expected" ]; then
    echo "  [OK]  $code  $path"
    OK=$((OK+1))
  else
    echo "  [X]   $code  $path (atteso $expected)"
    FAIL=$((FAIL+1))
  fi
}

echo "=== Verifica pagine pubbliche ==="
check ""
check "/servizi"
check "/servizi/consulenza-fiscale"
check "/servizi/crisi-di-impresa"
check "/servizi/consulenza-finanziaria"
check "/blog"
check "/blog/commercialista-online"
check "/blog/aprire-partita-iva-online"
check "/blog/come-fare-730-online"
check "/faq"
check "/contatti"
check "/privacy"
check "/admin"
check "/checkout/successo"
check "/checkout/annullato"

echo ""
echo "=== SEO ==="
check "/sitemap.xml"
check "/robots.txt"

echo ""
echo "=== 404 test ==="
check "/pagina-inesistente" 404

echo ""
echo "=== API ==="
echo -n "  GET /api/prezzi: "
PREZZI=$(curl -s "$BASE/api/prezzi")
if echo "$PREZZI" | grep -q "730"; then
  echo "OK"
  OK=$((OK+1))
else
  echo "FAIL"
  FAIL=$((FAIL+1))
fi

echo -n "  POST /api/checkout: "
CHECKOUT=$(curl -s -X POST "$BASE/api/checkout" -H "Content-Type: application/json" -d '{"servizio":"730"}')
if echo "$CHECKOUT" | grep -q "checkout.stripe.com"; then
  echo "OK (Stripe live)"
  OK=$((OK+1))
else
  echo "FAIL"
  FAIL=$((FAIL+1))
fi

echo ""
echo "================================="
echo "  OK: $OK    FAIL: $FAIL"
echo "================================="

if [ "$FAIL" -gt 0 ]; then
  exit 1
fi
