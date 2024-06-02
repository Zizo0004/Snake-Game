 x = 290; // intial position of head
 y = 310;

 var newElement = 0
 currentInterval = null; // Track the currently active interval
tracker = null
obje = document.getElementById("a"); // head 
var rect = null
gameon = true

innercontainer2 = document.getElementById("Innercontainer2");
for(let q=0; q<=1319;q++){
    section = document.createElement("div")
    innercontainer2.appendChild(section)
}
allDivs = document.querySelectorAll("div")


obje.style.left = "292px"
obje.style.top  = "314px"


allDivs[100].style.backgroundColor = "black";
obje.style.width = `${allDivs[400].getBoundingClientRect().width -4}px`
obje.style.height = `${allDivs[400].getBoundingClientRect().height -4}px`

document.addEventListener("keydown", (e) => {
    clearInterval(currentInterval); // Clear any existing interval first
    if(gameon === true){
        switch (e.key) {
            case "ArrowUp":
                if(tracker == "DOWN"){ currentInterval = setInterval(movementDown, 65); }
                else{
                    tracker = "UP"
                    currentInterval = setInterval(movementTop, 65);   
                   
                }
                break;
            case "ArrowDown":
                if(tracker == "UP"){currentInterval = setInterval(movementTop, 65);
                   
                }
                    else{tracker = "DOWN"
                    currentInterval = setInterval(movementDown, 65);
                }
                break;
            case "ArrowRight":
                if(tracker == "LEFT"){currentInterval = setInterval(movementLeft, 65);}
                else{tracker = "RIGHT"
                    currentInterval = setInterval(movementRight, 65);
                    break;}
                break;

            case "ArrowLeft":
                if(tracker == "RIGHT"){ currentInterval = setInterval(movementRight, 65);}
                    else{tracker = "LEFT"
                    currentInterval = setInterval(movementLeft, 65);}
                break;
            
            default:
                switch(tracker){
                    case "UP":
                        currentInterval = setInterval(movementTop, 65);
                        break;   
                    case "DOWN":
                        currentInterval = setInterval(movementDown, 65);
                        break;
                    case "RIGHT":
                        currentInterval = setInterval(movementRight, 65);
                    case "LEFT":
                        currentInterval = setInterval(movementLeft, 65);
                        break;
                }
                break;
                
        }
    }
});
 var apple = document.getElementById("food")
 intialpositionX = Math.round(allDivs[100].getBoundingClientRect().left); // Initial position of apple
 intialpositionY = Math.round(allDivs[100].getBoundingClientRect().top);

 apple.style.left = `${intialpositionX}px`
 apple.style.top = `${intialpositionY}px`



 var computedStyle = window.getComputedStyle(apple);
  Left  = parseInt(computedStyle.left.slice(0,-2))
  Top  = parseInt(computedStyle.top.slice(0,-2))
 
  appleleft = parseInt(window.getComputedStyle(apple).left.replace(/px/g,""))
  appletop = parseInt(window.getComputedStyle(apple).top.replace(/px/g,""))

  console.log(appleleft,appletop)



 positions = []
 blocks = []

 function movementTop() {
    headLeft = `${parseInt(window.getComputedStyle(obje).left.replace(/px/g,""))}px`
    headTop  = `${parseInt(window.getComputedStyle(obje).top.replace(/px/g,""))}px`


    headLeftDetect = parseInt(window.getComputedStyle(obje).left.replace(/px/g,""))
    headTopDetect  = parseInt(window.getComputedStyle(obje).top.replace(/px/g,""))
    y = y - allDivs[400].getBoundingClientRect().height;
    obje.style.top=`${y}px`;

    Nextheadleft = parseInt(window.getComputedStyle(obje).left.replace(/px/g,""))
    Nextheadtop  = parseInt(window.getComputedStyle(obje).top.replace(/px/g,""))

    console.log(`head x: ${Nextheadleft}, apple x: ${appleleft}, head y: ${Nextheadtop}, apple y: ${appletop}`);
   console.log(`Difference x: ${Math.abs(Nextheadleft - appleleft)}, Difference y: ${Math.abs(Nextheadtop - appletop)}`);

   console.log(y)

    if ((Nextheadleft - 10) <= appleleft && (Nextheadleft + 10) >= appleleft && 
        (Nextheadtop - 10) <= appletop && (Nextheadtop + 10) >= appletop) {
        console.log("Collision detected");
        alert("Collision detected");
        apple.style.display = `none`;
    }
    for(let x = positions.length - 1; x >= 0; x--){
        if(x == 0){
            positions[0][0] = headLeft
            positions[0][1] = headTop
        }
        else{
            positions[x][0] = positions[x-1][0]
            positions[x][1] = positions[x-1][1]
        }
    }
    
    
    for(let i=0; i<=positions.length-1; i++){
        if(i == 0){
            blocks[i].style.left = headLeft
            blocks[i].style.top = headTop
            }
        else{
        blocks[i].style.left = positions[i][0]
        blocks[i].style.top = positions[i][1] 
            }
        }
    }

    

