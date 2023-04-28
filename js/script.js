'use strict';
let person={}; //Створіть порожній об'єкт person.
person.firstName='Ivan'; //Додайте властивість firstName зі значенням Ivan.
person.secondName='Ivanov'; //Додайте властивість secondName зі значенням Ivanov.
//Додайте метод showData яка буде виводити в console.log() ім’я та прізвище.
person.showData=function(){
console.log(`Name:${this.firstName},seName:${this.secondName}`);
}
let newPerson=Object.assign({},person); //Скопіюйте об'єкт person в об'єкт newPerson.
newPerson.firstName='Petro'; //Поміняйте в newPerson властивість firstName на Petro.
newPerson.secondName='Petriv'; //Поміняйте в newPerson властивість secondName на Petriv.
//Запустіть метод showData з person і newPerson
person.showData();
newPerson.showData();
/*-----------------------------------------------------------*/
let MyMath={};
MyMath.a=5;
MyMath.b=2;
MyMath.sum=function(a,b){
    console.log(a+b);
}
MyMath.multiplication=function(a,b){
    console.log(a*b);
}
MyMath.division=function(a,b){
    console.log(a/b);
}
MyMath.subtraction=function(a,b){
console.log(a-b);
}
MyMath.sum(5,2);
MyMath.multiplication(5,2);
MyMath.division(5,2);
MyMath.subtraction(5,2);
/*-----------------------------------------------------------*/