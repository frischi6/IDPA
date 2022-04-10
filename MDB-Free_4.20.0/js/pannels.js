/*
 * version of 24.03.22 perfect to use
 */
var valueWeather;
var valueSeason;
var valueWinkel;
var valueAnzPanels;


/**
 * bei Veränderung der Bildschirmgrösse werden die Panels angepasst, damit sie sich responsive verhalten und sich
 *      nicht mit anderen Elementen überschneiden
 * Der Timer ist dazu da, dass nicht mit jeder kleinsten Bewegung/Grössenveränderung setAnzPanels() aufgerufen wird (würde
 *      sonst zu grossem Rechenaufwand führen)
 *  https://www.creativejuiz.fr/blog/en/tutorials/more-performant-onresize-onscroll-javascript
 */
var timer;
window.addEventListener('resize', function(){
    clearTimeout(timer);
    timer = setTimeout(function(){
        setAnzPanels();
    }, 75);
});


/**
 * Diese Methode wird nach jeder Änderung vom User der Einstellungen aufgerufen
 * zusätzlich muss im html dann noch die spezifische Methode aufgerufen werden wie zB setAngel() wenn die Winkeleinstellung verändert wurde
 */
function settingsAlwaysUsed(){
    console.log(document.getElementById("firstSeasonCol").style.height);
    setValues();
    calculatePower(this.valueWeather, this.valueSeason, this.valueWinkel, this.valueAnzPanels);
}

/**
 * "Schaltzentrale", die alle benötigten Methoden aufruft, damit Usereingabe visuell dargestellt wird
 * Wird aufgerufen nachdem Berechnen-Button gedrückt wurde -> nicht mehr gebraucht
 */
function doAllSettings() {
    setValues();

    setCorrectSeason();
    setCorrectWeather();
    setAngel();
    setAnzPanels();

    calculatePower(this.valueWeather, this.valueSeason, this.valueWinkel, this.valueAnzPanels);
}


/**
 * initializes all settingvariables to be able to visualize the expected settings
 */
function setValues() {
    this.valueWeather = document.getElementById("btnSun").value;
    this.valueSeason = document.getElementById("btnSpring").value;
    this.valueWinkel = document.getElementById("valueWinkel").value;
    this.valueAnzPanels = document.getElementById("valAnzPanels").value;

}

