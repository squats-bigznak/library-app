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
    //we'll use bookNumber to store a data attribute 
    //corresponding to the array position
    let bookNumber = myLibrary.length;
    const newBook = new Book(title, author, pages, haveRead, bookNumber);
    myLibrary.push(newBook);  
    
  }

const bookTitle = document.querySelector("#title")
const bookAuthor = document.querySelector("#author")
const bookPages = document.querySelector("#pages")
const bookRead = document.querySelector("#read")
const addButton = document.querySelector(".addtolibrary")

addButton.addEventListener('click', (event) => {
  
  addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);
  
  updateLibrary();
});

// greetMeButton.addEventListener('click', (event) => {
//    greetingOutput.innerText = `Hello ${name.value}`;
// })

  addBookToLibrary('poo', 'pee', '123', 'haveread');
  addBookToLibrary('dung', 'weenjuice', '432', 'havenotread');
  


function updateLibrary(){
  const container = document.querySelector('.container');

  while(container.firstElementChild) {
    container.firstElementChild.remove();
  }

  for (let i = 0; i < myLibrary.length; i++) {
    
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
}

  // console.log(myLibrary.length);
  // console.log(myLibrary[0].info());
  // console.log(myLibrary[1].info());