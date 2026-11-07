/**
 * Aprende HTML a Mano - Aplicación Interactiva
 */

const LESSONS = [
  {
    id: 1,
    tag: "<h1>",
    title: "Encabezados principales",
    category: "Texto básico",
    description: "La etiqueta <code>&lt;h1&gt;</code> se utiliza para el encabezado o título más importante de una página. Solo debe haber un <code>&lt;h1&gt;</code> principal por documento.",
    syntax: "<h1>Tu Título Aquí</h1>",
    instruction: "Escribe un encabezado <code>&lt;h1&gt;</code> que contenga exactamente el texto: <strong>Mi Primer Título</strong>",
    hint: "Comienza con <code>&lt;h1&gt;</code>, escribe <code>Mi Primer Título</code> y ciérralo con <code>&lt;/h1&gt;</code>.",
    expectedHtml: "<h1>Mi Primer Título</h1>",
    validate: (doc, raw) => {
      const h1 = doc.querySelector("h1");
      if (!h1) return { ok: false, msg: "No se encontró la etiqueta <h1>. Asegúrate de abrir con <h1> y cerrar con </h1>." };
      const text = h1.textContent.trim().toLowerCase();
      if (text !== "mi primer título".toLowerCase() && text !== "mi primer titulo".toLowerCase()) {
        return { ok: false, msg: `El texto dentro de <h1> debe ser exactamente 'Mi Primer Título'. Tienes: "${h1.textContent.trim()}"` };
      }
      return { ok: true, msg: "¡Excelente! Has dominado la etiqueta <h1>." };
    }
  },
  {
    id: 2,
    tag: "<p>",
    title: "Párrafos de texto",
    category: "Texto básico",
    description: "La etiqueta <code>&lt;p&gt;</code> define un párrafo de texto normal. Los navegadores web automáticamente añaden un espacio antes y después de cada párrafo.",
    syntax: "<p>Este es un texto dentro de un párrafo.</p>",
    instruction: "Crea un párrafo <code>&lt;p&gt;</code> con el texto: <strong>Aprendiendo HTML a mano</strong>",
    hint: "Escribe <code>&lt;p&gt;Aprendiendo HTML a mano&lt;/p&gt;</code> todo escrito a mano.",
    expectedHtml: "<p>Aprendiendo HTML a mano</p>",
    validate: (doc, raw) => {
      const p = doc.querySelector("p");
      if (!p) return { ok: false, msg: "Falta la etiqueta <p>. Recuerda cerrarla con </p>." };
      const text = p.textContent.trim().toLowerCase();
      if (!text.includes("aprendiendo html a mano")) {
        return { ok: false, msg: "El contenido del párrafo debe ser 'Aprendiendo HTML a mano'." };
      }
      return { ok: true, msg: "¡Muy bien! Los párrafos son la base de cualquier texto en la web." };
    }
  },
  {
    id: 3,
    tag: "<strong>",
    title: "Texto en negrita y énfasis",
    category: "Formato",
    description: "La etiqueta <code>&lt;strong&gt;</code> se utiliza para dar importancia fuerte a una palabra o frase. Por defecto, los navegadores la renderizan en <strong>negrita</strong>.",
    syntax: "<p>Este texto tiene una palabra <strong>importante</strong> aquí.</p>",
    instruction: "Escribe un párrafo <code>&lt;p&gt;</code> y dentro pon en negrita la palabra <strong>Importante</strong> usando <code>&lt;strong&gt;</code> (ej: <code>&lt;p&gt;Aviso &lt;strong&gt;Importante&lt;/strong&gt;&lt;/p&gt;</code>).",
    hint: "Coloca <code>&lt;strong&gt;Importante&lt;/strong&gt;</code> dentro de tu <code>&lt;p&gt;...&lt;/p&gt;</code>.",
    expectedHtml: "<p>Aviso <strong>Importante</strong> para todos</p>",
    validate: (doc, raw) => {
      const p = doc.querySelector("p");
      const strong = doc.querySelector("strong");
      if (!p) return { ok: false, msg: "Recuerda envolver tu contenido dentro de una etiqueta <p>." };
      if (!strong) return { ok: false, msg: "Falta la etiqueta <strong> para resaltar el texto." };
      if (!strong.textContent.trim().toLowerCase().includes("importante")) {
        return { ok: false, msg: "La etiqueta <strong> debe envolver la palabra 'Importante'." };
      }
      return { ok: true, msg: "¡Perfecto! Ya sabes cómo dar énfasis y negrita semántica." };
    }
  },
  {
    id: 4,
    tag: "<a>",
    title: "Enlaces e hipervínculos",
    category: "Navegación",
    description: "La etiqueta <code>&lt;a&gt;</code> crea un hipervínculo hacia otra página web o archivo. Utiliza el atributo <code>href</code> para definir la URL o destino.",
    syntax: '<a href="https://google.com">Ir a Google</a>',
    instruction: "Crea un enlace <code>&lt;a&gt;</code> con el atributo <code>href=\"https://ejemplo.com\"</code> y el texto visible: <strong>Visitar mi sitio</strong>",
    hint: 'Escribe: <a href="https://ejemplo.com">Visitar mi sitio</a>',
    expectedHtml: '<a href="https://ejemplo.com" target="_blank" style="color: #0284c7; text-decoration: underline;">Visitar mi sitio</a>',
    validate: (doc, raw) => {
      const a = doc.querySelector("a");
      if (!a) return { ok: false, msg: "Falta la etiqueta <a>." };
      const href = a.getAttribute("href");
      if (!href || !href.includes("ejemplo.com")) {
        return { ok: false, msg: 'Asegúrate de agregar el atributo href="https://ejemplo.com" dentro de la etiqueta <a>.' };
      }
      if (!a.textContent.trim().toLowerCase().includes("visitar mi sitio")) {
        return { ok: false, msg: 'El texto visible del enlace debe ser "Visitar mi sitio".' };
      }
      return { ok: true, msg: "¡Excelente! Los enlaces son el pilar que conecta la web." };
    }
  },
  {
    id: 5,
    tag: "<img>",
    title: "Imágenes y atributos",
    category: "Multimedia",
    description: "La etiqueta <code>&lt;img&gt;</code> inserta una imagen. No tiene etiqueta de cierre (es auto-cerrada). Sus atributos clave son <code>src</code> (ruta o URL de la imagen) y <code>alt</code> (descripción alternativa para accesibilidad).",
    syntax: '<img src="https://via.placeholder.com/150" alt="Descripción de imagen">',
    instruction: "Inserta una etiqueta <code>&lt;img&gt;</code> con <code>src=\"https://placehold.co/150x80\"</code> y el atributo <code>alt=\"Logo\"</code>.",
    hint: 'Recuerda que <img> no lleva </img> al final. Escribe: <img src="https://placehold.co/150x80" alt="Logo">',
    expectedHtml: '<img src="https://placehold.co/150x80" alt="Logo" style="border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.15);">',
    validate: (doc, raw) => {
      const img = doc.querySelector("img");
      if (!img) return { ok: false, msg: "No se encontró la etiqueta <img>." };
      const src = img.getAttribute("src");
      if (!src || !src.includes("placehold.co")) {
        return { ok: false, msg: 'El atributo src debe ser "https://placehold.co/150x80".' };
      }
      const alt = img.getAttribute("alt");
      if (!alt || !alt.toLowerCase().includes("logo")) {
        return { ok: false, msg: 'No olvides añadir el atributo alt="Logo".' };
      }
      return { ok: true, msg: "¡Fantástico! Las imágenes hacen atractivas las páginas web." };
    }
  },
  {
    id: 6,
    tag: "<ul>",
    title: "Listas desordenadas (viñetas)",
    category: "Listas",
    description: "La etiqueta <code>&lt;ul&gt;</code> (Unordered List) define una lista de puntos o viñetas. Cada ítem individual de la lista se encierra en una etiqueta <code>&lt;li&gt;</code> (List Item).",
    syntax: "<ul>\n  <li>Elemento 1</li>\n  <li>Elemento 2</li>\n</ul>",
    instruction: "Crea una lista desordenada <code>&lt;ul&gt;</code> con dos elementos <code>&lt;li&gt;</code>: <strong>Manzana</strong> y <strong>Naranja</strong>.",
    hint: "Escribe <ul>, luego dos líneas con <li>Manzana</li> y <li>Naranja</li>, y finalmente cierra con </ul>.",
    expectedHtml: "<ul>\n  <li>Manzana</li>\n  <li>Naranja</li>\n</ul>",
    validate: (doc, raw) => {
      const ul = doc.querySelector("ul");
      if (!ul) return { ok: false, msg: "Falta la etiqueta principal <ul>." };
      const lis = ul.querySelectorAll("li");
      if (lis.length < 2) return { ok: false, msg: "Debes colocar al menos dos etiquetas <li> dentro de tu <ul>." };
      const textAll = Array.from(lis).map(li => li.textContent.trim().toLowerCase()).join(" ");
      if (!textAll.includes("manzana") || !textAll.includes("naranja")) {
        return { ok: false, msg: "Los elementos de la lista deben contener 'Manzana' y 'Naranja'." };
      }
      return { ok: true, msg: "¡Genial! Ya sabes estructurar listas con viñetas." };
    }
  },
  {
    id: 7,
    tag: "<ol>",
    title: "Listas ordenadas (numeradas)",
    category: "Listas",
    description: "La etiqueta <code>&lt;ol&gt;</code> (Ordered List) crea una lista con números secuenciales automáticos (1, 2, 3...). Al igual que con <code>&lt;ul&gt;</code>, cada punto usa <code>&lt;li&gt;</code>.",
    syntax: "<ol>\n  <li>Primer paso</li>\n  <li>Segundo paso</li>\n</ol>",
    instruction: "Crea una lista numerada <code>&lt;ol&gt;</code> con 2 pasos: <strong>Paso 1</strong> y <strong>Paso 2</strong>.",
    hint: "Abre con <ol>, coloca <li>Paso 1</li> y <li>Paso 2</li>, y cierra con </ol>.",
    expectedHtml: "<ol>\n  <li>Paso 1</li>\n  <li>Paso 2</li>\n</ol>",
    validate: (doc, raw) => {
      const ol = doc.querySelector("ol");
      if (!ol) return { ok: false, msg: "Falta la etiqueta <ol>." };
      const lis = ol.querySelectorAll("li");
      if (lis.length < 2) return { ok: false, msg: "Debes incluir al menos dos ítems <li> dentro de <ol>." };
      return { ok: true, msg: "¡Perfecto! El navegador numera automáticamente cada <li> dentro de un <ol>." };
    }
  },
  {
    id: 8,
    tag: "<button>",
    title: "Botones interactivos",
    category: "Interactividad",
    description: "La etiqueta <code>&lt;button&gt;</code> representa un elemento pulsable para que el usuario interactúe, envíe formularios o dispare eventos de JavaScript.",
    syntax: "<button>Guardar Cambios</button>",
    instruction: "Crea un botón <code>&lt;button&gt;</code> con el texto: <strong>Registrarse Ahora</strong>",
    hint: "Escribe: <button>Registrarse Ahora</button>",
    expectedHtml: '<button style="background: #0284c7; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;">Registrarse Ahora</button>',
    validate: (doc, raw) => {
      const btn = doc.querySelector("button");
      if (!btn) return { ok: false, msg: "Falta la etiqueta <button>." };
      if (!btn.textContent.trim().toLowerCase().includes("registrarse ahora")) {
        return { ok: false, msg: "El texto dentro del botón debe ser 'Registrarse Ahora'." };
      }
      return { ok: true, msg: "¡Muy bien! Has creado un botón interactivo." };
    }
  },
  {
    id: 9,
    tag: "<table>",
    title: "Tablas: Filas (tr) y Celdas (td)",
    category: "Tablas",
    description: "Las tablas organizan datos en filas y columnas. Se declaran con <code>&lt;table&gt;</code>. Cada fila horizontal se crea con <code>&lt;tr&gt;</code> (table row) y cada celda de datos se define con <code>&lt;td&gt;</code> (table data).",
    syntax: "<table>\n  <tr>\n    <td>Juan</td>\n    <td>25 años</td>\n  </tr>\n</table>",
    instruction: "Crea una tabla <code>&lt;table&gt;</code> con una fila <code>&lt;tr&gt;</code> que contenga dos celdas <code>&lt;td&gt;</code>: <strong>Ana</strong> y <strong>Madrid</strong>.",
    hint: "Escribe: <table> <tr> <td>Ana</td> <td>Madrid</td> </tr> </table>",
    expectedHtml: '<table border="1" cellpadding="6" style="border-collapse: collapse; min-width: 220px;">\n  <tr>\n    <td>Ana</td>\n    <td>Madrid</td>\n  </tr>\n</table>',
    validate: (doc, raw) => {
      const table = doc.querySelector("table");
      if (!table) return { ok: false, msg: "Falta la etiqueta <table>." };
      const tr = table.querySelector("tr");
      if (!tr) return { ok: false, msg: "Dentro de <table> debes incluir una fila <tr>." };
      const tds = tr.querySelectorAll("td");
      if (tds.length < 2) return { ok: false, msg: "Debes incluir al menos dos celdas <td> dentro de la fila <tr>." };
      const combined = Array.from(tds).map(td => td.textContent.trim().toLowerCase()).join(" ");
      if (!combined.includes("ana") || !combined.includes("madrid")) {
        return { ok: false, msg: "Las celdas deben contener 'Ana' y 'Madrid'." };
      }
      return { ok: true, msg: "¡Genial! Has creado tu primera estructura de tabla con filas y celdas." };
    }
  },
  {
    id: 10,
    tag: "<th>",
    title: "Tablas: Encabezados de columna",
    category: "Tablas",
    description: "Para dar un título claro a cada columna de la tabla, se utiliza <code>&lt;th&gt;</code> (table header) en vez de <code>&lt;td&gt;</code>. Por defecto los textos dentro de <code>&lt;th&gt;</code> aparecen en negrita y centrados.",
    syntax: "<table>\n  <tr>\n    <th>Nombre</th>\n    <th>Ciudad</th>\n  </tr>\n  <tr>\n    <td>Carlos</td>\n    <td>Lima</td>\n  </tr>\n</table>",
    instruction: "Crea una tabla con 2 filas (<code>&lt;tr&gt;</code>): la primera fila con encabezados <code>&lt;th&gt;</code> (<strong>Producto</strong> y <strong>Precio</strong>) y la segunda fila con datos <code>&lt;td&gt;</code> (<strong>Libro</strong> y <strong>$15</strong>).",
    hint: "Usa dos <tr>: la primera con dos <th> y la segunda con dos <td>.",
    expectedHtml: '<table border="1" cellpadding="8" style="border-collapse: collapse; min-width: 260px;">\n  <thead>\n    <tr style="background-color: #f1f5f9;">\n      <th style="border: 1px solid #cbd5e1; padding: 6px 12px; text-align: left;">Producto</th>\n      <th style="border: 1px solid #cbd5e1; padding: 6px 12px; text-align: left;">Precio</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style="border: 1px solid #cbd5e1; padding: 6px 12px;">Libro</td>\n      <td style="border: 1px solid #cbd5e1; padding: 6px 12px;">$15</td>\n    </tr>\n  </tbody>\n</table>',
    validate: (doc, raw) => {
      const table = doc.querySelector("table");
      if (!table) return { ok: false, msg: "Falta la etiqueta principal <table>." };
      const trs = table.querySelectorAll("tr");
      if (trs.length < 2) return { ok: false, msg: "Necesitas 2 filas <tr> (una para los encabezados y otra para los datos)." };
      const ths = trs[0].querySelectorAll("th");
      if (ths.length < 2) return { ok: false, msg: "La primera fila debe contener al menos 2 celdas de encabezado <th> (Producto y Precio)." };
      const tds = trs[1].querySelectorAll("td");
      if (tds.length < 2) return { ok: false, msg: "La segunda fila debe contener al menos 2 celdas de datos <td> (Libro y $15)." };
      return { ok: true, msg: "¡Fabuloso! Has dominado las tablas en HTML con encabezados y filas completas." };
    }
  }
];

