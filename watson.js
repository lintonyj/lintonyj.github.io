var aboutOpenButton = document.getElementById('about-open-button');
var aboutDrawer = document.getElementById('about-drawer');
var aboutCloseButton = document.getElementById('about-close-button');

aboutOpenButton.onclick = function(){
	aboutDrawer.classList.add("open");
};

aboutCloseButton.onclick = function(){
	aboutDrawer.classList.remove("open");
};

var descOpenButton = document.getElementById('desc-open-button');
var descDrawer = document.getElementById('desc-drawer');


var knOpenButton = document.getElementById('kn-open-button');
var knDrawer = document.getElementById('kn-drawer');



var chemOpenButton = document.getElementById('chem-open-button');
var chemDrawer = document.getElementById('chem-drawer');



function toggletxt() {
    // get the clock
    var descDrawer = document.getElementById('desc-drawer');

    // get the current value of the clock's display property
    var displaySetting = descDrawer.style.display;

    // now toggle the clock and the button text, depending on current state
    if (displaySetting == 'block') {
      // clock is visible. hide it
      descDrawer.style.display = 'none';
    }
    else {
      // clock is hidden. show it
      descDrawer.style.display = 'block';
    }
  }

	function togglenotes() {
	    // get the clock
	    var knDrawer = document.getElementById('kn-drawer');

	    // get the current value of the clock's display property
	    var displaySetting = knDrawer.style.display;

	    // now toggle the clock and the button text, depending on current state
	    if (displaySetting == 'block') {
	      // clock is visible. hide it
	      knDrawer.style.display = 'none';
	    }
	    else {
	      // clock is hidden. show it
	      knDrawer.style.display = 'block';
	    }
	  }


		function toggleing() {
		    // get the clock
		    var chemDrawer = document.getElementById('chem-drawer');

		    // get the current value of the clock's display property
		    var displaySetting = chemDrawer.style.display;

		    // now toggle the clock and the button text, depending on current state
		    if (displaySetting == 'block') {
		      // clock is visible. hide it
		      chemDrawer.style.display = 'none';
		    }
		    else {
		      // clock is hidden. show it
		      chemDrawer.style.display = 'block';
		    }
		  }



//function toggleClock() {
	 // get the clock
	// var myClock = document.getElementById('clock');


	 //descOpenButton.onclick = function(){
	 	//descDrawer.classList.add("open");
	 //};

	 //descCloseButton.onclick = function(){
	 	//descDrawer.classList.remove("open");
 //}
