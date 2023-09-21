function uploadPhoto() {
  // Get the input element and selected file
  const photoInput = document.getElementById("photoInput");
  const profilePic = document.getElementById("profilePic");

  // Check if a file is selected
  if (photoInput.files.length > 0) {
    const selectedFile = photoInput.files[0];

    // Create a FileReader to read the selected file
    const reader = new FileReader();

    // Define the onload event handler for the FileReader
    reader.onload = function (event) {
      // Set the source of the profile picture to the loaded image
      profilePic.src = event.target.result;
    };

    // Read the selected file as a data URL
    reader.readAsDataURL(selectedFile);
  }
}

// declaring some global scope variables 
let gender1;
let age1;
let height1;
let cal;
let delContainer;
let protien;
let carbs;
let fats;
// ....................................
const submit1 = document.getElementById("submit-1");
submit1.addEventListener("click", (event) => {
  event.preventDefault();
  const userName = document.getElementById("user-name").value;
  const userAge = document.getElementById("user-age").value;
  const userGender = document.getElementById("user-gender").value;
  const profilePicInput = document.getElementById("photoInput");
  const nameDisplay = document.getElementById("name-display");
  const img = document.getElementById("profile");
  const info = document.getElementById("info");
  delContainer = document.getElementById("container-1");

  gender1 = userGender;
  age1 = userAge;

  // Check if the form fields contain default values or are empty
  if (
    userName === "" &&
    userAge === "" &&
    userGender === "" &&
    profilePicInput.files.length === 0
  ) {
    alert("Please fill out the form before submitting.");
    return; // Prevent further execution
  }

  // Create a paragraph element for the user's name
  const p = document.createElement("p");
  p.classList.add("p-m");
  p.textContent = userName;

  // Create an image element for the profile picture
  const dp = document.createElement("img");
  dp.classList.add("pf-img");

  // Check if a file is selected for the profile picture
  if (profilePicInput.files.length > 0) {
    const selectedFile = profilePicInput.files[0];
    dp.src = URL.createObjectURL(selectedFile);
  } else {
    // If no file is selected, you can set a default image or leave it empty
    dp.src = ""; // Set to a default image or an empty string
  }
  const infoCont = document.createElement("div");
  infoCont.classList.add("info-container", "p-xl", "bg-red");

  // Create div elements for each piece of information
  const nameDiv = document.createElement("div");
  nameDiv.textContent = `Name: ${userName}`;

  const ageDiv = document.createElement("div");
  ageDiv.classList.add("age-count");
  ageDiv.textContent = `Age: ${userAge}`;

  const genderDiv = document.createElement("div");
  genderDiv.textContent = `Gender: ${userGender}`;

  // Append the div elements to infoCont
  infoCont.appendChild(nameDiv);
  infoCont.appendChild(genderDiv);
  infoCont.appendChild(ageDiv);

  // Append the created elements to their respective containers
  info.appendChild(infoCont);
  nameDisplay.appendChild(p);
  img.appendChild(dp);

  const notification = `${userName} your information is saved successful.`;
  alert(notification);
});