// Estado de la aplicación
let currentLessonIndex = 0;
const completedLessons = new Set();

// Referencias del DOM
const lessonListEl = document.getElementById("lesson-list");
const lessonTagEl = document.getElementById("lesson-tag");
const lessonCategoryEl = document.getElementById("lesson-category");
const lessonTitleEl = document.getElementById("lesson-title");
const lessonDescEl = document.getElementById("lesson-description");
const lessonSyntaxEl = document.getElementById("lesson-syntax");
const exerciseInstEl = document.getElementById("exercise-instruction");
const expectedPreviewEl = document.getElementById("expected-preview");
const hintBoxEl = document.getElementById("hint-box");
const hintTextEl = document.getElementById("hint-text");
const btnHint = document.getElementById("btn-hint");
const codeEditorEl = document.getElementById("code-editor");
const editorWrapperEl = document.getElementById("editor-wrapper");
const lineNumbersEl = document.getElementById("line-numbers");
const pasteWarningEl = document.getElementById("paste-warning");
const userLiveFrame = document.getElementById("user-live-preview");
const feedbackMsgEl = document.getElementById("feedback-msg");
const btnCheck = document.getElementById("btn-check");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnClear = document.getElementById("btn-clear");
const progressBarEl = document.getElementById("progress-bar");
const progressTextEl = document.getElementById("progress-text");
const themeToggleBtn = document.getElementById("theme-toggle");
const completionModal = document.getElementById("completion-modal");
const btnRestart = document.getElementById("btn-restart");

