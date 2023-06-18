let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
      console.log("'" + title + "'" + " " + "by" + " " + author + ", " + pages + " " + "pages," + " " + read)
    }
  }

  function addBookToLibrary(title, author, pages, haveRead) {
    const newBook = new Book(title, author, pages, haveRead);
    myLibrary += newBook;
    
  }

  for (let i = 0; i < 4; i++) {
  const container = document.querySelector('.container');

  const content = document.createElement('book');

  content.classList.add('book');
  content.textContent = 'This is the glorious text-content!';

  
    container.appendChild(content);
  }