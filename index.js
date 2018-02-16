'use strict';

let questionNumber = 0;
let scoreNumber = 0;

//Stores the questions and answers
const STORE = [
	{
		questNum: '1',
		question: 'What month was Harry Potter born?',
		answer1: 'July',
		answer2: 'August',
		answer3: 'January',
		answer4: 'February',
		correctAnswer: 'answer1',
		correctAnswerText: 'July',
	},
	{
		questNum: '2',
		question: 'Which of the following is not a horcrux?',
		answer1: `Ravenclaw's diadem`,
		answer2: 'Harry Potter',
		answer3: 'Sword of Gryffindor',
		answer4: `Hufflepuff's Cup`,
		correctAnswer: 'answer3',
		correctAnswerText: 'Sword of Gryffindor', 

	},	

	{
		questNum: '3',
		question: 'Which of these is not really an animal?',
		answer1: 'Fawkes',
		answer2: 'Mrs. Norris',
		answer3: 'Hedwig',
		answer4: 'Scabbers',
		correctAnswer: 'answer4',
		correctAnswerText: 'Scabbers', 
	},	

	{
		questNum: '4',
		question: `Why was the Elder Wand's allegiance to Harry Potter?`,
		answer1: 'Harry disarmed Malfoy',
		answer4: `It's only allegiant to someone who wanted to find it but not use it`,
		answer2: 'Voldemort lost to Harry',
		answer3: 'Dumbledore gave it to Harry in his will',
		correctAnswer: 'answer1',
		correctAnswerText: 'Harry disarmed Malfoy', 
	},	

	{
		questNum: '5',
		question: 'When Ron was under the lovespell, with whom was he infatuated?',
		answer1: 'Romilda Vane',
		answer2: 'Hermione Granger',
		answer3: 'Lavender Brown',
		answer4: 'Parvati Pavil',
		correctAnswer: 'answer1',
		correctAnswerText: 'Romilda Vane', 
	},	

	{
		questNum: '6',
		question: `What is the form of Hermione's patronus?`,
		answer1: 'Cat',
		answer2: 'Otter',
		answer3: 'Hare',
		answer4: 'Stag',
		correctAnswer: 'answer2',
		correctAnswerText: 'Otter' 
	},	

	{
		questNum: '7',
		question: `What creature was in the corner of Lupin's office the first time Harry visited?`,
		answer1: 'Phoenix',
		answer2: 'Jobberknoll',
		answer3: 'Bowtruckle',
		answer4: 'Grindylow',
		correctAnswer: 'answer4',
		correctAnswerText: 'Grindylow', 
	},	

	{
		questNum: '8',
		question: `Firenze is:`,
		answer1: `Hagrid's half-brother`,
		answer2: 'A centaur from the dark forest',
		answer3: 'The owner of The Three Broomsticks in Hogsmeade',
		answer4: 'The Charms professor at Hogwarts',
		correctAnswer: 'answer2',
		correctAnswerText: 'A centaur from the dark forest', 
	},	

	{
		questNum: '9',
		question: 'Which dragon did Harry Potter face in the Tri-Wizard Tournament?',
		answer1: 'Chinese Fireball',
		answer2: 'Swedish Shortsnout',
		answer3: 'Hungarian Horntail',
		answer4: 'Norwegian Ridgeback',
		correctAnswer: 'answer3',
		correctAnswerText: 'Hungarian Horntail', 
	},	

	{
		questNum: '10',
		question: 'Professor Lupin used which nickname at one point in his life?',
		answer1: 'Bitey',
		answer2: 'Moony',
		answer3: 'Prongs',
		answer4: 'Padfoot',
		correctAnswer: 'answer2',
		correctAnswerText: 'Moony' ,
	}
];


//start page content as a string
function startPageString () {
	console.log (`startPageString function accessed`);

	return `
		<form id = "startButton">
			<p><span> Are you a true fan of the Harry Potter movies?</span></p>
			<p><span> Let&lsquo;s find out&#33;</span></p>
			<p><span class = "spoilerWarning col-4"> Warning&#33; This quiz may contain spoilers. Do not play if you have not completed the entire series.</span></p>
			<p><span > Click the button to proceed. </span></p>
			<button type = "button" class = "startButton"> Alohamora&#33; </button>
			</div>
		</form>
	`;
}

