//  Things to add:
//  Total score field as percentage
//  Username
//  More data on dropdown menu entry name (Total)
//  A clear localStorage option
// numerical input for iOS

// Bug: If date entered, form is not needing to be validated on safari for iOS

const ctx1 = document.getElementById("chart__exercises").getContext("2d");
const ctx2 = document.getElementById("chart__domain").getContext("2d");

let nullData = new Array(13).fill(0, 0, 13);

// Preset student scores for demo purposes
let webInput = [];
webInput[0] = [[3, 4, 5, 3, 2, 5, 4, 5, 3, 2, 3, 4, 5], ["2011-01-02"]];
webInput[1] = [[4, 5, 6, 7, 6, 5, 4, 3, 4, 5, 6, 7, 7], ["2015-05-15"]];
webInput[2] = [[8, 8, 7, 7, 6, 6, 9, 9, 10, 10, 10, 10, 5], ["2018-03-22"]];

// Adds to webInput array from localStorage
if (!localStorage.inputIndex) localStorage.setItem("inputIndex", 3);
for (let i = 3; i < localStorage.inputIndex; i++) {
  let array = JSON.parse(localStorage["results" + i]).map((n) => parseInt(n));
  let date = localStorage["date" + i];

  webInput[i] = [array, [date]];
}

const beginnerProfileTest = {
  coreEndurance: [
    {
      id: "dish-hold",
      text: "Dish Hold",
      scoreMeasure: "secs",
      scoreMax: 100
    },
    {
      id: "arch-hold",
      text: "Arch Hold",
      scoreMeasure: "secs",
      scoreMax: 100
    }
  ],
  coreStrength: [
    {
      id: "tucked-v-ups",
      text: "Tucked V Ups",
      scoreMeasure: "reps",
      scoreMax: 20
    },
    {
      id: "tucked-l-hang",
      text: "Tucked L Hang",
      scoreMeasure: "secs",
      scoreMax: 60
    },
    {
      id: "tucked-l-sit",
      text: "Tucked L Sit",
      scoreMeasure: "secs",
      scoreMax: 60
    }
  ],
  armStrength: [
    {
      id: "push-ups",
      text: "Push Ups",
      scoreMeasure: "reps",
      scoreMax: 20
    },
    {
      id: "chin-hang",
      text: "Chin Hang",
      scoreMeasure: "secs",
      scoreMax: 60
    }
  ],
  legStrength: [
    {
      id: "single-leg-squat-hold",
      text: "Single Leg Squat Hold",
      scoreMeasure: "secs L+R",
      scoreMax: 60
    },
    {
      id: "deck-squat",
      text: "Deck Squat",
      scoreMeasure: "reps",
      scoreMax: 50
    }
  ],
  handstand: [
    {
      id: "wall-handstand",
      text: "Wall Handstand",
      scoreMeasure: "secs",
      scoreMax: 100
    },
    {
      id: "headstand",
      text: "Headstand",
      scoreMeasure: "secs",
      scoreMax: 60
    }
  ],
  flexibility: [
    {
      id: "pike",
      text: "Pike",
      scoreMeasure: "cm",
      scoreMax: 20
    },
    {
      id: "shoulder-extention",
      text: "Shoulder Extention",
      scoreMeasure: "points",
      scoreMax: 10
    }
  ],
};

// Creates array out of beginnerProfileTest object

let beginnerProfileTestArray = [];

for (domain in beginnerProfileTest) {
  beginnerProfileTest[domain].forEach(x => beginnerProfileTestArray.push(x))
}

// Adds input container + children to the DOM using data from the selected profile test

const inputContainer = document.getElementsByClassName("input-container")
const inputContainerDataEntry = document.getElementsByClassName("input-container__data-entry");
const pointsParagraph = document.getElementsByClassName("points");

