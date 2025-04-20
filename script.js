
const quiz = [
  {
    question: "Which of the following is NOT a valid HTML tag?",
    option1: "header",
    option2: "section",
    option3: "paragraph",
    option4: "footer",
    correct: "c",
  },

  {
    question: "What is the purpose of CSS?",
    option1: "To define the structure of a web page",
    option2: "To add interactivity to a web page",
    option3: "To manage the database of a website",
    option4: "To control the presentation and layout of a web page",
    correct: "d",
  },

  {
    question: "Which CSS property is used to change the text color of an element?",
    option1: "color",
    option2: "font-color",
    option3: "text-color",
    option4: "font-style",
    correct: "a",
  },

  {
    question: "Which of the following is a semantic HTML tag?",
    option1: "div",
    option2: "section",
    option3: "span",
    option4: "br",
    correct: "b",
  },

  {
    question: "Which Front-End framework is developed by Facebook and is used for building user interfaces?",
    option1: "Angular",
    option2: "React",
    option3: "Vue.js",
    option4: "jQuery",
    correct: "b",
  },

  {
    question: "What does DOM stand for?",
    option1: "Document Object Mapper",
    option2: "Document Object Model",
    option3: "Data Object Model",
    option4: "Digital Ordinance Model",
    correct: "b",
  },

  {
    question: "Which JavaScript function is used to schedule a function to be executed after a specific interval?",
    option1: "setInterval()",
    option2: "setImmediate()",
    option3: "setTimeout()",
    option4: "requestAnimationFrame()",
    correct: "c",
  },

  {
    question: "What is the purpose of the “flexbox” layout in CSS?",
    option1: "To create responsive images on a web page.",
    option2: "To apply rounded corners to elements.",
    option3: "To create flexible and responsive page layouts.",
    option4: "To add drop shadows to elements.",
    correct: "c",
  },

  {
    question: "Which HTML tag is used to embed an image on a web page?",
    option1: "img",
    option2: "image",
    option3: "picture",
    option4: "src",
    correct: "a",
  },

  {
    question: "Variables declared with the let keyword have what type of scope?",
    option1: "Function scope",
    option2: "Block scope",
    option3: "Inline scope",
    option4: "Global scope",
    correct: "b",
  },

  {
    question: "Which tag is used to create a hyperlink in HTML?",
    option1: "link",
    option2: "a",
    option3: "href",
    option4: "hyperlink",
    correct: "b",
  },

  {
    question: "Which attribute must have a unique value each time it is used in an HTML document?",
    option1: "Title",
    option2: "Class",
    option3: "Style",
    option4: "Id",
    correct: "d",
  },

  {
    question: "Which CSS property will not trigger layout recalculation?",
    option1: "Top",
    option2: "Opacity",
    option3: "Width",
    option4: "Height",
    correct: "b",
  },

  {
    question: "What does the === comparison operator do?",
    option1: "It sets one variable equal to another in both value and type",
    option2: " It tests for equality of type only",
    option3: " It tests for equality of value only",
    option4: "It tests for equality of value and type",
    correct: "d",
  },

  {
    question: "In this code, what is the term for the h1? h1 { color: red; font-size: 5em; }",
    option1: "Selector",
    option2: "Combinator",
    option3: "Declarator",
    option4: "Markup",
    correct: "a",
  },

  {
    question: "You have used display: none in your stylesheet. Which users will be able to see or hear this content?",
    option1: "All users",
    option2: "Users who can see the content on screen",
    option3: " No users",
    option4: "Screen reader users",
    correct: "c",
  },

  {
    question: "Which choice is not part of CSS box model",
    option1: "Margin",
    option2: "Border",
    option3: "Padding",
    option4: "Paragraph",
    correct: "d",
  },

  {
    question: "How many columns will there be, given this code? .container { width: 600px; Column-width: 200px; column-gap: 50px;}",
    option1: "One",
    option2: "Three",
    option3: "Four",
    option4: "Two",
    correct: "d",
  },

  {
    question: "Which array method should you apply to run a function for every item within an array, returning an array of all items for which the function is true?",
    option1: "Every()",
    option2: "Map()",
    option3: "ForEach()",
    option4: "Filter()",
    correct: "d",
  },

  {
    question: "What is the name of the event that occurs when the mouse pointer hovers over an element?",
    option1: "Load",
    option2: "Mouseover",
    option3: "Hover",
    option4: "Focus",
    correct: "b",
  },
];

const option = document.querySelectorAll(".option")

//submit button
const button = document.getElementById("btn");

//option text
const optionText = document.querySelectorAll(".optionText");

//option radio button
const optionRadio = document.querySelectorAll(".optionRadio");
console.log(optionRadio);

let total = quiz.length;
let right = 0;
let wrong = 0;

let index = 0;

//print the questions and options
const loadQuestion = () => {
  //fetch the quiz array
  const data = quiz[index];

  const question = document.querySelector(".question");
  question.innerHTML = `${index+1})  ${data.question}`;

  optionText[0].innerHTML = data.option1;
  optionText[1].innerHTML = data.option2;
  optionText[2].innerHTML = data.option3;
  optionText[3].innerHTML = data.option4;

};



//function if clicking submit
function submit() {
  const data = quiz[index];

  const ans = getAns();

  let correctRadio;
  for (const element of optionRadio) {
    if(element.value === data.correct){
      correctRadio = element.parentElement
    }
  }

  const checkedDiv = getCheckedDiv();

  //right = green ; wrong = red
  if (ans === data.correct) {
    checkedDiv.style.backgroundColor = "green";
    right++;
  } else {
    checkedDiv.style.backgroundColor = "red";
    correctRadio.style.backgroundColor = "green"
    wrong++;
  }
  scoreCard();
}


//get checked input value
const getAns = () => {
  for (const element of optionRadio) {
    if (element.checked) {
      return element.value;
    }
  }
};


//get the checked input parentElement
const getCheckedDiv = () => {
  for (const element of optionRadio) {
    if (element.checked) {
      return element.parentElement;
    }
  }
};


function scoreCard() {
  const rightDiv = document.querySelector(".right");
  const wrongDiv = document.querySelector(".wrong");

  rightDiv.innerHTML = `${right}/${total}`;
  wrongDiv.innerHTML = `${wrong}/${total}`;
}

loadQuestion();

const nextButton = document.getElementById("nextBtn")

function nextQuestion() {

  if(index===quiz.length-1){
    document.querySelector(".question").innerHTML = "All Questions are Completed"
    document.querySelector(".options").style.display = "none"
    button.style.display = "none"
    nextButton.style.display = "none"
  }

  else{
    for (const element of option) {
      element.style.backgroundColor = "#fdcb6e"
      element.firstElementChild.checked = false
    }
  
    index++;
    loadQuestion()
  }
}


//name.html
