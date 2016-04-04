/**
 * Created by Just Nasko on 4/4/2016.
 */
function addParagraph(){
    var paragraphText = document.getElementById("create-text").value || "no-text";
    var parentId = "wrapper";
    createPragraph(parentId,paragraphText);
}

function addDiv(){
    var divClass = document.getElementById("create-div-class").value || "no-class";
    var parentId = "wrapper";
    createDiv(parentId,divClass);

}
function addAnchor(){
    var anchorText = document.getElementById("anchor-text").value || "no-text";
    var anchorURL = document.getElementById("anchor-url").value;
    console.log(anchorURL);
    var parentDiv = "book";
    createAnchor(parentDiv,anchorText,anchorURL);
}

function createDiv(id,className){
    var parentDiv = document.getElementById(id);
    var newDiv = document.createElement("div");
    newDiv.className=className;
    newDiv.innerText = "div with class: "+className;
    parentDiv.appendChild(newDiv);
    document.body.appendChild(parentDiv);
}

function createPragraph(id,text){
    var currentElement= document.getElementById(id);
    var newParagraph = document.createElement("p");
    newParagraph.className="new-div-class";
    newParagraph.innerText ="p with text: "+ text;
    currentElement.appendChild(newParagraph);
    document.body.appendChild(currentElement);
}

function createAnchor(id,title,url){
    var parent = document.getElementById(id);
    var newAnchor = document.createElement("a");
    newAnchor.innerText = title;
    newAnchor.href=url;
    newAnchor.target="_blank";
    parent.appendChild(newAnchor);
    document.body.appendChild(parent);
}
