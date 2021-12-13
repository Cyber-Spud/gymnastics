//  Things to add:
//  Total score field as percentage
//  Username
//  More data on dropdown menu entry name (Total)
//  A clear localStorage option
// numerical input for iOS
// Standing long jump placeholder auto calculate

// Bug: If date entered, form is not needing to be validated on safari for iOS

// QUestion: Object pointers as string

const ctx1 = document.getElementById("chart__exercises").getContext("2d");
const ctx2 = document.getElementById("chart__domain").getContext("2d");

const url = (new URLSearchParams(window.location.search).get('profile')).toString()
let profile
if (url == 'beginnerProfile1') profile = beginnerProfile1;
else if (url == 'beginnerProfile2') profile = beginnerProfile2;
else if (url == 'intermediateProfile1') profile = intermediateProfile1;
else if (url == 'intermediateProfile2') profile = intermediateProfile2;
else if (url == 'advancedProfile1') profile = advancedProfile1;

let nullData = new Array(13).fill(0, 0, 13);

// Preset student scores for demo purposes
let webInput = [];
webInput[0] = [[3, 4, 5, 3, 2, 5, 4, 2, 5, 3, 2, 3, 4, 5], ["1997-01-02"]];
webInput[1] = [[4, 5, 6, 7, 6, 5, 4, 3, 6, 4, 5, 6, 7, 7], ["1998-05-15"]];
webInput[2] = [[8, 8, 7, 7, 6, 6, 9, 9, 9, 10, 10, 10, 10, 5], ["1999-03-22"]];

webInput.forEach(array => {
  // console.log(array[0])
  let percent = parseInt(array[0].reduce((a,b)=>a+b)/130*100)
  array.push(percent)
  // console.log(array[2])
});

// Adds to webInput array from localStorage
if (!localStorage.inputIndex) localStorage.setItem("inputIndex", 3);
for (let i = 3; i < localStorage.inputIndex; i++) {
  let array = JSON.parse(localStorage["results" + i]).map((n) => parseInt(n));
  let date = localStorage["date" + i];
  let percent = localStorage["percent"+i]

  webInput[i] = [array, [date], percent];
}

// Creates array out of beginnerProfileTest object

let beginnerProfileTestArray = [];

for (domain in profile) {
  profile[domain].forEach(x => beginnerProfileTestArray.push(x))
}

const scoreContainer = document.getElementById("score-form")

// Creates the training domain divs for the individual exercises to be placed into

const domainDivGenerator = () => {

  let domainNumber = Object.values(profile)
  // console.log(domainNumber[0].length)

  for (let i = 0; i < domainNumber.length; i++) {
    let div = document.createElement('div')
    // let p = document.createElement('p')
    // console.log(domainNumber[i].length)

    div.className = (domainNumber[i].length == 3) ? "domain-container span-three" : "domain-container"; 
    // div.innerHTML += `<p class="domain-container__title>TITLE</p>`
    // p.className = 'domain-container__title'
    // p.innerHTML = Object.keys(profile)[i]

    scoreContainer.append(div)
    // scoreContainer.append(p)

  }
}

domainDivGenerator()

const pointsParagraph = document.getElementsByClassName("points");



// Creates a height input if required for scoring



const heightDivGenerator = () => {

  let div = document.createElement('div')
  div.className = "domain-container";
  div.id = "height-domain" 
  scoreContainer.append(div)

  const heightDomain = document.getElementById('height-domain')
  div = document.createElement('div')
  div.className = "input-container__height"
  div.id = "height-container"
  div.innerHTML = `<div id="height-data-entry" class="input-container__data-entry"></div>`;
  heightDomain.append(div)

  let label = document.createElement('label')
  label.innerHTML = "Athlete Height"
  const heightContainerChild = document.getElementById("height-container")
  heightContainerChild.prepend(label)

  const heightDataEntry = document.getElementById("height-data-entry")
  
  let input = document.createElement('input')
  input.id = 'athlete-height';
  input.min = 54
  input.max = 272;
  input.minLength = 1;
  input.maxLength = 3;
  input.placeholder = "-";
  input.required = "required";
  input.inputMode = "numeric"
  input.type = "text";
  input.pattern="[0-9]*"

  input.addEventListener('change', () => {
   heightPercentInputHandler()
  })

  let p = document.createElement('p')
  p.className = 'score-measure'
  p.innerHTML = 'cm'

  heightDataEntry.append(input, p)
}

if (profile != beginnerProfile1 && profile != beginnerProfile2) heightDivGenerator()

// Creates final div container and elements for form submission

