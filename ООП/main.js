class BookList {
    allBooks = [];
    nextBook = null;
    currentBook = null;
    lastBook = null;

    add(book) {
        this.allBooks.push(book);
    }

    setCurrent(book) {
        if (this.currentBook === book) {
            console.log(`Ви вже читаєте книгу: ${book.title}`);
        }
        else if (this.currentBook) {
            console.log(`Щоб почати читати нову книгу завершіть: ${this.currentBook.title}`);
        }
        else {
            book.startReadDate = new Date(Date.now());
            this.currentBook = book;
            console.log(`Ви почали читати: ${book.title}`);
        }
    }

    get currentBook() {
        return this.currentBook
            ? console.log(`Зараз ви читаете: ${this.currentBook.title}`)
            : console.log("Зараз ви нічого не читаете");
    }

    get lastBook() {
        if (!this.lastBook) {
            console.log("Ви ще нічого не прочитали");
        }
        else return console.log(`Остання прочитана книга: ${this.lastBook.title}. Завершили її за: ${this.lastBook.endReadDate}`);
    }

    get booksToRead() {
        return this.allBooks.filter((b) => !b.read)
    }

    get booksRead() {
        return this.allBooks.filter((b) => b.read)
    }

    finishCurrentBook() {
        if (!this.currentBook)
            console.log("Ви зараз нічого не читаете");
        else {
            const calculateElapsedTime = (start, end) => {
                const diff = end - start;
                return Math.round((diff / 1000) / 60);
            };

            this.currentBook.read = true;
            this.currentBook.endReadDate = new Date(Date.now());
            this.lastBook = this.currentBook;
            const cb = this.currentBook;
            this.currentBook = null;
            const askForNext = prompt(
                `Ви завершили читати ${cb.title
                }! Це зайняло у вас ${calculateElapsedTime(
                    cb.startReadDate,
                    cb.endReadDate
                )} хвилин!\n\nЧи бажаєте вибрати наступну книгу для читання? Напиши "так" або "ні"`
            );
            if (askForNext === "так") {
                const booksLeft = this.allBooks.filter((b) => !b.read)
                if (!booksLeft.length) alert('На жаль ви вже прочитали всі книги')
                else {
                    let question = "Яку книгу виберете для читання? У вас залишились: \n"
                    booksLeft.forEach((b, i) => question += `\n - ${b.title} - введіть ${i} \n`)
                    const askWhich = prompt(question)
                    this.setCurrent(booksLeft[parseInt(askWhich, 10)])
                }
            } else {
                console.log("ОК")
            }
        }
    }
}

class Book extends BookList {
    constructor(title, genre, author) {
        super();
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.startReadDate = null;
        this.endReadDate = null;
    }
}

const myLibrary = new BookList();

const book1 = new Book("world", "history", "Tom");
const book2 = new Book("tree", "romance", "Bill");
const book3 = new Book("sky", "fantasy", "John");

const all = [book1, book2, book3];
all.map((b) => myLibrary.add(b));