var victimArr = [];
var volsArr = [];

var victimHelper = function(){
	var match = prompt("How many disaster victims do you want to be matched with?");
	alert('You entered ' + match + ' disaster victims that you wanted to help');
	var matchNum = Number(match);

	    for(var i = 0; i < matchNum; i++){
	    	victimArr[i] = {
	    		key: i,
	    		name: prompt("Please enter your first and last name:"),
	    		phone: prompt("Please enter your phone number:"),
	    		address: prompt("Please enter your address:")
	    	};
	    }
	    var nameArr = [];
		for(var j = 0; j < victimArr.length; j++){
			nameArr[j] = victimArr[j].name;
		}
		var vicNames = nameArr.join(", ");
		return ("Victims: " + matchNum + "\nVictim Names: " + vicNames);
}

var volHelper = function(){
    var vols = prompt("How many people do you have volunteering?");
    alert("You entered " + vols + " volunteers that want to help.  That's great!");
	var volsNum = Number(vols);

	    for(var i = 0; i < volsNum; i++){
	    	volsArr[i] = {
	    		key: i,
	    		name: prompt("Please enter your first and last name:"),
	    		phone: prompt("Please enter your phone number:"),
	    		address: prompt("Please enter your address:")
	    	};
	    }
		var nameArr = [];
		for(var j = 0; j < volsArr.length; j++){
			nameArr[j] = volsArr[j].name;
		}
		var volsNames = nameArr.join(", ");
		return ("\nVolunteers: " + volsNum + "\nVolunteer Names: " + volsNames);
}

var vicResult = victimHelper();

var volResult = volHelper();
	
alert(vicResult + volResult);
