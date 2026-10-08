#!/bin/bash
# Checks that every URL in BOOK_LINKS answers with a status below 400.
cd "$(dirname "$0")/.."
grep -oE "https://[^']+" site2/src/data.js | grep -v "google.com/maps" | sort -u | while read -r u; do
  c=$(curl -s -o /dev/null -L -m 15 -A "Mozilla/5.0" -w "%{http_code}" "$u"); echo "$c $u"
done
