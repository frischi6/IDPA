/**
 JS-File for IDPA-Project 2022 "Solarzellenrechner" by Yannis Lee, Malo Jaboulet, Sarah Frischknecht
 Version: 2.7
 Final version: 17.04.2022
 Author: Sarah Frischknecht
 */

var valueWeather;
var valueSeason;
var valueWinkel;
var valueAnzPanels;


/**
 * when changing screen size, the panels are adapted to the screen size, so that they do not overlap with other elements
 * Timer is there so that setAnzPanels() is not called with every smallest movement/size change (would
 *      lead to large computational effort)
 *  https://www.creativejuiz.fr/blog/en/tutorials/more-performant-onresize-onscroll-javascript
 */
var timer;
window.addEventListener('resize', function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
        setAnzPanels();
    }, 75);
});


/**
 * This method is called after each change by the user of the settings
 * In addition the individual used method (e.g. setAngel()) needs to be called (done in HTML-File)
 */
function settingsAlwaysUsed() {
    console.log("hallo");
    setValues();
    calculatePower(this.valueWeather, this.valueSeason, this.valueWinkel, this.valueAnzPanels);
}

/**
 * Initializes every setting variable
 */
function setValues() {
    this.valueWeather = document.getElementById("btnSun").value;
    this.valueSeason = document.getElementById("btnSpring").value;
    this.valueWinkel = document.getElementById("valueWinkel").value;
    this.valueAnzPanels = document.getElementById("valAnzPanels").value;
}


/*
*
*
* Weather
*
*
 */
/**
 * Decides which weather was selected and calls the required method
 */
function setCorrectWeather() {
    if (this.valueWeather == 1) {
        installSunny();
    } else if (this.valueWeather == 2) {
        installCloudy();
    } else if (this.valueWeather == 3) {
        installStormy();
    } else {
        installSnowy();
    }
}

/**
 * Method that will be called when sunny was selected
 * Sets correct col & row size, img, size of img, backgroundcolor so that sunny is displayed correctly
 */
function installSunny() {
    document.getElementById("visPan").style.backgroundColor = '#F8F8F8';
    document.getElementById("weatherRow").className = "row row-cols-4";

    document.getElementById("firstWeatherCol").className = "col p-0";
    document.getElementById("secondWeatherCol").className = "d-none";
    document.getElementById("thirdWeatherCol").className = "d-none";
    document.getElementById("fourthWeatherCol").className = "d-none";
    document.getElementById("fifthWeatherCol").className = "d-none";

    document.getElementById("firstWeatherImg").src = "img/Weather/sun2.png";
    document.getElementById("firstWeatherImg").style.width = '100%';
}


/**
 * Method that will be called when cloudy was selected
 * Sets correct col & row size, img, size of img, backgroundcolor so that cloudy is displayed correctly
 */
function installCloudy() {
    document.getElementById("visPan").style.backgroundColor = '#F8F8F8';
    document.getElementById("weatherRow").className = "row row-cols-5";

    document.getElementById("firstWeatherCol").className = "col p-0";
    document.getElementById("secondWeatherCol").className = "col p-1";
    document.getElementById("thirdWeatherCol").className = "col p-1 mr-auto";
    document.getElementById("fourthWeatherCol").className = "col p-2";
    document.getElementById("fifthWeatherCol").className = "d-none";

    const sImages = document.querySelectorAll('.weatherImg');
    sImages.forEach(image => {
        image.src = "img/Weather/cloudLight.png";
        image.style.width = '100%';
    });

    document.getElementById("firstWeatherImg").src = "img/Weather/sun2.png";

    document.getElementById("secondWeatherImg").style.width = '150%';
    document.getElementById("thirdWeatherImg").style.width = '130%';
}

/**
 * Method that will be called when stormy was selected
 * Sets correct col & row size, img, size of img, backgroundcolor so that stormy is displayed correctly
 */
function installStormy() {
    document.getElementById("visPan").style.backgroundColor = '#B8B8B8';
    document.getElementById("weatherRow").className = "row row-cols-5";

    document.getElementById("firstWeatherCol").className = "col p-1";
    document.getElementById("secondWeatherCol").className = "col p-1";
    document.getElementById("thirdWeatherCol").className = "col p-2";
    document.getElementById("fourthWeatherCol").className = "col p-2 pt-3";
    document.getElementById("fifthWeatherCol").className = "col p-2";

    const sImages = document.querySelectorAll('.weatherImg');
    sImages.forEach(image => {
        image.src = "img/Weather/cloudDark.png";
        image.style.width = '100%';
    });

    document.getElementById("firstWeatherImg").style.width = '150%';
    document.getElementById("secondWeatherImg").style.width = '130%';
    document.getElementById("thirdWeatherImg").style.width = '120%';
}

