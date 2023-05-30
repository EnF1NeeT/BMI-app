"use strict";
const metricRadio = document.getElementById("metric");
const imperialRadio = document.getElementById("imperial");
const metricInputs = document.getElementById("metric-inputs");
const imperialInputs = document.getElementById("imperial-inputs");
const metricHeight = document.getElementById("metric-height");
const metricWeight = document.getElementById("metric-weight");
const imperialHeightFt = document.getElementById("imperial-height-ft");
const imperialHeightIn = document.getElementById("imperial-height-in");
const imperialWeightSt = document.getElementById("imperial-weight-st");
const imperialWeightLbs = document.getElementById("imperial-weight-lbs");
const calculateBtn = document.getElementById("calculate-btn");
const error = document.getElementById("error");

metricRadio.addEventListener("change", function () {
  metricInputs.classList.remove("d-none");
  imperialInputs.classList.add("d-none");
});
imperialRadio.addEventListener("change", function () {
  imperialInputs.classList.remove("d-none");
  metricInputs.classList.add("d-none");
});

let height = 0;
let weight = 0;
let heightFt = 0;
let heightIn = 0;
let weightSt = 0;
let weightLbs = 0;
let bmi = 0;
// Input data
metricHeight.addEventListener("input", function () {
  height = metricHeight.value;
});
metricWeight.addEventListener("input", function () {
  weight = metricWeight.value;
});
imperialHeightFt.addEventListener("input", function () {
  heightFt = imperialHeightFt.value;
});
imperialHeightIn.addEventListener("input", function () {
  heightIn = imperialHeightIn.value;
});
imperialWeightLbs.addEventListener("input", function () {
  weightLbs = imperialWeightLbs.value;
});
//Imperial to metric
const imperialToMetric = function (heightFt, heightIn, weightLbs) {
  height = (heightFt * 30, 48) + (heightIn * 2, 54);
  weight = weightLbs * 0.45359237 + weightSt * 6.35029318;
};
//calculate BMI
calculateBtn.addEventListener("click", function () {
  if (metricRadio.checked) {
    if (height > 0 && weight > 0) {
      bmi = weight / (height / 100) ** 2;
      console.log("BMI: " + bmi);
      error.classList.add("d-none");
    } else {
      error.classList.remove("d-none");
    }
  } else if (imperialRadio.checked) {
    if (heightFt > 0 && heightIn > 0 && weightLbs > 0) {
      imperialToMetric(heightFt, heightIn, weightLbs);
      bmi = weight / (height / 100) ** 2;
      console.log("BMI: " + bmi);
      error.classList.add("d-none");
    } else {
      error.classList.remove("d-none");
    }
  }
});
