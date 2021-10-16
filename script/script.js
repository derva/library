let library = [
    {
        title: "JavaScript Book",
        author: "Author of book",
        pages: 10,
        read: false,
    }, 
];

function Book(title, author, page, read){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}


function showBooks(){
let stuff = document.getElementsByClassName("books");

    for(let i = 0; i < library.length; i++){
        //alert(library[i]);
        let el = document.createElement('div');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let h4 = document.createElement('h4');
        el.appendChild(h2);
        el.appendChild(h3);
        el.appendChild(p);
        el.appendChild(h4);
        console.log(el)
        h2.innerHTML = library[i].title;
        h3.innerHTML = library[i].author;
        p.innerHTML = library[i].pages;
        h4.innerText = library[i].read ? "read" : "not read yet";
        el.className = "bookCard";
        stuff[0].appendChild(el);
    }
}
let newBook = document.getElementById("newbook");
let box = document.querySelector('.box-input');
newBook.addEventListener('click', function addBookToLibrary(){
    box.style.visibility = "visible";
});

let finishedAddBook = document.getElementById('finish-addbook');
finishedAddBook.addEventListener('click', function finishBook(){
    let stuff = document.getElementsByClassName("books");

    box.style.visibility = "hidden";
    let author = document.getElementById("author");
    let title = document.getElementById("title");
    let nbPages = document.getElementById("pages");
    let isRead = document.getElementById("read").checked;

    let el = document.createElement('div');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let h4 = document.createElement('h4');

    el.className = "bookCard";

    el.appendChild(h2);
    el.appendChild(h3);
    el.appendChild(p);
    el.appendChild(h4);

    h2.innerHTML = title.value;
    h3.innerHTML = author.value;
    p.innerHTML = nbPages.value;
    h4.innerHTML = isRead ? "read" : "not read yet";
    console.log(isRead);

    //let friska = new Book(title.value, author.value, nbPages.value, isRead ? "read" : "not read yet");
    //console.log("Before", library);
    //library.push(friska);
    //console.log("After", library);

    stuff[0].appendChild(el);

    document.getElementById("FORM").reset();
});

function init(){
    showBooks();
}

init(); //starting point