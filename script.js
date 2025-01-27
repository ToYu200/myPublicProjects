
let result = []
function reader(){
    var input = document.querySelector('input').value
    result.push(input)
}

function cleanSearch(){
    document.querySelector('input').value = ''
}

function createTask(result){
    
    document.getElementById('list');

    let task = document.createElement('div');
    task.className = 'task';
    
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = 'checkbox';

    let text = document.createElement('p')
    text.className = 'text'
    text.innerText = result;

    task.appendChild(checkBox);
    task.appendChild(text);
    list.appendChild(task);
}

function arrayCleaner(array){
    array.length = 0;
}
document.addEventListener( 'keyup', event => {
    if( event.code === 'Enter' ){
        reader();
        cleanSearch();  
        createTask(result);
        arrayCleaner(result);
    };
 
  });
