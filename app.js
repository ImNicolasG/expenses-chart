

///// make todays day blue /////

const newDay = new Date();

let todaysDay = newDay.getDay();

document.getElementById(String(todaysDay)).style.backgroundColor = "hsl(186, 34%, 60%)";

///////////////////////////
