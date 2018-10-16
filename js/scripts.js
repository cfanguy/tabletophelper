var arr = [10, 10];
var plNum = 0;

function addPl(name, id, ac, hp) {
    html = "<tr><td style='margin-right: 10px;'>" + name + "</td><td style='margin-right: 10px;'>" + id + "</td><td style='margin-right: 10px;'>" + ac + "</td><td><input type='text' value='" + hp + "'/></td></tr>";

    document.getElementById("playerTbl").innerHTML += html;
    
    
    htmlDraggables = "<div id='draggable" + plNum + "' class='box player'>" + id + "</div>";
    document.getElementById("playersDiv").innerHTML += htmlDraggables;
    
    $('#name').val("");
    $('#id').val("");
    $('#ac').val("");
    $('#hp').val("");

    plNum++;
}


function hideAndInitObjs() {
    document.getElementById('modal').style.display = 'none';
    
    for(var i = 0; i < plNum; i++) {
        $("#draggable" + i).draggable({ grid: arr })
    }

    $("#mon1, #mon2, #mon3, #mon4, #mon5, #mon6, #mon7, #mon8").draggable({ grid: arr })

    $("#scenb1, #scenb2, #scenb3, #scenb4, #scenb5, #scenb6, #scenb7, #scenb8, #scenb9, #scenb10, #scenb11, #scenb12, #scenb13, #scenb14, #scenb15").draggable({ grid: arr })

    $("#scend1, #scend2, #scend3, #scend4, #scend5").draggable({ grid: arr })

    $("#sceng1, #sceng2, #sceng3, #sceng4, #sceng5, #sceng6, #sceng7, #sceng8, #sceng9, #sceng10").draggable({ grid: arr })

    $("#scenw1, #scenw2, #scenw3, #scenw4, #scenw5, #scenw6, #scenw7, #scenw8, #scenw9, #scenw10").draggable({ grid: arr })

    $("#largeMonster, #hugeMonster, #gargMonster, #colMonster").draggable({ grid: arr })
}