for (let l = 0; l < inputContainer.length; l++) {
  let input = document.createElement('input');
  let p = document.createElement('p');
  let label = document.createElement('label');
  let svgDiv = document.createElement('div')
  let pPoints = document.createElement('p')

  p.innerHTML = beginnerProfileTestArray[l].scoreMeasure;
  p.className = "score-measure";
  
  input.id = beginnerProfileTestArray[l].id;
  input.min = 0
  input.max = beginnerProfileTestArray[l].scoreMax;
  input.minLength = 1;
  input.maxLength = input.max.length;
  input.placeholder = beginnerProfileTestArray[l].scoreMax;
  input.required = "required";
  input.inputMode = "numeric"
  input.type = "text";
  input.pattern="[0-9]*"

  input.addEventListener('change', () => {
    const score = parseInt(input.value);
    console.log(score)
    let points = Math.floor(score / input.max * 10);
    if (points < 0) points = 0;
    else if (points > 10) points = 10;
    
    pointsParagraph[l].innerHTML = points;
    pointsParagraph[l].valueAsNumber = points;
  });

  svgDiv.className = "points-icon__container";
  svgDiv.innerHTML = (`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>`);
  
  console.log(svgDiv.class);

  pPoints.innerHTML = "0";
  pPoints.className = "points";

  label.for = input.id;
  label.innerHTML = beginnerProfileTestArray[l].text;

  inputContainer[l].prepend(label);
  inputContainerDataEntry[l].append(input);
  inputContainerDataEntry[l].append(p);
  inputContainerDataEntry[l].append(svgDiv);
  inputContainerDataEntry[l].append(pPoints);
}

// Calculates label font size and layout with responsive functionality

let dataLabels;
const dataLabelsBig = [
  "Dish Hold",
  "Arch Hold",
  "Tucked V Ups",
  "Tucked L Hang",
  "Tucked L Sit",
  "Push Ups",
  "Chin Hang",
  "Single Leg Hold",
  "Deck Squat",
  "Wall Handstand",
  "Headstand",
  "Pike",
  "Shoulder Extention",
];
const dataLabelsSmall = [
  "Dish Hold",
  "Arch Hold",
  ["Tucked", "V Ups"],
  ["Tucked", "L Hang"],
  ["Tucked", "L Sit"],
  "Push Ups",
  "Chin Hang",
  ["Single Leg", "Hold"],
  "Deck Squat",
  ["Wall", "Handstand"],
  "Headstand",
  "Pike",
  ["Shoulder", "Extention"],
];

if (window.innerWidth < 583) {
  dataLabels = dataLabelsSmall;
} else {
  dataLabels = dataLabelsBig;
}

let graphLabelFontSize = window.innerWidth / 100 + 8;

if (graphLabelFontSize > 16) graphLabelFontSize = 16;

window.addEventListener("resize", () => {
  graphLabelFontSize = window.innerWidth / 100 + 8;
  if (graphLabelFontSize > 16) graphLabelFontSize = 16;

  myChartExercises.options.scale.pointLabels.fontSize = graphLabelFontSize;
  myChartDomain.options.scale.pointLabels.fontSize = graphLabelFontSize;

  if (window.innerWidth < 583) myChartExercises.data.labels = dataLabelsSmall;
  else myChartExercises.data.labels = dataLabelsBig;

  myChartExercises.update();
  myChartDomain.update();
});

// This creates select elements for the graph dropdown menu to add to the DOM

let dateSelect = [];
dateSelect[0] = document.getElementById("test-date-selector__first");
dateSelect[1] = document.getElementById("test-date-selector__second");

for (let j = 0; j < localStorage.inputIndex; j++) {
  for (let k = 0; k < dateSelect.length; k++) {
    let menuOption = document.createElement("option");
    menuOption.value = j;
    menuOption.text = webInput[j][1];
    dateSelect[k].add(menuOption);
  }
}

// Handler to change graph visuals after dropdown menu change
const graphChange0 = () => graphChangeHandler(0);
const graphChange1 = () => graphChangeHandler(1);

