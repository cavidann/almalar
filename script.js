function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var point = document.createElement("div");
    main.appendChild(point);
    point.style.width = "20px";
    point.style.height = "20px";
    point.style.borderRadius = "100%";
    point.style.backgroundColor = "red";
    point.style.position = "absolute";
    if (width < yer) {
        point.style.left = x + "px";
        point.style.top = y + "px";
        x = x + 20;
        width = width + 20;
    } else if (yer == width) {
        i++;
        console.log(i);
      
    //   dinamik olmasi ucun for ile evez edilmelidir
      
        if (i == 1) {
            var y1 = 262;
            var x1 = 210;
        } else if (i == 2) {
            var y1 = 262;
            var x1 = 230;
        }else if(i==3){
             var y1 = 242;
            var x1 = 220;
        }
        else{
           document.getElementById("p").innerText="tarazliq qanununu ve seliqesini pozudugu ucun bu almaya benzemeyen almanin elave edilmesine icaze yoxdur :)"; 
    document.getElementById("delete").style.display="none";    
    }
        point.style.left = x1 + "px";
        point.style.top = y1 + "px";
    }
    console.log(width);
}

