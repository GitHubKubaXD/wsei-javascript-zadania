document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

     //Zadanie 0 
     function getDatasInfo(elements){
         var data = [];

         for(var i =0; i <elements.length; i++){
             data.push(elements[i].dataset.color);
             }
            return data;
         }
     
         console.log(getDatasInfo(links));

         //Zadanie1
         console.log(homeElement);

         for(let item  of childElements) console.log(item);

         console.log(banner) 

         for(let item of blocks) console.log(item);

         for(let item of links) console.log(item);
         
         //Zadanie2
         for(let item of blocks){
             console.log(item.innerHTML);
             console.log(item.outerHTML);
         }

         //Zadanie2/2 

         var newBlocks = document.querySelector('blocks');
         console.log(newBlocks.innerHTML);
         console.log(newBlocks.outerHTML);
        
        
         //Zadanie3
        const footer = document.querySelector('#mainFooter');

        function getId(element){
             return element.id;
        }

        //Zadanie4
        function  getTags(elements){
            const tagsNames = [];
            for(let item of elements){
                 tagsNames.push(item.tagName);
            }
            return tagsNames;
        }
});