function movementDown() {
    headLeft = `${parseInt(window.getComputedStyle(obje).left.replace(/px/g,""))}px`
    headTop  = `${parseInt(window.getComputedStyle(obje).top.replace(/px/g,""))}px`
    y = y + allDivs[400].getBoundingClientRect().height;
    obje.style.top=`${y}px`

    Nextheadleft = parseInt(window.getComputedStyle(obje).left.replace(/px/g,""))
    Nextheadtop  = parseInt(window.getComputedStyle(obje).top.replace(/px/g,""))


    if(90 <= Nextheadleft && Nextheadleft <= 120 && 90 <= Nextheadtop && Nextheadtop <= 120){
        newBlock = document.createElement("p")
        blocks.push(newBlock)
        positions.push(["",""])
        document.body.appendChild(newBlock);
    }

    
    for(let x = positions.length - 1; x >= 0; x--){
        if(x == 0){
            positions[0][0] = headLeft
            positions[0][1] = headTop
            }
        else{
            positions[x][0] = positions[x-1][0]
            positions[x][1] = positions[x-1][1]
           }

    }

    for(let i=0; i<=positions.length-1; i++){
        if(i == 0){
            blocks[i].style.left = headLeft
            blocks[i].style.top = headTop
            }
        else{
        blocks[i].style.left = positions[i][0]
        blocks[i].style.top = positions[i][1] 
            }
        }

}

function movementRight() {
    headLeft = `${parseInt(window.getComputedStyle(obje).left.replace(/px/g,""))}px`
    headTop  = `${parseInt(window.getComputedStyle(obje).top.replace(/px/g,""))}px`

    x = x + allDivs[400].getBoundingClientRect().width;
    obje.style.left=`${x}px`

    Nextheadleft = parseInt(window.getComputedStyle(obje).left.replace(/px/g,""))
    Nextheadtop  = parseInt(window.getComputedStyle(obje).top.replace(/px/g,""))


    if(90 <= Nextheadleft && Nextheadleft <= 120 && 90 <= Nextheadtop && Nextheadtop <= 120){apple.style.display = `none`}


    for(let x = positions.length - 1; x >= 0; x--){
        if(x == 0){
            positions[0][0] = headLeft
            positions[0][1] = headTop
        }
        else{
            positions[x][0] = positions[x-1][0]
            positions[x][1] = positions[x-1][1]
        }

    }
    
    
    for(let i=0; i<=positions.length-1; i++){
        if(i == 0){
            blocks[i].style.left = headLeft
            blocks[i].style.top = headTop
            }
        else{
        blocks[i].style.left = positions[i][0]
        blocks[i].style.top = positions[i][1] 
            }
        }

}

function movementLeft() {
   // rect = obje.getBoundingClientRect();
   // if(rect.left === 0){clearInterval(currentInterval); gameon = false}
   
   headLeft = `${parseInt(window.getComputedStyle(obje).left.replace(/px/g,""))}px`
   headTop  = `${parseInt(window.getComputedStyle(obje).top.replace(/px/g,""))}px`
   x = x - allDivs[400].getBoundingClientRect().width;
   obje.style.left=`${x}px`

   Nextheadleft = parseInt(window.getComputedStyle(obje).left.replace(/px/g,""))
    Nextheadtop  = parseInt(window.getComputedStyle(obje).top.replace(/px/g,""))

    if(90 <= Nextheadleft && Nextheadleft <= 120 && 90 <= Nextheadtop && Nextheadtop <= 120){apple.style.display = `none`}
   for(let x = positions.length - 1; x >= 0; x--){
    if(x == 0){
        positions[0][0] = headLeft
        positions[0][1] = headTop
    }
    else{
        positions[x][0] = positions[x-1][0]
        positions[x][1] = positions[x-1][1]
    }

   }
   
   
   for(let i=0; i<=positions.length-1; i++){
       if(i == 0){
           blocks[i].style.left = headLeft
           blocks[i].style.top = headTop
           }
       else{
       blocks[i].style.left = positions[i][0]
       blocks[i].style.top = positions[i][1] 
        }
    }
} 