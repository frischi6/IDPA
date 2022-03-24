/*
 * version of 24.03.22 perfect to use
 */
document.getElementById("btnBerechnen").addEventListener('click', function () {

    var value = document.getElementById("valAnzPannels").value;
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
        } else if (value >= 2 && value <= 6) {
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-2 m-1 mb-5 d-flex flex-wrap-reverse";
            addPannelsToRow(value);
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



    }else { //querformat
        if (value == 1) {
            setSizeSeasonImg(value);
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-1 m-1 mb-0";
            addPannelsToRow(value);
        } else if (value >= 2 && value <=4) {
            setSizeSeasonImg(value);
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-2 m-1 mb-0 d-flex flex-wrap-reverse";
            addPannelsToRow(value);
        } else if (value >= 5 && value <= 9) {
            setSizeSeasonImg(value);
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-3 m-1 mb-3 d-flex flex-wrap-reverse";
            addPannelsToRow(value);
        } else if (value >= 10 && value <= 16) {
            setSizeSeasonImg(value);
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-4 m-1 mb-1 d-flex flex-wrap-reverse";
            addPannelsToRow(value);
        } else if (value >= 17 && value <= 25) {
            setSizeSeasonImg(value);
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-5 m-1 mb-1 d-flex flex-wrap-reverse";
            addPannelsToRow(value);
        } else if (value >= 26 && value <= 36) {
            setSizeSeasonImg(value);
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-6 m-1 mb-1 d-flex flex-wrap-reverse";
            addPannelsToRow(value);
        } else if (value >= 37 && value <= 48) {    //season img werden in diesem teil kleiner
            setSizeSeasonImg(value);
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-6 m-1 mb-0 d-flex flex-wrap-reverse";
            addPannelsToRow(value);
        } else {  //season img werden wieder grösser
            setSizeSeasonImg(value);
            deleteAllChildsPanelrow();
            document.getElementById("panelRow").className = "row row-cols-6 m-2 mb-4 d-flex flex-wrap-reverse";
            addPannelsToRow7Higher(value);
        }
    }
});

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


/**
 *  verändert grösse der season images damit panels genügend platz haben und sich nichts überschneidet
 * @param value variable die aussagt ob season imgs vergrössert oder verkleinert werden
 */
//evtl noch hinzufügen, dass überprüft wird ob eine änderung getätigt werden muss wenn nicht skip function
function setSizeSeasonImg(value){
    const sImages = document.querySelectorAll('.seasonImg');

    if (value >= 37 && value <= 48){    //make img smaller
        document.getElementById("seasonRow").className = "row m-1 mt-0 "
        sImages.forEach(image => {
            image.style.width ='80%';
        });
        //individual settings
        document.getElementById("firstSeasonImg").style.width = '90%';
        document.getElementById("lastSeasonImg").style.width = '120%';

    } else { // set imgs to normal size
        document.getElementById("seasonRow").className = "row m-1 mt-2";
        sImages.forEach(image => {
            image.style.width ='120%';
        });
        //individual settings
        document.getElementById("secondSeasonImg").style.width = '130%';
        document.getElementById("thirdSeasonImg").style.width = '110%';
        document.getElementById("sixthSeasonImg").style.width = '130%';

    }

}