//Action for start page button click
function startPageButtonClick () {
	console.log (`startPageButtonClick function accessed`);
	$('.mainContent').on('click', '.startButton', function (event) {
		console.log(`startButton pushed`);
		questionPage();
	});
}


//loads start page html
function startPage () {
	console.log (`startPage function accessed`);
	$('.trackingSection').hide();
	$('.mainContent').html(startPageString());

}

// Returns question content as a string
function getQuestion() {

	console.log (`getQuestion function accessed`);

	let questObject = Object.assign({}, STORE[questionNumber]);
	let questInsArray = [questObject.question, questObject.answer1, questObject.answer2, questObject.answer3, questObject.answer4];

	return `
		<form id = "questionForm">
			<p><span class = "question"> ${questInsArray[0]} </span></p>
			<div class = "answerBlock">
				<div class = "quizDiv"><input type="radio" name="answer" value="answer1" checked ><span id = "ans1"> ${questInsArray[1]} </span></div>
				<div class = "quizDiv"><input type="radio" name="answer" value="answer2"><span id = "ans2"> ${questInsArray[2]} </span></div>
				<div class = "quizDiv "><input type="radio" name="answer" value="answer3"><span id = "ans3"> ${questInsArray[3]}</span></div>
				<div class = "quizDiv "><input type="radio" name="answer" value="answer4"><span id = "ans4"> ${questInsArray[4]} </span></div>
			</div>
			<div class = "submitButton"><button type = "submit" value = "questionForm" class = "questionButton"> Revelio </button></div>
		</form>
	`
}

//Action for question page button click
function questionButtonClick() {

	console.log (`questionButtonClick function accessed`);

	$('.mainContent').on('click', '.questionButton', function (event) {
		event.preventDefault();
		console.log(`question button pushed`);
		let ansChoice = $('input:checked');
		let ansValue = ansChoice.val();
		console.log (`Chosen answer is ${ansValue}`);
		feedbackPage(ansValue);
	});	
}


//Loads question html
function questionPage() {

	console.log (`questionPage function accessed. Question number at time of access is ${questionNumber}`);

	$('.trackingSection').show();
	let questionContent = getQuestion();
	if (questionNumber < 10){
		$('.mainContent').html('');
		$('.mainContent').html(questionContent);
		questionTracking ();
	}
	else {
		finalPage();
	}
}

//Looks to see if user's answer matches the correct answer
function analyzeAnswer (ansValue) {
	console.log (`analyzeAnswer function accessed`);
	let correctAnsObj = Object.assign({}, STORE[questionNumber]);
	let correctAns = correctAnsObj.correctAnswer;
	
	if (correctAns === ansValue) {
		return true;
	}
	else {
		return false;
	}

}

//determines which feedback string to use and inputs into the html
function determineFeedback(ansValue) {

	console.log (`determineFeedback function accessed`);

	let fbStatus = analyzeAnswer (ansValue);

	if (fbStatus === true) {
		let correctChoice = correctAnsString();
		$('.mainContent').html('');
		$('.mainContent').html(correctChoice);
		currentScore ();
		scoreTracking ();
	}
	else {
		let wrongChoice = wrongAnsString();
		$('.mainContent').html('');
		$('.mainContent').html(wrongChoice);
	}

}

//Feedback page content for Correct Answer
function correctAnsString () {
	console.log (`correctAnsString function accessed`);

	return `
		<img src = "https://media.giphy.com/media/PXvCWUnmqVdks/giphy.gif" alt = "Professor McGonagall clapping" class = "feedbackImage col-6">
		<p><span class = "feedbackDetermination"> Correct&#33; </span></p>
		<p><span> Onward&#33; </span></p>
		<button type = "button" class = "fbButton"> Carpe Retractum </button>
	`;
}

