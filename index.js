/*---- FIREBASE RELATING STUFFS----*/
// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyCMmezN5CEGg14oZM-L6S2Oli9K9b49O_0",
	authDomain: "elearning-20e46.firebaseapp.com",
	databaseURL: "https://elearning-20e46.firebaseio.com",
	projectId: "elearning-20e46",
	storageBucket: "",
	messagingSenderId: "6570955360",
	appId: "1:6570955360:web:a2b3258b9ca199bbae2905"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Unique ID generator
var ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};
var uid = ID();

/*---- E LEARNING RELATING STUFFS ----*/
var slideIndex = 1;

function openLesson(evt, lessonName) {
  	var i, tabcontent, tablinks;
  	tabcontent = document.getElementsByClassName("tabcontent");
  	for (i = 0; i < tabcontent.length; i++) {
    	tabcontent[i].style.display = "none";
  	}
  	tablinks = document.getElementsByClassName("tablinks");
  	for (i = 0; i < tablinks.length; i++) {
    	tablinks[i].className = tablinks[i].className.replace(" active", "");
  	}
  	document.getElementById(lessonName).style.display = "block";
  	if (lessonName == "lesson1") {
  		slideIndex = 1;
  		quizSlideIndex = 1;
  	}
  	if (lessonName == "lesson2") {
  		slideIndex = 7;
  		quizSlideIndex = 6;
  	}
  	showSlides(slideIndex);
  	showQuizSlides(quizSlideIndex);
  	evt.currentTarget.className += " active";
}

function plusSlides(n) {
	if (((slideIndex == 6) && (slideIndex + n == 7)) ||	((slideIndex == 7) && (slideIndex + n == 6)))
		showSlides(slideIndex);
	else showSlides(slideIndex += n);
}

function currentSlide(n) {
  	showSlides(slideIndex = n);
}

function showSlides(n) {
  	var i;
  	var slides = document.getElementsByClassName("mySlides");
  	var dots = document.getElementsByClassName("dot");
  	if (n > slides.length) {slideIndex = slides.length};
	if (n < 1) {slideIndex = 1};
	for (i = 0; i < slides.length; i++) {
  		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
  		dots[i].className = dots[i].className.replace(" active", "");
	}
  	slides[slideIndex-1].style.display = "flex";
  	dots[slideIndex-1].className += " active";
}

/*---- QUIZ RELATING STUFFS ----*/
var quizSlideIndex = 1;

function loadQuiz(n) {
	var quizName, quizContent;
	quizName = "quiz" + n;
	quizContents = document.getElementsByClassName("quiz");
	quizContents[n-1].style.display = "block";
	document.getElementById("lesson_slide" + n).style.display = "none";
	document.getElementById("lesson_slidedot" + n).style.display = "none";
}

function plusQuizSlides(n) {
  	if (((quizSlideIndex == 5) && (quizSlideIndex + n == 6)) ||	((quizSlideIndex == 6) && (quizSlideIndex + n == 5)))
		showQuizSlides(quizSlideIndex);
  	else showQuizSlides(quizSlideIndex += n);
}

function currentQuizSlide(n) {
  	showQuizSlides(quizSlideIndex = n);
}

function showQuizSlides(n) {
  	var i;
  	var slides = document.getElementsByClassName("myQuizSlides");
  	if (n > slides.length) {quizSlideIndex = slides.length}
	if (n < 1) {quizSlideIndex = 1}
	for (i = 0; i < slides.length; i++) {
  		slides[i].style.display = "none";
	}
  	slides[quizSlideIndex-1].style.display = "block";
}

/*---- DATABASE RELATING FUNCTIONS ----*/
var quiz1, quiz2, survey, quiz1_complete, quiz2_complete;

quiz1 = {
	q1: 0,
	q2: 0,
	q3: 0,
	q4: 0
};

quiz2 = {
	q1: 0,
	q2: 0,
	q3: 0,
	q4: 0
};

quiz1_complete = false;
quiz2_complete = false;

// Add functioning to Submit Button in Quiz
// Quiz 1
var q1_1, q1_2, q1_3, q1_4;
q1_1 = 0; q1_2 = 0; q1_3 = 0; q1_4 = 0;

