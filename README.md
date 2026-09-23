# Flamingo Berlin — Astro

Faqja e Flamingo Berlin, e ndërtuar me [Astro](https://astro.build). Përmbajtja
është në tre gjuhë (shqip, anglisht, gjermanisht): shqipja është gjuha
parazgjedhur (pa prefiks URL-je), `en/` dhe `de/` janë versionet e tjera.

## Struktura

- `src/pages/` — rrugët e faqes; shqip në rrënjë, `en/` dhe `de/` për gjuhët e tjera
- `src/components/views/` — përmbajtja e çdo faqeje (një komponent për faqe, i përkthyer për të tri gjuhët përmes një prop `lang`)
- `src/components/` — pjesë të ripërdorshme (Header, Footer, karta protestash, galeri, etj.)
- `src/data/protests.ts` — historiku i protestave (data, vendndodhja, lidhjet)
- `src/i18n/` — përkthimet e menysë/footer-it dhe ndihmësit për URL-të e gjuhëve
- `src/styles/global.css` — paleta e ngjyrave dhe stilet
- `public/assets/` — imazhet dhe dokumentet statike

## Nisja lokale

```bash
npm install
npm run dev
```

Hapni `http://localhost:4321`.

## Ndërtimi

```bash
npm run build
```

Rezultati gjenerohet në `dist/`.