const finalDivGenerator = () => {
  let div = document.createElement('div')
  div.className = 'input-container__final'

  div.innerHTML = `<div class="input-container-half" id="input-container-half__points">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-plus-square"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="12" y1="8" x2="12" y2="16"></line>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
  <p id="total-score"></p>
  </div>
  <input
  class="input-container-half"
  id="input-container-half__date"
  type="date"
  value="2021-12-12"
  required="required"
  />
  <input
  class="input-container-half"
  id="input-container-half__submit"
  value="submit"
  type="submit"
  />
  </div>`
  scoreContainer.append(div)
  }

finalDivGenerator()


// Creates input container for each exercise in the profile test

const domainContainer = document.getElementsByClassName("domain-container")

for (let j = 0; j < Object.keys(profile).length; j++) {
  let domain = Object.keys(profile)[j];
  console.log(profile[domain])
  let p = document.createElement('p')
  p.className = 'domain-container__title'
  p.innerHTML = domain
  domainContainer[j].append(p)
  for (let i = 0; i < profile[domain].length; i++) {
    let div = document.createElement('div');
    div.className = 'input-container';
    div.innerHTML = `<div class="input-container__data-entry"></div>`;
    domainContainer[j].appendChild(div);
    // console.log("input")
  }
}



const inputContainer = document.getElementsByClassName("input-container")
const inputContainerDataEntry = document.getElementsByClassName("input-container__data-entry");

const heightPercentInputHandler = (input) => {
  
  let athleteHeightPointer = document.getElementById('athlete-height')
  let longJumpScorePointer = document.getElementById('standing-long-jump')

  let score = parseInt((longJumpScorePointer.value/athleteHeightPointer.value)*100);
  let points = Math.floor((score-100)/beginnerProfileTestArray[7].maxPercentage * 10);
  
  if (points == NaN) points = "No height"
  else if (points < 0) points = 0;
  else if (points > 10) points = 10;
  
  pointsParagraph[7].innerHTML = points;
  pointsParagraph[7].valueAsNumber = points;

  totalScoreHandler(7);
     
}

const pressHsFromStraddleStandPointsHandler = (input, index) => {
  let maxPoints = (beginnerProfileTestArray[index].maxPoints == undefined) ? 10 : beginnerProfileTestArray[index].maxPoints;
      
  const score = parseInt(input.value);
  let points = Math.floor((100-score)/10);
  if (points < 0) points = 0;
  else if (points > maxPoints) points = maxPoints;
  
  pointsParagraph[index].innerHTML = points;
  pointsParagraph[index].valueAsNumber = points
  totalScoreHandler(index);
}

const chestToBarTgHandler = (input, index) => {
  let maxPoints = (beginnerProfileTestArray[index].maxPoints == undefined) ? 10 : beginnerProfileTestArray[index].maxPoints;
      
  const score = parseInt(input.value);
  
  let points

  if (score <= 10) points = Math.floor(score/2);
  else if (score > 10) points = (score-5)

  if (points < 0) points = 0;
  else if (points > maxPoints) points = maxPoints;
  
  pointsParagraph[index].innerHTML = points;
  pointsParagraph[index].valueAsNumber = points
  totalScoreHandler(index);
}


// Adds input container + children to the DOM using data from the selected profile test

const populateInputGenerator = () => {

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

    if (beginnerProfileTestArray[l].id == 'standing-long-jump') {
      input.addEventListener('change', () => {
        heightPercentInputHandler()
      })
    } else if (beginnerProfileTestArray[l].id == "press-hs-from-straddle-stand") {
        input.addEventListener('change', () => {
          pressHsFromStraddleStandPointsHandler(input, l)
      })
    } else if (beginnerProfileTestArray[l].id == "chest-to-bar-tg") {
        input.addEventListener('change', () => {
          chestToBarTgHandler(input, l)
      })
      }
     else {

      let maxPoints = (beginnerProfileTestArray[l].maxPoints == undefined) ? 10 : beginnerProfileTestArray[l].maxPoints;
      input.addEventListener('change', () => {
      const score = parseInt(input.value);
      let points = Math.floor(score / input.max * maxPoints);
      if (points < 0) points = 0;
      else if (points > maxPoints) points = maxPoints;
      
      
      pointsParagraph[l].innerHTML = points;
      pointsParagraph[l].valueAsNumber = points;

      totalScoreHandler(l);
    }
      )};

    svgDiv.className = "points-icon__container";
    svgDiv.innerHTML = (`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>`);

    pPoints.innerHTML = "0";
    pPoints.valueAsNumber = 0;
    pPoints.className = "points";

    label.for = input.id;
    label.innerHTML = beginnerProfileTestArray[l].text;

    if (input.id.length > 20) label.setAttribute('id', 'small-font');


    inputContainer[l].prepend(label);
    inputContainerDataEntry[l].append(input, p, svgDiv, pPoints);
    // inputContainerDataEntry[l].append(p);
    // inputContainerDataEntry[l].append(svgDiv);
    // inputContainerDataEntry[l].append(pPoints);
  }
}

populateInputGenerator()


// Calculates total score

