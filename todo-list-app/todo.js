
const btnEl = document.querySelector(".addbtn");


btnEl.addEventListener("click", ()=>{
    addToDo();
    renderHtml();
    const name = '';
});




const todoList =[{
    name: 'learn javascript',
    dueDate: '03-22-2025'
}];

function addToDo(){
    const inputEl = document.querySelector(".input");
    const name = inputEl.value;
    const date = document.querySelector('.due-date');
    const dueDate = date.value;
    todoList.push({
        name: name,
        dueDate: dueDate
    });
    

    renderHtml();
    
}

function renderHtml(){
    let listHtml = '';
    todoList.forEach((todoObject, i) =>{
        const { name, dueDate} = todoObject;
        const html = `<div>${name}</div>
                    <div>${dueDate}</div>
                    <button class="deletebtn" onclick="
                    todoList.splice(${i}, 1); renderHtml();">Delete</button>`;
        listHtml += html;
    })
    
    document.querySelector(".list").innerHTML = listHtml;
    
}