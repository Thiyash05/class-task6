// Write a JavaScript program that creates a class `Book` 
// with properties for title, author, and publication year.
// Include a method to display book details. Create a 
// subclass called 'Ebook' that inherits from the 'Book' class
// and includes an additional property for book price. 
// Override the display method to include the book price. 
// Create an instance of the 'Ebook' class and display its details.

class Book{
	constructor(title,author,year){
		this.title=title;
		this.author=author;
		this.year=year;
	}
	display(){
		console.log(`title name: ${this.title}, author name:${this.author}, publication year: ${this.year}`)
	}
}
let bookdetail=new Book("twelfth night","William Shakespeare",1623)
bookdetail.display()

class Ebook extends Book{
	constructor(title,author,year,price){
		super(title,author,year);
		this.price=price;
	}
	display(){
		console.log(`title name: ${this.title}, author name:${this.author}, publication year: ${this.year}, price:${this.price}`)
	}
}
let ebookdetail=new Ebook("life of pi","Yann Martel",2001,650)
ebookdetail.display()