const submit2 = document.getElementById("submit-2");
submit2.addEventListener("click", (event) => {
  event.preventDefault();
  const userWeight = document.getElementById("user-weight").value;
  const userHeight = document.getElementById("user-height").value;
  const userActivity = document.getElementById("user-activity").value;
  const userGoal = document.getElementById("user-goal").value;
  const userSteps = document.getElementById("user-steps").value;

  const bodyInfo = document.getElementById("body-info");
  bodyInfo.classList.add("info-container", "p-xl", "blue-bg");

  const divWeight = document.createElement("div");
  divWeight.classList.add("age-count");
  divWeight.textContent = `Weight: ${userWeight} kgs`;

  const divHeight = document.createElement("div");
  divHeight.textContent = `Height: ${userHeight} cms`;

  const divActivity = document.createElement("div");
  divActivity.textContent = `Activity: ${userActivity}`;

  //  sugeestion container
  // checking gender and calculating daily calories intake
  if (gender1 === "M") {
    cal = 10 * userWeight + 6.25 * userHeight + 5 * age1 + 5;
  } else if (gender1 === "F") {
    cal = 10 * userWeight + 6.25 * userHeight - 5 * age1 - 161;
  } else {
    console.log("Gender not specified");
  }

  if (userGoal == "general fitness") {
    cal = cal;
  } else if (userGoal == "weight gain") {
    cal = cal + 300;
  } else {
    cal = cal - 300;
  }
  cal=parseInt(cal);
//   traking macro intake
  if(userGoal==="Weight gain"){
    protien=(30/100)*(cal/4);
  }else if(userGoal==='Weight loss'){
    protien=(35/100)*(cal/4);
  }else{
    protien=(20/100)*(cal/4);
  }
  protien=parseInt(protien);
  if(userGoal==="Weight gain"){
    carbs=(65/100)*(cal/4);
  }else if(userGoal==='Weight loss'){
    carbs=(45/100)*(cal/4);
  }else{
    carbs=(50/100)*(cal/4);
  }
  carbs=parseInt(carbs);
  if(userGoal==="Weight gain"){
    fats=(35/100)*(cal/9);
  }else if(userGoal==='Weight loss'){
    fats=(20/100)*(cal/9);
  }else{
    fats=(30/100)*(cal/9);
  }
  fats=parseInt(fats);
 
  


  const macroInfo=document.createElement('div');
  macroInfo.classList.add('info-container','p-xl','blue-bg');

  const pinfo=document.createElement('div');
  pinfo.classList.add('age-count');
  pinfo.textContent=`Protien intake : ${protien}g`;
  const cinfo=document.createElement('div');
  cinfo.textContent=`Carbs intake : ${carbs}g`;
  const finfo=document.createElement('div');
  finfo.textContent=`Fat intake : ${fats}g`;

  macroInfo.appendChild(pinfo);
  macroInfo.appendChild(cinfo);
  macroInfo.appendChild(finfo);

  const macro=document.getElementById('macro');
  macro.appendChild(macroInfo);



  const suggestionContainer = document.getElementById("suggestion");
  suggestionContainer.classList.add("info-container", "p-xl", "bg-red");

  const divCal = document.createElement("div");
  divCal.classList.add("age-count");
  divCal.textContent = `Calories goal :${cal}`;

  const divSteps = document.createElement("div");
  divSteps.textContent = `Steps goal : ${userSteps}`;

  const divGoal = document.createElement("div");
  divGoal.textContent = `Weight: ${userGoal}`;

  // adding the created elemnets to body info container
  bodyInfo.appendChild(divWeight);
  bodyInfo.appendChild(divHeight);
  bodyInfo.appendChild(divActivity);

  //  adding the created elements to suggestions container
  suggestionContainer.appendChild(divGoal);
  suggestionContainer.appendChild(divSteps);
  suggestionContainer.appendChild(divCal);

  // creating a container for notice
  const noticeContainer = document.getElementById("notice-container");
  const notDiv1 = document.createElement("div");
  notDiv1.textContent = "Steps target :";

  const notStep = document.createElement("div");
  notStep.classList.add("large-text");
  notStep.textContent = userSteps;

  const notDiv2 = document.createElement("div");
  notDiv2.textContent = "Calories target  :";

  const notCal = document.createElement("div");
  notCal.classList.add("large-text");
  notCal.textContent = cal;

  noticeContainer.appendChild(notDiv1);
  noticeContainer.appendChild(notStep);
  noticeContainer.appendChild(notDiv2);
  noticeContainer.appendChild(notCal);

  // removing form
  const form2 = document.getElementById("form-2");
  form2.style.display = "none";
  delContainer.style.display = "none";
  // displaying the users display with user information
  const display = document.getElementById("dashboard");
  display.style.display = "flex";
});

// exercise select menu
const exerciseOptionsChest = [
  "Push ups",
  "Bench press",
  "Dumbell flyes",
  "Cable crossovers",
  "Dips",
  "Machine press",
  "Dumbell incline press",
  "Dumbell pullovers",
];

const exerciseOptionsBack = [
  "Dead lift",
  "Bent-Over rows",
  "Lat pulldowns",
  "T-bar rows",
  "Face pulls",
  "Shrugs",
  "Dumbell rows",
  "Pull ups",
];
const exerciseOptionsBiceps = [
  "Barbell curl",
  "Dumbell curl",
  "Preacher curl",
  "Hammer curl",
  "Reverse curl",
  "Cable curl",
  "Chin ups",
];

const exerciseOptionsTriceps = [
  "Tricep pushdowns",
  "Close grip bench press",
  "Skull crushers",
  "Overhead tricep extension",
  "Diamond Push ups",
];

const exerciseOptionsShoulders = [
  "Overhead press",
  "Lateral raises",
  "Front raises",
  "Rear deltoid flyes",
  "Upright rows",
  "Shrugs",
];

