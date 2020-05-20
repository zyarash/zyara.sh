/**************************************************************
 *
 *
 *
 *
 *
 **************************************************************/


// Helper functions & common stuff used throughout this file
function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function isMobileDevice() {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}


$(window).on("load", function() {
    
    // Canvas variables cause I'm lazy
    var CUR_THEME = null;
    var RAF_ID = null;
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 


    // Canvas resize callback
    window.addEventListener("resize", function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight; 
        CUR_THEME.restart();
    });

    
    // Basic theme class, all themes should inherit from this
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
            if (CUR_THEME && CUR_THEME.name == this.name) {
                return;
            }

            CUR_THEME = this;
            this.data = new Array();
            context.fillStyle = this.backgroundColor;

            $("body").removeClass();
            $("body").addClass(this.name);

            $("canvas").css("background-color", this.backgroundColor);
            this.changePortrait();
            this.clearCanvas();
            this._preDraw();
            this.draw();
        }

        restart() {
            window.cancelAnimationFrame(RAF_ID);
            CUR_THEME = null;
            this.start();
        }

        draw() {
            if (CUR_THEME && CUR_THEME.name != this.name) {
                return;
            }
            this._draw();
        }

        requestAnimationFrame() {
            var self = this;
            RAF_ID = window.requestAnimationFrame(function() { self.draw(); });
        }

        _preDraw() { /* Themes should fill this in */ }

        _draw() { /* Themes should fill this in */ }
    }

    class BlackTheme extends Theme {
        constructor() {
            super("black", "#000000", "portrait_black.png");
        }

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
            super("pink", "#ffffd1", "portrait_pink.png");

            this.heart = new Image();
            this.heart.src = "heart.png";

            this.offset = 0;

            this.offsetDelta = 0.1;
            this.margin = 40;
            if (isMobileDevice()) {
                this.offsetDelta = 0.2;
                this.margin = 30;
            }
        }

        _preDraw() {
            var center = Math.floor(canvas.width / 2);
            for (var i = 0; center + i < canvas.width; i += (this.margin * 2) + this.heart.width) {
                this.data.push(center + this.margin + i);
                this.data.unshift(center - this.margin - i - this.heart.width);
                for (var j = this.margin; j < canvas.height; j += this.margin * 2) {
                    context.drawImage(this.heart, center + this.margin + i, j);
                    context.drawImage(this.heart, center - this.margin - i - this.heart.width, j);
                }
            }
        }

        _draw() {
            this.clearCanvas();
            for (var i = 0; i < this.data.length; i++) {
                var lineWidth = 3;
                context.fillStyle = "rgba(255, 255, 255, 1)";
                context.fillRect(this.data[i] + this.heart.width / 2 - lineWidth / 2, 0, lineWidth, canvas.height);

                var offset = this.offset;
                if (i % 2 != 0) {
                    offset = offset * -1;
                }

                for (var j = this.margin * -1; j < canvas.height + this.margin * 2; j += this.margin * 2) {
                    context.drawImage(this.heart, this.data[i], j + offset);
                }

                if (Math.floor(this.offset) == this.margin * 2) {
                    this.offset = 0;
                }
                else {
                    this.offset = this.offset + this.offsetDelta;
                }
            }
            this.requestAnimationFrame();
        }
    }


    // Handlers for clicking portfolio
    $("#akeos").on("click", function() {
        window.location.href = "/akeos";
    });

    $("#leejennings").on("click", function() {
        window.location.href = "/leejennings";
    });


    // Handlers for clicking themes
    $(".theme-icon").on("mousedown", function() {
        $(this).addClass("click");
    });

    $(".theme-icon").on("mouseup", function() {
        $(this).removeClass("click");
    });

    $(".theme-icon").on("mouseout", function() {
        $(this).removeClass("click");
    });

    var blackTheme = new BlackTheme();
    $("#black").on("click", function() {
        blackTheme.start();
    });

    var pinkTheme = new PinkTheme();
    $("#pink").on("click", function() {
        pinkTheme.start();
    });

    blackTheme.start();
});
