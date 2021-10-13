let library = ["JavaScript Book", "HTML&CSS book"];

function Book(title, author, page, read){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

let stuff = document.getElementsByClassName("books");

let width=window.innerWidth-50
let height=window.innerHeight-50-120

for(let i = 0; i < library.length; i++){
    //alert(library[i]);
    let el = document.createElement('div')
    console.log(el)
    el.innerHTML = library[i]
    el.className = "bookCard";
    /*
    el.style.border = "1px solid rgb(0,0,0)"
    el.style.left= (width / library.length) * i
    el.style.top=0
    el.style.width = width / library.length
    el.style.height = "120px"
    el.style.background = '#04BEC4'
    el.style.margin = "10px"
    */
    stuff[0].appendChild(el);
}

function addBookToLibrary(){

}