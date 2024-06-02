 x = 298; // intial position of head
 y = 310;

counter = 0 
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


obje.style.left = "298px"
obje.style.top  = "310px"

// left = 25px
// right = 1852px
// top = 93px
// bottom = 805px


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
                    currentInterval = setInterval(movementTop, 85);   
                   
                }
                break;
            case "ArrowDown":
                if(tracker == "UP"){currentInterval = setInterval(movementTop, 65);
                   
                }
                    else{tracker = "DOWN"
                    currentInterval = setInterval(movementDown, 85);
                }
                break;
            case "ArrowRight":
                if(tracker == "LEFT"){currentInterval = setInterval(movementLeft, 65);}
                else{tracker = "RIGHT"
                    currentInterval = setInterval(movementRight, 85);
                    break;}
                break;

            case "ArrowLeft":
                if(tracker == "RIGHT"){ currentInterval = setInterval(movementRight, 65);}
                    else{tracker = "LEFT"
                    currentInterval = setInterval(movementLeft, 85);}
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
 intialpositionX = Math.round(allDivs[10].getBoundingClientRect().left); // Initial position of apple
 intialpositionY = Math.round(allDivs[10].getBoundingClientRect().top);

 apple.style.left = `${intialpositionX}px`
 apple.style.top = `${intialpositionY}px`



 var computedStyle = window.getComputedStyle(apple);
  Left  = parseInt(computedStyle.left.slice(0,-2))
  Top  = parseInt(computedStyle.top.slice(0,-2))
 




 positions = []
 blocks = []
