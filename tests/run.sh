#!/bin/bash
# Runs the data/logic tests in JavaScriptCore and a CSS lint. Exit 0 = all pass.
set -euo pipefail
cd "$(dirname "$0")/.."
J=/System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc
S=site2/src
for t in tests/*.test.js; do
  echo "== $t"
  "$J" "$S/data.js" "$S/i18n.js" "$S/i18n.pl.js" "$S/plan.js" tests/assert.js "$t"
done
echo "== lint: no hard-coded words in CSS content"
if grep -nE "content: *\"[^\"]*[A-Za-z]{3,}" "$S/template.html"; then echo "FAIL: translate this text via UI keys"; exit 1; fi
echo "== lint: app.js picks languages and counted words through data, not by name"
if grep -nE "lang (===|!==) 'de'|T\('(night|nights|f\.bases|f\.flights|f\.hikes)'\)" "$S/app.js"; then echo "FAIL: use TR[lang] and countWord(key, n)"; exit 1; fi
echo "ALL PASS"
