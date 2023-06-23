let myLibrary = [];

function Book(title, author, pages, read, booknumber) {
    this.title = title
    this.author = author
    this.pages = pages
    if (read == false){
      this.read = "unread"
      } else {
      this.read = "read" 
      }
    this.booknumber = booknumber
    this.info = function() {
      console.log("'" + title + "'" + " " + "by" + " " + author + ", " + pages + " " + "pages," + " " + read + " " + "Book Number" + " " + booknumber)
    }
  }

  function addBookToLibrary(title, author, pages, haveRead) {
    let bookNumber = myLibrary.length;
    const newBook = new Book(title, author, pages, haveRead, bookNumber);
    myLibrary.push(newBook);    
  }

const bookTitle = document.querySelector("#title")
const bookAuthor = document.querySelector("#author")
const bookPages = document.querySelector("#pages")
const bookRead = (document.querySelector('#readstatus'));
const addButton = document.querySelector(".addtolibrary")

addButton.addEventListener('click', (event) => {
  addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);
  updateLibrary();
  // toggle();
  // let element = document.querySelector(".form");
  // let hidden = element.getAttribute("hidden");

  // if (hidden) {
  //    element.removeAttribute("hidden");
  // } else {
  //    element.setAttribute("hidden", "hidden");
  // }
  
});

  addBookToLibrary('poo', 'pee', '123', false);
  addBookToLibrary('dung', 'weenjuice', '432', true);
  

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

    // const rfield = document.createElement('readfield');
    // rfield.classList.add('readfield');
    // rfield.textContent = myLibrary[i].read;
    // content.appendChild(rfield);
    const button1 = document.createElement('button');
    button1.innerText = myLibrary[i].read; ;
    content.appendChild(button1);

    button1.addEventListener('click', () => {
      toggleText(button1);
      changeRead(i);
    })

    const button2 = document.createElement('button');
    button2.innerText = 'remove' ;
    content.appendChild(button2);

    button2.addEventListener('click', () => {
      removeBook(i);
    })
    }
}

function toggle(){
  let element = document.querySelector(".form");
  let hide = element.getAttribute("hidden");
  if (hide) {
     element.removeAttribute("hidden");
     element.setAttribute("display", "flex");
  } else {
     element.setAttribute("hidden", "hidden");
     element.removeAttribute("display", "flex");
  }
}

function removeBook(x){
  myLibrary.splice(x, 1);
  updateLibrary();
}

function toggleText(button) {
  if (button.innerHTML == "read") {
      button.innerHTML = "unread";
  } else if (button.innerHTML == "unread") {
      button.innerHTML = "read";
  } else {
      null
  }
}

function changeRead(x){
  if (myLibrary[x].read == "read") {
    myLibrary[x].read = "unread";
} else if (myLibrary[x].read == "unread") {
  myLibrary[x].read = "read";
} else {
    null
}

}