// Inicialización
function init() {
  renderSidebar();
  loadLesson(0);
  setupAntiPasteProtection();
  setupEditorListeners();
  setupNavigation();
  setupThemeToggle();
}

// Renderizado del índice lateral
function renderSidebar() {
  lessonListEl.innerHTML = "";
  LESSONS.forEach((lesson, index) => {
    const li = document.createElement("li");
    li.className = `lesson-item ${index === currentLessonIndex ? "active" : ""} ${completedLessons.has(index) ? "completed" : ""}`;
    li.innerHTML = `
      <span>${index + 1}. <strong>${escapeHtml(lesson.tag)}</strong> ${lesson.title}</span>
      <i class="bi bi-check-circle-fill check-icon"></i>
    `;
    li.addEventListener("click", () => {
      loadLesson(index);
    });
    lessonListEl.appendChild(li);
  });
}

// Carga de lección
function loadLesson(index) {
  currentLessonIndex = index;
  const lesson = LESSONS[index];

  // Actualizar contenido teórico
  lessonTagEl.textContent = lesson.tag;
  lessonCategoryEl.textContent = lesson.category;
  lessonTitleEl.textContent = `${index + 1}. ${lesson.title}`;
  lessonDescEl.innerHTML = lesson.description;
  lessonSyntaxEl.textContent = lesson.syntax;

  // Actualizar ejercicio y resultado esperado
  exerciseInstEl.innerHTML = lesson.instruction;
  expectedPreviewEl.innerHTML = lesson.expectedHtml;
  hintTextEl.innerHTML = lesson.hint;
  hintBoxEl.classList.add("hidden");

  // Resetear editor y mensajes
  codeEditorEl.value = "";
  updateLineNumbers();
  updateLivePreview("");
  hideFeedback();

  // Estado de botones de navegación
  btnPrev.disabled = index === 0;
  btnNext.disabled = !completedLessons.has(index);

  // Actualizar sidebar y barra de progreso
  updateProgress();
  renderSidebar();
}

