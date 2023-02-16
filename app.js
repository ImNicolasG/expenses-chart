

///// make todays day blue and change opacity /////

const newDay = new Date();

let todaysDay = newDay.getDay();

document.getElementById(String(todaysDay)).style.backgroundColor = "hsl(186, 34%, 60%)";

function lowerOpacity() {
    document.getElementById(String(todaysDay)).style.backgroundColor = "hsl(186, 34%, 60%, 0.75)";
}
function increaseOpacity() {
    document.getElementById(String(todaysDay)).style.backgroundColor = "hsl(186, 34%, 60%)";   
}

document.getElementById(String(todaysDay)).setAttribute("onmouseover", "lowerOpacity()");
document.getElementById(String(todaysDay)).setAttribute("onmouseout", "increaseOpacity()");

///////////////////////////

///// Data from JSON File /////

const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

  let totalAmount = 0;
  
/////////////////////////////////

///// Logic for inputting Amount spent data /////
for (let i = 1; i < data.length + 1; i++ ) {
    document.getElementById(i).querySelector("p.tooltiptext").innerHTML = "$" + data[i-1].amount;
    document.getElementById(i).style.height = data[i-1].amount * 2+"px"

    // changes total for month but just adds the weekly data
    totalAmount += data[i-1].amount;
    console.log(totalAmount);
        
};

/////////////////////////////////

document.getElementById("total").innerHTML = "$" + totalAmount;
