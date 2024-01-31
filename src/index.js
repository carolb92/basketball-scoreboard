let homeScore = Number(document.getElementById("home-score").textContent);
const homeScoreEl = document.getElementById("home-score");

let guestScore = Number(document.getElementById("guest-score").textContent);
const guestScoreEl = document.getElementById("guest-score");

const homeTitle = document.getElementById("home-title");
const guestTitle = document.getElementById("guest-title");

const homePlusOne = document.getElementById("home-plus-one");
const guestPlusOne = document.getElementById("guest-plus-one");
const homePlusTwo = document.getElementById("home-plus-two");
const guestPlusTwo = document.getElementById("guest-plus-two");
const homePlusThree = document.getElementById("home-plus-three");
const guestPlusThree = document.getElementById("guest-plus-three");

function plusOne(event) {
	if (event.target.id.includes("home")) {
		homeScore += 1;
		homeScoreEl.textContent = homeScore;
	} else {
		guestScore += 1;
		guestScoreEl.textContent = guestScore;
	}
	checkWinner();
}

homePlusOne.addEventListener("click", (event) => plusOne(event));
guestPlusOne.addEventListener("click", (event) => plusOne(event));

function plusTwo(event) {
	if (event.target.id.includes("home")) {
		homeScore += 2;
		homeScoreEl.textContent = homeScore;
		console.log(homeScore);
	} else {
		guestScore += 2;
		guestScoreEl.textContent = guestScore;
	}
	checkWinner();
}

homePlusTwo.addEventListener("click", (event) => plusTwo(event));
guestPlusTwo.addEventListener("click", (event) => plusTwo(event));

function plusThree(event) {
	if (event.target.id.includes("home")) {
		homeScore += 3;
		homeScoreEl.textContent = homeScore;
		console.log(homeScore);
	} else {
		guestScore += 3;
		guestScoreEl.textContent = guestScore;
	}
	checkWinner();
}

homePlusThree.addEventListener("click", (event) => plusThree(event));
guestPlusThree.addEventListener("click", (event) => plusThree(event));

function newGame() {
	homeScoreEl.textContent = 0;
	guestScoreEl.textContent = 0;
	homeScore = 0;
	guestScore = 0;
	if (homeTitle.classList.contains("text-green")) {
		homeTitle.classList.remove("text-green");
		homeTitle.classList.add("text-off-white");
	}
	if (guestTitle.classList.contains("text-green")) {
		guestTitle.classList.remove("text-green");
		guestTitle.classList.add("text-off-white");
	}
}

function checkWinner() {
	let winner;
	if (homeScore > guestScore || guestScore > homeScore) {
		winner = homeScore > guestScore ? "home" : "guest";
	} else winner = "tied";

	console.log(winner);

	if (winner === "tied") {
		if (homeTitle.classList.contains("text-green")) {
			homeTitle.classList.remove("text-green");
			homeTitle.classList.add("text-off-white");
		}
		if (guestTitle.classList.contains("text-green")) {
			guestTitle.classList.remove("text-green");
			guestTitle.classList.add("text-off-white");
		}
	}

	if (winner === "home") {
		if (homeTitle.classList.contains("text-off-white")) {
			homeTitle.classList.remove("text-off-white");
			homeTitle.classList.add("text-green");
			if (guestTitle.classList.contains("text-green")) {
				guestTitle.classList.remove("text-green");
				guestTitle.classList.add("text-off-white");
			}
		}
	}

	if (winner === "guest") {
		if (homeTitle.classList.contains("text-green")) {
			homeTitle.classList.remove("text-green");
			homeTitle.classList.add("text-off-white");
			if (guestTitle.classList.contains("text-off-white")) {
				guestTitle.classList.remove("text-off-white");
				guestTitle.classList.add("text-green");
			}
		} else {
			if (guestTitle.classList.contains("text-off-white")) {
				guestTitle.classList.remove("text-off-white");
				guestTitle.classList.add("text-green");
			}
		}
	}
}
