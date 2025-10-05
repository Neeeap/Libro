let books=[]
function BookMake(name,author,pages,read,id){
    this.name=name
    this.author=author
    this.pages=pages
    this.read=read
    this.id=id
}
function addLibro(name,author,pages,read){
    let ref=crypto.randomUUID()
    let id=ref
    let adder= new BookMake(name,author,pages,read,id)
    ref=adder
    display(name,author,pages,read,ref)
    books.push(adder)
}
let display=function(name,author,pages,read,ref,id){
    let tab=document.createElement("div")
    let check=document.createElement("div")
    let text1=document.createElement("p")
    let text2=document.createElement("p")
    let text3=document.createElement("p")
    let remove=document.createElement("button")
    let readCheck=document.createElement("input")
    let readLabel=document.createElement("label")
    readCheck.type="checkbox"
    tab.style.display="flex"
    tab.style.width= "200px"
    tab.style.height="200px"
    tab.style.flexDirection="column"
    tab.style.alignContent="center"
    tab.style.textAlign="center"
    tab.style.backgroundColor="beige"
    tab.style.borderRadius="20px"
    remove.style.width="100px"
    remove.style.alignSelf="center"
    remove.addEventListener("click",() =>{
        tab.remove()
        books=books.filter(item => item.id !== ref.id)
    })
    if (read){
        readCheck.checked=true
    }
    readCheck.id=`${name}`
    readLabel.htmlFor=`${name}`
    readLabel.textContent="Read"
    remove.textContent="Remove"
    text3.textContent=`Pages: ${pages}`
    text1.textContent=name
    text2.textContent=author
    let block=document.querySelector("#display")
    check.append(readCheck)
    check.append(readLabel)
    tab.append(text1)
    tab.append(text2)
    tab.append(text3)
    tab.append(check)
    tab.append(remove)
    block.append(tab)
    readCheck.addEventListener("click", () =>{
        if (readCheck.checked==true){
            ref.read=true
            console.log(ref)
        }
        else{
            ref.read=false
            console.log(ref)
        }
    })
}
let buttDiag=document.querySelector("#diag")
let diag=document.querySelector("dialog")
buttDiag.addEventListener("click", () =>{
    diag.showModal()
})
let form=document.querySelector("#bookForm")
form.addEventListener("submit", function(event){
    event.preventDefault()
    let name=document.querySelector("#bookName").value
    let author=document.querySelector("#author").value
    let pages=document.querySelector("#bookPages").value
    let read=document.querySelector('input[name="read"]:checked').value
    if (read=="true"){
        read=true
    }
    else{
        read=false
    }
    addLibro(name,author,pages,read)
    form.reset()
})
document.querySelector("#cancel").addEventListener("click", () =>{
    diag.close()
    form.reset()
})
addLibro("sadfdsfad","DFSdsafdsaf",11,true)
addLibro("sadfdsfad","DFSdsafdsaf",11,true)
addLibro("sadfdsfad","DFSdsafdsaf",11,true)
addLibro("sadfdsfad","DFSdsafdsaf",11,true)
addLibro("sadfdsfad","DFSdsafdsaf",11,true)
addLibro("sadfdsfad","DFSdsafdsaf",11,true)
addLibro("sadfdsfad","DFSdsafdsaf",11,true)
addLibro("sadfdsfad","DFSdsafdsaf",11,true)
console.log(books)