 x = 58;
 y = 150;
 z = x
 var newElement = 0
 currentInterval = null; // Track the currently active interval
tracker = null
obje = document.getElementById("a"); // head 
b = document.getElementById("b");
c = document.getElementById("c");
d = document.getElementById("d");


// READ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! /// 

// make every movement take one space of a block, instead of 1 px moving up,right,down,left it moves a whole block's worth. this prevents any overriding issues // 

// READ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ///

//obje.style.position = "absolute";
var rect = null
gameon = true

document.addEventListener("keydown", (e) => {
    clearInterval(currentInterval); // Clear any existing interval first
    if(gameon === true){
        switch (e.key) {
            case "ArrowUp":
                tracker = "UP"
                currentInterval = setInterval(movementTop, 125);
                break;
            case "ArrowDown":
                tracker = "DOWN"
                currentInterval = setInterval(movementDown, 25);
                break;
            case "ArrowRight":
                tracker = "RIGHT"
                currentInterval = setInterval(movementRight, 125);
                break;
            case "ArrowLeft":
                tracker = "LEFT"
                currentInterval = setInterval(movementLeft, 5);
                break;
        }
    }
});
 var apple = document.getElementById("img")
 var computedStyle = window.getComputedStyle(apple);
  Left  = parseInt(computedStyle.left.slice(0,-2))
  Top  = parseInt(computedStyle.top.slice(0,-2))
 
 
 dict = {b:"RIGHT",c:"RIGHT",d:"RIGHT"} // make this a dictonary to store last movement
 lenDict = Object.keys(dict)


 function movementTop() {
    y = y - 14;
    obje.style.top=`${y}px`;

    for(let i=0; i<=lenDict.length-1; i++){

        section = document.getElementById(lenDict[i])
        nextsection = document.getElementById(lenDict[i-1])
        head = window.getComputedStyle(obje)
        sectioninfo = window.getComputedStyle(document.getElementById(lenDict[i]))

            switch(dict[lenDict[i]]){
                case "UP":
                    if(i==0){
                        if(tracker == "UP"){
                            if(sectioninfo.left != head.left){section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`}
                            else{section.style.top  = `${parseInt(sectioninfo.top.replace(/px/g,""))-1}px`; dict[lenDict[i]] = "UP"}
                        }

                        else if(tracker == "DOWN"){
                            if(sectioninfo.left != head.left){section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`}
                            else{section.style.top  = `${parseInt(sectioninfo.top.replace(/px/g,""))+1}px`; dict[lenDict[i]] = "UP"}
                        }
                        else if (tracker == "RIGHT"){
                            section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`
                        }
                    }
                    
                    else{
                        nextsectioninfo = window.getComputedStyle(document.getElementById(lenDict[i-1]))
                        if(dict[lenDict[i-1]] == "UP"){
                            if(sectioninfo.left != nextsectioninfo.left){console.log(`${sectioninfo.left} VS ${nextsectioninfo.left}`);section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`}
                            else{section.style.top  = `${parseInt(sectioninfo.top.replace(/px/g,""))-1}px`; dict[lenDict[i]] = "UP"}
                        }

                        else if(dict[lenDict[i-1]] == "DOWN"){
                            if(sectioninfo.left != nextsectioninfo.left){section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`}
                            else{section.style.top  = `${parseInt(sectioninfo.top.replace(/px/g,""))+1}px`; dict[lenDict[i]] = "UP"}
                        }
                        else if (dict[lenDict[i-1]] == "RIGHT"){
                            section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`
                        }
                        

                        }
                    break;

                case "RIGHT":
                    if(i==0){
                        if(tracker == "UP"){
                            if(sectioninfo.left != head.left){section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`}
                            else{section.style.top  = `${parseInt(sectioninfo.top.replace(/px/g,""))-1}px`; dict[lenDict[i]] = "UP"}
                        }

                        else if(tracker == "DOWN"){
                            if(sectioninfo.left != head.left){section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`}
                            else{section.style.top  = `${parseInt(sectioninfo.top.replace(/px/g,""))+1}px`; dict[lenDict[i]] = "UP"}
                        }
                        else if (tracker == "RIGHT"){
                            section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`
                        }
                    }
                    else{
                        nextsectioninfo = window.getComputedStyle(document.getElementById(lenDict[i-1]))
                        if(dict[lenDict[i-1]] == "UP"){
                            if(sectioninfo.left != nextsectioninfo.left){section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`}
                            else{section.style.top =`${parseInt(sectioninfo.top.replace(/px/g,""))-1}px`;dict[lenDict[i]] = "UP"}
                        }

                        else if(dict[lenDict[i-1]] == "DOWN"){
                            if(sectioninfo.left != head.left){section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`}
                            else{section.style.top  = `${parseInt(sectioninfo.top.replace(/px/g,""))+1}px`; dict[lenDict[i]] = "UP"}
                        }
                        else if (dict[lenDict[i-1]] == "RIGHT"){
                            section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`
                        }
                        

                        }
                    break;
              }
            }
        }
            
              
             
           
    
        /** arr[i].style.top= window.getComputedStyle(obje).top}
        else{arr[i].style.top = window.getComputedStyle(arr[i+1]).top} */

    

   /* 
 if( newElement>0 && tracker == "up"){
        //z++
        arr[newElement-1].style.top = `${y}px`; arr[newElement].style.left= `${x}px`;
        console.log(`${arr[newElement-1].style.left}: 1 ${arr[newElement].style.left}:2`)
        tracker = null}
        
        else {arr[0].style.top = `${y}px`;}
        arr[newElement].style.top = `${y-15}px`;
    
    rect = obje.getBoundingClientRect();
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
   
   */
    


