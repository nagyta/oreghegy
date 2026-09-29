# Szegedi Vízőrzők – Öreghegy Projekt

Magyar nyelvű nyilvános projekthonlap, tulajdonosi szerkesztőfelülettel.

## Tartalomszerkesztés

A `/szerkeszto` oldalon, a tulajdonos ChatGPT-fiókjával bejelentkezve hírek és képek adhatók hozzá. A tartalmak piszkozatként menthetők vagy nyilvánossá tehetők. Az Oldalak és támogatás fülön a bemutatkozó szöveg, a logó, a nyitókép és a támogatási adatok szerkeszthetők.

A D1-adatbázis a bejegyzéseket és beállításokat, az R2-tárhely a feltöltött képeket tárolja. A szerkesztést az `ADMIN_EMAIL` környezeti változó szerinti, szerveroldalon ellenőrzött tulajdonosi fiók végezheti. A nyilvános oldal nem igényel bejelentkezést.

## Követelmények

- Node.js **22.13.0 vagy újabb**
- pnpm **11.25.0**
- Git

A projekt a `packageManager` mezőben rögzíti a pnpm verzióját, ezért Corepack használata ajánlott.

## Lokális futtatás

### 1. Repository klónozása

```bash
git clone https://github.com/nagyta/oreghegy.git
cd oreghegy
```

### 2. pnpm engedélyezése és függőségek telepítése

```bash
corepack enable
pnpm install --frozen-lockfile
```

CI vagy tiszta build környezetben a projekt saját telepítő scriptje is használható:

```bash
pnpm run install:ci
```

### 3. Környezeti változók

```bash
cp .env.example .env
```

Állítsd be az adminisztrátori e-mail címet:

```dotenv
ADMIN_EMAIL=admin@example.com
```

A valódi e-mail címet és egyéb titkokat ne commitold a repository-ba.

### 4. Fejlesztői szerver

```bash
pnpm dev
```

A fejlesztői szerver alapértelmezésben a következő címen érhető el:

```text
http://localhost:5173
```

### 5. Ellenőrzések

Lint:

```bash
pnpm lint
```

Production build:

```bash
pnpm build
```

A kész build lokális, Cloudflare Workers-kompatibilis futtatása:

```bash
pnpm start
```

A `pnpm start` előtt futtasd le a `pnpm build` parancsot.

## Adatbázis

A séma a `db/schema.ts` fájlban, a verziózott migrációk a `drizzle/` könyvtárban találhatók.

Új migráció generálása:

```bash
pnpm db:generate
```

Már alkalmazott migrációt ne módosíts; sémaváltozás esetén generálj új migrációt.

## Deployment – ChatGPT Sites

Ez a repository egy már létrehozott ChatGPT Sites projekthez tartozik. A kapcsolatot és a Sites által kezelt D1/R2 bindingokat a `.openai/hosting.json` tartalmazza.

### 1. Build ellenőrzése

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm build
```

### 2. Változtatások commitolása és feltöltése

```bash
git status
git add .
git commit -m "Update Öreghegy site"
git push origin main
```

### 3. Publikálás Sites-on

A tényleges production deploymentet a **ChatGPT Sites** végzi a repository aktuális commitjából. A Sites munkafolyamatban az eredeti projektet használd, majd kérd a mentett verzió buildelését és publikálását.

Példa Sites utasítás:

```text
@Sites Deploy this project from the latest main commit. Build it, save a new version, and publish it.
```

A repository-ban nincs külön `pnpm deploy` script. Ne használd közvetlen production deploymentre a generált `dist/server/wrangler.json` fájlt vagy a `wrangler deploy` parancsot, mert a D1- és R2-erőforrásokat a Sites kezeli.

### Új fork esetén

Ha ebből a repository-ból **új, külön Sites projektet** készítesz, távolítsd el a meglévő `project_id` értéket a `.openai/hosting.json` fájlból, és hagyd, hogy a Sites új projektazonosítót hozzon létre.

## Hasznos parancsok

| Parancs | Funkció |
| --- | --- |
| `pnpm dev` | Fejlesztői szerver |
| `pnpm build` | Production build |
| `pnpm start` | A build lokális Workers/Wrangler futtatása |
| `pnpm lint` | ESLint ellenőrzés |
| `pnpm db:generate` | Drizzle migráció generálása |
| `pnpm run install:ci` | Projekt CI telepítő scriptje |

## Források

A projektadatok a felhasználó által rendelkezésre bocsátott 2026-os projektbeszámolóból és vezetői kivonatból származnak. A támogatási és egyesületi adatokat a felhasználó adta meg. A logó és a fotók eredetét az `asset-sources.json` tartalmazza. A kiinduló cikkek ezek alapján készített összefoglalók.

## Fejlesztés

A projekt vinext/Vite alapú, Cloudflare Workers-kompatibilis Sites buildet használ. A Sites deploymentnél tartsd meg az eredeti `.openai/hosting.json` projektkapcsolatot, és ne cseréld le a Sites által kezelt D1/R2 bindingokat kézzel.
