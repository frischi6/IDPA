document.getElementById("btnBerechnen").addEventListener('click', function () {
    var value = document.getElementById("valAnzPannels").value;
    console.log(value);

    if (value == 1) {
        deleteAllChildsPanelrow();

        document.getElementById("panelRow").className = "row row-cols-1 m-4";
        let pannel = document.createElement('div');
        var img = document.createElement("img");
        img.src = "img/Wetter/solarpanel.png";
        img.className = "col p-0";
        document.getElementById("panelRow").appendChild(img);
    } else if (value >= 2 && value <= 6) {
        deleteAllChildsPanelrow();
        console.log("2-6");
        document.getElementById("panelRow").className = "row row-cols-2 m-4";
        addPannelsToRowLower7(value);
    } else if (value >= 7 && value <= 15) {
        deleteAllChildsPanelrow();
        console.log("7-15");
        document.getElementById("panelRow").className = "row row-cols-3 m-4";
        addPannelsToRowLower7(value);
    } else if (value >= 16 && value <= 28) {
        deleteAllChildsPanelrow();
        console.log("16-28");
        document.getElementById("panelRow").className = "row row-cols-4 m-4";
        addPannelsToRowLower7(value);
    } else if (value >= 29 && value <= 45) {
        deleteAllChildsPanelrow();
        console.log("29-45");
        document.getElementById("panelRow").className = "row row-cols-5 m-4";
        addPannelsToRowLower7(value);
    } else if (value >= 46 && value <= 66) {
        deleteAllChildsPanelrow();
        console.log("46-66");
        document.getElementById("panelRow").className = "row row-cols-6 m-4";
        addPannelsToRowLower7(value);
    } else if (value >= 67 && value <= 84) {
        deleteAllChildsPanelrow();
        console.log("67-84");
        document.getElementById("panelRow").className = "row m-4";
        addPannelsToRow7Higher(value, 7);
    } else if (value >= 85 && value <= 100) {
        deleteAllChildsPanelrow();
        console.log("85-100");
        document.getElementById("panelRow").className = "row m-4";
        addPannelsToRow7Higher(value, 8);
    } else {
        //bei einer ungültigen eingabe (sollte eig gar nicht möglich sein) werden 100 pannels angezeigt
        deleteAllChildsPanelrow();
        console.log("fehler-> 100");
        document.getElementById("panelRow").className = "row m-4";
        addPannelsToRow7Higher(100, 8);
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
 * Methode, die die Pannels darstellt, solange die Anz Panels in eine Stufe mit weniger als 7 Columns fällt
 * @param value Anz. darzustellende Pannels
 */
function addPannelsToRowLower7(value) {
    for (var i = 0; i < value; i++) {
        console.log(i);
        var img = document.createElement("img");
        img.src = "img/Wetter/solarpanel.png";
        img.className = "col p-0";
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
        document.getElementById("panelRow").appendChild(img);
    }
}