const newHomeworkButton = document.querySelector('#nueva-tarea');
const homeworkCreatorBanner = document.querySelector('#bloque-crear-tarea');
const markCompletedHWButton = document.querySelector('#tarea-completada');
const eliminateHWButton = document.querySelector('#tarea-eliminada');
const hwSection = document.querySelector('.bloque-tarea');
const createHWButton = document.querySelector('#tarea-creada');
const cancelHWButton = document.querySelector('#cancelar');
const hwList = document.querySelector("#lista-tareas");
const overlay = document.querySelector('#modal-overlay');

// Sólo permite ingresar fechas en el futuro
const actualDate = new Date().toISOString().split('T')[0];
document.querySelector("#input-fecha").setAttribute('min', actualDate);

// Funcionalidad de los botones
newHomeworkButton.addEventListener('click', showHomeworkCreatorBanner);
createHWButton.addEventListener('click', createHomework);
cancelHWButton.addEventListener('click', () => {
    homeworkCreatorBanner.style.display = 'none';
    overlay.classList.remove("active");
});

// Función para crear una tarea
function createHomework() {
    // Se asignan los valores a las variables del bloque tarea
    const hwName = document.querySelector('#input-nombre').value.trim();
    const hwDate = document.querySelector('#input-fecha').value;

    // No permite dejar los inputs vacíos
    if (!hwName || !hwDate) {
        alert("Complete todos los campos.")
        return;
    }

    // Clona la plantilla del HTML de la tarea
    const newHW = hwSection.cloneNode(true);

    // Muestra el bloque de la tarea
    newHW.style.display = 'block';

    // Se pone en el HTML los valores ingresados por el usuario
    newHW.querySelector(".nombre-tarea").textContent = hwName;
    newHW.querySelector(".fecha").textContent += hwDate;

    // Funcionalidad de los botones de completar o eliminar la tarea
    newHW.querySelector(".tarea-completada").addEventListener("click", 
        () => newHW.remove());
    
    newHW.querySelector(".tarea-eliminada").addEventListener("click", 
        () => newHW.remove());

    // Se asigna la nueva tarea en la lista de tareas
    hwList.appendChild(newHW);

    // Se esconde el banner para poner la información de las tareas
    homeworkCreatorBanner.style.display = 'none';
    overlay.classList.remove("active");
}

// Muestra el banner para poner la información de las tareas
function showHomeworkCreatorBanner() {
    overlay.classList.add("active");
    homeworkCreatorBanner.style.display = 'block';
    document.querySelector('#input-nombre').value = "";
    document.querySelector('#input-fecha').value = "";
}






