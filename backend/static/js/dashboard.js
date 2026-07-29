

const IS_LOCAL =
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "localhost";

const API_URL = IS_LOCAL
    ? "http://127.0.0.1:8000/api/"
    : "https://magic-academy.onrender.com/api/";

const BASE_URL = IS_LOCAL
    ? "http://127.0.0.1:8000"
    : "https://magic-academy.onrender.com";

const content = document.getElementById("content");

/*  TOKENS */

function getCookie(name) {
    let cookieValue = null;

    if (document.cookie && document.cookie !== "") {

        const cookies = document.cookie.split(";");

        for (let cookie of cookies) {

            cookie = cookie.trim();

            if (cookie.startsWith(name + "=")) {

                cookieValue = decodeURIComponent(
                    cookie.substring(name.length + 1)
                );

                break;
            }
        }
    }

    return cookieValue;
}

const csrfToken = getCookie("csrftoken");

/* LEER USUARIOS*/ 

function renderRead() {

    content.innerHTML = `
        <section class="back">

            <h2>Listado de Personas</h2>

            <div id="loading-message">
                <p>
                    ⏳ Conectando con el servidor...
                </p>

                <small>
                    * El backend está alojado en Render Free.
                    <br>
                    * La primera carga puede demorar unos segundos mientras el servidor se inicia.
                </small>
            </div>

        </section>
    `;

    getPersons();

}

async function getPersons() {

    try {

        const response = await fetch(API_URL + "personas/");

        const personas = await response.json();

        fillTable(personas);

    } catch(error) {

        console.error(error);

    }

}

function getCasaBadge(casa){

    const casas = {
        leon: {
            color:"#c62828",
            icono:"🦁"
        },
        halcon:{
            color:"#1565c0",
            icono:"🦅"
        },
        serpiente:{
            color:"#2e7d32",
            icono:"🐍"
        }
    };

    const info = casas[casa];

    return `
        <div
            style="
                width:45px;
                height:45px;
                background:${info.color};
                border-radius:10px;
                display:flex;
                align-items:center;
                justify-content:center;
                font-size:22px;
                margin:auto;
            "
            title="${casa}"
        >
            ${info.icono}
        </div>
    `;
}

function fillTable(personas) {

    content.innerHTML = `
        <section class="back">

            <h2>Listado de Personas</h2>

            <table>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Edad</th>
                        <th>Casa</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody id="table-body">

                </tbody>

            </table>

        </section>
    `;

    const tbody = document.getElementById("table-body");

    personas.forEach(persona => {

        tbody.innerHTML += `
            <tr>
                <td>${persona.id}</td>
                <td>${persona.nombre}</td>
                <td>${persona.email}</td>
                <td>${persona.edad}</td>
                <td>${getCasaBadge(persona.casa)}</td>
                <td>
                    <button onclick="renderEdit(${persona.id})">✏️</button>
                    <button onclick="deletePerson(${persona.id})">🗑️</button>
                </td>
            </tr>
        `;

    });

}



function renderCreate(){

    content.innerHTML = `

        <section class="back">

            <h2>Crear Persona</h2>

            <form onsubmit="createPerson(event)">

                <input 
                    id="nombre" 
                    type="text" 
                    placeholder="Nombre"
                    required
                >

                <input 
                    id="email" 
                    type="email" 
                    placeholder="Email"
                    required
                >

                <input 
                    id="edad" 
                    type="number" 
                    placeholder="Edad"
                    required
                >

                <select id="casa">

                <option value="leon" style="color:#c62828;">🦁 León</option>

                <option value="halcon" style="color:#1565c0;">🦅 Halcón</option>

                <option value="serpiente" style="color:#2e7d32;">🐍 Serpiente</option>

                </select>

                <button type="submit">
                    Guardar
                </button>

            </form>

        </section>

    `;
    const select = document.getElementById("casa");

    actualizarColor(select);

    select.addEventListener("change", () => {
        actualizarColor(select);
    });
}

/* CREAR USUARIOS*/ 

async function createPerson(event){

    event.preventDefault();

    const formData = new FormData();

    formData.append(
        "email",
        document.getElementById("email").value
    );

    formData.append(
        "nombre",
        document.getElementById("nombre").value
    );

    formData.append(
        "edad",
        document.getElementById("edad").value
    );

    formData.append(
        "casa",
        document.getElementById("casa").value
    );


    const response = await fetch(API_URL + "personas/", {
    method: "POST",
    headers: {
        "X-CSRFToken": csrfToken
    },
    body: formData
});


    const data = await response.json();

    console.log(data);

}

/* BORRAR USUARIOS*/ 

async function deletePerson(id){

    const confirmar = confirm(
        "¿Eliminar persona?"
    );

    if(!confirmar){
        return;
    }


    const response =  await fetch(API_URL + "personas/" + id + "/", {
    method: "DELETE",
    headers: {
        "X-CSRFToken": csrfToken
    }
});


    const resultado = await response.json();

    console.log(resultado);

    if (response.ok) {
        getPersons();
    }

}



async function renderEdit(id){

    const response = await fetch(
        API_URL + "personas/" + id + "/"
    );

    const persona = await response.json();


    content.innerHTML = `

        <section class="back">

            <h2>Editar Persona</h2>

            <form onsubmit="updatePerson(event, ${id})">


                <input
                    id="nombreEdit"
                    type="text"
                    value="${persona.nombre}"
                >


                <input
                    id="emailEdit"
                    type="email"
                    value="${persona.email}"
                >


                <input
                    id="edadEdit"
                    type="number"
                    value="${persona.edad}"
                >


                <select id="casaEdit">

                <option
                    value="leon"
                    style="color:#c62828;"
                    ${persona.casa === "leon" ? "selected" : ""}
                >
                    🦁 León
                </option>

                <option
                    value="halcon"
                    style="color:#1565c0;"
                    ${persona.casa === "halcon" ? "selected" : ""}
                >
                    🦅 Halcón
                </option>

                <option
                    value="serpiente"
                    style="color:#2e7d32;"
                    ${persona.casa === "serpiente" ? "selected" : ""}
                >
                    🐍 Serpiente
                </option>

            </select>


                <button type="submit">
                    Guardar cambios
                </button>


            </form>

        </section>

    `;

    const select = document.getElementById("casaEdit");

    actualizarColor(select);

    select.addEventListener("change", () => {
        actualizarColor(select);
    });

   
}

function actualizarColor(select){

    const colores = {
        leon: "#c62828",
        halcon: "#1565c0",
        serpiente: "#2e7d32"
    };

    select.style.color = colores[select.value];

}

/* EDITAR USUARIOS*/ 

async function updatePerson(event, id){

    event.preventDefault();


    const formData = new FormData();


    formData.append(
        "nombre",
        document.getElementById("nombreEdit").value
    );


    formData.append(
        "email",
        document.getElementById("emailEdit").value
    );


    formData.append(
        "edad",
        document.getElementById("edadEdit").value
    );


    formData.append(
        "casa",
        document.getElementById("casaEdit").value
    );


    const response = await fetch(
    API_URL + "personas/" + id + "/",
    {
        method: "POST",
        headers: {
            "X-CSRFToken": csrfToken
        },
        body: formData
    }
);


    const resultado = await response.json();

    console.log(resultado);


    renderRead();

}

window.addEventListener("DOMContentLoaded", () => {
    renderRead();
});

