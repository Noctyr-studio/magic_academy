

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

/* LEER USUARIOS*/ 

function renderRead() {

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

    const tbody = document.getElementById("table-body");

    tbody.innerHTML = "";

    personas.forEach(persona => {

        tbody.innerHTML += `
            <tr>

                <td>${persona.id}</td>
                <td>${persona.nombre}</td>
                <td>${persona.email}</td>
                <td>${persona.edad}</td>
                <td>${getCasaBadge(persona.casa)}</td>

                <td>
                    <button onclick="renderEdit(${persona.id})"> ✏️</button>
                    <button onclick="deletePerson(${persona.id})">🗑️</button>
                </td>

            </tr>
        `;

    });

}

/* CREAR USUARIOS*/ 

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

                <option value="leon">
                🦁 León
                </option>

                <option value="halcon">
                🦅 Halcón
                </option>

                <option value="serpiente">
                🐍 Serpiente
                </option>

                </select>

                <button type="submit">
                    Guardar
                </button>

            </form>

        </section>

    `;
}

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

        method:"POST",

        body:formData

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


    await fetch(API_URL + "personas/" + id + "/", {

        method:"DELETE"

    });


    getPersons();

}

/* EDITAR USUARIOS*/ 

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

                    <option value="leon" ${persona.casa === "leon" ? "selected" : ""}>
                        🦁 León
                    </option>

                    <option value="halcon" ${persona.casa === "halcon" ? "selected" : ""}>
                        🦅 Halcón
                    </option>

                    <option value="serpiente" ${persona.casa === "serpiente" ? "selected" : ""}>
                        🐍 Serpiente
                    </option>

                </select>


                <button type="submit">
                    Guardar cambios
                </button>


            </form>

        </section>

    `;
}

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
            method:"POST",
            body:formData
        }
    );


    const resultado = await response.json();

    console.log(resultado);


    renderRead();

}