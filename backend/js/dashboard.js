

const url = "http://127.0.0.1:8000/api/";
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
                        <th>Imagen</th>
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

        const response = await fetch(url + "personas/");

        const personas = await response.json();

        fillTable(personas);

    } catch(error) {

        console.error(error);

    }

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
                <td>
                ${
                    persona.imagen
                    ? `<img src="http://127.0.0.1:8000${persona.imagen}" width="80">`
                    : "Sin imagen"
                }
            </td>

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

                <input 
                    id="imagen" 
                    type="file"
                >

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

    formData.append("email", document.getElementById("email").value);
    formData.append("nombre", document.getElementById("nombre").value);
    formData.append("edad", document.getElementById("edad").value);

    const imagen = document.getElementById("imagen").files[0];

    if(imagen){
        formData.append("imagen", imagen);
    }


    const response = await fetch(url + "personas/", {

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


    await fetch(url + "personas/" + id + "/", {

        method:"DELETE"

    });


    getPersons();

}

/* EDITAR USUARIOS*/ 

async function renderEdit(id){

    const response = await fetch(
        url + "personas/" + id + "/"
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
                <input 
                    id="imagenEdit"
                    type="file"
                >

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


    const imagen = document.getElementById("imagenEdit").files[0];


    if(imagen){

        formData.append(
            "imagen",
            imagen
        );

    }


    const response = await fetch(
        url + "personas/" + id + "/",
        {
            method:"POST",
            body:formData
        }
    );


    const resultado = await response.json();


    console.log(resultado);


    renderRead();

}