// left = 25px
// right = 1852px
// top = 93px
// bottom = 805px

 function movementTop() {
    headLeft = `${parseInt(window.getComputedStyle(obje).left.replace(/px/g,""))}px`
    headTop  = `${parseInt(window.getComputedStyle(obje).top.replace(/px/g,""))}px`

    appleleft = parseInt(window.getComputedStyle(apple).left.replace(/px/g,""))
    appletop = parseInt(window.getComputedStyle(apple).top.replace(/px/g,""))

    y = y - allDivs[400].getBoundingClientRect().height;
    if(y <= 94){clearInterval(currentInterval);gameon=false} // game ends once border is hit
    
    if(gameon==true){obje.style.top=`${y}px`;} // movement continues if no collisions

    Nextheadleft = parseInt(window.getComputedStyle(obje).left.replace(/px/g,""))
    Nextheadtop  = parseInt(window.getComputedStyle(obje).top.replace(/px/g,""))

    const randomInt = Math.floor(Math.random() * 991) + 10;



    if ((Nextheadleft - 10) <= appleleft && (Nextheadleft + 10) >= appleleft && 
        (Nextheadtop - 10) <= (appletop-6) && (Nextheadtop + 10) >= (appletop-6) ) {
        counter++
        score = document.querySelector("h2");
        score.innerText =`${counter}` ;

        newBlock = document.createElement("p")
        newBlock.style.width = `${allDivs[400].getBoundingClientRect().width -4}px`
        newBlock.style.height = `${allDivs[400].getBoundingClientRect().height -4}px`

        blocks.push(newBlock)
        positions.push(["",""])
        document.body.appendChild(newBlock)
        
        
        apple.style.left = `${allDivs[randomInt].getBoundingClientRect().left}px`
        apple.style.top = `${allDivs[randomInt].getBoundingClientRect().top}px`

    }

    if(gameon==true){
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
    }

    

function movementDown() {
    headLeft = `${parseInt(window.getComputedStyle(obje).left.replace(/px/g,""))}px`
    headTop  = `${parseInt(window.getComputedStyle(obje).top.replace(/px/g,""))}px`
    y = y + allDivs[400].getBoundingClientRect().height;

    if(y >= 805){clearInterval(currentInterval);gameon=false} // game ends once border is hit
    
    if(gameon==true){obje.style.top=`${y}px`;} // movement continues if no collisions



    Nextheadleft = parseInt(window.getComputedStyle(obje).left.replace(/px/g,""))
    Nextheadtop  = parseInt(window.getComputedStyle(obje).top.replace(/px/g,""))

    appleleft = parseInt(window.getComputedStyle(apple).left.replace(/px/g,""))
    appletop = parseInt(window.getComputedStyle(apple).top.replace(/px/g,""))

 
    if ((Nextheadleft - 10) <= appleleft && (Nextheadleft + 10) >= appleleft && 
        (Nextheadtop - 10) <= (appletop-6) && (Nextheadtop + 10) >= (appletop-6) ) {
        counter++
        score = document.querySelector("h2");
        score.innerText =`${counter}` ;

        newBlock = document.createElement("p")
        newBlock.style.width = `${allDivs[400].getBoundingClientRect().width -4}px`
        newBlock.style.height = `${allDivs[400].getBoundingClientRect().height -4}px`

        blocks.push(newBlock)
        positions.push(["",""])
        document.body.appendChild(newBlock)
    }


    if(gameon==true){
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
}

function movementRight() {
    headLeft = `${parseInt(window.getComputedStyle(obje).left.replace(/px/g,""))}px`
    headTop  = `${parseInt(window.getComputedStyle(obje).top.replace(/px/g,""))}px`

    x = x + allDivs[400].getBoundingClientRect().width;
    if(x >= 1852){clearInterval(currentInterval);gameon=false} // game ends once border is hit
    
    if(gameon==true){obje.style.left=`${x}px`;} // movement continues if no collisions
    console.log(0<=positions.length-1)
    console.log(positions.length)

    if(positions.length>=1){ // game ends once head touches other blocks
        console.log("AR")
        for(let f=0; f<=positions-1; f++){
            console.log("IN")
            console.log(positions[f])
            console.log(parseInt(window.getComputedStyle(positions[f][0]).replace(/px/g,"")))
            if(parseInt(window.getComputedStyle(positions[f][0]).replace(/px/g,"")) == Nextheadleft 
            && parseInt(window.getComputedStyle(positions[f][1]).replace(/px/g,"")) == Nextheadtop){
                console.log("AHHHHHHHH")
                gameon=false
                clearInterval(currentInterval)
            }
        }
    }


    Nextheadleft = parseInt(window.getComputedStyle(obje).left.replace(/px/g,""))
    Nextheadtop  = parseInt(window.getComputedStyle(obje).top.replace(/px/g,""))

    appleleft = parseInt(window.getComputedStyle(apple).left.replace(/px/g,""))
    appletop = parseInt(window.getComputedStyle(apple).top.replace(/px/g,""))

   
    if ((Nextheadleft - 10) <= appleleft && (Nextheadleft + 10) >= appleleft && 
        (Nextheadtop - 10) <= (appletop-6) && (Nextheadtop + 10) >= (appletop-6) ) {
        counter++
        score = document.querySelector("h2");
        score.innerText =`${counter}` ;

        newBlock = document.createElement("p")
        newBlock.style.width = `${allDivs[400].getBoundingClientRect().width -4}px`
        newBlock.style.height = `${allDivs[400].getBoundingClientRect().height -4}px`

        blocks.push(newBlock)
        positions.push(["",""])
        document.body.appendChild(newBlock)
    }

    if(gameon == true){
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
}

function movementLeft() {
   // rect = obje.getBoundingClientRect();
   // if(rect.left === 0){clearInterval(currentInterval); gameon = false}
   
   headLeft = `${parseInt(window.getComputedStyle(obje).left.replace(/px/g,""))}px`
   headTop  = `${parseInt(window.getComputedStyle(obje).top.replace(/px/g,""))}px`
   x = x - allDivs[400].getBoundingClientRect().width;

   if(x <= 25){clearInterval(currentInterval);gameon=false} // game ends once border is hit
    
   if(gameon==true){obje.style.left=`${x}px`;} // movement continues if no collisions
   

   Nextheadleft = parseInt(window.getComputedStyle(obje).left.replace(/px/g,""))
    Nextheadtop  = parseInt(window.getComputedStyle(obje).top.replace(/px/g,""))

    appleleft = parseInt(window.getComputedStyle(apple).left.replace(/px/g,""))
    appletop = parseInt(window.getComputedStyle(apple).top.replace(/px/g,""))

    
    if ((Nextheadleft - 10) <= appleleft && (Nextheadleft + 10) >= appleleft && 
        (Nextheadtop - 10) <= (appletop-6) && (Nextheadtop + 10) >= (appletop-6) ) {
        counter++
        score = document.querySelector("h2");
        score.innerText =`${counter}` ;

        newBlock = document.createElement("p")
        newBlock.style.width = `${allDivs[400].getBoundingClientRect().width -4}px`
        newBlock.style.height = `${allDivs[400].getBoundingClientRect().height -4}px`

        blocks.push(newBlock)
        positions.push(["",""])
        document.body.appendChild(newBlock)
    }
    if(gameon==true){
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
} 