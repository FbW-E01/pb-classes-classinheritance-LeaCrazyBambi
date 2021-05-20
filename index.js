//  1. Create a base class called Publication.
class Publication {
  constructor(id = null, name = null, authors = null, content = null) {
    this.identifier = id;
    this.authors = authors;
    this.name = name;
    this.content = content;
    const time1 = new Date();
    this.created = time1;
  }

  describe() {
    console.log(
      "This publication id is " +
        this.identifier +
        ", name is " +
        this.name +
        " and author is " +
        this.authors
    );
  }
}

const test = new Publication(12345, "Lea");
test.describe();
console.log(test);

//  2. Create a class called "Blogpost" that is a child of Publication
class Blogpost extends Publication {
  constructor(address, id, name, authors, content) {
    super(id, name, authors, content);
    const time2 = new Date();
    this.edited = time2;
    this.address = address;
  }
}

const post1 = new Blogpost("Post", 123, "Leo");
console.log(post1);
post1.describe();

//  3. Create a class called "Book" that is a child of Publication
class Book extends Publication {
  constructor(isbn, id, name, authors, content) {
    super(id, name, authors, content);
    this.ISBN = isbn;
  }
}

const createISBN = new Book("978-3-16-148410-0", 8476, "Lucy");
console.log(createISBN);
createISBN.describe();

// //  4. Create a class called "Score" that is a child of Publication
class Score extends Publication {
  constructor(type, id, name, authors, content) {
    super(id, name, authors, content);
    this.type = type;
  }
}

const point = new Score("What is a type of score?");
console.log(point);
point.describe();

//  5. Create 3 different blog posts, books and scores and call their description methods.
const point2 = new Score("Is this a new score", 0959606, "Luke");
const point3 = new Score("Not sure this is correct");

console.log(point2, point3);
point2.describe();
point3.describe();