/**
 * Method that will be called when snowy was selected
 * Sets correct col & row size, img, size of img, backgroundcolor so that snowy is displayed correctly
 */
function installSnowy() {
    document.getElementById("visPan").style.backgroundColor = '#B8B8B8';
    document.getElementById("weatherRow").className = "row row-cols-3 p-2 pt-0";

    document.getElementById("firstWeatherCol").className = "col p-0";
    document.getElementById("secondWeatherCol").className = "col p-0 pt-1";
    document.getElementById("thirdWeatherCol").className = "col p-0 pt-0";
    document.getElementById("fourthWeatherCol").className = "d-none";
    document.getElementById("fifthWeatherCol").className = "d-none";

    const sImages = document.querySelectorAll('.weatherImg');
    sImages.forEach(image => {
        image.src = "img/Weather/snow_dark.png";
        image.style.width = '100%';
    });

    document.getElementById("secondWeatherImg").style.width = '80%';
}


/*
*
*
* Season
*
*
 */

/**
 * Decides which season was selected and calls the required method
 */
function setCorrectSeason() {
    if (this.valueSeason == 1) {
        installSpring();
    } else if (this.valueSeason == 2) {
        installSummer();
    } else if (this.valueSeason == 3) {
        installAutumn();
    } else if (this.valueSeason == 4) {
        installWinter();
    } else { //in case of an error (not number 1 to 4)
        installSpring();
    }
}


/**
 * Method that will be called when spring was selected
 * Sets correct col & row size, img, size of img so that spring is displayed correctly
 */
