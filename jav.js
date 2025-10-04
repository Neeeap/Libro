let books=[]
let bookMake= function(name,author,pages,read){
    this.name=name
    this,author=author
    this.pages=pages
    this.id=crypto.randomUUID()
    this.read=read
}
function addLibro(name,author,pages,read){
    let adder= new bookMake(name,author,pages,read)
    books.push(adder)
}
addLibro("harry","jk",100,"yep")
console.log(books)