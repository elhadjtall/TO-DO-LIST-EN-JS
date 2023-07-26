// Créer un bouton "fermer" et l’ajouter à chaque élément de la liste

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i= 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Cliquer sur un bouton de fermeture pour masquer l’élément de liste actuel

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick =  function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Ajouter un symbole "coché" en cliquant sur un élément de liste

var list = document.querySelector('ul');
list.addEventListener('click' , function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false );

// Créer un nouvel élément de liste en cliquant sur le bouton "Ajouter"
function newElement () {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").Value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Tu dois écrire quelque chose !");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}