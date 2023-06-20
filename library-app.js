let myLibrary = [];

function Book(title, author, pages, read, booknumber) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.booknumber = booknumber
    this.info = function() {
      console.log("'" + title + "'" + " " + "by" + " " + author + ", " + pages + " " + "pages," + " " + read + " " + "Book Number" + " " + booknumber)
    }
  }

  function addBookToLibrary(title, author, pages, haveRead) {
    let bookNumber = myLibrary.length;
    const newBook = new Book(title, author, pages, haveRead, bookNumber);
    //we'll use this to store a data attribute 
    //corresponding to the array position
    myLibrary.push(newBook);  
  }

  addBookToLibrary('poo', 'pee', '123', 'haveread');
  addBookToLibrary('dung', 'weenjuice', '432', 'havenotread');

  for (let i = 0; i < myLibrary.length; i++) {
    const container = document.querySelector('.container');
    const content = document.createElement('book');
    content.classList.add('book');
    container.appendChild(content);

    const tfield = document.createElement('titlefield');
    tfield.classList.add('titlefield');
    tfield.textContent = myLibrary[i].title;
    content.appendChild(tfield);

    const afield = document.createElement('authorfield');
    afield.classList.add('authorfield');
    afield.textContent = myLibrary[i].author;
    content.appendChild(afield);

    const pfield = document.createElement('pagesfield');
    pfield.classList.add('pagesfield');
    pfield.textContent = myLibrary[i].pages;
    content.appendChild(pfield);

    const rfield = document.createElement('readfield');
    rfield.classList.add('readfield');
    rfield.textContent = myLibrary[i].read;
    content.appendChild(rfield);
      
    }

  console.log(myLibrary.length);
  console.log(myLibrary[0].info());
  console.log(myLibrary[1].info());