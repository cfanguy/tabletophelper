// grid array for draggable object
var arr = [10, 10];
var plNum = 0;

// add player to table
function addPl(name, id, ac, hp) {
    html = "<tr><td>" +
        name + "</td><td>" +
        id + "</td><td>" +
        ac + "</td><td><input type='text' value='" +
        hp + "'/></td></tr>";

    document.getElementById("playerTbl").innerHTML += html;
    
    
    htmlDraggables = "<div id='draggable" +
        plNum + "' class='box player'>" +
        id + "</div>";
    document.getElementById("playersDiv").innerHTML += htmlDraggables;
    
    $('#name').val("");
    $('#id').val("");
    $('#ac').val("");
    $('#hp').val("");

    plNum++;
}


// hide modal window and initialize draggables
function hideAndInitObjs() {
    document.getElementById('playerModal').style.display = 'none';

    $("div[id^='draggable'], .scenery, #playerAndHP").draggable({
        grid: arr
    });
}


function addMonster() {
    document.getElementById('monsterModal').style.display = '';
}


function createAndInitMonster() {
    var monsterType = document.getElementById("monsterSelection").value;
    var newMonster;

    if(monsterType === "normal") {
        newMonster = '<div class="box monster">New X</div>';
    }
    else {
        newMonster = '<div class="monster ' + monsterType + '">new ' + monsterType + '</div>';
    }
    document.getElementById("monsters").innerHTML += newMonster;
    $(".monster").draggable({
        grid: arr
    });

    document.getElementById('monsterModal').style.display = 'none';
}