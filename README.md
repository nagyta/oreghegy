# Szegedi Vízőrzők – Öreghegy Projekt

Magyar nyelvű nyilvános projekthonlap, tulajdonosi szerkesztőfelülettel.

## Tartalomszerkesztés

A `/szerkeszto` oldalon, a tulajdonos ChatGPT-fiókjával bejelentkezve hírek és képek adhatók hozzá. A tartalmak piszkozatként menthetők vagy nyilvánossá tehetők. Az Oldalak és támogatás fülön a bemutatkozó szöveg, a logó, a nyitókép és a támogatási adatok szerkeszthetők.

A D1-adatbázis a bejegyzéseket és beállításokat, az R2-tárhely a feltöltött képeket tárolja. A szerkesztést az ADMIN_EMAIL környezeti változó szerinti, szerveroldalon ellenőrzött tulajdonosi fiók végezheti. A nyilvános oldal nem igényel bejelentkezést.

## Források

A projektadatok a felhasználó által rendelkezésre bocsátott 2026-os projektbeszámolóból és vezetői kivonatból származnak. A támogatási és egyesületi adatokat a felhasználó adta meg. A logó és a fotók eredetét az asset-sources.json tartalmazza. A kiinduló cikkek ezek alapján készített összefoglalók.

## Fejlesztés

Használd a Sites munkafolyamatát és az eredeti projektazonosítót. A séma a db/schema.ts fájlban, a verziózott migrációk a drizzle könyvtárban találhatók. Ne módosíts már alkalmazott migrációt; új séma esetén generálj új migrációt.