function submitQuiz1(n) {
	if (n == 1) {
		var a1, a2, a3, a4, a5, a6, a7, a8, score;
		a1 = document.getElementById("p1_1_1").value.toLowerCase();
		a2 = document.getElementById("p1_1_2").value.toLowerCase();
		a3 = document.getElementById("p1_1_3").value.toLowerCase();
		a4 = document.getElementById("p1_1_4").value.toLowerCase();
		a5 = document.getElementById("p1_1_5").value.toLowerCase();
		a6 = document.getElementById("p1_1_6").value.toLowerCase();
		a7 = document.getElementById("p1_1_7").value.toLowerCase();
		a8 = document.getElementById("p1_1_8").value.toLowerCase();
		score = 0;
		if (a1 == "mercury") score += 1;
		if (a2 == "venus") score += 1;
		if (a3 == "earth") score += 1;
		if (a4 == "mars") score += 1;
		if (a5 == "jupiter") score += 1;
		if (a6 == "saturn") score += 1;
		if (a7 == "uranus") score += 1;
		if (a8 == "neptune") score += 1;
		console.log(score);
		document.getElementById("p1_1_status").style.display = "block";
		document.getElementById("submit1_1").disabled = true;
		q1_1 = score;
	}

	if (n == 2) {
		var a1, a2, a3, a4, a5, a6, score;
		a1 = document.getElementById("p1_2_1").checked;
		a2 = document.getElementById("p1_2_2").checked;
		a3 = document.getElementById("p1_2_3").checked;
		a4 = document.getElementById("p1_2_4").checked;
		a5 = document.getElementById("p1_2_5").checked;
		a6 = document.getElementById("p1_2_6").checked;
		score = 0;
		if (a1 == false) score += 1;
		if (a2 == true) score += 1;
		if (a3 == true) score += 1;
		if (a4 == false) score += 1;
		if (a5 == true) score += 1;
		if (a6 == true) score += 1;
		console.log(score);
		document.getElementById("p1_2_status").style.display = "block";
		document.getElementById("submit1_2").disabled = true;
		q1_2 = score;
	}

	if (n == 3) {
		var a = document.getElementById("p1_3").value.toLowerCase();
		var score = 0;
		if (a == "moon") score += 1;
		console.log(score);
		document.getElementById("p1_3_status").style.display = "block";
		document.getElementById("submit1_3").disabled = true;
		q1_3 = score;
	}

	if (n == 4) {
		var a1, a2, score;
		a1 = document.getElementById("p1_4_1").value.toLowerCase();
		a2 = document.getElementById("p1_4_2").value.toLowerCase();
		var score = 0;
		if (a1 == "outer") score += 1;
		if (a2 == "saturn") score += 1;
		console.log(score);
		document.getElementById("p1_4_status").style.display = "block";
		document.getElementById("submit1_4").disabled = true;
		q1_4 = score;
	}
}

// Quiz 2
var q2_1, q2_2, q2_3, q2_4;
q2_1 = 0; q2_2 = 0; q2_3 = 0; q2_4 = 0;
function submitQuiz2(n) {
	if (n == 1) {
		var a1, a2, a3, a4, a5, score;
		a1 = document.getElementById("p2_1_1").checked;
		a2 = document.getElementById("p2_1_2").checked;
		a3 = document.getElementById("p2_1_3").checked;
		a4 = document.getElementById("p2_1_4").checked;
		a5 = document.getElementById("p2_1_5").checked;
		score = 0;
		if (a1 == true) score += 1;
		if (a2 == false) score += 1;
		if (a3 == false) score += 1;
		if (a4 == true) score += 1;
		if (a5 == true) score += 1;
		console.log(score);
		document.getElementById("p2_1_status").style.display = "block";
		document.getElementById("submit2_1").disabled = true;
		q2_1 = score;
	}

	if (n == 2) {
		var a1, a2, score;
		a1 = document.getElementsByName("p2_2")[0].checked;
		a2 = document.getElementsByName("p2_2")[1].checked;
		if (a1 == true) score = 0;
		if (a2 == true) score = 1;
		console.log(score);
		document.getElementById("p2_2_status").style.display = "block";
		document.getElementById("submit2_2").disabled = true;
		q2_2 = score;
	}

	if (n == 3) {
		var a1, a2, a3, score;
		score = 0;
		a1 = document.getElementById("p2_3_1").value;
		a2 = document.getElementById("p2_3_2").value;
		a3 = document.getElementById("p2_3_3").value;
		if (a1 == "wasn't") score += 1;
		if (a2 == "the 'New World'") score += 1;
		if (a3 == "exploration") score += 1;
		console.log(score);
		document.getElementById("p2_3_status").style.display = "block";
		document.getElementById("submit2_3").disabled = true;
		q2_3 = score;
	}

	if (n == 4) {
		var a, score;
		a = ["", "", ""];
		score = 0;
		a[0] = document.getElementById("p2_4_1").value.toLowerCase();
		a[1] = document.getElementById("p2_4_2").value.toLowerCase();
		a[2] = document.getElementById("p2_4_3").value.toLowerCase();
		if (a.indexOf("hawaii") >= 0) score += 1;
		if (a.indexOf("south dakota") >= 0) score += 1;
		if (a.indexOf("alaska") >= 0) score += 1;
		console.log(score);
		document.getElementById("p2_4_status").style.display = "block";
		document.getElementById("submit2_4").disabled = true;
		q2_4 = score;
	}
}

