document.getElementById("btnBerechnen").addEventListener('click', function () {
    var value = document.getElementById("valAnzPannels").value;

    /*
    Erklärung className
    "row row-cols-1" damit 1 panel pro row, row row-cols-2 damit 2 panels pro row etc.
    "m-1" margin um panelRow (nicht um einzelnes panel) = 1
    "mb-5" margin an bottom von 5, damit panels bei viel white space (anz panels <= 84) verteilter in platz und nicht an boden klebt
    "d-flex flex-wrap-reverse" damit angefangene row oben und nicht unten
     */
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
        document.getElementById("panelRow").className = "row row-cols-6 m-1 mb-3 d-flex flex-wrap-reverse";
        addPannelsToRow(value);
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