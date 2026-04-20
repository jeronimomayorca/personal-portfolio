# Gemini CLI Prompt: GSAP Timeline Experience

## Core Objective
Crear una línea de tiempo animada e interactiva en la ruta `/experience` de Astro. La experiencia debe simular un "viaje de dron" (vista cenital) que navega rápidamente por "eventos canónicos" de mi carrera. Debe ser fluida, divertida y fácil de consumir, no una lectura densa.

## Technical Stack & Setup
* **Framework:** Astro (componente `.astro` con scripts de cliente).
* **Animation Engine:** GSAP (GreenSock Animation Platform).
* **GSAP Plugins:** ScrollTrigger (para vincular la animación al scroll) y MotionPathPlugin (opcional, para trayectorias curvas).
* **Styling:** Tailwind CSS (minimalista, modo oscuro).

## UI/UX Requirements
1.  **Vista Cenital (Top-down):** La perspectiva visual debe simular que el observador vuela sobre un mapa o circuito técnico.
2.  **Scroll-Driven:** La animación no debe reproducirse sola; debe ser controlada por el scroll del usuario. A medida que el usuario hace scroll hacia abajo, el "viaje" avanza.
3.  **Hitos (Eventos Canónicos):** Cada evento (proyecto, rol, logro) es un "nodo" o parada en el circuito.
    * Los nodos no deben ser texto estático. Deben "aparecer" (fade-in, scale-up) cuando el viaje pasa sobre ellos.
4.  **Flujo Continuo:** Una línea visual (quizás un cable de datos o haz de luz) debe conectar todos los nodos y guiar el ojo durante el viaje.

## Motion Guidelines (GSAP)
* **Smoothness:** Usar un `scrub: 1` o `scrub: true` en ScrollTrigger para que la animación se vincule perfectamente a la posición del scroll, permitiendo al usuario avanzar y retroceder fluidamente.
* **Speed:** La travesía entre nodos debe ser rápida. Cuando el scroll se detiene sobre un nodo, este debe enfocarse (quizás con un ligero zoom o resalte de color) y el texto asociado debe ser legible instantáneamente.
* **Transiciones:** Usar `Power2.easeOut` o `Expo.easeOut` para que los elementos aparezcan con un toque de aceleración natural.

## Component Structure (.astro)
1.  **Layout:** Importar el Layout común con el Navbar (`jeronimo@kernel:~$`).
2.  **Container:** Un div principal de altura completa (`min-h-screen`) que sirva de contenedor para el ScrollTrigger.
3.  **Hitos:** Un array de objetos JavaScript con la información de los eventos (título, descripción técnica, métrica).
4.  **Script de Cliente:**
    * Registrar los plugins de GSAP.
    * Crear una `gsap.timeline()` vinculada al ScrollTrigger del contenedor.
    * Iterar sobre los hitos para crear animaciones secuenciales que los revelen a medida que avanza el "viaje".

## Content Constraints
* El texto de cada hito debe ser muy breve. Usar el formato: **[ Título | Impacto Técnico | Métrica ]**. El agente debe inventar hitos genéricos que demuestren "soluciones AI-first y rentabilidad" para este prototipo.

## System Prompt for Gemini
"Agente, basado en las instrucciones anteriores, genera el código completo para el archivo `src/pages/experience.astro`. No te preocupes por el diseño final, enfócate en la lógica de GSAP ScrollTrigger para crear el viaje cenital fluido y secuencial. Asegúrate de que los hitos se revelen dinámicamente al pasar sobre ellos."