// Actualizar barra de progreso
function updateProgress() {
  const percent = Math.round(((completedLessons.size) / LESSONS.length) * 100);
  progressBarEl.style.width = `${percent}%`;
  progressTextEl.textContent = `Completado: ${completedLessons.size} de ${LESSONS.length} (${percent}%)`;
}

/**
 * PROTECCIÓN ESTRICTA CONTRA COPIAR Y PEGAR
 * El usuario debe escribir a mano cada carácter.
 */
function setupAntiPasteProtection() {
  // 1. Bloquear evento 'paste'
  codeEditorEl.addEventListener("paste", (e) => {
    e.preventDefault();
    triggerPasteAlert("¡Acción bloqueada! En este curso no se permite pegar código. Escríbelo letra a letra para memorizar la sintaxis.");
  });

  // 2. Bloquear atajos de teclado Ctrl+V, Cmd+V, Shift+Insert
  codeEditorEl.addEventListener("keydown", (e) => {
    const isPasteCombo = (e.ctrlKey || e.metaKey) && (e.key === "v" || e.key === "V");
    const isShiftInsert = e.shiftKey && e.key === "Insert";

    if (isPasteCombo || isShiftInsert) {
      e.preventDefault();
      triggerPasteAlert("¡No uses atajos de pegado! Escribe cada etiqueta a mano.");
    }

    // Soporte básico para tabulación limpia
    if (e.key === "Tab") {
      e.preventDefault();
      const start = codeEditorEl.selectionStart;
      const end = codeEditorEl.selectionEnd;
      codeEditorEl.value = codeEditorEl.value.substring(0, start) + "  " + codeEditorEl.value.substring(end);
      codeEditorEl.selectionStart = codeEditorEl.selectionEnd = start + 2;
      updateLivePreview(codeEditorEl.value);
      updateLineNumbers();
    }
  });

  // 3. Bloquear arrastrar y soltar texto (Drag & Drop)
  codeEditorEl.addEventListener("drop", (e) => {
    e.preventDefault();
    triggerPasteAlert("¡Arrastrar y soltar texto también está deshabilitado! Escribe el código con tu teclado.");
  });
}

