function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    let readText = "";
    this.read ? readText = "read" : readText = "not read yet";
    return `${this.name} by ${this.author}, ${this.pages}, ${readText}.`;
}

