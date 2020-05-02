function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


$(window).on("load", function() {

    var CUR_THEME = "black";
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 

    class Theme {
        constructor(name, backgroundColor, image) {
            this.name = name;
            this.backgroundColor = backgroundColor;
            this.image = image;
            this.data = new Array();
        }

        changePortrait() {
            $("#portrait").css("background-image", "url(" + this.image + ")");
        }

        clearCanvas() {
            context.fillStyle = this.backgroundColor;
            context.clearRect(0, 0, canvas.width, canvas.height);
        }

        start() {
            CUR_THEME = this.name;
            this.data = new Array();
            context.fillStyle = this.backgroundColor;

            $("canvas").css("background-color", this.backgroundColor);
            this.changePortrait();
            this.clearCanvas();
            this._preDraw();
            this.draw();
        }

        draw() {
            if (CUR_THEME != this.name) {
                return;
            }
            this._draw();
        }

        requestAnimationFrame() {
            var self = this;
            window.requestAnimationFrame(function() { self.draw(); });
        }

        _preDraw() { }

        _draw() { }
    }

    class BlackTheme extends Theme {
        drawLine(row, spacing=null) {
            if (row > canvas.height) {
                this.data.pop();
                return;
            }

            if (!spacing) {
                var spacing = getRandInt(100, 200);
                this.data.unshift(spacing);
            }

            var opacity = row / canvas.height;

            for (var j = -200; j < canvas.width; j += spacing) {
                context.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
                context.fillRect(j, row, 1, 1);
            }
        }

        _preDraw() { 
            for (var i = 0; i < canvas.height; i++) {
                this.drawLine(i);
            }
        }

        _draw() {
            this.clearCanvas();
            for (var i = 0; i < this.data.length; i++) {
                this.drawLine(i + 1, this.data[i]);
            }

            this.drawLine(0);
            this.requestAnimationFrame();
        }
    }

    class PinkTheme extends Theme {
        constructor(name, backgroundColor, image) {
            super(name, backgroundColor, image);
            this.heart = new Image();
            this.heart.src = "heart.png";
            this.margin = 30;
        }

        _preDraw() {
            var center = Math.floor(canvas.width / 2);
            for (var i = 0; center + i < canvas.width; i += (this.margin * 2) + this.heart.width) {
                for (var j = this.margin; j < canvas.height; j += this.margin * 2) {
                    context.drawImage(this.heart, center + this.margin + i, j);
                    context.drawImage(this.heart, center - this.margin - i - this.heart.width, j);
                }
            }
        }

        _draw() {
            this.requestAnimationFrame();
        }
    }

    $(".theme-icon").on("mousedown", function() {
        $(this).addClass("click");
    });

    $(".theme-icon").on("mouseup", function() {
        $(this).removeClass("click");
    });

    $(".theme-icon").on("mouseout", function() {
        $(this).removeClass("click");
    });

    var blackTheme = new BlackTheme("black", "#000000", "portrait_black.png");
    $("#black").on("click", function() {
        if (CUR_THEME != blackTheme.name) {
            blackTheme.start();
        }
    });

    var pinkTheme = new PinkTheme("pink", "#ffffd1", "portrait_pink.png");
    $("#pink").on("click", function() {
        if (CUR_THEME != pinkTheme.name) {
            pinkTheme.start();
        }
    });

    blackTheme.start();
});
