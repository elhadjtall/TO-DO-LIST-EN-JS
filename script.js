// Créer un bouton "fermer" et l’ajouter à chaque élément de la liste

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i= 0; i < myNodelist.length; i++) {
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Cliquer sur un bouton de fermeture pour masquer l’élément de liste actuel

var close = document.getElementsByTagName("close");
var i;
for (i = 0, i < close.length; i++) {
    close[i].onclick =  function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}