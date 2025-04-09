//ESTO YA NO VALE DE NADA//


// De todo esto me he ayudado de IA de momento y hay cosas que no se han dado como el forEach

// Botón de Modo Oscuro
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '😎' : '🌚';
});

// Datos de Noticias (con imágenes actualizadas según HTML)
const newsData = [
    { 
        title: "La IA alcanza conciencia parcial en nuevo experimento", 
        category: "ciencia", 
        image: "assets/pexels-tara-winstead-8849295.jpg",
        summary: "En un avance sin precedentes, científicos han demostrado que la inteligencia artificial puede alcanzar una forma de conciencia limitada..."
    },
    { 
        title: "Tesla lanza el primer coche con autonomía total", 
        category: "innovacion", 
        image: "assets/pexels-impact-dog-crates-1789722873-29547347.jpg",
        summary: "La revolucionaria tecnología de Tesla promete transformar la industria automotriz, ofreciendo un vehículo capaz de manejarse completamente..."
    },
    { 
        title: "Descubren planeta con condiciones similares a la Tierra", 
        category: "espacio", 
        image: "assets/pexels-nurseryart-346885.jpg",
        summary: "Un equipo de astrónomos ha identificado un exoplaneta que podría albergar vida tal como la conocemos, abriendo nuevas posibilidades en la exploración espacial..."
    },
    { 
        title: "Los trabajos más amenazados por la automatización en 2030", 
        category: "trabajo", 
        image: "assets/pexels-pixabay-256381.jpg",
        summary: "Con la acelerada adopción de inteligencia artificial y robots, algunos trabajos corren el riesgo de desaparecer en la próxima década..."
    },
    { 
        title: "Nueva energía cuántica promete cambiar el mundo", 
        category: "ciencia", 
        image: "assets/pexels-diva-31328359.jpg",
        summary: "Investigadores han logrado desarrollar una nueva forma de energía cuántica que podría cambiar la forma en que producimos electricidad..."
    },
    { 
        title: "Primer trasplante de órgano impreso en 3D es exitoso", 
        category: "salud", 
        image: "assets/pexels-googledeepmind-17483868.jpg",
        summary: "Un equipo de médicos ha realizado con éxito el primer trasplante de órgano impreso en 3D, un avance que podría salvar millones de vidas en el futuro..."
    }
];

const newsContainer = document.getElementById("main-content");

// Renderizar Noticias
function renderNews() {
    newsContainer.innerHTML = ""; // Limpia el contenedor antes de renderizar
//esto es lo experimental 
    newsData.forEach(news => {
        const article = document.createElement("article");
        article.classList.add("noticia");

        const img = document.createElement("img");
        img.src = news.image;
        img.alt = `Imagen de la noticia: ${news.title}`;
        img.classList.add("noticia-img");

        const header = document.createElement("header");
        const titleElement = document.createElement("h2");
        titleElement.textContent = news.title;

        const dateElement = document.createElement("p");
        dateElement.classList.add("fecha");
        dateElement.textContent = "Publicado el " + generarFechaAleatoria();

        const contentDiv = document.createElement("div");
        contentDiv.classList.add("contenido");
        const summary = document.createElement("p");
        summary.textContent = news.summary;

        contentDiv.appendChild(summary);
        header.appendChild(titleElement);
        header.appendChild(dateElement);
        article.appendChild(img);
        article.appendChild(header);
        article.appendChild(contentDiv);
        newsContainer.appendChild(article);
    });
}
//y esto igual aunque no funciona del todo bien para mi gusto 
// Generar fecha aleatoria para cada noticia
function generarFechaAleatoria() {
    const dia = Math.floor(Math.random() * 20) + 1; // Entre 1 y 20
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    return `${dia} de ${meses[3]} de 2025`; // Simula fechas dentro de abril
}

// Render inicial
renderNews();