//Feedback page content for Incorrect Answer
function wrongAnsString (ansValue) {
	console.log (`wrongAnsString function accessed`);

	let wrongAnsObj = Object.assign({}, STORE[questionNumber]);
	let correctAnsText = wrongAnsObj.correctAnswerText;

	return `
		<img src = "https://media.giphy.com/media/11uWns9suaeM1i/giphy.gif" alt = "Dumbledore shrugging" class = "feedbackImage col-6">
		<p><span class = "feedbackDetermination"> Incorrect.</span></p>
		<p><span class = "answerExplain"> The correct answer was "${correctAnsText}" </span></p>
		<p><span> Onward&#33; </span></p>
		<button type = "button" class = "fbButton"> Carpe Retractum </button>
	`;
}

//Action for feedback page button click
function getQuestionButtonClick () {
	console.log (`getQuestionButtonClick function accessed`);

	$('.mainContent').on('click', '.fbButton', function (event) {
		console.log(`Feedback's getQuestionButtonClick pushed for question ${questionNumber}`);
		currentQuestNumber ();
		questionPage();
	});
}

//loads the feedback page
function feedbackPage(ansValue) {
	console.log (`feedbackPage function accessed`);
	determineFeedback(ansValue);
}


//Content for Final Page if final score is 5 or less
function finalWinString () {
	console.log (`finalWinString function accessed`);
	return `
		<p><span> Your final score was ${scoreNumber}.</span></p>		
		<img src = "https://media.giphy.com/media/qPCln5TSOsdRS/giphy.gif" alt = "Dumbledore Dancing" class = "feedbackImage col-6">
		<p><span> Somebody used their Felix Felicis today&#33;</span></p>
		<p><span> Want to try again?</span></p>
		<button type = 'submit' class = "resetGame">Yes&#33;</button>
	`
}

//Content for Final Page if final score is over 5
function finalLoseString () {
	console.log (`finalLoseString function accessed`);
	return `
		<p><span> Your final score was ${scoreNumber} out of 10.</span></p>
		<img src = "https://media.giphy.com/media/A0GlPP8gwO4VO/giphy.gif" alt = "Malfoy facepalm" class = "feedbackImage col-6">
		<p><span> Perhaps you were under a Confundus charm&#46;</span></p>
		<p><span> Want to try again?</span></p>
		<button type = 'submit' class = "resetGame">Yes&#33;</button>
	`	
}

//determines the final ranking and updates with appropriate html
function determineFinalScore () {
	console.log (`determineFinalScore function accessed`);

	if (scoreNumber > 5) {
		$('.mainContent').html(finalWinString ());
	}
	else {
		$('.mainContent').html(finalLoseString());
	}
}

//Action for final page button click
function resetButtonClicked () {
	$('.mainContent').on('click', '.resetGame', function (event) {
		event.preventDefault();
		questionNumber = 0;
		scoreNumber = 0;
		startPage ();
	});
}

//loads final page content
function finalPage () {
	console.log (`finalPage function accessed`);
	$('.trackingSection').hide();
	determineFinalScore();

}

//Increases questionNumber global variable when run
function currentQuestNumber () {
	console.log (`currentQuestNumber function accessed`);
	questionNumber++;
}


//loads content for question tracking
function questionTracking () {
	console.log (`questionTracking function accessed`);
	let questTrackNum = questionNumber + 1;

	$('.questionCount').html(`Question ${questTrackNum} out of 10`);

}

//Increases scoreNumber global variable when run
function currentScore () {
	scoreNumber++;
}


//loads content for score tracking
function scoreTracking () {
	console.log (`scoreTracking function accessed`);
	$('.currentScore').html(`Current Score: ${scoreNumber}`);
}


//initial calls
function playApp () {
	console.log (`playApp function accessed`);
	startPageButtonClick ();
	questionButtonClick();
	getQuestionButtonClick ();
	scoreTracking ();
	questionTracking ();
	resetButtonClicked ();
	startPage ();
}

$(playApp);

