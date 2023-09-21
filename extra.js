const noticeContainer=document.getElementById('notice-container');
const notDiv1=document.createElement('div');
notDiv1.textContent="Steps target :";

const notStep=document.createElement('div');
notStep.textContent=userSteps;

const notDiv2=document.createElement('div');
notDiv1.textContent="Calories target  :"

const notCal=document.createElement('div');
notCal.textContent=cal;

noticeContainer.appendChild(notDiv1);
noticeContainer.appendChild(notStep);
noticeContainer.appendChild(notDiv2);
noticeContainer.appendChild(notCal);





function generateExerciseInputs() {
    const numExercises = parseInt(document.getElementById("numExercises").value);
    const exerciseInputsDiv = document.getElementById("exerciseInputs");
    exerciseInputsDiv.innerHTML = ''; // Clear previous inputs

    for (let i = 1; i <= numExercises; i++) {
        const exerciseLabel = document.createElement("label");
        exerciseLabel.textContent = `Exercise ${i}:`;

         exerciseSelect = document.createElement("select");
        exerciseSelect.name = `exercise${i}`;
        exerciseSelect.classList.add('m-l','p-l');
        //    checking workout type
        let exerciseOptions=[];
        let type=document.getElementById('exercisesCategory').value;

        if(type ==='chest'){
            exerciseOptions=exerciseOptionsChest;
        }else if(type ==='back'){
            exerciseOptions=exerciseOptionsBack;
        }else if(type ==='shoulders'){
            exerciseOptions=exerciseOptionsShoulders;
        }else if(type ==='biceps'){
            exerciseOptions=exerciseOptionsBiceps;
        }else if(type ==='tricpes'){
            exerciseOptions=exerciseOptionsTriceps;
        }else if(type ==='abs'){
            exerciseOptions=exerciseOptionsAbs;
        }else if(type ==='cardio'){
            exerciseOptions=exerciseOptionsCardio;
        }
          
        // Create and add options to the select dropdown
        for (let j = 0; j < exerciseOptions.length; j++) {
            const optionText = exerciseOptions[j];
           const  option = document.createElement("option");
            option.value = optionText;
            option.text = optionText;
            exerciseSelect.appendChild(option);
            
        }

        exerciseInputsDiv.appendChild(exerciseLabel);
        exerciseInputsDiv.appendChild(exerciseSelect);
        exerciseInputsDiv.appendChild(document.createElement("br"));
        userExDetail=userExDetail=exerciseSelect.value;
    }
    // displaying the submit button
    const hiddenBtn=document.querySelector('.hidden-button');
    hiddenBtn.classList.add('flex-center');
    hiddenBtn.style.display='flex';
    
}

let userExDetail=[];
let exerciseSelect;