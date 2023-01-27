class Book {
    constructor(name, author, pages) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = false;
    }
    info() {
        let readText = "";
        this.read ? readText = "read" : readText = "not read yet";
        return `${this.name} by ${this.author}, ${this.pages} pages, ${readText}.`;
    }
}


function changeReadStatus(book) {
    book.read ? book.read = false : book.read = true;
}

function addBookToLibrary(book) {
    function appendToDiv() {
        p.innerText = book.info();
        div.appendChild(p);
        div.appendChild(btn);
        booksDiv.appendChild(div);
    };

    const booksDiv = document.getElementById("books-div");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const btn = document.createElement("button");
    btn.innerText = "Change read status";
    appendToDiv();

    btn.addEventListener("click", function() {
        changeReadStatus(book);
        appendToDiv();
    });
}

const addBookBtn = document.getElementById("add-book-btn");

addBookBtn.addEventListener("click", function(){
    const name = prompt("Name of the book:");
    const author = prompt("Author of the book:");
    const pages = prompt("Number of pages:");
    const newBook = new Book(name, author, pages);
    addBookToLibrary(newBook);
});