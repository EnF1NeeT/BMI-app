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
  underweightResult:
    "Increase caloric intake: Focus on consuming nutrient-dense foods that provide energy and promote weight gain.<br>    Include healthy fats: Incorporate sources of healthy fats like avocados, nuts, and olive oil in your diet. <br>    Resistance training: Engage in strength-building exercises to promote muscle growth. <br>    Consult a healthcare professional: Seek guidance from a healthcare professional or registered dietitian for personalized advice and support.",
  normal:
    "Maintain a balanced diet, engage in regular physical activity, and continue practicing healthy habits to support overall health and well-being.",
  normalResult: `Maintain a balanced diet: Continue to consume a variety of nutritious foods from all food groups. 
  <br>    Regular physical activity: Stay active with exercises such as cardio, strength training, or sports. <br>    Stay hydrated: Drink an adequate amount of water daily to support overall health. <br>    Focus on preventive care: Schedule regular check-ups and screenings to monitor your health.`,
  overweight:
    "Focus on adopting healthy lifestyle habits, including a well-balanced diet and regular exercise, to manage weight and reduce health risks associated with excess weight.",
  overweightResult:
    "Portion control: Be mindful of portion sizes and aim to consume balanced meals. <br>  Increase physical activity: Engage in moderate-intensity exercises for at least 150 minutes per week. <br>  Choose whole foods: Opt for whole grains, fruits, vegetables, lean proteins, and limit processed foods. <br>  Seek professional guidance: Consider consulting a registered dietitian or healthcare professional to create a personalized plan.",
  obese1:
    "Seek guidance from a healthcare professional to develop a comprehensive plan for weight management, including dietary changes, exercise, and possibly additional interventions",
  obese1Result:
    "Balanced and portioned meals: Follow a well-balanced diet and control portion sizes to create a calorie deficit. <br>    Regular exercise routine: Incorporate a combination of cardiovascular exercises and strength training. <br>    Behavioral changes: Identify and address any emotional or behavioral factors that contribute to overeating. <br>    Seek professional support: Consult a healthcare professional or weight management specialist for guidance and support.",
  obese2:
    "Consult a healthcare professional to address the health risks associated with obesity and create an individualized weight management plan.",
  obese2Result:
    "Calorie restriction: Reduce overall caloric intake while ensuring balanced nutrition. <br>     Structured meal plans: Consider following a structured meal plan created by a registered dietitian. <br>     Regular physical activity: Engage in moderate-intensity exercises for at least 150 minutes per week. <br>     Monitor progress: Keep track of your weight, measurements, and other relevant indicators to assess progress.",
  obese3:
    "It is crucial to seek immediate medical attention and work closely with healthcare professionals to manage severe obesity and mitigate associated health risks.",
  obese3Result:
    "Medical evaluation: Seek a comprehensive medical evaluation to identify any underlying health conditions. <br>     Multidisciplinary approach: Consult with a team of healthcare professionals, including a registered dietitian, doctor, and psychologist. <br>     Supervised weight loss program: Consider a medically supervised weight loss program that includes nutritional support, behavior modification, and physical activity. <br>     Long-term commitment: Recognize that significant weight loss may take time and require sustained lifestyle changes.",
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
    document.getElementById("result-content").innerHTML =
      recomendations.underweightResult;
  } else if (bmi >= 18.5 && bmi < 25) {
    range.innerHTML = "Normal";
    recomendation.innerHTML = recomendations.normal;
    document.getElementById("result-content").innerHTML =
      recomendations.normalResult;
  } else if (bmi >= 25 && bmi < 30) {
    range.innerHTML = "Overweight";
    recomendation.innerHTML = recomendations.overweight;
    document.getElementById("result-content").innerHTML =
      recomendations.overweightResult;
  } else if (bmi >= 30 && bmi < 35) {
    range.innerHTML = "Obese I";
    recomendation.innerHTML = recomendations.obese1;
    document.getElementById("result-content").innerHTML =
      recomendations.obese1Result;
  } else if (bmi >= 35 && bmi < 40) {
    range.innerHTML = "Obese II";
    recomendation.innerHTML = recomendations.obese2;
    document.getElementById("result-content").innerHTML =
      recomendations.obese2Result;
  } else if (bmi >= 40) {
    range.innerHTML = "Obese III";
    recomendation.innerHTML = recomendations.obese3;
    document.getElementById("result-content").innerHTML =
      recomendations.obese3Result;
  }
  console.log("BMI: " + bmi);
});
