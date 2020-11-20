/* Java20- Javascript inlämning 1 
av: Sandra Wahlgren*/

/*This is the constructor with 4 properties and 1 function. Create book-objects */
function Books (name, topic, pages, ISBN){  
    this.name = name.toUpperCase();   /*Change title to all upper case */
    this.topic = topic[0].toUpperCase() + topic.substring(1);  /*Change first letter to upper case */
    this.pages = pages;
    this.ISBN = ISBN;

    this.getBookInfo = function(){
        console.log("Book: " + this.name + "\n",
        "Topic: " + this.topic + "\n",
        "Pages: " + this.pages + "\n",
        "ISBN: " + this.ISBN + "\n",
        "-----");
    };
};

/* Empty array*/
let bookList = [];

/*Add 3 books to start the array*/
bookList.push(new Books("JAVASCRIPT", "programing", 460, 3456));
bookList.push(new Books("A THEORY OF EVERYTHING", "science", 678, 8877));
bookList.push(new Books("NO LOGO", "climate change", 674, 6523));

/* Function to add books to bookList array */
function addBook(){
    let userInput = prompt("How many books would you like to add?");
    
    for (let i = 1; i <= userInput; i++){
        let name = prompt ("What is the name of book " + i + "?");
        let topic = prompt ("What is the topic?");
        let pages = prompt ("How many pages does the book have?");
        let ISBN = prompt ("What is the ISBN?");

        bookList.push(new Books(name, topic, pages, ISBN));
    }
}
/*Start the prompts by calling the function*/
addBook();

/*Calls the function in the constructor from the objects in the booklist*/
bookList.forEach (function(item){
    item.getBookInfo();
});

