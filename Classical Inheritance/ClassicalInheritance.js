/**
 * Created by Just Nasko on 4/6/2016.
 */

var Person = (function(){
    function Person(firstName,lastName,age){

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }

    Object.defineProperties(Person.prototype,{
        firstName:{
            get:function(){
                return _firstName;
            },
            set:function(value){
                nameValidation(value);
                return this._firstName = value;
            }
        },
        lastName:{
            get:function(){
                return _lastName;
            },
            set:function(value){
                nameValidation(value);
                this._lastName =value;
                return this;
            }
        },
        age:{
            get:function(){
                return parseInt(_age);
            },
            set:function(value){
                if(value<0||value>150){
                    alert("Age must be between 0 and 150!");
                    throw new Error("Age must be between 0 and 150!");
                }
                this._age =value;
            }

        },
        fullName:{
            get: function () {
                var full = this._firstName +" "+ this._lastName;
                return full;
            },
            set:function(value){
                var full = this._firstName +" "+ this._lastName;
                return full = value;
            }
        }
    });

    Person.prototype.introduce = function(){
        return "Hello! My Name is "+this.fullName +" and I'm "+this._age+" years-old";
    }

    function nameValidation(value){
        var letterTest =/^[a-zA-Z]*$/.test(value);
        if(value.length<3 || value.length>20 || !letterTest){
            alert("First and Last name must be between 3 and 20 symbols long containing latin letters only");
            throw new Error("First and Last name must be between 3 and 20 symbols long containing latin letters only")
        }
        else{
            return value;
        }
    }

    return Person;
}());

var ns = new Person("Atanas","Dachenski","123");

console.log(ns);
ns.fullName="mikov minkov";
console.log(ns.fullName);
console.log(ns.introduce());