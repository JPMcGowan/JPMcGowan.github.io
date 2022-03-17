function attractions() {
	document.write("<ol>");
			document.write("<li>Kuiper Belt Viewing</li>");
			document.write("<li>Visit the storm on Jupiter</li>");
			document.write ("<li>UFO Sighting</li>");
			document.write("</ol>");
}

function reservations() {
	if (document.getElementById("name").value == "" || document.getElementById("email").value == "" || document.getElementById("phone").value == "" || document.getElementById("address").value == ""){	
		alert("Please fill in all fields.");
		event.preventDefault();
	}
}

function rooms(roomAlt) {
	alert(roomAlt);
}

var i=0;

let name=[
"MoonWater Pool", 
"Marscade", 
"Dark Side of the Moon Lounge", 
"Neptunes Seafood Grill", 
"The Space Museum", 
"Drawf Star Flight Simulator"];	

var description=[
"Water on the moon! A luxurious pool in the shape of a moon with two diffrent slides.Fun for all ages!", 
"Arcade on Mars! Classic arcade with a space twist.", 
"Lounge and Bar for guest to enjoy. Enjoy a get away from the kids while enjoying Space vodka.", 
"Seafood grill serving the finest fish one could eat all the way from Neptune.", 
"Space based museum with tons of neat stuff such as moon rocks.", 
"Flight Simulator that takes you all the way to Pluto. Canyou make it back home?"];

var prices=[
"Free while a guest.", 
"50 cents per game.", 
"Free to enter drink prices vary.", 
"Prices Vary.", 
"Free to all Guests.", 
"$10 per ride."];

var locate=[
"Directly behind The Space Hotel.", 
"First floor to the right of the elavators.", 
"Top floor.", 
"Directly next to the The Space Hotel.", 
"Building to the left of the Space Hotel.", 
"Behind the Marscade."];

var requirements=[
"Must be able to swim. Lifeguard on duty.", 
"Must be 10+ or be accompined by a adult.", 
"Must be 18 to enter 21 to drink.", 
"Can't be allergic to seafood.", 
"None.", 
"A strong stomach."];


function amenities(){
	for (i = 0; i < 6; i++){
		document.getElementsByTagName("th")[i+5].textContent = name[i];
		document.getElementById("row"+(i+1)).getElementsByTagName("td")[0].textContent = description[i];
		document.getElementById("row"+(i+1)).getElementsByTagName("td")[1].textContent = prices[i];
		document.getElementById("row"+(i+1)).getElementsByTagName("td")[2].textContent = locate[i];
		document.getElementById("row"+(i+1)).getElementsByTagName("td")[3].textContent = requirements[i];
		
	}
	
}