const calculateButton = document.getElementById("cal");

const date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

function yearsOld(x) {
  let inputAge = document.getElementById("year").value;
  let yearBorn = currentYear - inputAge - 1;
  let inputMonth = document.getElementById("mon").value;
  let inputDay = document.getElementById("dag").value;
  const dagar = document.querySelector("#dag");
  const manader = document.querySelector("#mon");
  const ar = document.querySelector("#year");
  const error = document.querySelector("#error1");
  const error2 = document.querySelector("#error2");
  const error3 = document.querySelector("#error3");

  if (isNaN(inputMonth) || inputMonth < 1 || inputMonth > 12 || isNaN(inputDay) || inputDay < 1 || inputDay > 31) {
    alert("Felaktigt datumvärde!");
     ar.style.border = "2px solid red"; 
     manader.style.border = "2px solid red";
     dagar.style.border = "2px solid red";
     error.style.opacity = "1";
     error2.style.opacity = "1";
     error3.style.opacity = "1";
     
    return;
  } else {
    dagar.style.border = "1px solid black";
    manader.style.border = "1px solid black";
    ar.style.border = "1px solid black";
    error.style.opacity = "0";
    error2.style.opacity = "0";
    error3.style.opacity = "0";
  };
  
  
  // Calculate date of birth
  let dob = new Date(yearBorn, inputMonth - 1, inputDay);
  
  // Calculate age in months
  let ageInMonths = (currentYear - yearBorn) * 12 + (currentMonth - inputMonth);
  
  // Calculate age in days
  let oneDay = 1000 * 60 * 60 * 24; // milliseconds in a day
  let ageInDays = Math.floor((date - dob) / oneDay);
  
  document.getElementById("y").innerHTML = yearBorn;
  document.getElementById("m").innerHTML = ageInMonths;
  document.getElementById("d").innerHTML = ageInDays;
};

calculateButton.addEventListener("click", function() {
  yearsOld();
});

// my own code it worked but i did not get the exakt numbers

// const calculateButton = document.getElementById("cal");

// const date = new Date();
// let currentYear = date.getFullYear();
// let currentMonth = date.getMonth();

// function yearsOld(x) {
  
//   let inputYear = document.getElementById("year").value;
//   let yearBorn = (currentYear - inputYear);
//   let inputMonth = document.getElementById("mon").value;
//   let monthBoorn = (inputYear * 12) + (currentMonth - inputMonth);
//   let inputDay = document.getElementById("dag").value;
//   let daysOld = monthBoorn * 30.4 - inputDay;
 
//  document.getElementById("y").innerHTML = yearBorn;
//  document.getElementById("m").innerHTML = monthBoorn;
//  document.getElementById("d").innerHTML = daysOld;
// };






// calculateButton.addEventListener("click", function() {
//   yearsOld(year);
// });





