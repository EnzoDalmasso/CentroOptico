# Centro Óptico Ale Domesi — Demo web

Vidriera digital (no e-commerce) construida con Next.js 16 (App Router), TypeScript, Tailwind CSS 4, Motion y Lucide.
Todas las consultas se derivan a WhatsApp.

## Scripts

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
npm run lint
npm run typecheck
```

## Dónde se edita cada cosa

| Qué | Archivo |
| --- | --- |
| Nombre, WhatsApp, Instagram, dirección, horarios, textos del hero, SEO | `src/config/business.ts` |
| Modelos de anteojos | `src/data/glasses.ts` (imágenes en `public/images/products/`) |
| Marcas | `src/data/brands.ts` |
| Categorías de la colección | `src/data/categories.ts` |
| Servicios / Beneficios | `src/data/services.ts`, `src/data/benefits.ts` |
| Grilla de Instagram | `src/data/instagram.ts` |
| Colores y tipografías | variables en `src/app/globals.css` y `src/app/fonts.ts` |
| Mensajes de WhatsApp | `src/lib/whatsapp.ts` |

## Datos DEMO a confirmar con la clienta

- **Dirección y horarios**: son placeholders (`isPlaceholder: true`). El sitio los muestra con la etiqueta "A confirmar". Al cargar los datos reales, poner `isPlaceholder: false`.
- **WhatsApp**: tomado de la bio pública de Instagram (`wa.me/5493471689038`). Verificar.
- **Modelos y marcas**: ficticios, sólo para la demo.
- **Imágenes**: fotos de stock de Unsplash (licencia Unsplash), ilustrativas.
- **Video del hero**: opcional. Agregar un `.mp4`/`.webm` liviano en `public/` y completar `hero.video` en `business.ts`.

## Deploy en Vercel

Importar el repositorio en Vercel (framework detectado automáticamente). Opcionalmente definir
`NEXT_PUBLIC_SITE_URL` con el dominio final para que canonical, Open Graph, sitemap y robots usen la URL correcta.