/**
 * Stellt die ausgewählte Anzahl Panels dar und
 * Regelt alles (col-&row-Grösse, Bildergrösse,..), damit panels korrekt dargestellt
*/
function setAnzPanels() {
    var value = document.getElementById("valAnzPanels").value;
    /* Erklärung className
                "row row-cols-1" damit 1 panel pro row, row row-cols-2 damit 2 panels pro row etc.
                "m-1" margin um panelRow (nicht um einzelnes panel) = 1
                "mb-5" margin an bottom von 5, damit panels bei viel white space (anz panels <= 84) verteilter in platz und nicht an boden klebt
                "d-flex flex-wrap-reverse" damit angefangene row oben und nicht unten
             */
    if ($(document).width() < 640) { //mobile (hochformat), evtl 640 noch genau anpassen

        if (value == 1) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-1 m-1 mb-0";
            document.getElementById("visPan").style.height = '330px';
            addPannelsToRow(value);
        } else if (value >= 2 && value <= 6) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-2 m-1 mb-0 d-flex flex-wrap-reverse";
            /*anpassung height*/
            if (value <3){
                document.getElementById("visPan").style.height = '300px';
            }else if (value < 5){
                document.getElementById("visPan").style.height = '350px';
            }else {
                document.getElementById("visPan").style.height = '380px';
            }

            addPannelsToRow(value);
        } else if (value >= 7 && value <= 15) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-3 m-1 mb-0 d-flex flex-wrap-reverse";
            /*anpassung height*/
            if (value <10){
                document.getElementById("visPan").style.height = '350px';
            }else if (value < 13){
                document.getElementById("visPan").style.height = '380px';
            }else {
                document.getElementById("visPan").style.height = '400px';
            }

            addPannelsToRow(value);
        } else if (value >= 16 && value <= 28) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-4 m-1 mb-0 d-flex flex-wrap-reverse";
            /*anpassung height*/
            if (value <21){
                document.getElementById("visPan").style.height = '350px';
            } else {
                document.getElementById("visPan").style.height = '400px';
            }

            addPannelsToRow(value);
        } else if (value >= 29 && value <= 45) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-5 m-1 mb-0 d-flex flex-wrap-reverse";
            /*anpassung height*/
            if (value <31){
                document.getElementById("visPan").style.height = '350px';
            }else if (value < 36){
                document.getElementById("visPan").style.height = '380px';
            }else if (value <41){
                document.getElementById("visPan").style.height = '400px';
            }else {
                document.getElementById("visPan").style.height = '430px';
            }

            addPannelsToRow(value);
        } else {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-6 m-1 mb-0 d-flex flex-wrap-reverse";
            /*anpassung height*/
            if (value <49){
                document.getElementById("visPan").style.height = '380px';
            }else if (value < 55){
                document.getElementById("visPan").style.height = '400px';
            }else if (value <61){
                document.getElementById("visPan").style.height = '430px';
            }else if(value<73) {
                document.getElementById("visPan").style.height = '450px';
            }else if (value<85){
                document.getElementById("visPan").style.height = '490px';
            } else if (value<91){
                document.getElementById("visPan").style.height = '520px';
            } else if (value < 97){
                document.getElementById("visPan").style.height = '530px';
            } else {
                document.getElementById("visPan").style.height = '550px';
            }

            addPannelsToRow(value);
        }

    } else { //querformat
        if (value == 1) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-1 m-1 mb-0";
            document.getElementById("visPan").style.height = '100vh';
            addPannelsToRow(value);
        } else if (value >= 2 && value <= 4) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-2 m-1 mb-0 d-flex flex-wrap-reverse";
            document.getElementById("visPan").style.height = '100vh';
            addPannelsToRow(value);
        } else if (value >= 5 && value <= 9) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-3 m-1 mb-3 d-flex flex-wrap-reverse";
            document.getElementById("visPan").style.height = '100vh';
            addPannelsToRow(value);
        } else if (value >= 10 && value <= 16) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-4 m-1 mb-1 d-flex flex-wrap-reverse";
            document.getElementById("visPan").style.height = '100vh';
            addPannelsToRow(value);
        } else if (value >= 17 && value <= 25) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-5 m-1 mb-1 d-flex flex-wrap-reverse";
            document.getElementById("visPan").style.height = '100vh';
            addPannelsToRow(value);
        } else if (value >= 26 && value <= 36) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-6 m-1 mb-1 d-flex flex-wrap-reverse";
            document.getElementById("visPan").style.height = '100vh';
            addPannelsToRow(value);
        } else if (value >= 37 && value <= 42) {    //season img werden in diesem teil kleiner
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-6 m-1 mb-0 d-flex flex-wrap-reverse";
            document.getElementById("visPan").style.height = '100vh';
            addPannelsToRow(value);
        } else {  //season img werden wieder grösser
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-8 m-2 mb-4 d-flex flex-wrap-reverse";
            document.getElementById("visPan").style.height = '100vh';
            addPannelsToRow7Higher(value);
        }
    }
}

/**
 *  Löscht alle children von panelRow, sprich alle abgebildeten Solarpanels, damit wieder neu aufgefüllt werden kann
 */
