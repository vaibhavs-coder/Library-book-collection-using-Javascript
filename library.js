class book{
    constructor(name,author,type){
        this.name=name;
        this.author=author;
        this.type=type;
    }
}
class Display{
    add(book){
        let tbody=document.getElementById("tableBody");
        let str=`<tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
        </tr>`;
        tbody.innerHTML+=str;
    }
    clear(){
        let libform=document.getElementById("libraryForm");
        libform.reset();
    }
}
let libform=document.getElementById("libraryForm");

libform.addEventListener("submit",function(e){
    let name=document.getElementById("bookName").value;
    let author=document.getElementById("author").value;
    let type;
    let fiction=document.getElementById("fiction");
    let programming=document.getElementById("programming");
    let cooking=document.getElementById("cooking");
    if(fiction.checked){
        type=fiction.value;
    }
    else if(programming.checked){
        type=programming.value;
    }
    else if(cooking.checked){
        type=cooking.value;
    }
    let nb=new book(name,author,type);
    let display=new Display();
    display.add(nb);
    display.clear();
    e.preventDefault();
});
