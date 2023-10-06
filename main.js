function addZero(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

var getTime = (function () {
	const countryUTC = {
		India: [5, 30],
	};
	return function (key) {
		var country = countryUTC[key];
		return country;
	};
})();

function setUTC() {
	try {
		var country = document.getElementById("selectUTC").value;
		var date = new Date();
		var utcTime = getTime(country);
	} catch (err) {
		return;
	}

	date.setHours(date.getUTCHours() + utcTime[0]);
	date.setMinutes(date.getUTCMinutes() + utcTime[1]);
	date.setSeconds(date.getUTCSeconds());

	var hour = addZero(date.getHours());
	var min = addZero(date.getMinutes());
	var sec = addZero(date.getSeconds());
	var days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	var month = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	mhand.style.transform = `rotate(${6 * min + sec / 10}deg)`;

	document.getElementById("hr").innerHTML = hour;
	document.getElementById("min").innerHTML = min;
	document.getElementById("sec").innerHTML = sec;
	document.getElementById("fullDate").innerHTML =
		days[date.getDay()] +
		", " +
		month[date.getMonth()] +
		" " +
		date.getDate() +
		", " +
		date.getFullYear();
}

setInterval(setUTC, 1000);



function setDateFormat() {
	const selectedDateFormat = document.getElementById("selectDateFormat").value;
   
 }








const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
}


const darkModeBtn = document.getElementById('lightDarkModeBtn');
darkModeBtn.addEventListener('click', toggleDarkMode);
