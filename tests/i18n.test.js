var en = Object.keys(UI.en), de = Object.keys(UI.de);
eq(en.filter(function (k) { return !(k in UI.de); }), [], 'keys missing in UI.de');
eq(de.filter(function (k) { return !(k in UI.en); }), [], 'keys missing in UI.en');
en.forEach(function (k) { ok(String(UI.en[k]).trim() && String(UI.de[k]).trim(), 'empty text for ' + k); });
print('i18n ok: ' + en.length + ' keys');
