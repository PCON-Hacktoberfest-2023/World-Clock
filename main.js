function addZero(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

var getTime = (function() {
	const countryUTC = {
		Albania: [1, 0],
		Algeria: [1, 0],
		AmericanSamoa: [-11, 0],
		Andorra: [1, 0],
		Angola: [1, 0],
		Anguilla: [-4, 0],
		Antartica: [3, 0],
		AntiguaandBarbuda: [-4, 0],
		Argentina: [-3, 0],
		Armenia: [4, 0],
		Aruba: [-4, 0],
		Australia: [10, 0],
		Austria: [1, 0],
		Bahamas: [-5, 0], 
		Bahrain: [3, 0], 
		Bangladesh: [6, 0], 
		Barbados: [-4, 0], 
		Belarus: [3, 0], 
		Belgium: [1, 0], 
		Belize: [-6, 0], 
		Benin: [1, 0], 
		Bermuda: [-4, 0], 
		Bhutan: [6, 0], 
		Bolivia: [-4, 0], 
		BosniaandHerzegovina: [1, 0], 
		Botswana: [2, 0],
		BouvetIsland: [-3, 0], 
		Brazil: [-3, 0], 
		BruneiDarussalam: [8, 0], 
		Bulgaria: [2, 0], 
		BurkinaFaso: [0, 0], 
		Burundi: [2, 0], 
		Cambodia: [7, 0], 
		Cameroon: [1, 0], 
		Canada: [-5, 0], 
		CapeVerde: [-1, 0], 
		CaymanIslands: [-5, 0], 
		CentralAfricanRepubli: [1, 0], 
		Chile: [-3, 0], 
		China: [8, 0], 
		ChristmasIsland: [7, 0], 
		CocosIslands: [6, 30], 
		Colombia: [-5, 0], 
		Comoros: [3, 0], 
		Congo: [1, 0], 
		CongotheDemocraticRepublicofthe: [1, 0], 
		CookIslands: [-10, 0], 
		CostaRica: [-6, 0], 
		CotedIvoire: [0, 0], 
		Croatia: [1, 0], 
		Cuba: [-5, 0], 
		Cyprus: [2, 0], 
		CzechRepublic: [1, 0],
		Denmark: [1, 0], 
		Djibouti: [3, 0], 
		Dominica: [-4, 0], 
		DominicanRepublic: [-4, 0], 
		EastTimor: [9, 0], 
		Ecuador: [-5, 0], 
		Egypt: [2, 0], 
		ElSalvador: [-6, 0], 
		EquatorialGuinea: [1, 0], 
		Eritrea: [3, 0], 
		Estonia: [2, 0], 
		Ethiopia: [3, 0], 
		FalklandIslands: [-3, 0], 
		FaroeIslands: [0, 0], 
		Fiji: [12, 0], 
		Finland: [2, 0], 
		France: [1, 0], 
		FranceMetropolitan: [1, 0], 
		FrenchGuiana: [-3, 0], 
		FrenchPolynesia: [-10, 0], 
		FrenchSouthernTerritories: [5, 0], 
		Gabon: [1, 0], 
		Gambia: [0, 0], 
		Georgia: [4, 0], 
		Germany: [1, 0], 
		Ghana: [0, 0], 
		Gibraltar: [1, 0], 
		Greece: [2, 0], 
		Greenland: [-3, 0], 
		Grenada: [-4, 0], 
		Guadeloupe: [-4, 0],
		Guam: [10, 0],
		Guatemala: [-6, 0],
		Guinea: [0, 0],
		GuineaBissau: [0, 0],
		Guyana: [-4, 0],
		Haiti: [-5, 0],
		HeardandMcDonalIslands: [5, 0],
		HolySee: [1, 0],
		Honduras: [-6, 0],
		HongKong: [8, 0],
		Hungary: [1, 0],
		Iceland: [0, 0],
		India: [5, 30],
		Indonesia: [7, 0],
		Iran: [3, 30],
		Iraq: [3, 0],
		Ireland: [0, 0],
		Israel: [2, 0],
		Italy: [1, 0],
		Jamaica: [-5, 0],
		Japan: [9, 0],
		Jordan: [2, 0],
		Kazakhstan: [6, 0],
		Kenya: [3, 0],
		Kiribati: [12, 0],
		DemocraticPeopleRepublicofKorea: [9, 0],
		Korea: [9, 0],
		Kuwait: [3, 0],
		Kyrgyzstan: [6, 0],
		Lao: [7, 0],
		Latvia: [2, 0],
		Lebanon: [2, 0],
		Lesotho: [2, 0],
		Liberia: [0, 0],
		LibyanArabJamahiriya: [2, 0],
		Liechtenstein: [1, 0],
		Lithuania: [2, 0],
		Luxembourg: [1, 0],
		Macau: [8, 0],
		Macedonia: [1, 0],
		Madagascar: [3, 0],
		Malawi: [2, 0],
		Malaysia: [8, 0],
		Maldives: [5, 0],
		Mali: [0, 0],
		Malta: [1, 0],
		MarshallIslands: [12, 0],
		Martinique: [-4, 0],
		Mauritania: [0, 0],
		Mauritius: [4, 0],
		Mayotte: [3, 0],
		Mayotte: [3, 0],
		Mexico: [-6, 0],
		Micronesia: [10, 0],
		Moldova: [2, 0],
		Monaco: [1, 0],
		Mongolia: [8, 0],
		Montserrat: [-4, 0],
		Morocco: [0, 0],
		Mozambique: [2, 0],
		Myanmar: [6, 30],
		Namibia: [1, 0],
		Nauru: [12, 0],
		Nepal: [5, 45],
		Netherlands: [1, 0],
		NetherlandsAntilles: [-4, 0],
		NewCaledonia: [11, 0],
		NewZealand: [12, 0],
		Nicaragua: [-6, 0],
		Niger: [1, 0],
		Nigeria: [1, 0],
		Niue: [-11, 0],
		NorfolkIsland: [11, 0],
		NorthernMarianaIslands: [10, 0],
		Norway: [1, 0],
		Oman: [4, 0],
		Pakistan: [5, 0],
		Palau: [9, 0],
		Panama: [-5, 0],
		PapuaNewGuinea: [10, 0],
		Paraguay: [-4, 0],
		Peru: [-5, 0],
		Philippines: [8, 0],
		Pitcairn: [-8, 0],
		Poland: [1, 0],
		Portugal: [0, 0],
		PuertoRico: [-4, 0]
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
