"""Build the hosted page (a fragment, separate image files), the same page as a full document for GitHub Pages, and the offline single-file page (embedded images)."""
import base64, io, json, os, re, shutil
from PIL import Image

ROOT = os.path.dirname(os.path.abspath(__file__))
PHOTO_DIR = os.path.join(ROOT, "..", "photos")
OUT_WEB = os.path.join(ROOT, "out", "web")
OUT_PAGES = os.path.join(ROOT, "out", "pages")
OUT_OFF = os.path.join(ROOT, "out", "offline")

CAP = {
    "saigon_0": "The Saigon river at blue hour",
    "saigon_1": "A lone mangrove off the Cần Giờ coast",
    "saigon_2": "Boardwalk through the Rừng Sác mangroves, Cần Giờ",
    "saigon_3": "Incense at Thiên Hậu temple, Chợ Lớn",
    "saigon_4": "Dried goods at Bình Tây market",
    "dalat_0": "On the Tà Năng trail in the dry season",
    "dalat_1": "Stream and pool at Hòn Giao, Bidoup–Núi Bà National Park",
    "dalat_2": "Old pines in Bidoup–Núi Bà after rain",
    "dalat_4": "Looking out from Lang Biang mountain",
    "dalat_3": "Tents on the Tà Năng grass hills",
    "cattien_0": "Fishing boat on a wetland lake in Cát Tiên",
    "cattien_1": "Sunset over the Cát Tiên wetlands",
    "cattien_3": "Buttress roots of a lowland forest giant",
    "cattien_4": "Wetland seen from the forest edge",
    "mekong_0": "A rower on the Mekong just before sunrise",
    "mekong_2": "Cái Răng floating market, Cần Thơ",
    "mekong_3": "Selling from a boat at Phong Điền",
    "mekong_1": "A nipa-palm canal in the delta",
    "phuquoc_0": "Granite boulders on a Phú Quốc beach",
    "phuquoc_1": "Starfish in the shallows, Phú Quốc",
    "phuquoc_2": "Sunset over the Gulf of Thailand",
    "phuquoc_5": "A quiet beach near Hàm Ninh",
    "hoian_0": "Hội An's waterfront on the Thu Bồn river",
    "hoian_1": "A basket boat among water-coconut palms",
    "hue_0": "Tomb of Emperor Minh Mạng, Huế, in the mist",
    "hue_4": "The Hải Vân Pass above the sea",
    "hoian_2": "Thanh Toàn tile-roofed bridge, near Huế",
    "puluong_1": "Sunset over the Pù Luông valley in November",
    "puluong_2": "A village among the paddies, Pù Luông",
    "puluong_3": "Poling a bamboo raft on the river",
    "puluong_0": "Pù Luông's terraces at harvest time (September)",
    "puluong_5": "Weaving on a wooden loom at home",
    "ninhbinh_1": "Rowing boat below the cliffs at Tràng An",
    "ninhbinh_0": "Limestone towers at Tràng An",
    "ninhbinh_3": "Vân Long wetland at golden hour",
    "ninhbinh_4": "A Delacour's langur on a limestone cliff",
    "ninhbinh_5": "Through a cave on the Tràng An boat route",
    "ninhbinh_6": "Hoa Lư, the 10th-century royal capital",
    "catba_0": "Junks in Lan Hạ Bay",
    "catba_3": "Morning haze over the islands off Cát Bà",
    "catba_1": "A small beach in Lan Hạ Bay",
    "catba_2": "Floating fish farm off Cát Bà",
    "catba_6": "Việt Hải village, Cát Bà National Park",
    "caobang_0": "Bản Giốc waterfall from the bamboo-raft landing",
    "caobang_6": "Núi Mắt Thần, the Angel's Eye mountain",
    "caobang_1": "Bản Giốc above the rice fields",
    "caobang_2": "Inside Ngườm Ngao cave",
    "caobang_3": "Karst reflected in a paddy near Bản Giốc",
    "babe_0": "A boat on Ba Bể lake",
    "babe_1": "Still water on Ba Bể",
    "babe_2": "A Tày stilt house by the lake",
    "babe_3": "Pác Ngòi's fields between the lake and the hills",
    "babe_5": "Then singing with a tính lute",
    "hanoi_0": "A train crossing Long Biên bridge",
    "hanoi_1": "Main gate of the Temple of Literature",
    "hanoi_3": "A laterite lane in Đường Lâm village",
    "hanoi_5": "A stilt house in the garden of the Museum of Ethnology",
}
HERO = "ninhbinh_1"
# Smaller copies for the hosted page (srcset): phones and thumbnails pick these instead of the full photo.
# The offline file keeps one embedded size per photo.
SMALLER = {"photo": (480, 960), "hero": (960, 1400)}


