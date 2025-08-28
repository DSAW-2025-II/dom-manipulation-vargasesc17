const newHomeworkButton = document.querySelector('#nueva-tarea');
const homeworkCreatorBanner = document.querySelector('#bloque-crear-tarea');
const markCompletedHWButton = document.querySelector('#tarea-completada');
const eliminateHWButton = document.querySelector('#tarea-completada');
const hwSection = document.querySelector('.bloque-tarea');
const createHWButton = document.querySelector('#tarea-creada');
const cancelHWButton = document.querySelector('#cancelar');
const hwList = document.querySelector("#lista-tareas");

const actualDate = new Date().toISOString().split('T')[0];
document.querySelector("#input-fecha").setAttribute('min', actualDate);

newHomeworkButton.addEventListener('click', showHomeworkCreatorBanner);
createHWButton.addEventListener('click', createHomework);
cancelHWButton.addEventListener('click', () => homeworkCreatorBanner.style.display = 'none')

function createHomework() {

    const hwName = document.querySelector('#input-nombre').value.trim();
    const hwDate = document.querySelector('#input-fecha').value;

    if (!hwName || !hwDate) {
        alert("Complete todos los campos.")
        return;
    }

    const newHW = hwSection.cloneNode(true);

    newHW.style.display = 'block';

    newHW.querySelector(".nombre-tarea").textContent = hwName;
    newHW.querySelector(".fecha").textContent += hwDate;

    newHW.querySelector(".tarea-completada").addEventListener("click", 
        () => newHW.remove());
    
    newHW.querySelector(".tarea-eliminada").addEventListener("click", 
        () => newHW.remove());

    hwList.appendChild(newHW);

    homeworkCreatorBanner.style.display = 'none';
}


function showHomeworkCreatorBanner() {
    homeworkCreatorBanner.style.display = 'block';
    document.querySelector('#input-nombre').value = "";
    document.querySelector('#input-fecha').value = "";
}






