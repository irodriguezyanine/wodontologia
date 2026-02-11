# Wodontologia – Sitio web

Sitio web del **Dr. Pablo Widoycovich Martínez** (Wodontologia): Endodoncia y Odontología General en Las Condes.

## Contenido

- **Inicio**: Hero con presentación y CTA a WhatsApp
- **Especialidades**: Endodoncia y Odontología General (texto comercial)
- **Por qué elegirnos**: Beneficios y facilidades de pago
- **Nosotros**: Foto y trayectoria del doctor (CV)
- **Testimonios**: Opiniones de pacientes
- **Contacto / Agendamiento**: Formulario y enlace directo a WhatsApp (+56 9 9477 9049)

## Cómo ver el sitio

1. Coloca la foto del doctor en `img/dr-pablo.png` (recomendado: 400×500 px o similar).
2. Abre `index.html` en el navegador (doble clic o arrastrar al Chrome/Edge).

Para desarrollo local con recarga automática puedes usar, por ejemplo:

- **Live Server** (extensión de VS Code/Cursor): clic derecho en `index.html` → "Open with Live Server"
- O cualquier servidor estático: `npx serve .` en la raíz del proyecto

## Estructura

```
wodontologia/
├── index.html      # Página principal (una sola página con secciones)
├── css/
│   └── styles.css  # Estilos
├── js/
│   └── main.js     # Menú móvil y envío del formulario a WhatsApp
├── img/
│   └── dr-pablo.png   # Foto del doctor (debes agregarla)
└── README.md
```

## WhatsApp

Todos los botones de “Agendar” y “WhatsApp” enlazan a:

- **Número:** +56 9 9477 9049  
- **Enlace:** https://wa.me/56994779049  

El formulario de contacto, al enviar, abre WhatsApp con el mensaje prellenado.

## Personalización

- **Colores:** En `css/styles.css`, variables `--color-primary`, `--color-primary-dark`, etc.
- **Textos:** Editar directamente en `index.html` (títulos, párrafos, testimonios).
- **Meta description:** En el `<head>` de `index.html` para SEO.
