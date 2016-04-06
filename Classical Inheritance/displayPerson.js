/**
 * Created by Just Nasko on 4/6/2016.
 */

function addPerson(){
    var firstName = document.getElementById("first-name").value;
    var secondName = document.getElementById("second-name").value;
    var age = document.getElementById("age").value;
    createPerson(firstName,secondName,age)

}

function createPerson(fName,lName,age){
    var parent = document.getElementById("wrapper");
    var newParagrap = document.createElement("div");
    var h3 = document.createElement("h3");
    newParagrap.className="new-div-class";
    var newPerson = new Person(fName,lName,age);
    h3.innerHTML ="Person: "+ newPerson.fullName;
    newParagrap.appendChild(h3);
    newParagrap.id = newPerson.fullName.toLowerCase();
    newParagrap.innerHTML += "Message: "+newPerson.introduce();

    parent.appendChild(newParagrap);
    document.body.appendChild(parent);
    return newPerson;
}

function removePerson(){
    var personToRemove = document.getElementById("remove-person").value.toLowerCase();
    console.log(personToRemove);
    var divToRemove = document.getElementById(personToRemove);
    var parent = document.getElementById("wrapper");
    parent.removeChild(divToRemove);
}