function movementDown() {
    y = y + 14;
    obje.style.top=`${y}px`

    /* 
    rect = obje.getBoundingClientRect();
    if(y <=120 && y >=80 && x<=120 && x>=80){document.createElement("p")}; 
    if(rect.top === 1050){clearInterval(currentInterval); gameon = false}
    */
}

function movementRight() {
    x++;
    obje.style.left=`${x}px`
    for(let i=0; i<=lenDict.length-1; i++){
        
        section = document.getElementById(lenDict[i])
        nextsection = document.getElementById(lenDict[i-1])
        head = window.getComputedStyle(obje)
        sectioninfo = window.getComputedStyle(document.getElementById(lenDict[i]))

            switch(dict[lenDict[i]]){
                case "UP":
                    if(i==0){
                        if(tracker == "UP"){
                            if(sectioninfo.left != head.left){section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`}
                            else{section.style.top  = `${parseInt(sectioninfo.top.replace(/px/g,""))-1}px`; dict[lenDict[i]] = "UP"}
                        }
                        

                        else if(tracker == "DOWN"){
                            if(sectioninfo.left != head.left){section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`}
                            else{section.style.top  = `${parseInt(sectioninfo.top.replace(/px/g,""))+1}px`; dict[lenDict[i]] = "DOWN"}
                        }
                        else if (tracker == "RIGHT"){
                            if(sectioninfo.top != head.top){section.style.top = `${parseInt(sectioninfo.top.replace(/px/g,""))-1}px`}
                            else{section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`; dict[lenDict[i]] = "RIGHT"}
                        }
                    }
                    else{
                        nextsectioninfo = window.getComputedStyle(document.getElementById(lenDict[i-1]))

                        if(dict[lenDict[i-1]] == "UP"){
                            if(sectioninfo.left != nextsectioninfo.left){section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`}
                            else{section.style.top  = `${parseInt(sectioninfo.top.replace(/px/g,""))-1}px`; dict[lenDict[i]] = "UP"}
                        }

                        else if(dict[lenDict[i-1]] == "DOWN"){
                            if(sectioninfo.left != nextsectioninfo.left){section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`}
                            else{section.style.top  = `${parseInt(sectioninfo.top.replace(/px/g,""))+1}px`; dict[lenDict[i]] = "DOWN"}
                        }
                        else if (dict[lenDict[i-1]] == "RIGHT"){
                            if(sectioninfo.top != nextsectioninfo.top){console.log("00");section.style.top = `${parseInt(sectioninfo.top.replace(/px/g,""))-1}px`}
                            else{section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`; dict[lenDict[i]] = "RIGHT"}
                        }
                        

                        }
                    break;

                case "RIGHT":
                    if(i==0){
                        if(tracker == "UP"){
                            if(sectioninfo.left != head.left){section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`}
                            else{section.style.top  = `${parseInt(sectioninfo.top.replace(/px/g,""))-1}px`; dict[lenDict[i]] = "UP"}
                        }

                        else if(tracker == "DOWN"){
                            if(sectioninfo.left != head.left){section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`}
                            else{section.style.top  = `${parseInt(sectioninfo.top.replace(/px/g,""))+1}px`; dict[lenDict[i]] = "UP"}
                        }
                        else if (tracker == "RIGHT"){
                            if(sectioninfo.top != head.top){section.style.top = `${parseInt(sectioninfo.top.replace(/px/g,""))-1}px`}
                            section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`
                    }
                }
                    else{
                        nextsectioninfo = window.getComputedStyle(document.getElementById(lenDict[i-1]))
                        if(dict[lenDict[i-1]] == "UP"){
                            if(sectioninfo.left != nextsection.left){section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`}
                            else{section.style.top  = `${parseInt(sectioninfo.top.replace(/px/g,""))-1}px`; dict[lenDict[i]] = "UP"}
                        }

                        else if(dict[lenDict[i-1]] == "DOWN"){
                            if(sectioninfo.left != head.left){section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`}
                            else{section.style.top  = `${parseInt(sectioninfo.top.replace(/px/g,""))+1}px`; dict[lenDict[i]] = "UP"}
                        }
                        else if (dict[lenDict[i-1]] == "RIGHT"){
                            if(sectioninfo.top != nextsectioninfo.top){section.style.top = `${parseInt(sectioninfo.top.replace(/px/g,""))-1}px`}
                            else{section.style.left = `${parseInt(sectioninfo.left.replace(/px/g,""))+1}px`}
                        }
                        

                        
                    break;
              }
            }

    }
}

function movementLeft() {
   // rect = obje.getBoundingClientRect();
   // if(rect.left === 0){clearInterval(currentInterval); gameon = false}
    x--;
    obje.style.left=`${x}px`
    
    
    

    
    
} 