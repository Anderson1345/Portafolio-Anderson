const WHATSAPP = "573045955101";
const CORREO = "andersonmaldom@gmail.com";

const EN = {
  "marca.sub": "Software developer",
  "nav.inicio": "Home", "nav.servicios": "Services", "nav.habilidades": "Skills",
  "nav.proceso": "Process", "nav.formacion": "Education", "nav.contacto": "Contact",
  "portada.etiqueta": "Portfolio",
  "portada.disponible": "Available for freelance projects",
  "portada.perfilLbl": "Profile", "portada.perfil": "Software developer in training",
  "portada.especialidadLbl": "Focus", "portada.especialidad": "Backend and web solutions",
  "portada.bio": "I'm interested in building web solutions and understanding how they work, from their logic to the experience the user gets.",
  "portada.contactar": "Contact me",
  "servicios.etiqueta": "Services", "servicios.titulo": "How I can help you",
  "servicios.intro": "I work on different parts of a web solution: its interface, its logic and how its data is organized.",
  "servicios.s1": "Web development", "servicios.s1d": "Web pages and solutions that adapt to phone, tablet and desktop.",
  "servicios.s2": "Backend development", "servicios.s2d": "The logic that lets an application process information and respond to its users.",
  "servicios.s3": "Databases", "servicios.s3d": "Organizing information so it's easy to query and maintain.",
  "habilidades.etiqueta": "Technical skills", "habilidades.titulo": "The pieces of a system",
  "habilidades.intro": "Each technology plays a role within a solution. I separate the ones I already use from the ones I'm still learning. Tap a layer to see the details.",
  "estado.uso": "I use it", "estado.aprendo": "Learning", "estado.basico": "I use it · basic",
  "detalle.etiqueta": "Details",
  "capa.interfaz": "Interface", "capa.interfazd": "What people see and use in the browser: structure, styles and interaction.",
  "capa.logica": "Logic", "capa.logicad": "The server: it receives requests, applies the app's rules and responds.",
  "capa.datos": "Data", "capa.datosd": "Where and how information is stored so it can be queried later.",
  "capa.herramientas": "Tools", "capa.herramientasd": "What I use to write, version and share code.",
  "tec.html": "Defines the structure and content of a page.",
  "tec.css": "Controls layout, colors and how a page adapts to each screen.",
  "tec.bootstrap": "CSS library for building responsive interfaces faster.",
  "tec.js": "Adds interaction to the page. I use it at a basic level.",
  "tec.node": "Runs JavaScript on the server.",
  "tec.nest": "Node.js framework for building modular APIs.",
  "tec.sql": "Language for creating tables and querying relational databases.",
  "tec.pg": "Relational database system.",
  "tec.prisma": "ORM that connects code to the database and manages its models.",
  "tec.git": "Version control: keeps the history of code changes.",
  "tec.github": "Platform for hosting repositories and working as a team.",
  "tec.vscode": "Code editor.",
  "blandas.etiqueta": "Soft skills", "blandas.titulo": "How I work with others",
  "blandas.intro": "What I bring when I work with other people and when I face something new.",
  "blandas.b1": "Self-directed learning", "blandas.b1d": "I look for information, practice and learn on my own what I need.",
  "blandas.b2": "Teamwork", "blandas.b2d": "I collaborate, share responsibilities and respect the team's agreements.",
  "blandas.b3": "Adaptability", "blandas.b3d": "I can move from server logic to the interface, depending on what the project needs.",
  "blandas.b4": "Problem solving", "blandas.b4d": "I analyze the need before writing code and look for a reasonable solution.",
  "proceso.etiqueta": "My process", "proceso.titulo": "From a need to a solution",
  "proceso.intro": "The five stages I follow when I build something.",
  "proceso.e1": "Goal", "proceso.e1d": "Understand what needs to be solved and what result is expected.",
  "proceso.e2": "Research", "proceso.e2d": "Review references, gather information and compare alternatives.",
  "proceso.e3d": "Sketch the structure before coding.",
  "proceso.e4": "Build", "proceso.e4d": "Develop the solution with the right tools.",
  "proceso.e5": "Testing", "proceso.e5d": "Check that it works on phone and desktop, and adjust.",
  "formacion.etiqueta": "Education", "formacion.titulo": "My academic path",
  "formacion.f1": "Software Programming Technician",
  "formacion.f2": "Software Analysis and Development Technologist",
  "formacion.hecho": "Completed", "formacion.hoy": "Present", "formacion.curso": "In progress",
  "contacto.etiqueta": "Contact", "contacto.titulo": "Got an idea? Let's talk.",
  "contacto.intro": "If you need a web solution or want to talk about a project, write to me.",
  "contacto.correo": "Email",
  "form.nombre": "Name", "form.correo": "Email", "form.mensaje": "Message",
  "form.errNombre": "Please enter your name.", "form.errCorreo": "Please enter a valid email.",
  "form.errMensaje": "Tell me what you need.",
  "form.enviar": "Draft email", "form.ayuda": "Your email app will open with the message ready to send.",
  "pie.derechos": "All rights reserved."
};

const ES = {};
document.querySelectorAll("[data-i18n]").forEach(el => {
  ES[el.dataset.i18n] = el.innerHTML;
});

let idioma = "es";

function cambiarIdioma(nuevo) {
  idioma = nuevo;
  document.documentElement.lang = nuevo;
  const textos = nuevo === "es" ? ES : EN;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const clave = el.dataset.i18n;
    if (textos[clave]) el.innerHTML = textos[clave];
  });
  document.querySelectorAll("[data-lang]").forEach(boton => {
    boton.classList.toggle("active", boton.dataset.lang === nuevo);
  });
  mostrarContacto();
}

document.querySelectorAll("[data-lang]").forEach(boton => {
  boton.addEventListener("click", () => cambiarIdioma(boton.dataset.lang));
});

function mostrarContacto() {
  const pendiente = idioma === "es" ? "[ Pendiente ]" : "[ Pending ]";
  if (WHATSAPP !== "PENDIENTE") {
    document.getElementById("enlace-whatsapp").href = "https://wa.me/" + WHATSAPP;
    document.getElementById("texto-whatsapp").textContent = "+" + WHATSAPP;
  } else {
    document.getElementById("texto-whatsapp").textContent = pendiente;
  }
  if (CORREO !== "PENDIENTE") {
    document.getElementById("enlace-correo").href = "mailto:" + CORREO;
    document.getElementById("texto-correo").textContent = CORREO;
  } else {
    document.getElementById("texto-correo").textContent = pendiente;
  }
}

mostrarContacto();

const menu = document.getElementById("navbarSupportedContent");
menu.querySelectorAll(".nav-link").forEach(enlace => {
  enlace.addEventListener("click", () => {
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault()
      event.stopPropagation()
      form.classList.add('was-validated')
      if (!form.checkValidity()) return

      const datos = new FormData(form)
      const para = CORREO !== "PENDIENTE" ? CORREO : ""
      const asunto = "Contacto desde tu portafolio - " + datos.get("nombre")
      const cuerpo = datos.get("mensaje") + "\n\n" + datos.get("nombre") + " (" + datos.get("correo") + ")"
      window.location.href = "mailto:" + para + "?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(cuerpo)
    }, false)
  })
})()