function deleteAllChildsPanelrow() {
    var parent = document.getElementById("panelRow");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/**
 * Methode, die die Pannels in eine Row einfüllt
 * Wie viele Cols die Row hat wird vor Aufrufen der Methode festgelegt (hängt von Anzahl Panels ab)
 * @param value Anz. darzustellende Pannels
 */
function addPannelsToRow(value) {
    for (var i = 0; i < value; i++) {
        var img = document.createElement("img");
        img.src = "img/Wetter/solarpanel.png";
        img.className = "col p-0";
        img.id = "pannelId";
        document.getElementById("panelRow").appendChild(img);
    }
}


/**
 * Methode, die die Pannels darstellt, wenn die Anz Panels in eine Stufe mit 7 oder mehr Columns fällt
 * @param value Anz. darzustellende Pannels
 * @param anzCols nach so vielen eingefügten pannels erfolgt ein linebreak
 */
function addPannelsToRow7Higher(value, anzCols) {
    for (var i = 0; i < value; i++) {
        if (i % anzCols == 0) {
            var linebreak = document.createElement('div');
            linebreak.className = "w-100";
            document.getElementById("panelRow").appendChild(linebreak);
        }
        var img = document.createElement("img");
        img.src = "img/Wetter/solarpanel.png";
        img.className = "col-1 p-0";
        img.id = "pannelId";
        document.getElementById("panelRow").appendChild(img);
    }
}

/*
*
*
* Weather
*
*
 */

/**
 * entscheidet welches Wetter ausgewählt wurde und ruft entsprechende Methode auf
 */
function setCorrectWeather() {
    if (this.valueWeather == 1) {
        installSonnig();
    } else if (this.valueWeather == 2) {
        installLeichtBewoelkt();
    } else if (this.valueWeather == 3) {
        installStarkBewoelkt();
    } else {
        installSchneiend();
    }
}

/*sonnig*/
/**
 * Methode, die aufgerufen wird, wenn sonnig als Wetter ausgewählt wurde
 * Regelt alles (col-&row-Grösse, Bilder, Bildergrösse, Hintergrundfarbe), damit sonnig korrekt dargestellt
 */
function installSonnig(){
    document.getElementById("visPan").style.backgroundColor = '#F8F8F8';
    document.getElementById("weatherRow").className = "row row-cols-4";

    document.getElementById("firstWeatherCol").className = "col p-0";
    document.getElementById("secondWeatherCol").className = "d-none";
    document.getElementById("thirdWeatherCol").className = "d-none";
    document.getElementById("fourthWeatherCol").className = "d-none";
    document.getElementById("fifthWeatherCol").className = "d-none";

    document.getElementById("firstWeatherImg").src = "img/Wetter/sun2.png";
    document.getElementById("firstWeatherImg").style.width = '100%';
}


/*leicht Bewölkt*/
/**
 * Methode, die aufgerufen wird, wenn leicht bewölkt als Wetter ausgewählt wurde
 * Regelt alles (col-&row-Grösse, Bilder, Bildergrösse, Hintergrundfarbe), damit leicht bewölkt korrekt dargestellt
 */
function installLeichtBewoelkt(){
    document.getElementById("visPan").style.backgroundColor = '#F8F8F8';
    document.getElementById("weatherRow").className = "row row-cols-5";

    document.getElementById("firstWeatherCol").className = "col p-0";
    document.getElementById("secondWeatherCol").className = "col p-1";
    document.getElementById("thirdWeatherCol").className = "col p-1 mr-auto";
    document.getElementById("fourthWeatherCol").className = "col p-2";
    document.getElementById("fifthWeatherCol").className = "d-none";

    const sImages = document.querySelectorAll('.weatherImg');
    sImages.forEach(image => {
        image.src = "img/Wetter/cloudLight.png";
        image.style.width = '100%';
    });

    document.getElementById("firstWeatherImg").src = "img/Wetter/sun2.png";

    document.getElementById("secondWeatherImg").style.width = '150%';
    document.getElementById("thirdWeatherImg").style.width = '130%';
}


/*stark Bewölkt*/
/**
 * Methode, die aufgerufen wird, wenn stark bewölkt als Wetter ausgewählt wurde
 * Regelt alles (col-&row-Grösse, Bilder, Bildergrösse, Hintergrundfarbe), damit stark bewölkt korrekt dargestellt
 */
function installStarkBewoelkt(){
    document.getElementById("visPan").style.backgroundColor = '#B8B8B8';
    document.getElementById("weatherRow").className = "row row-cols-5";

    document.getElementById("firstWeatherCol").className = "col p-1";
    document.getElementById("secondWeatherCol").className = "col p-1";
    document.getElementById("thirdWeatherCol").className = "col p-2";
    document.getElementById("fourthWeatherCol").className = "col p-2 pt-3";
    document.getElementById("fifthWeatherCol").className = "col p-2";

    const sImages = document.querySelectorAll('.weatherImg');
    sImages.forEach(image => {
        image.src = "img/Wetter/cloudDark.png";
        image.style.width = '100%';
    });

    document.getElementById("firstWeatherImg").style.width = '150%';
    document.getElementById("secondWeatherImg").style.width = '130%';
    document.getElementById("thirdWeatherImg").style.width = '120%';
}


/*schneiend*/
/**
 * Methode, die aufgerufen wird, wenn schneiend als Wetter ausgewählt wurde
 * Regelt alles (col-&row-Grösse, Bilder, Bildergrösse, Hintergrundfarbe), damit schneiend korrekt dargestellt
 */
function installSchneiend(){
    document.getElementById("visPan").style.backgroundColor = '#B8B8B8';
    document.getElementById("weatherRow").className = "row row-cols-3 p-2 pt-0";

    document.getElementById("firstWeatherCol").className = "col p-0";
    document.getElementById("secondWeatherCol").className = "col p-0 pt-1";
    document.getElementById("thirdWeatherCol").className = "col p-0 pt-0";
    document.getElementById("fourthWeatherCol").className = "d-none";
    document.getElementById("fifthWeatherCol").className = "d-none";

    const sImages = document.querySelectorAll('.weatherImg');
    sImages.forEach(image => {
        image.src = "img/Wetter/snow_dark.png";
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
 * entscheidet welche Jahreszeit ausgewählt wurde und ruft entsprechende Methode auf
 */
function setCorrectSeason() {
    if (this.valueSeason == 1) {
        installSpring();
    } else if (this.valueSeason == 2) {
        installSummer();
    } else if (this.valueSeason == 3) {
        installAutumn();
    } else if (this.valueSeason == 4){
        installWinter();
    } else { //Fehlerfall
        installSpring();
    }
}

/*Spring*/

/**
 * Methode, die aufgerufen wird, wenn Frühling als Jahreszeit ausgewählt wurde
 * Regelt alles (col-&row-Grösse, Bilder, Bildergrösse), damit Frühling korrekt dargestellt
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
        image.src = "img/Jahresz/flower1.png";
        image.style.width = '100%';
    });
}


/*Summer*/
/**
 * Methode, die aufgerufen wird, wenn Sommer als Jahreszeit ausgewählt wurde
 * Regelt alles (col-&row-Grösse, Bilder, Bildergrösse), damit Sommer korrekt dargestellt
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

    document.getElementById("firstSeasonImg").src = "img/Jahresz/sandburg.png";
    document.getElementById("firstSeasonImg").style.width = '100%'; //war 90
    document.getElementById("secondSeasonImg").src = "img/Jahresz/wellen.png";
    document.getElementById("secondSeasonImg").style.width = '100%';
    document.getElementById("thirdSeasonImg").src = "img/Jahresz/wellen.png";
    document.getElementById("thirdSeasonImg").style.width = '100%';

}


/*Autumn*/

/**
 *
 *  Methode, die aufgerufen wird, wenn Herbst als Jahreszeit ausgewählt wurde
 *  Regelt alles (col-&row-Grösse, Bilder, Bildergrösse), damit Herbst korrekt dargestellt
 *
 * setSizeSeasonImg() setzt richtige Grösse v. Bilder, da diese je nach Anz.Panels anders und deshalb komplexerer Code
 */
function installAutumn() {
    document.getElementById("seasonRow").className = "row m-1 mt-0";

    /*size of cols*/
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
        image.src = "img/Jahresz/leaf2.png";
        image.style.width = '120%';
    });
    /*those with src != leaf2*/
    document.getElementById("firstSeasonImg").src = "img/Jahresz/leaf6.png";
    document.getElementById("secondSeasonImg").src = "img/Jahresz/leaf6.png";
    document.getElementById("sixthSeasonImg").src = "img/Jahresz/leaf4.png";
    document.getElementById("seventhSeasonImg").src = "img/Jahresz/leaf6.png";
    //individual size settings
    document.getElementById("secondSeasonImg").style.width = '130%';
    document.getElementById("thirdSeasonImg").style.width = '110%';
    document.getElementById("sixthSeasonImg").style.width = '130%';
    document.getElementById("ninthSeasonImg").style.width = '110%';}

/**
 *  verändert grösse der season images damit panels genügend platz haben und sich nichts überschneidet
 * @param value variable die aussagt ob season imgs vergrössert oder verkleinert werden
 */
//evtl noch hinzufügen, dass überprüft wird ob eine änderung getätigt werden muss wenn nicht skip function
function setSizeAutumnImg(value) {
    const sImages = document.querySelectorAll('.seasonImg');

    if (value >= 37 && value <= 48) {    //make img smaller
        document.getElementById("seasonRow").className = "row m-1 mt-0";
        sImages.forEach(image => {
            image.style.width = '80%';
        });
        //individual settings
        document.getElementById("firstSeasonImg").style.width = '90%';
        document.getElementById("ninthSeasonImg").style.width = '110%';

    } else { // set imgs to normal size
        document.getElementById("seasonRow").className = "row m-1 mt-0";
        sImages.forEach(image => {
            image.style.width = '120%';
        });
        //individual settings
        document.getElementById("secondSeasonImg").style.width = '130%';
        document.getElementById("thirdSeasonImg").style.width = '110%';
        document.getElementById("sixthSeasonImg").style.width = '130%';
        document.getElementById("ninthSeasonImg").style.width = '110%';

    }
}


/* winter */
/**
 * Methode, die aufgerufen wird, wenn Winter als Jahreszeit ausgewählt wurde
 * Regelt alles (col-&row-Grösse, Bilder, Bildergrösse), damit Winter korrekt dargestellt
 */
function installWinter() {
    document.getElementById("seasonRow").className = "row m-1 mt-0";

    /*size of cols*/
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
        image.src = "img/Jahresz/snowflake1.png";
        image.style.width = '120%';
    });
    document.getElementById("secondSeasonImg").src = "img/Jahresz/snowman.png";
    document.getElementById("secondSeasonImg").style.width = '100%'; //war 90 vorher
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
* Winkel
*
*
 */
/**
 * Setzt den ausgewählten Winkel
 */
function setAngel(){
    document.getElementById("lineAngel").style.transform = "rotate(-"+this.valueWinkel+"deg)";
}



/*
Datenaustausch mit Backend
 */
/**
 * berechnet die erzielte Leistung mit den Usereingaben
 * @param wetter Usereingabe des Wetters, liefert Wert zwischen 1 und 4
 * @param jahreszeit Usereingabe des Wetters, liefert Wert zwischen 1 und 4
 * @param winkel Usereingabe des Winkels, liefert Wert zwischen 1 und 90
 * @param anzahl Usereingabe der Anzahl Panels, liefert Wert zwischen 1 und 100
 */
function calculatePower(wetter, jahreszeit, winkel, anzahl){
    $.ajax({
        url: "https://api.cojabou.com/SolarApi/data/solar/power?wetter=" + wetter + "&jahreszeit=" + jahreszeit + "&winkel=" + winkel + "&anzahl=" + anzahl,
        dataType: "text",
        type: "GET"
    })
    .done(showPower)
}

/**
 * stellt ausgerechnete Leistung in html dar
 * @param power die leistung, die in calculatePower() berechnet wurde
 */
function showPower(power){
    $('#power').text(power + " kWh");
}