const exerciseOptionsLegs = [
  "Squats",
  "Deadlifts",
  "Leg press",
  "lunges",
  "Romanian deadlifts",
  "Leg extensions",
  "Leg curls",
  "Calf raises",
  "Bulgarian split squats",
  "Hack squats",
];
const exerciseOptionsAbs = [
  "Crunches",
  "Planks",
  "Leg raises",
  "Russian twists",
  "Bicycle twists",
  "Hanging leg Raises",
  "Cable crunches",
];

const exerciseOptionsCardio = [
  "Running",
  "Cycling",
  "Swimming",
  "Jumping rope",
  "Stair climbing",
  "Kickboxing",
];

let type;
// Initialize an array to store the selected values for each exercise
const selectedExerciseValues = [];
function generateExerciseInputs() {
  // Get the number of exercises from the user input
  const numExercises = parseInt(document.getElementById("numExercises").value);

  // Get the container where exercise inputs will be added
  const exerciseInputsDiv = document.getElementById("exerciseInputs");

  // Clear previous inputs
  exerciseInputsDiv.innerHTML = "";

  // Loop to create input selections for each exercise
  for (let i = 1; i <= numExercises; i++) {
    // Create a label for the exercise
    const exerciseLabel = document.createElement("label");
    exerciseLabel.textContent = `Exercise ${i}:`;

    // Create a select element for the exercise
    const exerciseSelect = document.createElement("select");
    exerciseSelect.name = `exercise${i}`;
    exerciseSelect.classList.add("m-l", "p-l");

    // Determine the workout type selected by the user
    type = document.getElementById("exercisesCategory").value;

    // Define exerciseOptions arrays based on the workout type
    let exerciseOptions = [];

    if (type === "Chest") {
      exerciseOptions = exerciseOptionsChest;
    } else if (type === "Back") {
      exerciseOptions = exerciseOptionsBack;
    } else if (type === "Shoulders") {
      exerciseOptions = exerciseOptionsShoulders;
    } else if (type === "Biceps") {
      exerciseOptions = exerciseOptionsBiceps;
    } else if (type === "Triceps") {
      exerciseOptions = exerciseOptionsTriceps;
    } else if (type === "Abs") {
      exerciseOptions = exerciseOptionsAbs;
    } else if (type === "Cardio") {
      exerciseOptions = exerciseOptionsCardio;
    } else {
      exerciseOptions = exerciseOptionsLegs;
    }

    // Create and add options to the select dropdown
    for (let j = 0; j < exerciseOptions.length; j++) {
      const optionText = exerciseOptions[j];
      const option = document.createElement("option");
      option.value = optionText;
      option.text = optionText;
      exerciseSelect.appendChild(option);
    }

    // Store the selected value in the array when the selection changes
    exerciseSelect.addEventListener("change", function () {
      selectedExerciseValues[i - 1] = exerciseSelect.value;
    });

    // Add the label, select, and line break to the container
    exerciseInputsDiv.appendChild(exerciseLabel);
    exerciseInputsDiv.appendChild(exerciseSelect);
    exerciseInputsDiv.appendChild(document.createElement("br"));
  }

  // Display the submit button
  const hiddenBtn = document.querySelector(".hidden-button");
  hiddenBtn.classList.add("flex-center");
  hiddenBtn.style.display = "flex";

  // You can now access the selectedExerciseValues array to get the selected values.
  console.log("Selected Exercise Values:", selectedExerciseValues);
}

