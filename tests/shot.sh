#!/bin/bash
# Usage: tests/shot.sh <hash> <width> <out.png>   e.g. tests/shot.sh de 390 /tmp/de-mobile.png
# Hash: a style id (classic, balanced, nature, culture, slow) or a language (en, de).
set -euo pipefail
cd "$(dirname "$0")/.."
C="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
TMP=$(mktemp -d)
perl -e 'alarm shift; exec @ARGV' 120 "$C" --headless=new --disable-gpu --hide-scrollbars --user-data-dir="$TMP" \
  --window-size="$2,2600" --virtual-time-budget=8000 --screenshot="$3" \
  "file://$PWD/site2/out/web/index.html#$1" >/dev/null 2>&1 || true
rm -rf "$TMP"
ls -la "$3"