def clean_artist(a):
    a = re.sub(r"\s*\(thảo luận\).*$", "", a)
    a = re.sub(r"\s+", " ", a).strip(" ,")
    return a or "Unknown"


SITE_URL = "https://grzegorzfrskiba-hub.github.io/vietnam-december/"
# Link preview (WhatsApp and others), one language for everyone: German, because the friend and his parents get the link.
PREVIEW = {
    "title": "Vietnam im Dezember: 15 Tage von Süden nach Norden",
    "description": "Fünf fertige Routen für den 11.–25. Dezember 2026, von Hồ Chí Minh City nach Hà Nội. Wählt gemeinsam euren Reisestil.",
    "alt": "Ein Ruderboot auf dem Fluss unter den Kalksteinfelsen von Tràng An, Ninh Bình",
}
OG_SIZE = (1200, 630)
# tab icon: karst peaks on the page's accent green
ICON = ("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='#0c6a5a'/>"
        "<path d='M8 50 15 30 21 38 30 13 39 33 45 24 56 50z' fill='#fff'/></svg>")


def head_extras(preview):
    """Tab icon for every full document; the link preview tags only for the public page, whose URL they name."""
    from urllib.parse import quote
    out = '<link rel="icon" href="data:image/svg+xml,%s">\n' % quote(ICON, safe="/:=' ")
    if preview:
        esc = lambda t: t.replace("&", "&amp;").replace('"', "&quot;")
        out += ('<meta name="description" content="%s">\n' % esc(PREVIEW["description"])
                + '<meta property="og:type" content="website">\n<meta property="og:locale" content="de_DE">\n'
                + '<meta property="og:url" content="%s">\n' % SITE_URL
                + '<meta property="og:title" content="%s">\n' % esc(PREVIEW["title"])
                + '<meta property="og:description" content="%s">\n' % esc(PREVIEW["description"])
                + '<meta property="og:image" content="%simg/og.jpg">\n' % SITE_URL
                + '<meta property="og:image:width" content="%d">\n<meta property="og:image:height" content="%d">\n' % OG_SIZE
                + '<meta property="og:image:alt" content="%s">\n' % esc(PREVIEW["alt"])
                + '<meta name="twitter:card" content="summary_large_image">\n')
    return out


def full_document(fragment, preview=False):
    """The page fragment as a complete HTML document: doctype, charset and viewport meta, tab icon, no body margin.
    For files that are served as they are."""
    return ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
            '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
            + head_extras(preview)
            + fragment.replace("<style>", "<style>\nbody { margin: 0; }", 1).replace("</style>", "</style>\n</head>\n<body>", 1)
            + "\n</body>\n</html>\n")


def encode(im, width, quality):
    if im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, "JPEG", quality=quality, optimize=True, progressive=True)
    return im.size, buf.getvalue()


