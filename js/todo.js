const todoInput = document.getElementById("todo-input");
const todoList = document.querySelector(".todo-list");

const allRemoveBtn = document.querySelector(".all-remove-btn");

// 전체 삭제
allRemoveBtn.addEventListener("click", ()=>{

    document.querySelectorAll(".todo-list li")
        .forEach(e => e.remove())

})


todoInput.addEventListener("keypress", function(e){
    if(e.keyCode === 13){
        console.log(todoInput.value)
        // const li = document.createElement("li");
        // li.innerText = "할일";
        // todoList.appendChild(li);
        generateTodo(todoInput.value)
        todoInput.value = "";   // 입력창 초기화
    }
})


function generateTodo(todo){
    console.log(todo)
    const li = document.createElement("li");
    const likeSpan = generateLike();
    const itemSpan = generateItem(todo);
    const manageSpan = generateManage();
    li.appendChild(likeSpan);
    li.appendChild(itemSpan);
    li.appendChild(manageSpan);
    todoList.appendChild(li);

}

const generateLike = ()=>{
    const span = document.createElement("span");
    span.classList.add("todo-like")
    const icon = document.createElement("i");
    icon.classList.add("material-icons")
    icon.classList.add("like")
    icon.innerText = "favorite_border";
    span.appendChild(icon);

    icon.addEventListener("click", () => {
        // if(icon.innerText === 'favorite_border'){
        //     icon.innerText = "favorite"
        // } else {
        //     icon.innerText = "favorite_border"
        // }

        // 삼항 연산자
        icon.innerText === 'favorite_border' ?
            icon.innerText = "favorite" : icon.innerText = "favorite_border";
    })

    console.log(span)
    return span;
}
const generateItem = (todo)=>{
    const span = document.createElement("span");
    span.classList.add("todo-item")
    span.innerText = todo;
    return span;
}
const generateManage = ()=>{
    const span = document.createElement("span");
    span.classList.add("todo-manage")
    const icon1 = document.createElement("i");
    icon1.classList.add("material-icons")
    icon1.classList.add("check")
    icon1.innerText = "check";
    const icon2 = document.createElement("i");
    icon2.classList.add("material-icons")
    icon2.classList.add("clear")
    icon2.innerText = "clear";

    icon1.addEventListener("click", (e) => {
        const li = e.target.parentNode.parentNode;

        li.classList.add('done');
        console.log(li)
    })

    icon2.addEventListener("click", (e) => {
        const li = e.target.parentNode.parentNode;

        todoList.removeChild(li);
        console.log(li)
    })

    span.appendChild(icon1);
    span.appendChild(icon2);
    return span;
}