const graphChangeHandler = (graphIndex) => {
  let dateIndexNum = dateSelect[graphIndex].value;

  myChartExercises.data.datasets[graphIndex].data = webInput[dateIndexNum][0];
  myChartExercises.data.datasets[graphIndex].label = webInput[dateIndexNum][1];
  myChartDomain.data.datasets[graphIndex].data = domainHandler(
    webInput[dateIndexNum][0]
  );
  myChartDomain.data.datasets[graphIndex].label = webInput[dateIndexNum][1];

  myChartExercises.update();
  myChartDomain.update();
};

// Converts user input of individual exercises into the exercise domains (Core Endurance, Flexibility, etc...)

const domainHandler = (webInput) => {
  let domain = [];
  domain[0] = (webInput[0] + webInput[1]) / 2;
  domain[1] = (webInput[2] + webInput[3] + webInput[4]) / 3;
  domain[2] = (webInput[5] + webInput[6]) / 2;
  domain[3] = (webInput[7] + webInput[8]) / 2;
  domain[4] = (webInput[9] + webInput[10]) / 2;
  domain[5] = (webInput[11] + webInput[12]) / 2;
  return domain;
};

// const scoreToPointConverter = (scoreArray) =>{
//   let pointArrayOutput = []
//   for (m = 0; m < beginnerProfileTestArray.length; m++) {
//     pointArrayOutput[m] = scoreArray[m] / beginnerProfileTestArray[m].scoreMax * 10;
//   };
//   return pointArrayOutput
// };

submitForm = () => {
  // let input = [];
  let pointsArray = []
  let inputDate = document.getElementById("input-container-half__date").value;
  
  for (let n = 0; n < pointsParagraph.length; n++) {
    pointsArray[n] = pointsParagraph[n].valueAsNumber
  }

  // input[0] = document.getElementById("dish-hold").value;
  // input[1] = document.getElementById("arch-hold").value;
  // input[2] = document.getElementById("tucked-v-ups").value;
  // input[3] = document.getElementById("tucked-l-hang").value;
  // input[4] = document.getElementById("tucked-l-sit").value;
  // input[5] = document.getElementById("push-ups").value;
  // input[6] = document.getElementById("chin-hang").value;
  // input[7] = document.getElementById("single-leg-squat-hold").value;
  // input[8] = document.getElementById("deck-squat").value;
  // input[9] = document.getElementById("wall-handstand").value;
  // input[10] = document.getElementById("headstand").value;
  // input[11] = document.getElementById("pike").value;
  // input[12] = document.getElementById("shoulder-extention").value;

  // pointsArray = scoreToPointConverter(input)

  localStorage.setItem(
    "results" + localStorage.inputIndex,
    JSON.stringify(pointsArray)
  );
  localStorage.setItem("date" + localStorage.inputIndex, inputDate);

  localStorage.inputIndex++;
};

let myChartExercises = new Chart(ctx1, {
  type: "radar",
  data: {
    labels: dataLabels,
    datasets: [
      {
        label: "                   ",
        data: nullData,
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: "                   ",
        data: nullData,
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  },
  options: {
    elements: { line: { tension: 0, borderWidth: 3 } },
    scale: {
      ticks: {
        min: 0,
        max: 10,
      },
      pointLabels: {
        fontSize: graphLabelFontSize,
      },
    },
    legend: {
      labels: {
        fontSize: graphLabelFontSize + 5,
      },
    },
  },
});

let myChartDomain = new Chart(ctx2, {
  type: "radar",
  data: {
    labels: [
      "Core Endurance",
      ["Core Strength/", "Power"],
      ["Arm Strength/", "Endurance"],
      "Leg Strength",
      "Handstand",
      "Flexibility",
    ],
    datasets: [
      {
        label: "                   ",
        data: nullData,
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: "                   ",
        data: nullData,
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  },
  options: {
    elements: { line: { tension: 0, borderWidth: 3 } },
    scale: {
      ticks: {
        min: 0,
        max: 10,
      },
      pointLabels: {
        fontSize: graphLabelFontSize,
      },
    },
    legend: {
      labels: {
        fontSize: graphLabelFontSize + 5,
      },
    },
  },
});

dateSelect[0].onchange = graphChange0;
dateSelect[1].onchange = graphChange1;
