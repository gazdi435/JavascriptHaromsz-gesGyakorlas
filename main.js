function megszerkezthetoe(){
    aOldal = parseFloat(document.getElementById("egyikBefogo").value);
    bOldal = parseFloat(document.getElementById("masikBefogo").value);
    cOldal = parseFloat(document.getElementById("atfogo").value);

    if (Math.pow(aOldal, 2)+ Math.pow(bOldal, 2) == Math.pow(cOldal, 2)){
        alert("A beírt információk alapján a háromszög megszerkezthető!");
    }
    else    {
        alert("Nem!");
    }
}

function veletlen(){
    document.getElementById("egyikBefogo").value = (Math.random() * 100).toFixed(3);
    document.getElementById("masikBefogo").value = (Math.random() * 100).toFixed(3);

    aOldal = parseFloat(document.getElementById("egyikBefogo").value);
    bOldal = parseFloat(document.getElementById("masikBefogo").value);
    document.getElementById("atfogo").value = Math.sqrt(Math.pow(aOldal, 2) + Math.pow(bOldal, 2));
}

function atfogoKiszamitasa(){
    aOldal = parseFloat(document.getElementById("egyikBefogo").value);
    bOldal = parseFloat(document.getElementById("masikBefogo").value);
    document.getElementById("atfogo").value = Math.sqrt(Math.pow(aOldal, 2) + Math.pow(bOldal, 2));
}