function triggerPasteAlert(customMsg) {
  if (customMsg) {
    pasteWarningEl.innerHTML = `<i class="bi bi-exclamation-triangle-fill"></i> <strong>¡Copia y pega deshabilitado!</strong> ${escapeHtml(customMsg)}`;
  }
  pasteWarningEl.classList.remove("hidden");
  editorWrapperEl.classList.add("shake");

  setTimeout(() => {
    editorWrapperEl.classList.remove("shake");
  }, 450);

  setTimeout(() => {
    pasteWarningEl.classList.add("hidden");
  }, 4000);
}

// Escuchar cambios en el editor
function setupEditorListeners() {
  codeEditorEl.addEventListener("input", () => {
    const code = codeEditorEl.value;
    updateLineNumbers();
    updateLivePreview(code);
    hideFeedback();
  });

  btnHint.addEventListener("click", () => {
    hintBoxEl.classList.toggle("hidden");
  });

  btnClear.addEventListener("click", () => {
    codeEditorEl.value = "";
    updateLineNumbers();
    updateLivePreview("");
    hideFeedback();
    codeEditorEl.focus();
  });
}

// Números de línea
function updateLineNumbers() {
  const lines = codeEditorEl.value.split("\n").length;
  lineNumbersEl.innerHTML = Array.from({ length: lines }, (_, i) => i + 1).join("<br>");
}

