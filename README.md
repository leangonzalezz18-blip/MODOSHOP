# MODO SHOP · Página web

Sitio público de la marca: catálogo de **perfumes árabes** y **relojes Casio**, con
consulta directa por WhatsApp. No usa base de datos ni servidor: son archivos estáticos.

---

## Cómo verla

**Opción rápida:** doble clic en `index.html`.

**Opción completa (recomendada para probar desde el celular):** doble clic en
`Abrir en red local.bat`. Abre `http://localhost:4322` y además muestra en la ventana
negra una dirección tipo `http://192.168.0.X:4322` para entrar desde el teléfono
estando en el mismo wifi.

---

## Qué hay adentro

```
Web/
├── index.html                 la página
├── css/styles.css             diseño (colores tomados del logo)
├── js/datos.js                ← EL ÚNICO ARCHIVO QUE TOCÁS VOS
├── js/app.js                  lógica: filtros, buscador, modal, WhatsApp
├── assets/
│   ├── logo-mark.png          logo circular (también es el favicon)
│   ├── logo-wide.png          logo apaisado
│   └── productos/             48 fotos de producto
├── server.js                  servidor local opcional
└── Abrir en red local.bat     lanza el servidor con doble clic
```

---

## Actualizar el catálogo

Todo se edita en **`js/datos.js`** con el Bloc de notas. Cada producto es un bloque así:

```js
{ id: 'lattafa-khamrah', categoria: 'perfume', marca: 'Lattafa',
  nombre: 'Lattafa Khamrah', presentacion: 'Eau de Parfum 100 ml', genero: 'Unisex',
  stock: 2, destacado: true, img: 'assets/productos/lattafa-khamrah.jpg',
  dupe: 'Kilian Paris Angels’ Share',
  familia: 'Oriental especiado',
  desc: 'Bergamota, canela y salvia; praliné...' },
```

> **Escribí todo sin abreviar.** Nada de "EDP", "YSL" ni "JPG": el cliente no sabe qué
> significan. Va "Eau de Parfum 100 ml" y "Yves Saint Laurent Y Eau de Parfum".

| Querés… | Hacé esto |
|---|---|
| Cambiar el stock | Cambiá el número de `stock` |
| Marcarlo agotado | `stock: 0` → se muestra gris con el cartel AGOTADO |
| Sacarlo de la web | Agregá `oculto: true` |
| Que salga en "Más buscados" | Agregá `destacado: true` |
| Mostrar el precio | Agregá `precio: 55000` (sin puntos ni signos) |
| Cambiar el dupe | Editá `dupe: 'Creed Aventus'` |
| No es clon de nadie | Poné `original: true` |

### Los dupes

Solo se anuncia el dupe **cuando está confirmado**. Nada de "se parece a" ni de
aproximaciones: si no hay certeza, no se dice. Hay dos estados:

```js
dupe: 'Creed Aventus',    // clon confirmado · se muestra en celeste
original: true,           // no es clon de nadie · dice "Creación propia", en gris
```

- **32 con dupe confirmado.**
- **4 "Creación propia"**: 9PM Night Out, Khamrah Waha, Yara Candy y Sakeena. No son
  clones de nadie. Si alguna vez aparece el dato firme, se cambia `original: true`
  por `dupe: '...'` y listo.
- Los relojes no llevan nada, porque no aplica.

Se muestra en la tarjeta y en la ficha, y **el buscador también busca por ahí**: si un
cliente escribe "Aventus" le aparece el Club de Nuit Intense, y si escribe "vainilla"
le aparecen todos los que la tienen en las notas.

La etiqueta se cambia de una sola vez para todo el sitio:

```js
etiquetaDupe: 'Dupe de',    // o 'Inspirado en'
```

El cartel dice **"Dupe de"**. Se cambia de una sola vez para todo el sitio en `js/datos.js`:

```js
etiquetaDupe: 'Dupe de',     // o 'Inspirado en'
```

Si un producto **no** tiene `precio`, la web muestra **"Consultar precio"** — que es
como está configurado hoy, a propósito, para no mostrarle los precios a la competencia.

### Los relojes Casio

Están publicados **con stock** (1 o 2 unidades según el modelo) aunque la compra todavía
no llegó. Cuando entre la mercadería, ajustá los números a lo que realmente tengas. Si un
modelo no lo terminás comprando, ponele `stock: 0` para que aparezca AGOTADO, o
`oculto: true` para sacarlo de la web.

---

## Conectar Instagram

Hoy el botón de Instagram aparece apagado y dice *"próximamente"*. Cuando crees la
cuenta, abrí `js/datos.js` y completá la línea:

```js
instagram: 'modoshop.sj',    // el usuario SIN la arroba
```

El botón se enciende solo, con el color de Instagram y el @ visible.

---

## WhatsApp

Configurado en `js/datos.js`:

```js
whatsapp: '5492645744837',              // 54 + 9 + 264 + número
whatsappVisible: '+54 9 264 574-4837',
```

Cada botón **Consultar** de un producto abre WhatsApp con el mensaje ya escrito,
incluyendo el nombre y la presentación del perfume. Así sabés desde qué producto
te escribieron. El botón **Pedir lista mayorista** abre otro mensaje distinto
(`mensajeMayorista`), para que reconozcas de una las consultas por cantidad.

---

## Puntos de entrega

Los departamentos donde entregás en mano salen de esta lista en `js/datos.js`:

```js
puntosEntrega: ['Capital', 'Rivadavia', 'Rawson', 'Pocito'],
```

Agregás o sacás departamentos ahí y la sección **Envíos** se actualiza sola. El resto
de los textos de esa sección (resto de San Juan, todo el país, mayorista) están en
`index.html`, dentro de `<section id="envios">`.

---

## Publicarla en internet

Como son archivos estáticos, se sube tal cual a cualquiera de estos servicios
(los tres tienen plan gratis):

1. **Netlify Drop** — `app.netlify.com/drop`: arrastrás la carpeta `Web` y listo.
2. **Vercel** — mismo esquema, con dominio propio si después comprás uno.
3. **GitHub Pages** — si querés versionado.

Después conviene comprar un dominio (`modoshop.com.ar` o similar) y apuntarlo ahí.

---

## Fotos de producto

Las 48 fotos están descargadas en `assets/productos/`, así que la web funciona
sin internet y ninguna imagen se rompe.

Son fotos de catálogo de los fabricantes y distribuidores. **Cuando tengas la
mercadería en mano, conviene reemplazarlas por fotos propias del stock real**: venden
mucho más, y evitan cualquier discusión de derechos de imagen. Para cambiar una,
guardá tu foto con el mismo nombre de archivo en `assets/productos/` y listo — no hay
que tocar nada más.

---

## Colores de la marca

Tomados del logo, definidos arriba de `css/styles.css`:

- Fondo: `#05070B` (negro azulado)
- Celeste: `#63D4F2` · Azul: `#1568C6` · Medio: `#2BA3DB`
- Degradado de marca: `linear-gradient(120deg,#1568C6,#2BA3DB,#63D4F2,#1B7BC9)`
- Verde WhatsApp: `#25D366`

Son los mismos que usa el dashboard, así que la marca se ve consistente en los dos lados.
