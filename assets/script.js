const formTarefa = document.getElementById('formtarefa');
const tarefas = document.getElementById('tarefas');

formTarefa.onsubmit = function (e) {
    e.preventDefault();
    const digiteTarefa = document.getElementById('digitetar');
    addTarefas(digiteTarefa.value);
    formTarefa.reset();
};

function addTarefas(description) {
    const caixaTarefa = document.createElement('div');
	const novaTarefa = document.createElement('input');
	const tagTarefa = document.createElement('label');
	const descricaoTarefa = document.createTextNode(description);

    novaTarefa.setAttribute('type', 'checkbox');
	novaTarefa.setAttribute('name', description);
	novaTarefa.setAttribute('id', description);

    tagTarefa.setAttribute('for', description);
	tagTarefa.appendChild(descricaoTarefa);

	caixaTarefa.classList.add('task-item');
	caixaTarefa.appendChild(novaTarefa);
	caixaTarefa.appendChild(tagTarefa);

    tarefas.appendChild(caixaTarefa);
}




