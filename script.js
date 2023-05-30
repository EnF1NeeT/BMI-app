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
const bmiValue = document.getElementById("bmi");
const range = document.getElementById("range");
const recomendation = document.getElementById("recomendation");
const recomendations = {
  underweight:
    "It's advisable to consult a healthcare professional to determine if there are any underlying health concerns and to discuss appropriate measures to achieve a healthy weight.",
  normal:
    "YMaintain a balanced diet, engage in regular physical activity, and continue practicing healthy habits to support overall health and well-being.",
  overweight:
    "Focus on adopting healthy lifestyle habits, including a well-balanced diet and regular exercise, to manage weight and reduce health risks associated with excess weight.",
  obese1:
    "Seek guidance from a healthcare professional to develop a comprehensive plan for weight management, including dietary changes, exercise, and possibly additional interventions",
  obese2:
    "Consult a healthcare professional to address the health risks associated with obesity and create an individualized weight management plan.",
  obese3:
    "It is crucial to seek immediate medical attention and work closely with healthcare professionals to manage severe obesity and mitigate associated health risks.",
};

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
      error.classList.add("d-none");
      calculateBtn.style.border = "2px solid #587dff";
    } else {
      error.classList.remove("d-none");
      calculateBtn.style.border = "2px solid red";
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
  document.querySelector(".welcome-msg").classList.add("d-none");
  document.querySelector(".result-data").classList.remove("d-none");
  document.querySelector(".welcome").style.borderRadius = "35px";
  bmiValue.innerHTML = bmi.toFixed(2);
  if (bmi < 18.5) {
    range.innerHTML = "Underweight";
    recomendation.innerHTML = recomendations.underweight;
  } else if (bmi >= 18.5 && bmi < 25) {
    range.innerHTML = "Normal";
    recomendation.innerHTML = recomendations.normal;
  } else if (bmi >= 25 && bmi < 30) {
    range.innerHTML = "Overweight";
    recomendation.innerHTML = recomendations.overweight;
  } else if (bmi >= 30 && bmi < 35) {
    range.innerHTML = "Obese I";
    recomendation.innerHTML = recomendations.obese1;
  } else if (bmi >= 35 && bmi < 40) {
    range.innerHTML = "Obese II";
    recomendation.innerHTML = recomendations.obese2;
  } else if (bmi >= 40) {
    range.innerHTML = "Obese III";
    recomendation.innerHTML = recomendations.obese3;
  }
  console.log("BMI: " + bmi);
});
