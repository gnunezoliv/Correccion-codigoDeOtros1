/*Se cambiaron la declaraacion de variables var por let y const*/

const formulario = document.querySelector("#form");
formulario.onsubmit = function (e) {
  e.preventDefault("submit-button"); //Prevenir formularios vacios
};

  /**Cambio en nombre de variables a unas mas descriptivas*/
  /**Se obtienen los datos desde un querySelector */
  let nombreInvitado = document.querySelector("#name");
  let edadInvitado = document.querySelector("#age");
  let nacionalidadInvitado = document.querySelector("#nationality")

  let nombre = nombreInvitado.value;
  let edad = edadInvitado.value;
  let nacionalidad = nacionalidadInvitado.value;

  console.log(nombreInvitado, edadInvitado);
  console.log(nacionalidadInvitado);


  /*Se agregó la nacionalidad al invitado, se metió en una funcion la evaluacion, se le dio formato a la estructura basica de if */

  const evaluarInvitado = function (nombre, edad, nacionalidad) {

    if (nombre.length > 0 && edad > 18 && edad < 120 && nacionalidad !== undefined) {
      invitado(nombre, edad, nacionalidad)

    } else if (nombre.length === 0) {
      nombreInvitado.classList.add("error");

    } else if (edad < 18 || edad > 120) {
      edadInvitado.classList.add("error");

    } else if (nacionalidad === undefined || nacionalidad === 0) {
      nacionalidadInvitado.classList.add("error");
    }
  }

  /*Se cambió el nombre de la funcion */
  function evaluarNacionalidad() {

    if (nacionalidad === "ar") {
      nacionalidad = "Argentina"
    }
    else if (nacionalidad === "mx") {
      nacionalidad = "Mexicana"
    }
    else if (nacionalidad === "vnzl") {
      nacionalidad = "Venezolana"
    }
    else if (nacionalidad === "per") {
      nacionalidad = "Peruana"
    }


    let lista = document.getElementById("guest-list");

    let elementoLista = document.createElement("div");
    elementoLista.classList.add("elemento-lista");//.add en vez de .adedd
    lista.appendChild(elementoLista);

    let spanNombre = document.createElement("span");
    let inputNombre = document.createElement("input");
    let espacio = document.createElement("br");
    spanNombre.textContent = ("Nombre: ");
    inputNombre.value = nombre;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);

    function crearElemento(descripcion, valor) {

      let spanNombre = document.createElement("span");
      let inputNombre = document.createElement("input");
      let espacio = document.createElement("br");
      spanNombre.textContent = (descripcion + ": ");
      inputNombre.value = valor;
      elementoLista.appendChild(spanNombre);
      elementoLista.appendChild(inputNombre);
      elementoLista.appendChild(espacio);
    }

    crearElemento("Nombre", nombre);
    crearElemento("Edad", edad);
    crearElemento("Nacionalidad", nacionalidad);


    let botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Eliminar invitado"
    botonBorrar.id = "boton-borrar"
    let corteLinea = document.createElement("br");
    elementoLista.appendChild(corteLinea);
    elementoLista.appendChild(botonBorrar);
    botonBorrar.onclick = function () {
      this.parentNode.style.display = 'none';
      botonBorrar.parentNode.remove()
    }
    

  };