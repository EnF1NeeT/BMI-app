"use strict";
const metricRadio = document.getElementById("metric");
const imperialRadio = document.getElementById("imperial");
const heightAddon = document.getElementById("height-addon");
const weightAddon = document.getElementById("weight-addon");
const data = document.querySelector(".data");
const metric =
  '<div class="d-flex flex-md-row flex-column gap-3 w-100"><div class="mb-3 w-100 m-0">  <label for="height" class="form-label">Height</label>  <div class="input-group justify-content-between">    <input      type="number"      class="form-control p-0"      id="height"      placeholder="0"      maxlength="3"    />    <span class="input-group-text p-0" id="height-addon"      >cm</span    >  </div></div><div class="mb-3 w-100 m-0">  <label for="weight" class="form-label">Weight</label>  <div class="input-group justify-content-between">    <input      type="number"      class="form-control p-0"      id="weight"      placeholder="0"      maxlength="3"    />    <span class="input-group-text p-0" id="weight-addon"      >kg</span    >  </div></div></div>';
const imperial =
  '<div class="d-flex flex-md-row flex-column gap-3 w-100"><div class="mb-3 w-100 m-0">  <label for="height" class="form-label">Height</label>  <div class="input-group mb-3 justify-content-between">    <input      type="number"      class="form-control p-0"      id="height"      placeholder="0"      maxlength="3"    />    <span class="input-group-text p-0" id="height-addon"      >ft</span    >  </div>  <div class="input-group justify-content-between">    <input      type="number"      class="form-control p-0"      id="height"      placeholder="0"      maxlength="3"    />    <span class="input-group-text p-0" id="height-addon"      >in</span    >  </div></div><div class="mb-3 w-100 m-0">  <label for="height" class="form-label">Weight</label>  <div class="input-group mb-3 justify-content-between">    <input      type="number"      class="form-control p-0"      id="height"      placeholder="0"      maxlength="3"    />    <span class="input-group-text p-0" id="height-addon"      >st</span    >  </div>  <div class="input-group justify-content-between">    <input      type="number"      class="form-control p-0"      id="height"      placeholder="0"      maxlength="3"    />    <span class="input-group-text p-0" id="height-addon"      >lbs</span    >  </div></div></div>';

// Metric and Imperial system change
metricRadio.addEventListener("click", () => {
  if (metricRadio.checked) {
    console.log("metric");
    data.innerHTML = metric;
  }
});
imperialRadio.addEventListener("click", () => {
  if (imperialRadio.checked) {
    console.log("imperial");
    data.innerHTML = imperial;
  }
});
