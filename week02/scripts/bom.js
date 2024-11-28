const input = document.querySelector('#favchap');
const addButton = document.querySelector('button');
const list = document.querySelector('#list');


addButton.addEventListener('click', function(){
    const inputResponse = input.value;

    if (input.value.trim() !== ''){
        
        input.focus() 

        input.value= '';

        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');

        listItem.textContent = inputResponse;

        deleteButton.textContent = '❌';

        listItem.appendChild(deleteButton)
        list.appendChild(listItem);

        deleteButton.addEventListener('click', function(){
            list.removeChild(listItem)
            
        });

        input.focus();
        
        }


    
})


