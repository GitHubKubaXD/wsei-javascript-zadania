//Zadanie 0a
const city = {
    capital : "Warsaw",
    population: 1234,
    president: "Obama",
    primeMinisters: "Obamamamam",
}
console.log(city.capital, city.population, city.president, city.primeMinisters);

//Zadanie 0b
const timeMachine = {
    shape : "DUZO",
    model : "DUZOOOO",
    run: function(date, place){
        console.log("siasdasd "+ date + " aaaaa " + place);
    }
}
console.log(timeMachine.shape);
console.log(timeMachine.model);
timeMachine.run(timeMachine.run(1999, "Bieszczady"));

//Zadanie 1
book = {
    title : "Pies który jeździł koleją",
    author : "Nie pamietam",
    numberOfPages : 69,
}
console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);

//Zadanie 2
person = {
    name : "Jakub",
    age : 21,
    sayHello(){
        console.log("Hello");
    }
}
console.log(person.name);
console.log(person.age);
person.sayHello();

//Zadanie 3
var recipe = {
    title : "pizza",
    servings : 3,
}
recipe.ingredients = ["ciasto","reszta"];
console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);

//Zadanie 6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;
console.log(spoon.isExist);
