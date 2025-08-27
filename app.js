if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}


const container = document.querySelector(".container");
const btnAgregar = document.querySelector("#btnAgregar");

let arrTareas = JSON.parse(localStorage.getItem('tareas')) || [];

function mostrarTareas() {
    const listaTareas = document.getElementById('listaTareas');
    listaTareas.innerHTML = '';
    
    arrTareas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.textContent = tarea;
        
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.onclick = () => {
            arrTareas.splice(index, 1);
            localStorage.setItem('tareas', JSON.stringify(arrTareas));
            mostrarTareas();
        };
        
        li.appendChild(btnEliminar);
        listaTareas.appendChild(li);
    });
}
mostrarTareas();



btnAgregar.addEventListener("click", () => {
  const tarea = document.querySelector("#iptTarea").value;
  arrTareas.push(tarea);
  mostrarTareas();
  document.querySelector("#iptTarea").value = "";
  // Guardar en localStorage
    localStorage.setItem('tareas', JSON.stringify(arrTareas));
    mostrarTareas();

});




document.addEventListener("DOMContentLoaded", mostrarTareas);