// Renderizado en tiempo real dentro del iframe
function updateLivePreview(userHtml) {
  const iframeDoc = userLiveFrame.contentDocument || userLiveFrame.contentWindow.document;
  
  // Inyectar estilos básicos dentro del iframe para que tablas y enlaces se vean limpios
  const baseStyles = `
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        margin: 12px;
        color: #1e293b;
        background: #ffffff;
        font-size: 15px;
        line-height: 1.5;
      }
      table {
        border-collapse: collapse;
        min-width: 220px;
        margin-top: 6px;
      }
      th, td {
        border: 1px solid #cbd5e1;
        padding: 6px 12px;
        text-align: left;
      }
      th {
        background-color: #f1f5f9;
        font-weight: 700;
      }
      a {
        color: #0284c7;
        text-decoration: underline;
      }
      button {
        background: #0284c7;
        color: #fff;
        border: none;
        padding: 6px 14px;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
      }
      img {
        max-width: 100%;
        height: auto;
      }
    </style>
  `;

  iframeDoc.open();
  iframeDoc.write(baseStyles + userHtml);
  iframeDoc.close();
}

// Navegación y Validación
function setupNavigation() {
  btnCheck.addEventListener("click", validateCurrentCode);

  btnNext.addEventListener("click", () => {
    if (currentLessonIndex < LESSONS.length - 1) {
      loadLesson(currentLessonIndex + 1);
    } else {
      // Fin del temario
      completionModal.classList.remove("hidden");
    }
  });

  btnPrev.addEventListener("click", () => {
    if (currentLessonIndex > 0) {
      loadLesson(currentLessonIndex - 1);
    }
  });

  btnRestart.addEventListener("click", () => {
    completionModal.classList.add("hidden");
    loadLesson(0);
  });
}

