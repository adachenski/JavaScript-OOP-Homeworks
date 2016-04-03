/**
 * Created by Just Nasko on 4/3/2016.
 */
function validate(){
    var email = document.getElementById("emailId").value;
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(email===""){
        var divCheck = document.getElementById("newDiv");
        if(divCheck){
            divCheck.style.display="none";
            document.getElementById("emailId").style.backgroundColor="white";
        }
    }
    else{
        createElement(email);
    }

    if(regex.test(email)){
        document.getElementById("emailId").style.backgroundColor="lightgreen";
    }
    else if(email!==""){
        document.getElementById("emailId").style.backgroundColor="red";
    }
}
function createElement(divVal){
    var currentDiv= document.getElementById("newDiv");
    if(!currentDiv){
        var newDiv = document.createElement("div");
        newDiv.id="newDiv";
        newDiv.style.position="absolute";
        newDiv.style.top="10px";
        newDiv.style.left="0";
        newDiv.style.backgroundColor="black";
        newDiv.style.color="white";
        newDiv.style.padding ="5px";
        newDiv.style.marginLeft="10px";
        newDiv.style.width="87%";
        newDiv.innerText=divVal;
        var parent = document.getElementById("container");
        parent.appendChild(newDiv);
        document.body.appendChild(parent);
    }
    else{
        currentDiv.innerText=divVal;
        currentDiv.style.display="inline";
    }
}