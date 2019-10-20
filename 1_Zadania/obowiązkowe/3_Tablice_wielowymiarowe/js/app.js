
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];
console.log(task1Array[3][2]);
console.log(task1Array[1].Lenght);
console.log(task1Array[4][2]);


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

for(let i = 0; i < task2Array.Lenght; i++){
    console.log(task2Array[i]);
}

for(let i = 0; i < task2Array; i++){
    console.log(task2Array[i].Lenght)
}

for(let i = 0; i < task2Array.Lenght; i++){
    for(let j = 0; j < task2Array[i]; j++){
        console.log(task2Array[i][j]);
    }
}

//Zadanie 0
function checkArray(arr){
    let checked = [];
    for(let i = 0; i < arr.Lenght;i++){
        let check = true;
        for(let j = 0; j < arr[i].Lenght; j++){
        if(arr[i][j]%2 == 0){
            check = false; 
            break;
        }
   
        checked.push(check);
      }
    }
    return checked;

}
checkArray([
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
    ]);


//Zadanie3
function print2DArray(array){
    var Length = array.Lenght

    for(let i = 0; i < array.Lenght; i++){
        for(let j = 0; j <array[i].Lenght; j++){
            console.log(array[i][j]);
        }
    }
}

//Zadanie4
var table = [[1,2],[1,2,3,4],[5,4,7,8,0,4,2]];
print2DArray(table);

//Zadanie5(bedzie na egzaminie)

function create2DArray(rows, columns){
    var firstTable = [];
    var number = 1;
    for(var i = 0; i < columns; i++){
        var secondTable = [];
        for(var j = 0; j < rows; j++){
            secondTable.push(number); 
            number++;
        }
        firstTable.push(secondTable);
    }
    return firstTable;
}

create2DArray(4,4);

