#!/bin/bash
# Usage: tests/shot.sh <hash> <width> <out.png>   e.g. tests/shot.sh de 390 /tmp/de-mobile.png
# Hash: a style id (classic, balanced, nature, culture, slow) or a language (en, de).
# Headless Chrome writes the PNG but never exits here, so we poll for the file and kill Chrome.
set -euo pipefail
cd "$(dirname "$0")/.."
C="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
TMP=$(mktemp -d)
rm -f "$3"
"$C" --headless=new --disable-gpu --hide-scrollbars --user-data-dir="$TMP" \
  --window-size="$2,2600" --virtual-time-budget=8000 --screenshot="$3" \
  "file://$PWD/site2/out/web/index.html#$1" >/dev/null 2>&1 &
PID=$!
stop() {
  kill "$PID" 2>/dev/null || true
  pkill -f -- "--user-data-dir=$TMP" 2>/dev/null || true
  wait "$PID" 2>/dev/null || true
}
for _ in $(seq 60); do
  [ -s "$3" ] && break
  sleep 1
done
if [ ! -s "$3" ]; then
  stop; rm -rf "$TMP"
  echo "shot.sh: no screenshot after 60s" >&2
  exit 1
fi
sleep 1
stop
rm -rf "$TMP"
ls -la "$3"