const submit3 = document.getElementById("submit-3");
submit3.addEventListener("click", () => {
  // Initialize an array to store the selected values for each exercise
  const workoutContainer = document.getElementById("workout-container");

  const workoutCard = document.createElement("div");

  workoutCard.classList.add("workout-card", "flex-left", "m-m");

  const iconContainer = document.createElement("div");
  iconContainer.classList.add("icon-container", "flex-center");

  const cardImg = document.createElement("img");
  cardImg.classList.add("w-icon");

  if (type === "Chest") {
    cardImg.src = "chest.png";

    iconContainer.classList.add("bg-lemon");
  } else if (type === "Triceps" || type === "Biceps") {
    cardImg.src = "strong.png";
    iconContainer.classList.add("bg-purple");
  } else if (type === "Legs") {
    cardImg.src = "leg.png";
    iconContainer.classList.add("bg-cyan");
  } else if (type === "Abs") {
    cardImg.src = "abs.png";
    iconContainer.classList.add("bg-coral");
  } else if (type == "Cardio") {
    cardImg.src = "exercise.png";
    iconContainer.classList.add("bg-powder-blue");
  } else if (type === "Back") {
    cardImg.src = "back.png";
    iconContainer.classList.add("bg-violet");
  } else {
    cardImg.src = "shoulder.png";
    iconContainer.classList.add("bg-red");
  }

  iconContainer.appendChild(cardImg);

  const wName = document.createElement("div");
  wName.classList.add("flex-center", "m-m", "heading2");
  wName.textContent = type;

  const dropIcon = document.createElement("i");
  dropIcon.classList.add("fa-solid", "fa-caret-down", "icon");

  dropIcon.addEventListener("click", () => {
    const displayStyle = displayList.style.display;

    // Toggle the visibility of the exercise list
    if (displayStyle === "none" || displayStyle === "") {
      displayList.style.display = "block"; // Show the list
    } else {
      displayList.style.display = "none"; // Hide the list
    }
  });

  const displayList = document.createElement("div");
  displayList.classList.add("detail", "m-m");

  const day = document.createElement("div");
  day.classList.add("heading2", "p-l");
  const dayValue = document.getElementById("day").value;
  day.textContent = `Day : ${dayValue}`;

  displayList.appendChild(day);
  for (let x = 1; x <= selectedExerciseValues.length; x++) {
    const exDiv = document.createElement("div");
    exDiv.classList.add("flex-left", "p-l");
    exDiv.textContent = `Excercise ${x} :${selectedExerciseValues[x - 1]}`;

    displayList.appendChild(exDiv);
  }

  workoutCard.appendChild(iconContainer);
  workoutCard.appendChild(wName);
  workoutCard.append(dropIcon);

  workoutContainer.appendChild(workoutCard);

  workoutContainer.appendChild(displayList);
  const hide = document.getElementById("hide");
  hide.style.display = "none";
});

//  const dropBtn = document.querySelectorAll('.icon');
//  const extandList = document.querySelectorAll('.detail');
//  let visible = false;

//  for (let a = 0; a < dropBtn.length; a++) {
//      dropBtn[a].addEventListener('click', () => {
//          // Toggle the visibility
//          visible = !visible;

//          if (visible) {
//              extandList[a].style.display = 'grid';
//          } else {
//              extandList[a].style.display = 'none';
//          }
//          visible=!visible
//      });
//  }

// const dropBtn = document.querySelectorAll('.icon');
// const extandList = document.querySelectorAll('.detail');
// let visible = false;

// for (let a = 0; a < dropBtn.length; a++) {
//     dropBtn[a].addEventListener('click', (function (index) {
//         return function () {
//             // Toggle the visibility for the specific element
//             visible = !visible;

//             if (visible) {
//                 extandList[index].style.display = 'none';
//             } else {
//                 extandList[index].style.display = 'grid';
//             }
//         };
//     })(a));
// }

const dropBtn = document.querySelectorAll(".icon");
const extandList = document.querySelectorAll(".detail");
let visible = false;

dropBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    visible = !visible;

    if (visible) {
      extandList[index].style.display = "grid";
    } else {
      extandList[index].style.display = "none";
    }
  });
});

const showWorkout = document.getElementById("show-workout");
let show = false;
showWorkout.addEventListener("click", () => {
  const hide = document.getElementById("hide");
  if (hide) {
    hide.style.display = "flex";
  } else {
    hide.style.display = "none";
  }
  show = !show;
});


// using an api to count the steps of the user in real time ...
let stepCount = 0;
let isCounting = false;
let lastAcceleration = 0;
let accelerationThreshold = 10; // Adjust this value for sensitivity

function updateStepCount() {
    document.getElementById('stepCount').textContent = stepCount;
}

function startCounting() {
    if (!isCounting) {
        window.addEventListener('devicemotion', countSteps);
        isCounting = true;
        document.getElementById('startButton').disabled = true;
        document.getElementById('stopButton').disabled = false;
    }
}

function stopCounting() {
    if (isCounting) {
        window.removeEventListener('devicemotion', countSteps);
        isCounting = false;
        document.getElementById('startButton').disabled = false;
        document.getElementById('stopButton').disabled = true;
    }
}

function countSteps(event) {
    const acceleration = event.acceleration;
    const totalAcceleration = Math.sqrt(
        acceleration.x * acceleration.x +
        acceleration.y * acceleration.y +
        acceleration.z * acceleration.z
    );

    if (totalAcceleration > accelerationThreshold && lastAcceleration <= accelerationThreshold) {
        stepCount++;
        updateStepCount();
    }

    lastAcceleration = totalAcceleration;
}
function resetCount() {
  stepCount = 0;
  updateStepCount();
}

document.getElementById('startButton').addEventListener('click', startCounting);
document.getElementById('stopButton').addEventListener('click', stopCounting);
document.getElementById('resetButton').addEventListener('click', resetCount);

