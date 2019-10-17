//Zadanie1

function countHello(number){
    let counter = 0;
    let interval = setInterval(function() {
            counter++;
            console.log("Hello " + counter);

            if ( number <= counter) {
                clearInterval(interval);
            }
    }, 1000);
}
console.log(countHello(5));