function installSpring() {
    document.getElementById("seasonRow").className = "row m-1 mt-0";

    document.getElementById("firstSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("secondSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("thirdSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("fourthSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("fifthSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("sixthSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("seventhSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("eighthSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("ninthSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("tenthSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("eleventhSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("twelfthSeasonCol").className = "col-1 p-0 mt-auto";

    const sImages = document.querySelectorAll('.seasonImg');
    sImages.forEach(image => {
        image.src = "img/Season/flower1.png";
        image.style.width = '100%';
    });
}


/**
 * Method that will be called when summer was selected
 * Sets correct col & row size, img, size of img so that summer is displayed correctly
 */
function installSummer() {
    document.getElementById("seasonRow").className = "row m-1 mt-0";


    document.getElementById("firstSeasonCol").className = "col-2 p-0 mt-auto";
    document.getElementById("secondSeasonCol").className = "col-5 p-0 mt-auto";
    document.getElementById("thirdSeasonCol").className = "col-5 p-0 mt-auto";
    document.getElementById("fourthSeasonCol").className = "d-none";
    document.getElementById("fifthSeasonCol").className = "d-none";
    document.getElementById("sixthSeasonCol").className = "d-none";
    document.getElementById("seventhSeasonCol").className = "d-none";
    document.getElementById("eighthSeasonCol").className = "d-none";
    document.getElementById("ninthSeasonCol").className = "d-none";
    document.getElementById("tenthSeasonCol").className = "d-none";
    document.getElementById("eleventhSeasonCol").className = "d-none";
    document.getElementById("twelfthSeasonCol").className = "d-none";

    document.getElementById("firstSeasonImg").src = "img/Season/sandburg.png";
    document.getElementById("firstSeasonImg").style.width = '100%'; //war 90
    document.getElementById("secondSeasonImg").src = "img/Season/wellen.png";
    document.getElementById("secondSeasonImg").style.width = '100%';
    document.getElementById("thirdSeasonImg").src = "img/Season/wellen.png";
    document.getElementById("thirdSeasonImg").style.width = '100%';

}


/**
 * Method that will be called when autumn was selected
 * Sets correct col & row size, img, size of img so that autumn is displayed correctly
 */
function installAutumn() {
    document.getElementById("seasonRow").className = "row m-1 mt-0";

    document.getElementById("firstSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("secondSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("fifthSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("sixthSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("eighthSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("ninthSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("thirdSeasonCol").className = "col-2 p-0 mt-auto";
    document.getElementById("fourthSeasonCol").className = "col-2 p-0 mt-auto";
    document.getElementById("seventhSeasonCol").className = "col-2 p-0 mt-auto";
    document.getElementById("tenthSeasonCol").className = "d-none";
    document.getElementById("eleventhSeasonCol").className = "d-none";
    document.getElementById("twelfthSeasonCol").className = "d-none";


    const sImages = document.querySelectorAll('.seasonImg');
    sImages.forEach(image => {
        image.src = "img/Season/leaf2.png";
        image.style.width = '120%';
    });

    document.getElementById("firstSeasonImg").src = "img/Season/leaf6.png";
    document.getElementById("secondSeasonImg").src = "img/Season/leaf6.png";
    document.getElementById("sixthSeasonImg").src = "img/Season/leaf4.png";
    document.getElementById("seventhSeasonImg").src = "img/Season/leaf6.png";

    document.getElementById("secondSeasonImg").style.width = '130%';
    document.getElementById("thirdSeasonImg").style.width = '110%';
    document.getElementById("sixthSeasonImg").style.width = '130%';
    document.getElementById("ninthSeasonImg").style.width = '110%';
}


/**
 * Method that will be called when winter was selected
 * Sets correct col & row size, img, size of img so that winter is displayed correctly
 */
function installWinter() {
    document.getElementById("seasonRow").className = "row m-1 mt-0";

    document.getElementById("firstSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("secondSeasonCol").className = "col-2 p-0 mt-auto";
    document.getElementById("fifthSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("sixthSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("eighthSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("ninthSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("thirdSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("fourthSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("seventhSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("tenthSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("eleventhSeasonCol").className = "col-1 p-0 mt-auto";
    document.getElementById("twelfthSeasonCol").className = "d-none";

    const sImages = document.querySelectorAll('.seasonImg');
    sImages.forEach(image => {
        image.src = "img/Season/snowflake1.png";
        image.style.width = '120%';
    });
    document.getElementById("secondSeasonImg").src = "img/Season/snowman.png";
    document.getElementById("secondSeasonImg").style.width = '100%';
    document.getElementById("thirdSeasonImg").style.width = '150%';
    document.getElementById("fourthSeasonImg").style.width = '90%';
    document.getElementById("sixthSeasonImg").style.width = '150%';
    document.getElementById("eighthSeasonImg").style.width = '110%';
    document.getElementById("tenthSeasonImg").style.width = '130%';
    document.getElementById("eleventhSeasonImg").style.width = '100%';

}


/*
*
*
* Angel
*
*
 */
/**
 * Displays the set angel
 */
function setAngel() {
    document.getElementById("lineAngel").style.transform = "rotate(-" + this.valueWinkel + "deg)";
}


/*
*
*
* Panels
*
*
 */
/**
 * Displays the selected number of panels
 * Sets correct col & row size, size of img,... so that the panels are displayed correctly
 */
function setAnzPanels() {
    var value = document.getElementById("valAnzPanels").value;
    /* Explanation className:
                "row row-cols-1" that 1 panel per row, "row row-cols-2" that 2 panels per row etc.
                "m-1" margin around panelRow (not around each panel individually) = 1
                "mb-5" margin bottom = 5, used that panels distributed in space and not stuck to ground (when anz panels <= 84)
                "d-flex flex-wrap-reverse" that unfinished row on top and not on bottom
             */

    if ($(document).width() < 640) { //mobile (portrait)

        if (value == 1) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-1 m-1 mb-0";
            document.getElementById("visPan").style.height = '330px';
            addPanelsToRow(value);
        } else if (value >= 2 && value <= 6) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-2 m-1 mb-0 d-flex flex-wrap-reverse";

            /*height adjustment so that there is not too much white space around panels*/
            if (value < 3) {
                document.getElementById("visPan").style.height = '300px';
            } else if (value < 5) {
                document.getElementById("visPan").style.height = '350px';
            } else {
                document.getElementById("visPan").style.height = '380px';
            }

            addPanelsToRow(value);
        } else if (value >= 7 && value <= 15) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-3 m-1 mb-0 d-flex flex-wrap-reverse";

            if (value < 10) {
                document.getElementById("visPan").style.height = '350px';
            } else if (value < 13) {
                document.getElementById("visPan").style.height = '380px';
            } else {
                document.getElementById("visPan").style.height = '400px';
            }

            addPanelsToRow(value);
        } else if (value >= 16 && value <= 28) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-4 m-1 mb-0 d-flex flex-wrap-reverse";

            if (value < 21) {
                document.getElementById("visPan").style.height = '350px';
            } else {
                document.getElementById("visPan").style.height = '400px';
            }

            addPanelsToRow(value);
        } else if (value >= 29 && value <= 45) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-5 m-1 mb-0 d-flex flex-wrap-reverse";

            if (value < 31) {
                document.getElementById("visPan").style.height = '350px';
            } else if (value < 36) {
                document.getElementById("visPan").style.height = '380px';
            } else if (value < 41) {
                document.getElementById("visPan").style.height = '400px';
            } else {
                document.getElementById("visPan").style.height = '430px';
            }

            addPanelsToRow(value);
        } else {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-6 m-1 mb-0 d-flex flex-wrap-reverse";

            if (value < 49) {
                document.getElementById("visPan").style.height = '380px';
            } else if (value < 55) {
                document.getElementById("visPan").style.height = '400px';
            } else if (value < 61) {
                document.getElementById("visPan").style.height = '430px';
            } else if (value < 73) {
                document.getElementById("visPan").style.height = '450px';
            } else if (value < 85) {
                document.getElementById("visPan").style.height = '490px';
            } else if (value < 91) {
                document.getElementById("visPan").style.height = '520px';
            } else if (value < 97) {
                document.getElementById("visPan").style.height = '530px';
            } else {
                document.getElementById("visPan").style.height = '550px';
            }

            addPanelsToRow(value);
        }

    } else { //landscape
        if (value == 1) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-1 m-1 mb-0";
            document.getElementById("visPan").style.height = '100vh';
            addPanelsToRow(value);
        } else if (value >= 2 && value <= 4) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-2 m-1 mb-0 d-flex flex-wrap-reverse";
            document.getElementById("visPan").style.height = '100vh';
            addPanelsToRow(value);
        } else if (value >= 5 && value <= 9) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-3 m-1 mb-3 d-flex flex-wrap-reverse";
            document.getElementById("visPan").style.height = '100vh';
            addPanelsToRow(value);
        } else if (value >= 10 && value <= 16) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-4 m-1 mb-1 d-flex flex-wrap-reverse";
            document.getElementById("visPan").style.height = '100vh';
            addPanelsToRow(value);
        } else if (value >= 17 && value <= 25) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-5 m-1 mb-1 d-flex flex-wrap-reverse";
            document.getElementById("visPan").style.height = '100vh';
            addPanelsToRow(value);
        } else if (value >= 26 && value <= 36) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-6 m-1 mb-1 d-flex flex-wrap-reverse";
            document.getElementById("visPan").style.height = '100vh';
            addPanelsToRow(value);
        } else if (value >= 37 && value <= 42) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-6 m-1 mb-0 d-flex flex-wrap-reverse";
            document.getElementById("visPan").style.height = '100vh';
            addPanelsToRow(value);
        } else {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-8 m-2 mb-4 d-flex flex-wrap-reverse";
            document.getElementById("visPan").style.height = '100vh';
            addPanelsToRow7Higher(value);
        }
    }
}

/**
 * Deletes all children from panelRow (=all displayed panels) so that the panelRow can be filled again
 */
function deleteAllChildsPanelrow() {
    var parent = document.getElementById("panelRow");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/**
 * Fills panelRow with panels
 * Always used with exception to landscape mode when anzPanels >= 43
 * @param value total panels to be displayed
 */
function addPanelsToRow(value) {
    for (var i = 0; i < value; i++) {
        var img = document.createElement("img");
        img.src = "img/Weather/solarpanel.png";
        img.className = "col p-0";
        document.getElementById("panelRow").appendChild(img);
    }
}


/**
 * Fills panelRow with panels
 * Only used in landscape mode when anzPanels >= 43
 * @param value total panels to be displayed
 */
function addPanelsToRow7Higher(value) {
    for (var i = 0; i < value; i++) {
        var img = document.createElement("img");
        img.src = "img/Weather/solarpanel.png";
        img.className = "col-1 p-0";
        document.getElementById("panelRow").appendChild(img);
    }
}


/*
*
*
*  Data exchange with backend
*
*
 */
/**
 * Calculates energy per day with selected setting from user
 * @param weather user input weather, returns value between 1 and 4
 * @param season user input season, returns value between 1 and 4
 * @param angel user input angel, returns value between 1 and 90
 * @param number user input number of panels, returns value between 1 and 100
 */
function calculatePower(weather, season, angel, number) {
    $.ajax({
        url: "https://api.cojabou.com/SolarApi/data/solar/power?wetter=" + weather + "&jahreszeit=" + season + "&winkel=" + angel + "&anzahl=" + number,
        dataType: "text",
        type: "GET"
    })
        .done(showPower)
}

/**
 * Displays value from calculatePower() in html
 * @param power energy per day that was calculated in calculatePower()
 */
function showPower(power) {
    $('#power').text(power + " kWh");
}