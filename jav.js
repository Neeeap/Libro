let books=[]
function BookMake(name,author,pages,read){
    this.name=name
    this,author=author
    this.pages=pages
    this.id=crypto.randomUUID()
    this.read=read
}
function addLibro(name,author,pages,read){
    let adder= new BookMake(name,author,pages,read)
    display(name,author,pages,read)
    books.push(adder)
}
let display=function(name,author,pages,read){
    let tab=document.createElement("div")
    tab.style.display="flex"
    tab.style.width= "200px"
    tab.style.height="200px"
    tab.style.flexDirection="column"
    tab.style.alignContent="center"
    tab.style.textAlign="center"
    let text1=document.createElement("p")
    let text2=document.createElement("p")
    let text3=document.createElement("p")
    text3.textContent=`Pages: ${pages}`
    text1.textContent=name
    text2.textContent=author
    let block=document.querySelector("#display")
    tab.append(text1)
    tab.append(text2)
    tab.append(text3)
    block.append(tab)
}
addLibro("harry","jk",100,"yep")
console.log(books)