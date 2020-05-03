function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


$(window).on("load", function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
                                                    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 

    context.fillStyle = "#000";
    context.font = "20px sans-serif";
    context.fillText("click for a good time! ^_^", 20, 20);

    var imageNames = new Array(
        "lee1.png",
        "lee2.jpg",
        "lee3.jpg",
        "lee4.jpg",
        "lee5.jpg",
        "lee6.jpg",
    );

    var images = new Array();
    var leeLobsters = new Array();
    var leeLobster = new Image();
    for (var i = 0; i < imageNames.length; i++) {
        var image = new Image();
        image.src = imageNames[i];
        images.push(image);
    }
    leeLobster.src = "leelobster.png";

    var draw = true;
    $(document).on("mousemove", function(event) {
        if (draw == true) {
            var image = images[getRandInt(0, images.length)];
            context.drawImage(image, event.pageX, event.pageY)
            draw = false;
            setTimeout(function() { draw = true; }, 50);
        }
        for (var i = 0; i < leeLobsters.length; i++) {
            context.drawImage(leeLobster, leeLobsters[i][0], leeLobsters[i][1]);
            context.fillText("click for a good time! ^_^", 20, 20);
        }
    });

    var opacity = 0;
    var leeMad = new Image();
    leeMad.src = "leemad.jpg";
    var leeMadX = canvas.width/2 - leeMad.width/2;
    var leeMadY = canvas.height/2 - leeMad.height/2;
    var leeMadWidth = leeMad.width;
    var leeMadHeight = leeMad.height;
    function okNowReallyStartTheAssChamber() {
        context.globalAlpha = opacity;
        context.drawImage(leeMad, leeMadX, leeMadY, leeMadWidth, leeMadHeight);
        setTimeout(function() {
            if (opacity < 1) {
                opacity += 1/5000;
                leeMadWidth += 1;
                leeMadHeight += 1;
                leeMadX = canvas.width/2 - leeMadWidth/2;
                leeMadY = canvas.height/2 - leeMadHeight/2;
            }
        }, 5000);
        this.requestAnimationFrame(okNowReallyStartTheAssChamber);
    }

    function startTheAssChamber() {
        $("canvas").css("background-color", "#000");
        context.fillStyle = "#000";
        context.clearRect(0, 0, canvas.width, canvas.height);
        okNowReallyStartTheAssChamber();
        $("#perfection").get(0).play();
    }

    var clicked = false;
    $(document).on("click", function(event) {
        var beans = new Audio("beans.mp3");
        $("body").append(beans);
        context.drawImage(leeLobster, event.pageX, event.pageY)
        leeLobsters.push([event.pageX, event.pageY]);
        beans.play();
        if (clicked == false) {
            clicked = true;
            setTimeout(function() {
                $(document).off("mousemove");
                $(document).off("click");
                setTimeout(function() { startTheAssChamber(); }, 500);
            }, 2000);
        }
    });
});
