
/*find the button on which the click function is to be called
addEventListner - has a type of event which it should liten to and a function which shpould be called for that event.
...Passing a functin as an input, which is to be called when event is triggered. */

//for one button
//document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){
//     alert("I got Clicked!!!");
// }

/*// Anonymous function (w/o a name)
document.querySelector("button").addEventListener("click",function(){
    alert("I got Clicked!!!");
});*/



// for all buttons - detecting button press on UI
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttonInnerHtml = this.innerHTML;
        console.log(buttonInnerHtml);
        // passing html for button clicked on UI 
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
        
     }); 
}

//for all keys - detecting key press from keybaord
document.addEventListener("keypress",function(event){
    //console.log(event);
    // passing the value of the key pressed using keyboard
    makeSound(event.key);
    buttonAnimation(event.key);
})

// adding animations to drums when any button/key is pressed
function buttonAnimation(keyClicked){
    // getting the current key using querySelector
    var activeButton = document.querySelector("."+keyClicked);
    // adding css to the pressed button
    activeButton.classList.add("pressed");
    // need to remove css after one millisecond click, to make it look like a real animation 
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

// function to make the repsective sounds for thr drums
function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break; 
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;  
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:console.log(buttonInnerHtml);
       }
}




// ----- Playing an audio in JS ---------
// var audio = new Audio("sounds/crash.mp3")
// audio.play();

// to get the identity of the button that was clicked use - this 
// console.log(this.innerHTML);
// this.style.color="green";
// this.style.color="green";

// ------- Debugger in Console -------
// degugger; //Shift-Enter
// functionCall; // Enter

// ------ Higher Order Functions ------
// functions that can take other functions as inputs 
// calculator(num1, num2, funct)



