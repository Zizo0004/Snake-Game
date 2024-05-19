 x = 0;
 y = 0;
 z = x
 var newElement = 0
 currentInterval = null; // Track the currently active interval
tracker = null
obje = document.getElementById("d");
obje2 = document.getElementById("b");
obje3 = document.getElementById("a");
obje4 = document.getElementById("c");




//obje.style.position = "absolute";
var rect = null
gameon = true

document.addEventListener("keydown", (e) => {
    clearInterval(currentInterval); // Clear any existing interval first
    if(gameon === true){
        switch (e.key) {
            case "ArrowUp":
                tracker = "up"
                currentInterval = setInterval(movementTop, 5);
                break;
            case "ArrowDown":
                tracker = "down"
                currentInterval = setInterval(movementDown, 5);
                break;
            case "ArrowRight":
                tracker = "right"
                currentInterval = setInterval(movementRight, 5);
                break;
            case "ArrowLeft":
                tracker = "left"
                currentInterval = setInterval(movementLeft, 5);
                break;
        }
    }
});
 var apple = document.getElementById("img")
 var computedStyle = window.getComputedStyle(apple);

  Left  = parseInt(computedStyle.left.slice(0,-2))
  Top  = parseInt(computedStyle.top.slice(0,-2))
 
 head = obje
 arr = [obje2,obje3,obje4]
 /*
 for(i=0; i<= arr.length i++){
    
 }

 */
 function movementTop() {
    y--;
    if( newElement>0 && tracker == "up"){
        //z++
        arr[newElement-1].style.top = `${y}px`; arr[newElement].style.left= `${x}px`;
        console.log(`${arr[newElement-1].style.left}: 1 ${arr[newElement].style.left}:2`)
        tracker = null}
        
        else {arr[0].style.top = `${y}px`;}
        arr[newElement].style.top = `${y-15}px`;
    
    //for(ar of arr ){ar.style.top=`${y}px`}
    rect = obje.getBoundingClientRect();
    //console.log(`${y}: Y ${x}: X`)
    newX = Math.floor(Math.random() * 1000)
    newY = Math.floor(Math.random() * 1000) 

    if(y <= Top +10 && y >= Top - 10 && x<= Left +20  && x>=Left -20){

        Left = newX
        Top = newY
        apple.style.top = `${newY}px`;
        apple.style.left = `${newX}px`;     
        
        let m = document.createElement("p");
        m.style.position = "absolute";
        m.style.left = parseInt(arr[newElement].style.left.slice(0,-2)) - 20 + "px"
        m.style.top = parseInt(arr[newElement].style.left.slice(0,-2)) - 20 + "px"
        arr.push(m) 
        newElement++;

        
        document.body.appendChild(m);}

    if(rect.top === 0){clearInterval(currentInterval); gameon = false; location.reload();}
    
}

function movementDown() {
    y++;
    for(ar of arr ){ar.style.top=`${y}px`}

    rect = obje.getBoundingClientRect();
    if(y <=120 && y >=80 && x<=120 && x>=80){document.createElement("p")}; 
    if(rect.top === 1050){clearInterval(currentInterval); gameon = false}
    
}

function movementRight() {
    x++;
    for(ar of arr ){
        newAr = window.getComputedStyle(ar)
        //console.log(newAr)
        ar.style.left = parseInt(newAr.left.slice(0,-2)) + 1 + "px";}

    rect = obje.getBoundingClientRect();
    if(y <=120 && y >=80 && x<=120 && x>=80){document.createElement("p")}; 
    if(rect.left === 1110){clearInterval(currentInterval); gameon = false}

}

function movementLeft() {
    rect = obje.getBoundingClientRect();
    if(rect.left === 0){clearInterval(currentInterval); gameon = false}
    x--;
    for(ar of arr ){ar.style.left=`${x}px`}
    
    
    if(y <=120 && y >=80 && x<=120 && x>=80){document.createElement("p")}

    
    
} 


// there should be an order for when each block moves, 


// TODO
// Allow fruit to be picked up from all directions
// Figure out how to append to snake and move


/* 

if(R or L){
    if(y not same){
        match y position
    }
    match x position
if(U or D)){
    if(x not same){
        match x position
    }
    match y
}

        */ 

