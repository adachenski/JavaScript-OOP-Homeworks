/**
 * Created by Just Nasko on 4/4/2016.
 */

function addParagraph(){
    var text = document.getElementById("create-text").value || "none-text";
    var id = document.getElementById("create-id").value || "none-Id";
    var parentId = "wrapper";
    console.log(text);
    console.log(id);
    createPragraph(parentId,id,text);
}

function removeElement(){

    var text = document.getElementById("create-text").value || "none-text";
    var id = document.getElementById("create-id").value || "none-Id";
    var pToRemove = document.getElementById(id);
    var parent = document.getElementById("wrapper");
    parent.removeChild(pToRemove);
    //document.body.removeChild(parent);
}

function createPragraph(id,newId,text){
    var currentElement= document.getElementById(id);
    var newParagraph = document.createElement("p");
    newParagraph.className="new-div-class";
    newParagraph.id=newId;
    newParagraph.innerText ="TEXT: "+ text+"\n ID: "+newId;
    currentElement.appendChild(newParagraph);
    document.body.appendChild(currentElement);
}