// Validación inteligente del código escrito
function validateCurrentCode() {
  const code = codeEditorEl.value.trim();
  if (!code) {
    showFeedback("El editor está vacío. Escribe tu código a mano primero.", "error");
    return;
  }

  const lesson = LESSONS[currentLessonIndex];
  const parser = new DOMParser();
  const parsedDoc = parser.parseFromString(code, "text/html");

  const result = lesson.validate(parsedDoc, code);

  if (result.ok) {
    showFeedback(`<i class="bi bi-check-circle-fill"></i> ${result.msg}`, "success");
    completedLessons.add(currentLessonIndex);
    btnNext.disabled = false;
    renderSidebar();
    updateProgress();

    // Si completó la última lección
    if (currentLessonIndex === LESSONS.length - 1) {
      setTimeout(() => {
        completionModal.classList.remove("hidden");
      }, 1200);
    }
  } else {
    showFeedback(`<i class="bi bi-x-circle-fill"></i> ${result.msg}`, "error");
  }
}

function showFeedback(msg, type) {
  feedbackMsgEl.innerHTML = msg;
  feedbackMsgEl.className = `feedback-msg ${type}`;
  feedbackMsgEl.classList.remove("hidden");
}

function hideFeedback() {
  feedbackMsgEl.classList.add("hidden");
}

// Cambio de tema claro/oscuro
function setupThemeToggle() {
  themeToggleBtn.addEventListener("click", () => {
    const isLight = document.body.getAttribute("data-theme") === "light";
    if (isLight) {
      document.body.removeAttribute("data-theme");
      themeToggleBtn.innerHTML = '<i class="bi bi-moon-stars"></i>';
    } else {
      document.body.setAttribute("data-theme", "light");
      themeToggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
    }
  });
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Iniciar
document.addEventListener("DOMContentLoaded", init);