// Send quiz result to database
function completeQuiz(n) {
	if (n == 1) {
		// Send result to Firebase
		quiz1 = {
			q1: q1_1,
			q2: q1_2,
			q3: q1_3,
			q4: q1_4
		}
		database.ref(uid + '/quiz1').set(quiz1);
		// Frontend stuffs
		document.getElementById("p1_complete_status").style.display = "block";
		document.getElementById("submit1_complete").disabled = true;

		quiz1_complete = true;
		alert("Thank you for your participation. Lesson 1 is now complete.");
	}

	if (n == 2) {
		// Send result to Firebase
		quiz2 = {
			q1: q2_1,
			q2: q2_2,
			q3: q2_3,
			q4: q2_4
		}
		database.ref(uid + '/quiz2').set(quiz2);
		// Frontend stuffs
		document.getElementById("p2_complete_status").style.display = "block";
		document.getElementById("submit2_complete").disabled = true;

		quiz2_complete = true;
		alert("Thank you for your participation. Lesson 2 is now complete.");
	}
}

/*---- SURVEY RELATING FUNCTIONS ----*/
function loadSurvey() {
	if (quiz1_complete && quiz2_complete) {
		var survey = document.getElementById("surveyContent")
		survey.style.display = "block";
	} else {
		alert("You haven't completed the lessons yet!");
	}
}

function submitSurvey() {
	survey = {
		q1: document.getElementById("s_1").elements["s_1"].value,
		q2: document.getElementById("s_2").elements["s_2"].value,
		q3: document.getElementById("s_3").elements["s_3"].value,
		q4: document.getElementById("s_4").elements["s_4"].value,
		q5: document.getElementById("s_5").elements["s_5"].value,
		q6: document.getElementById("s_6").elements["s_6"].value,
		q7: document.getElementById("s_7").elements["s_7"].value,
		q8: document.getElementById("s_8").elements["s_8"].value,
		q9: document.getElementById("s_9").elements["s_9"].value,
		q10: document.getElementById("s_10").elements["s_10"].value,
		q11: document.getElementById("s_11").elements["s_11"].value,
		q12: document.getElementById("s_12").elements["s_12"].value,
		q13: document.getElementById("s_13").elements["s_13"].value,
		q14: document.getElementById("s_14").elements["s_14"].value,
		q15: document.getElementById("s_15").elements["s_15"].value,
		q16: document.getElementById("s_16").elements["s_16"].value,
		q17: document.getElementById("s_17").elements["s_17"].value,
		q18: document.getElementById("s_18").elements["s_18"].value,
		q19: document.getElementById("s_19").elements["s_19"].value,
		q20: document.getElementById("s_20").elements["s_20"].value,
		q21: document.getElementById("s_21").value,
		q22: document.getElementById("s_22").value,
		q23: document.getElementById("s_23").elements["s_23"].value,
		q24: document.getElementById("s_24").elements["s_24"].value,
		q25: document.getElementById("s_25").value
	}

	database.ref(uid + '/survey').set(survey);
	// Frontend stuffs
	document.getElementById("survey_status").style.display = "block";
	document.getElementById("submitSurvey").disabled = true;
	alert("Thank you for your participation. You may now close this windows.");
}
