/*
 * version of 24.03.22 perfect to use
 */
var valueWeather;
var valueSeason;
var valueWinkel;
var valueAnzPanels;

window.onresize = setAnzPanels;
document.getElementById("btnBerechnen").addEventListener('click', function () {
    doAllSettings();
});

/**
 * initializes all settingvariables to be able to visualize the expected settings
 */
function setValues() {
    this.valueWeather = document.getElementById("btnSun").value;
    this.valueSeason = document.getElementById("btnSpring").value;
    this.valueWinkel = document.getElementById("valueWinkel").value;
    this.valueAnzPanels = document.getElementById("valAnzPanels").value;

}

function doAllSettings() {
    setValues();
    setAnzPanels();
    setCorrectSeason();
}


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
            document.getElementById("panelRow").className = "row row-cols-1 m-1 mb-5";
            addPannelsToRow(value);
        } else if (this.value >= 2 && this.value <= 6) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-2 m-1 mb-5 d-flex flex-wrap-reverse";
            addPannelsToRow(this.value);
        } else if (value >= 7 && value <= 15) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-3 m-1 mb-5 d-flex flex-wrap-reverse";
            addPannelsToRow(value);
        } else if (value >= 16 && value <= 28) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-4 m-1 mb-5 d-flex flex-wrap-reverse";
            addPannelsToRow(value);
        } else if (value >= 29 && value <= 45) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-5 m-1 mb-5 d-flex flex-wrap-reverse";
            addPannelsToRow(value);
        } else if (value >= 46 && value <= 84) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-6 m-1 mb-5 d-flex flex-wrap-reverse";
            addPannelsToRow(value);
        } else {  //restliche Angaben (inkl. werte >100 -> nur 100 panels dargestellt wegen max von range) werden mit mb-3 dargestellt
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-6 m-1 mb-1 d-flex flex-wrap-reverse";
            addPannelsToRow(value);
        }


    } else { //querformat
        if (value == 1) {
            if (valueSeason == 3) {
                setSizeAutumnImg(value);
            }
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-1 m-1 mb-0";
            addPannelsToRow(value);
        } else if (value >= 2 && value <= 4) {
            if (valueSeason == 3) {
                setSizeAutumnImg(value);
            }
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-2 m-1 mb-0 d-flex flex-wrap-reverse";
            addPannelsToRow(value);
        } else if (value >= 5 && value <= 9) {
            if (valueSeason == 3) {
                setSizeAutumnImg(value);
            }
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-3 m-1 mb-3 d-flex flex-wrap-reverse";
            addPannelsToRow(value);
        } else if (value >= 10 && value <= 16) {
            if (valueSeason == 3) {
                setSizeAutumnImg(value);
            }
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-4 m-1 mb-1 d-flex flex-wrap-reverse";
            addPannelsToRow(value);
        } else if (value >= 17 && value <= 25) {
            if (valueSeason == 3) {
                setSizeAutumnImg(value);
            }
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-5 m-1 mb-1 d-flex flex-wrap-reverse";
            addPannelsToRow(value);
        } else if (value >= 26 && value <= 36) {
            if (valueSeason == 3) {
                setSizeAutumnImg(value);
            }
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-6 m-1 mb-1 d-flex flex-wrap-reverse";
            addPannelsToRow(value);
        } else if (value >= 37 && value <= 48) {    //season img werden in diesem teil kleiner
            if (valueSeason == 3) {
                setSizeAutumnImg(value);
            }
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-6 m-1 mb-0 d-flex flex-wrap-reverse";
            addPannelsToRow(value);
        } else {  //season img werden wieder grösser
            if (valueSeason == 3) {
                setSizeAutumnImg(value);
            }
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-6 m-2 mb-4 d-flex flex-wrap-reverse";
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
        console.log(i);
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
* Season
*
*
 */

function setCorrectSeason() {
    if (this.valueSeason == 1) {
        installSpring();
    } else if (this.valueSeason == 2) {
        installSummer();
    } else if (this.valueSeason == 3) {
        installAutumn();
    } else {
        installWinter();
    }
}

/*Autumn*/

function installSpring() {
    document.getElementById("seasonRow").className = "row m-1 mt-2";


    document.getElementById("firstSeasonCol").className = "col-1 p-0";
    document.getElementById("secondSeasonCol").className = "col-1 p-0";
    document.getElementById("thirdSeasonCol").className = "col-1 p-0";
    document.getElementById("fourthSeasonCol").className = "col-1 p-0";
    document.getElementById("fifthSeasonCol").className = "col-1 p-0";
    document.getElementById("sixthSeasonCol").className = "col-1 p-0";
    document.getElementById("seventhSeasonCol").className = "col-1 p-0";
    document.getElementById("eighthSeasonCol").className = "col-1 p-0";
    document.getElementById("ninthSeasonCol").className = "col-1 p-0";
    document.getElementById("tenthSeasonCol").className = "col-1 p-0";
    document.getElementById("eleventhSeasonCol").className = "col-1 p-0";
    document.getElementById("twelfthSeasonCol").className = "col-1 p-0";

    const sImages = document.querySelectorAll('.seasonImg');
    sImages.forEach(image => {
        image.src = "img/Jahresz/flower1.png";
        image.style.width = '100%';
    });
}


/*Summer*/

function installSummer() {
    document.getElementById("seasonRow").className = "row m-1 mt-2";


    document.getElementById("firstSeasonCol").className = "col-2 p-0";
    document.getElementById("secondSeasonCol").className = "col-5 p-0 pt-3";
    document.getElementById("thirdSeasonCol").className = "col-5 p-0 pt-3";
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
    document.getElementById("firstSeasonImg").style.width = '100%';
    document.getElementById("secondSeasonImg").src = "img/Jahresz/wellen.png";
    document.getElementById("secondSeasonImg").style.width = '100%';
    document.getElementById("thirdSeasonImg").src = "img/Jahresz/wellen.png";
    document.getElementById("thirdSeasonImg").style.width = '100%';

}


/*Autumn*/

/**
 * fügt herbstbilder bei grafischer darstellung von season ein, ersetzt bilder von anderer jahreszeit
 * setSizeSeasonImg() setzt anschliessend richtige Grösse der Bilder
 */
function installAutumn() {
    document.getElementById("seasonRow").className = "row m-1 mt-2";

    /*size of cols*/
    document.getElementById("firstSeasonCol").className = "col-1 p-0";
    document.getElementById("secondSeasonCol").className = "col-1 p-0";
    document.getElementById("fifthSeasonCol").className = "col-1 p-0";
    document.getElementById("sixthSeasonCol").className = "col-1 p-0";
    document.getElementById("eighthSeasonCol").className = "col-1 p-0";
    document.getElementById("ninthSeasonCol").className = "col-1 p-0";
    document.getElementById("thirdSeasonCol").className = "col-2 p-0";
    document.getElementById("fourthSeasonCol").className = "col-2 p-0";
    document.getElementById("seventhSeasonCol").className = "col-2 p-0";
    document.getElementById("tenthSeasonCol").className = "d-none";
    document.getElementById("eleventhSeasonCol").className = "d-none";
    document.getElementById("twelfthSeasonCol").className = "d-none";


    const sImages = document.querySelectorAll('.seasonImg');
    sImages.forEach(image => {
        image.src = "img/Jahresz/leaf2.png";
    });
    /*those with src != leaf2*/
    document.getElementById("firstSeasonImg").src = "img/Jahresz/leaf6.png";
    document.getElementById("secondSeasonImg").src = "img/Jahresz/leaf6.png";
    document.getElementById("sixthSeasonImg").src = "img/Jahresz/leaf4.png";
    document.getElementById("seventhSeasonImg").src = "img/Jahresz/leaf6.png";

    setSizeAutumnImg(this.value);
}

/**
 *  verändert grösse der season images damit panels genügend platz haben und sich nichts überschneidet
 * @param value variable die aussagt ob season imgs vergrössert oder verkleinert werden
 */
//evtl noch hinzufügen, dass überprüft wird ob eine änderung getätigt werden muss wenn nicht skip function
function setSizeAutumnImg(value) {
    const sImages = document.querySelectorAll('.seasonImg');

    if (value >= 37 && value <= 48) {    //make img smaller
        document.getElementById("seasonRow").className = "row m-1 mt-0 ";
        sImages.forEach(image => {
            image.style.width = '80%';
        });
        //individual settings
        document.getElementById("firstSeasonImg").style.width = '90%';
        document.getElementById("ninthSeasonImg").style.width = '120%';

    } else { // set imgs to normal size
        document.getElementById("seasonRow").className = "row m-1 mt-2";
        sImages.forEach(image => {
            image.style.width = '120%';
        });
        //individual settings
        document.getElementById("secondSeasonImg").style.width = '130%';
        document.getElementById("thirdSeasonImg").style.width = '110%';
        document.getElementById("sixthSeasonImg").style.width = '130%';

    }
}


/* winter */

function installWinter() {
    document.getElementById("seasonRow").className = "row m-1 mt-2";

    /*size of cols*/
    document.getElementById("firstSeasonCol").className = "col-1 p-0";
    document.getElementById("secondSeasonCol").className = "col-2 p-0";
    document.getElementById("fifthSeasonCol").className = "col-1 p-0";
    document.getElementById("sixthSeasonCol").className = "col-1 p-0";
    document.getElementById("eighthSeasonCol").className = "col-1 p-0";
    document.getElementById("ninthSeasonCol").className = "col-1 p-0";
    document.getElementById("thirdSeasonCol").className = "col-1 p-0";
    document.getElementById("fourthSeasonCol").className = "col-1 p-0";
    document.getElementById("seventhSeasonCol").className = "col-1 p-0";
    document.getElementById("tenthSeasonCol").className = "col-1 p-0";
    document.getElementById("eleventhSeasonCol").className = "col-1 p-0";
    document.getElementById("twelfthSeasonCol").className = "d-none";

    const sImages = document.querySelectorAll('.seasonImg');
    sImages.forEach(image => {
        image.src = "img/Jahresz/snowflake1.png";
        image.style.width = '120%';
    });
    document.getElementById("secondSeasonImg").src = "img/Jahresz/snowman.png";
    document.getElementById("thirdSeasonImg").style.width = '150%';
    document.getElementById("fourthSeasonImg").style.width = '90%';
    document.getElementById("sixthSeasonImg").style.width = '150%';
    document.getElementById("eighthSeasonImg").style.width = '110%';
    document.getElementById("tenthSeasonImg").style.width = '130%';
    document.getElementById("eleventhSeasonImg").style.width = '100%';

}