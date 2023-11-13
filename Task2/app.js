let inputb = document.querySelector('#inputb');
let list = document.querySelector('#list');

inputb.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) { 
        addItem(this.value);
        this.value = "";
    }
});

let addItem = (inputb) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputb}<i></i>`; 

    listItem.addEventListener("click", function() {
        this.classList.toggle('done');
    });

    listItem.querySelector("i").addEventListener("click", function() {
        listItem.remove();    
    });

    list.appendChild(listItem);
}