const input = document.querySelector('#favchap');
const addButton = document.querySelector('button');
const list = document.querySelector('#list');



let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});


addButton.addEventListener('click', function(){

    if (input.value.trim() !== ''){
        
        displayList(input.value);
        chaptersArray.push(input.value);

        setChapterList();

        input.value = ''

        input.focus();

    }
    
});

function displayList(item) {
    
    const listItem = document.createElement('li');
    const deleteButton = document.createElement('button');

    listItem.textContent = item;

    deleteButton.textContent = '❌';

    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    deleteButton.addEventListener('click', function(){
        list.removeChild(listItem);

        deleteChapter(listItem.textContent);
        
    });
    
    }

function setChapterList() {
    localStorage.setItem('myBomList', JSON.stringify(chaptersArray));
    
    
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myBomList'));

}

function deleteButton(chapter) {
    //reformat chapter

    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);

    setChapterList();
}










