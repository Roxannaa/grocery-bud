// select items
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitButton = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearButton = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = '';

// event listeners
form.addEventListener('submit', addItem);

// functions
function addItem(event) {
  event.preventDefault();
  const id = new Date().getTime().toString();
  const itemValue = grocery.value;

  if (itemValue && !editFlag) {
    const element = document.createElement('article');
    //add class
    element.classList.add('grocery-item');
    //add id
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${itemValue}</p>
    <div class="btn-container">
        <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
    </div>`;

    //append child
    list.appendChild(element);
    //displayAlert
    displayAlert('you just added something to buy!', 'success');
    //show container
    container.classList.add('show-container');
  } else if (itemValue && editFlag) {
    console.log('editing');
  } else {
    displayAlert('please write something...', 'danger');
  }
}

//display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  //remove alert
  setTimeout(function () {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 2000);
}

// local storage

// setup items
