

///// make todays day blue /////

const newDay = new Date();

let todaysDay = newDay.getDay();

document.getElementById(String(todaysDay)).style.backgroundColor = "hsl(186, 34%, 60%)";

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


console.log(data[4].day);


/////////////////////////////////