// Seleciona os elementos do DOM
const inputElement = document.querySelector('.js-inputPurchase');
const addButton = document.querySelector('.js-buttonAddItem');
const itemContainer = document.querySelector('.js-containerPurchase');
const selectedList = document.getElementById('selected-list');

// Adiciona um item à lista
function addItem() {
    const inputValue = inputElement.value.trim();

    if (inputValue === '') {
        alert('Por favor, insira um item.');
        return;
    }

    // Cria o elemento de lista
    const listItem = document.createElement('div');
    listItem.classList.add('container__purchase');

    listItem.innerHTML = `
        <input type="checkbox" class="select-item">
        <p>${inputValue}</p>
        <img src="images/Lixeira.png" alt="Excluir" class="delete-btn">
    `;

    itemContainer.appendChild(listItem);
    inputElement.value = '';

    // Configura ações do checkbox e botão de exclusão
    const checkbox = listItem.querySelector('.select-item');
    const deleteButton = listItem.querySelector('.delete-btn');

    checkbox.addEventListener('change', () => toggleSelection(checkbox, inputValue));
    deleteButton.addEventListener('click', () => deleteItem(listItem));
}

// Função para alternar a seleção de itens
function toggleSelection(checkbox, itemName) {
    if (checkbox.checked) {
        // Adiciona o item à lista de selecionados
        const selectedItem = document.createElement('li');
        selectedItem.textContent = itemName;
        selectedItem.dataset.name = itemName; // Atributo para identificar o item
        selectedList.appendChild(selectedItem);
    } else {
        // Remove o item da lista de selecionados
        const items = selectedList.querySelectorAll('li');
        items.forEach((item) => {
            if (item.dataset.name === itemName) {
                item.remove();
            }
        });
    }
}

// Função para remover um item
function deleteItem(item) {
    const checkbox = item.querySelector('.select-item');
    const itemName = item.querySelector('p').textContent;

    if (checkbox.checked) {
        toggleSelection(checkbox, itemName);
    }

    item.remove();
}

// Adiciona o evento ao botão de adicionar
addButton.addEventListener('click', addItem);

// Adiciona o evento de tecla Enter no input
inputElement.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addItem();
    }
});

// Seleciona o elemento da notificação
const notificationElement = document.getElementById("notification");

// Função para exibir a notificação
function showNotification() {
    notificationElement.style.display = "block";

    // Oculta a notificação após 3 segundos
    setTimeout(() => {
        notificationElement.style.display = "none";
    }, 3000);
}

// Função para remover um item
function deleteItem(item) {
    const checkbox = item.querySelector('.select-item');
    const itemName = item.querySelector('p').textContent;

    if (checkbox.checked) {
        toggleSelection(checkbox, itemName);
    }

    item.remove();
    showNotification(); // Mostra a notificação
}
