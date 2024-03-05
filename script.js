// Function definitions
function initialSetup() {
  document.getElementById("header").innerHTML = "The White Noise Experiment";
  document.getElementById("subtitle").innerHTML = "Welcome to the White Noise Experiment. Thank you for participating!";
  document.getElementById("list").innerHTML = "<li>Expect to spend 1-2 minutes on this page to complete the experiment</li><li>Please wear headphones/earbuds/airpods to keep our data consistent</li><li>Read the disclaimer below to understand how we process your data</li><li>To end the experiment early, just close the tab</li><li>Return soon! More variations of this experiment are on the way!</li>";
  document.getElementById("dot").innerHTML = "";
  document.getElementById("button_container").innerHTML = "<button id='button' class='button'></button>";
  document.getElementById("button").innerHTML = "Click here to begin";
  document.getElementById("footer").innerHTML = "By participating in the White Noise Experiment, you acknowledge and agree that we may collect data regarding the timestamp of your button clicks for research purposes. This data will be used solely for the purpose of analyzing user interaction patterns and improving the functionality of the experiment. We do not collect any personal information or use cookies for tracking purposes. Your participation is voluntary, and by continuing with the experiment, you consent to the collection and use of this data as described. If you have any questions or concerns regarding the handling of your data, please contact wjfoster4@gmail.com.";
}

function clearPage() {
  document.getElementById("header").innerHTML = "";
  document.getElementById("subtitle").innerHTML = "";
  document.getElementById("list").innerHTML = "";
  document.getElementById("dot").innerHTML = "";
  document.getElementById("button_container").innerHTML = "";
  document.getElementById("footer").innerHTML = "";
}

function experimentSetup() {
  clearPage();
  document.getElementById("subtitle").innerHTML = "Stare at the dot. Click the button when you believe a different white noise is playing (you'll clearly notice)."
  document.getElementById("dot").innerHTML = "<br>.";
  document.getElementById("button_container").innerHTML = "<br><br><br><br><br><br><button id='button' class='button'></button>";
  document.getElementById("button").innerHTML = "Change noticed";
  document.getElementById("button").addEventListener("click", endExperiment);
}

function endExperiment() {
  clearPage();
  document.getElementById("header").innerHTML = "<br><br>The White Noise Experiment";
  document.getElementById("subtitle").innerHTML = "Thank you for participating! Your data has been logged. Results from this round of testing will be published on this website when the experiment is complete (may be several months)."
}

// Main Script
initialSetup();
document.getElementById("button").addEventListener("click", experimentSetup);
