console.log ("HELLO WORLD!");

let myFaveNumber = prompt("What's you favourite number?")
if (myFaveNumber == 5){
    alert("My favourite number is 5 too!")
}else{
    alert("You're my number 1.")
}


let userName = prompt("What's your name?")

if (userName === "Ben") {
    alert("That's my name too!")
}else{
    alert(`${userName}?! That's a silly name...`)
}

let weatherType = prompt("What's the weather like today?")

if (weatherType === "raining"){
    alert("Take an umbrella!")
}else if (weatherType === "sunny"){
    alert("Don't forget suncream!")
}else{
    alert("Must be a normal, grey, non-descript day!")
}