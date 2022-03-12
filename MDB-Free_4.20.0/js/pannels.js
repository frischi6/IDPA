document.getElementById("btnBerechnen").addEventListener('click', function () {
    console.log('okay');
    var valueString = document.getElementById("valAnzPannels").value;
    var valueInt = parseInt(valueString);

    if (valueInt > 5){
        console.log("> 5");
        console.log(valueInt);
    }else {
        console.log("< 5");
        console.log(valueInt);

    }
    let pannel = document.createElement('div');
    var img = document.createElement("img");
    img.src = "img/Wetter/solarpanel.png";
    img.className = "col p-0";
    document.getElementById("visPan").appendChild(img);
});