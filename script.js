// Obtener los elementos del html
const input = document.getElementById("tareaInput");
const boton = document.getElementById("agregarBtn");
const lista = document.getElementById("listaTareas");

// Evento para agregar  tarea
boton.addEventListener("click", function () {
  const texto = input.value;

  // para no agregar tareas vacias
  if (texto === "") {
    return;
  }

  // Crear elementos lista y boton de eliminar
  const li = document.createElement("li");
  const botonEliminar = document.createElement("button");

  li.textContent = texto;
  botonEliminar.textContent = "Eliminar";

  // Eliminar la tarea
  botonEliminar.addEventListener("click", function () {
    lista.removeChild(li);
  });

  //appendchild agrega otro elemento de otro
  //removechild elemina ese el elemento hijo

  // Agregar li a la lista
  lista.appendChild(li);

  // Agregar botón al li
  li.appendChild(botonEliminar);

  // Limpiar input
  input.value = "";
});
