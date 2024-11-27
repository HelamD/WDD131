const list = document.querySelector('ul');
const input = document.querySelector('#item');
const addButton = document.querySelector('button');

addButton.addEventListener('click', function() {
    const inputResponse = input.value;

    input.value= '';

    const listItem = document.createElement('li'); 
    const span = document.createElement('span'); 
    const button = document.createElement('button');

    span.textContent = inputResponse;
    button.textContent = 'Delete';

    listItem.appendChild(span);
    listItem.appendChild(button);

    

    list.appendChild(listItem);

    button.addEventListener('click', function(){
        list.removeChild(listItem);
    });

    input.focus();
});

  

 