const input = document.querySelector('#favchap');
const addButton = document.querySelector('button');
const list = document.querySelector('#list');



let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayChapter();
});


addButton.addEventListener('click', function(){

    if (input.value.trim() !== ''){
        
        displayChapter(input.value);
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

    listItem.appendChild(deleteButton)
    list.appendChild(listItem);

    deleteButton.addEventListener('click', function(){
        list.removeChild(listItem)

        deleteChaper(listItem.textContent)
        
    });

    input.focus();
    
    }

function setChapterList() {
    LocalStorage.setItem('myBomList', JSON.stringify(chaptersArray));

}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myBomList'));

}

function deleteButton(chapter) {
    //reformat chapter

    chapter = chapter.slice(1, chapter.length -1)
    chaptersArray.flter((item) => item !== chapter);

    setChapterList();
}










