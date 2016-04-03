/**
 * Created by Just Nasko on 4/2/2016.
 */
var dFragment = document.createDocumentFragment();
var form = document.createElement("form");
form.id="form1";
var divBlock = document.createElement("div");
divBlock.className ="block";
divBlock.innerText ="Unchecked Checkbox";
var divFormBody = document.createElement("div");
divFormBody.className="form-body";
var h2 = document.createElement("h2");
h2.innerText="Registration for Webinar";
var divFormInnerBody = document.createElement("div");
divFormInnerBody.className="form-inner-body";
var labelNames = document.createElement("label");
labelNames.innerText = "First and Last Name:";
var spanNames = document.createElement("span");
spanNames.innerText= "*";
spanNames.className="asterix";
var nameInput = document.createElement("input");
nameInput.type="text";
var labelAddress= document.createElement("label");
labelAddress.innerText ="Address:";
var inputAdress = document.createElement("input");
inputAdress.type="text";
var labelCity = document.createElement("label");
labelCity.innerText = "City:";
var inputCity = document.createElement("input");
inputCity.type="text";
var labelEmail = document.createElement("label");
labelEmail.innerText="Email:";
var spanEmail = document.createElement("span");
spanEmail.innerText="*";
spanEmail.className="asterix";
var inputEmail = document.createElement("input");
inputEmail.type = "text";
var labelPhone = document.createElement("label");
labelPhone.innerText ="Phone";
var spanPhone = document.createElement("span");
spanPhone.innerText="*";
spanPhone.className ="asterix";
var inputPhone = document.createElement("input");
inputPhone.type = "text";
var labelDate = document.createElement("label");
labelDate.innerText="Date of Webinar:";
var spanDate = document.createElement("span");
spanDate.innerText="*";
spanDate.className="asterix";
var inputDate = document.createElement("input");
inputDate.type = "date";
var checkbox = document.createElement("input");
checkbox.type ="checkbox";
checkbox.id="checkbox";
var br = document.createElement("br");
var labelCheckbox = document.createElement("label");
labelCheckbox.innerText="I need a Recipe";
var formFooter = document.createElement("div");
formFooter.className="form-footer";
var buttonSubmit = document.createElement("button");
buttonSubmit.type="submit";
buttonSubmit.innerText="Register";
var buttonReset = document.createElement("button");
buttonReset.type="reset";
buttonReset.innerText="Reset";
var secondDivInnerBody = document.createElement("div");
secondDivInnerBody.id="second-form-inner-body";
var labelInnerName = document.createElement("label");
labelInnerName.innerText="Firm/Organization:"
var spanInnerName = document.createElement("span");
spanInnerName.innerText="*";
spanInnerName.className="asterix";
var inputInnerName = document.createElement("input");
inputInnerName.type = "text";
var labelInnerMOL = document.createElement("label");
labelInnerMOL.innerText="MOL:";
var spanMOL = document.createElement("span");
spanMOL.innerText="*";
spanMOL.className="asterix";
var inputMOL = document.createElement("input");
inputMOL.type="text";
var labelEIK = document.createElement("label");
labelEIK.innerText="EIK:";
var spanEik = document.createElement("span");
spanEik.innerText="*";
spanEik.className="asterix";
var inputEIK = document.createElement("input");
inputEIK.type="text";
var labelDDS = document.createElement("label");
labelDDS.innerText="IN on DDS:";
var spanDDS = document.createElement("span");
spanDDS.innerText="*";
spanDDS.className="asterix";
var inputDDS = document.createElement("input");
inputDDS.type="text";
var labelInnerAddress = document.createElement("label");
labelInnerAddress.innerText="Address:";
var spanInnerAddress = document.createElement("span");
spanInnerAddress.innerText="*";
spanInnerAddress.className="asterix";
var inputInnerAdress = document.createElement("input");

inputInnerAdress.type="text";
labelNames.appendChild(spanNames);
divFormInnerBody.appendChild(labelNames);
divFormInnerBody.appendChild(nameInput);
divFormInnerBody.appendChild(labelAddress);
divFormInnerBody.appendChild(inputAdress);
divFormInnerBody.appendChild(labelCity);
divFormInnerBody.appendChild(inputCity);
divFormInnerBody.appendChild(labelEmail);
labelEmail.appendChild(spanEmail);
divFormInnerBody.appendChild(inputEmail);
divFormInnerBody.appendChild(labelPhone);
labelPhone.appendChild(spanPhone);
divFormInnerBody.appendChild(inputPhone);
divFormInnerBody.appendChild(labelDate);
labelDate.appendChild(spanDate);
divFormInnerBody.appendChild(inputDate);
divFormInnerBody.appendChild(br);
divFormInnerBody.appendChild(checkbox);
divFormInnerBody.appendChild(labelCheckbox);
divFormInnerBody.appendChild(secondDivInnerBody);
secondDivInnerBody.appendChild(labelInnerName);
labelInnerName.appendChild(spanInnerName);
secondDivInnerBody.appendChild(inputInnerName);
secondDivInnerBody.appendChild(labelInnerMOL);
labelInnerMOL.appendChild(spanMOL);
secondDivInnerBody.appendChild(inputMOL);
secondDivInnerBody.appendChild(labelEIK);
labelEIK.appendChild(spanEik);
secondDivInnerBody.appendChild(inputEIK);
secondDivInnerBody.appendChild(labelDDS);
labelDDS.appendChild(spanDDS);
secondDivInnerBody.appendChild(inputDDS);
secondDivInnerBody.appendChild(labelInnerAddress);
labelInnerAddress.appendChild(spanInnerAddress);
secondDivInnerBody.appendChild(inputInnerAdress);
divFormBody.appendChild(formFooter);
formFooter.appendChild(buttonSubmit);
formFooter.appendChild(buttonReset);
divFormBody.appendChild(h2);
divFormBody.appendChild(divFormInnerBody);
form.appendChild(divBlock);
form.appendChild(divFormBody);
dFragment.appendChild(form);
document.body.appendChild(dFragment);

document.addEventListener("click",function(){
    var isChecked = document.getElementById("checkbox");
    if(isChecked.checked){
        document.getElementById("second-form-inner-body").style.display="block";
    }
    else{
        document.getElementById("second-form-inner-body").style.display="none";
    }
})