const totalScorePElement = document.getElementById("total-score");
totalScorePElement.innerHTML = "0/130 (0%)"

const totalScoreHandler = (index) => {
  let totalScore = 0;  
  for (let o = 0; o < inputContainer.length; o++) {
    totalScore += pointsParagraph[o].valueAsNumber;
  }
  console.log("Total score = " + totalScore);

  let totalScorePercent = parseInt(totalScore/130*100);
  console.log(totalScorePercent)

  totalScorePElement.innerHTML = totalScore+"/130 " + " (" + totalScorePercent + "%)";
  totalScorePElement.value = totalScorePercent;

};

// Calculates label font size and layout with responsive functionality

const profileArray = Object.values(profile)
const dataLabelsSmallLineMaxLength = 17
let dataLabels = []

const labelMaker = (maxLineLength) => {
  for (domain in profileArray) {
    for (let i = 0; i < profileArray[domain].length; i++) {
      let text = profileArray[domain][i].label;
      if (text.length > maxLineLength) {
        textArray = text.split(" ");
        let firstLine = textArray.shift();
        while (firstLine.length + textArray[0].length < maxLineLength) {
          firstLine += " " + textArray.shift();
        }
        secondLine = textArray.toString().replaceAll(",", " ");
        text = [firstLine, secondLine];        
      }
      dataLabels.push(text)
    }
  }
}

const chartLabelHandler = () => {
  if (window.innerWidth < 583) {
    labelMaker(17)
    // if (profile == beginnerProfile1) dataLabels = beginnerProfile1DataLabelsSmall;
    // if (profile == beginnerProfile2) dataLabels = beginnerProfile2DataLabelsSmall;
    // if (profile == intermediateProfile1) dataLabels = intermediateProfile1DataLabelsSmall;
    // if (profile == intermediateProfile2) dataLabels = intermediateProfile2DataLabelsSmall;
    // if (profile == advancedProfile1) dataLabels = advancedProfile1DataLabelsSmall;

  } else {
    labelMaker(17)
    // if (profile == beginnerProfile1) dataLabels = beginnerProfile1DataLabelsBig;
    // if (profile == beginnerProfile2) dataLabels = beginnerProfile2DataLabelsBig;
    // if (profile == intermediateProfile1) dataLabels = intermediateProfile1DataLabelsBig;
    // if (profile == intermediateProfile2) dataLabels = intermediateProfile2DataLabelsBig;
    // if (profile == advancedProfile1) dataLabels = advancedProfile1DataLabelsBig;


  }
}

chartLabelHandler()

let graphLabelFontSize = window.innerWidth / 100 + 8;

if (graphLabelFontSize > 16) graphLabelFontSize = 16;

window.addEventListener("resize", () => {

  // console.log('resize')
  graphLabelFontSize = window.innerWidth / 100 + 8;
  if (graphLabelFontSize > 16) graphLabelFontSize = 16;

  myChartExercises.options.scale.pointLabels.fontSize = graphLabelFontSize;
  myChartDomain.options.scale.pointLabels.fontSize = graphLabelFontSize;


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
      menuOption.text = `${webInput[j][1]} (${webInput[j][2]}%)`;
      dateSelect[k].add(menuOption);
    }
  }

  let dateSelectDelete = document.getElementById("test-date-selector__delete");


      let menuOption = document.createElement("option");
      menuOption.value = "";
      menuOption.text = "Delete all stored data";
      menuOption.className = "black-font";
      dateSelectDelete.add(menuOption);
 
// Handler to change graph visuals after dropdown menu change
const graphChange0 = () => graphChangeHandler(0);
const graphChange1 = () => graphChangeHandler(1);


const graphChangeHandler = (graphIndex) => {
  let dateIndexNum = dateSelect[graphIndex].value;

  myChartExercises.data.datasets[graphIndex].data = webInput[dateIndexNum][0];
  myChartExercises.data.datasets[graphIndex].label = `${webInput[dateIndexNum][1]} (${webInput[dateIndexNum][2]}%)`;
  myChartDomain.data.datasets[graphIndex].data = domainHandler(
    webInput[dateIndexNum][0]
  );
  myChartDomain.data.datasets[graphIndex].label = `${webInput[dateIndexNum][1]} (${webInput[dateIndexNum][2]}%)`;

  myChartExercises.update();
  myChartDomain.update();
};

const deleteLocalStorage = () => {
  localStorage.clear()
  location.reload()
}

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

  localStorage.setItem(
    "results" + localStorage.inputIndex,
    JSON.stringify(pointsArray)
  );
  localStorage.setItem("date" + localStorage.inputIndex, inputDate);

  localStorage.setItem("percent" + localStorage.inputIndex, totalScorePElement.value)

  localStorage.inputIndex++;
  
  location.reload()

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
dateSelectDelete.onchange = deleteLocalStorage