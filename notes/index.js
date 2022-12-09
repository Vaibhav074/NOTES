let notes = [];

document.querySelector("form").onsubmit = (e) => {
  e.preventDefault();

  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const date = document.getElementById("date");
  const button = document.getElementById("button");


  console.log(title.value,description.value,date.value);

  if(!title && title.trim()===" " &&!description && description.trim()===" " && !date.trim()==="")
  {
    return console.log("invalid inputs");
  }


  createnote(title.value,description.value,date.value);
};


 function createnote(title,description,date)
 {
    const newnote = {title,description,date,id:Date.now()}
    notes.push(newnote);
    localStorage.setItem("notes",JSON.stringify(notes));
    console.log(notes);
    displaynotes();
 }


 function displaynotes()
 {
    if(localStorage.getItem('notes')){
    notes=JSON.parse(localStorage.getItem("notes"));
    const ul = document.querySelector("ul");
    document.querySelectorAll("li").forEach((child)=>child.remove(child));
    notes.forEach((note) =>{
    
        const li = document.createElement("li");
        const div = document.createElement("div");
        const h6 = document.createElement("h6");
        const p = document.createElement("p");
        const caption =document.createElement("caption");

        h6.innerText = note.title;
        p.innerText = note.description;
        caption.innerText = note.date;

        div.appendChild(h6);
        div.appendChild(p);
        div.appendChild(caption);
        li.appendChild(div);
        ul.appendChild(li);


    });
    }
    
}

window.onload =() =>
{
  displaynotes();
}