def main():
    meta = {m["file"][:-4]: m for m in json.load(open(os.path.join(PHOTO_DIR, "meta.json")))}
    missing = [k for k in CAP if k not in meta]
    assert not missing, missing
    data_js = open(os.path.join(ROOT, "src", "data.js"), encoding="utf-8").read()
    app_js = open(os.path.join(ROOT, "src", "app.js"), encoding="utf-8").read()
    i18n_js = open(os.path.join(ROOT, "src", "i18n.js"), encoding="utf-8").read() + "\n" + open(os.path.join(ROOT, "src", "i18n.pl.js"), encoding="utf-8").read()
    plan_js = open(os.path.join(ROOT, "src", "plan.js"), encoding="utf-8").read()
    basemap_js = open(os.path.join(ROOT, "src", "basemap.js"), encoding="utf-8").read()
    template = open(os.path.join(ROOT, "src", "template.html"), encoding="utf-8").read()

    # every photo id referenced in data.js must have a caption
    referenced = set(re.findall(r"'((?:saigon|dalat|cattien|mekong|phuquoc|hoian|hue|puluong|ninhbinh|catba|caobang|babe|hanoi)_\d)'", data_js))
    assert referenced <= set(CAP), referenced - set(CAP)

    for out in (OUT_WEB, OUT_PAGES, OUT_OFF):
        shutil.rmtree(out, ignore_errors=True)
        os.makedirs(out)
    os.makedirs(os.path.join(OUT_WEB, "img"))

    web, off = {}, {}
    for pid, cap in CAP.items():
        m = meta[pid]
        im = Image.open(os.path.join(PHOTO_DIR, m["file"])).convert("RGB")
        base = {"cap": cap, "artist": clean_artist(m["artist"]), "license": m["license"], "page": m["page"]}
        (w, h), b = encode(im, 1920 if pid == HERO else 1400, 74)
        open(os.path.join(OUT_WEB, "img", pid + ".jpg"), "wb").write(b)
        web[pid] = dict(base, src="img/%s.jpg" % pid, w=w, h=h)
        srcset = []
        for sw in SMALLER["hero" if pid == HERO else "photo"]:
            if sw < w:
                (vw, _), vb = encode(im, sw, 74)
                open(os.path.join(OUT_WEB, "img", "%s-%d.jpg" % (pid, vw)), "wb").write(vb)
                srcset.append("img/%s-%d.jpg %dw" % (pid, vw, vw))
        if srcset:
            web[pid]["srcset"] = ", ".join(srcset + ["img/%s.jpg %dw" % (pid, w)])
        (w, h), b = encode(im, 1600 if pid == HERO else 1200, 68)
        off[pid] = dict(base, src="data:image/jpeg;base64," + base64.b64encode(b).decode(), w=w, h=h)
        if pid == HERO:
            # link preview image: the hero cut to 1200 x 630, kept low so the rower stays in the picture
            ow, oh = OG_SIZE
            k = max(ow / im.width, oh / im.height)
            big = im.resize((round(im.width * k), round(im.height * k)), Image.LANCZOS)
            top = round((big.height - oh) * 0.95)
            left = (big.width - ow) // 2
            big.crop((left, top, left + ow, top + oh)).save(os.path.join(OUT_WEB, "img", "og.jpg"), "JPEG", quality=78, optimize=True, progressive=True)

    def page(photos):
        script = (data_js + "\n" + basemap_js + "\n" + i18n_js + "\n" + plan_js + "\nconst PHOTOS = " + json.dumps(photos, ensure_ascii=False) + ";\nconst HERO = " + json.dumps(HERO) + ";\n" + app_js)
        script = script.replace("</script", "<\\/script")
        hero = photos[HERO]
        # the hero is cropped to cover a box about 2x as wide as a phone screen (clamped height, 3:2 photo)
        hero_set = ' srcset="%s" sizes="(max-width: 700px) 200vw, 100vw"' % hero["srcset"] if "srcset" in hero else ""
        return (template.replace("__HERO_SRC__", hero["src"]).replace(" __HERO_SRCSET__", hero_set).replace("__HERO_W__", str(hero["w"]))
                .replace("__HERO_H__", str(hero["h"])).replace("__SCRIPT__", script))

    web_page = page(web)
    open(os.path.join(OUT_WEB, "index.html"), "w", encoding="utf-8").write(web_page)
    # GitHub Pages serves files as they are, so it gets the full document and its own copy of the images
    open(os.path.join(OUT_PAGES, "index.html"), "w", encoding="utf-8").write(full_document(web_page, preview=True))
    shutil.copytree(os.path.join(OUT_WEB, "img"), os.path.join(OUT_PAGES, "img"))
    open(os.path.join(OUT_OFF, "Vietnam-in-December.html"), "w", encoding="utf-8").write(full_document(page(off)))

    size = lambda p: os.path.getsize(p) / 1e6
    img_total = sum(size(os.path.join(OUT_WEB, "img", f)) for f in os.listdir(os.path.join(OUT_WEB, "img")))
    print("web page %.2f MB + %d images %.1f MB" % (size(os.path.join(OUT_WEB, "index.html")), len(web), img_total))
    print("pages page %.2f MB + copy of the images" % size(os.path.join(OUT_PAGES, "index.html")))
    print("offline file %.1f MB" % size(os.path.join(OUT_OFF, "Vietnam-in-December.html")))


if __name__ == "__main__":
    main()
