const newHomeworkButton = document.querySelector('#nueva-tarea');
const hwForm = document.querySelector("#form-tarea");
const homeworkCreatorBanner = document.querySelector('#bloque-crear-tarea');
const markCompletedHWButton = document.querySelector('#tarea-completada');
const eliminateHWButton = document.querySelector('#tarea-completada');
const hwSection = document.querySelector('.bloque-tarea');
const createHWButton = document.querySelector('#tarea-creada');
const cancelHWButton = document.querySelector('#cancelar');
const hwList = document.querySelector("#lista-tareas");

newHomeworkButton.addEventListener('click', showHomeworkCreatorBanner);
createHWButton.addEventListener('click', createHomework);

function createHomework() {
    const hwName = document.querySelector('#input-nombre').value;
    const hwDate = document.querySelector('#input-fecha').value;

    const newHW = hwSection.cloneNode(true);

    newHW.style.display = 'block';

    newHW.querySelector(".nombre-tarea").textContent = hwName;
    newHW.querySelector(".fecha-tarea").textContent = hwDate;

    newHW.querySelector(".tarea-completada").addEventListener("click", 
        () => newHW.remove());
    
    newHW.querySelector(".tarea-eliminada").addEventListener("click", 
        () => newHW.remove());

    hwList.appendChild(newHW);

    hwForm.reset();
    homeworkCreatorBanner.style.display = 'none';
}


function showHomeworkCreatorBanner() {
    homeworkCreatorBanner.style.display = 'block';
}






