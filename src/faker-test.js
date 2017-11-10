var faker = require('faker')
var title = faker.name.title()
var pre = faker.name.prefix()
var suffix = faker.name.suffix()
var name = faker.name.findName()
var email = faker.internet.exampleEmail()
var id = faker.random.uuid(10)
var color = faker.internet.color()
var img = faker.image.dataUri()

var h = faker.random.alphaNumeric(8)

var post = faker.random.words(12)


var content = faker.hacker.phrase(20)




var id = faker.random.alphaNumeric(8)
var name = faker.name.findName()
var email = faker.internet.email()
var post = faker.random.words(12)
var content = faker.hacker.phrase(20)
var title = faker.name.title(5)
var pre = faker.name.prefix()
var suffix = faker.name.suffix()
var firstName = faker.name.firstName(6)



class FakeDatabase {
    constructor() {
        this.authors = [
            { id, name, email },
            { id, name, email },
            { id, name, email },
        ];

        this.blogPosts = [{
                id: 1,
                title: 'My first blog post',
                content,
                author: title + ' ' + pre + ' ' + name + ' ' + suffix
            },
            {
                id: 2,
                title: 'Second blog post',
                content,
                author: title + ' ' + pre + ' ' + name + ' ' + suffix
            },
            {
                id: 3,
                title: 'Building a REST API',
                content,
                author: title + ' ' + pre + ' ' + name + ' ' + suffix
            }
        ];

        this.comments = [
            { id: 1, postId: 1, name: firstName, content },
            { id: 2, postId: 1, name: firstName, content },
            { id: 3, postId: 3, name: firstName, content }
        ]
    }

    // ------------------------------------------------------------
    //                      READ METHODS
    // ------------------------------------------------------------
    getBlogPosts() {
        // Here you would make a db connection + query + return data
        return this.blogPosts;
    }

    getBlogPost(id) {
        return this.blogPosts.filter((post) => {
            return post.id === id;
        })[0];
    }

    getCommentsForPost(postId) {
        return this.comments.filter((comment) => {
            return comment.postId === postId;
        });
    }

    getAuthor(authorId) {
        return this.authors.filter((author) => {
            return author.id === authorId;
        })[0];
    }

    getPostsOfAuthor(authorId) {
        return this.getBlogPosts().filter((item) => {
            return item.author === authorId;
        });
    }



    // ------------------------------------------------------------
    //                      WRITE METHODS
    // ------------------------------------------------------------
    addNewBlogPost(post) {
        post.id = this.blogPosts.length + 1;
        this.blogPosts.push(post);
        return post;
    }

    addNewComment(comment) {
        comment.id = this.comments.length + 1;
        this.comments.push(comment);
        return comment;
    }

}

var db = new FakeDatabase()

var a = db.getBlogPosts()

console.log(a);