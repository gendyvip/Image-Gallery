$.fn.gendySlider = function () {
    $(document).ready(function () {
        var src, alt;
        $("#container").append(`<div id="show"></div>`);
        $("img").hover(
            function () {
                src = $(this).attr('src');
                alt = $(this).attr('alt');
                $("#show").html(`<img class="img-hover" src="${src}" alt="${alt}">`)
            },
            function () {
                $("#show").empty();
            }
        );
        $("#container").mousemove(function (e) {
            $("#show").css({
                left: e.clientX + 5 + 'px',
                top: e.clientY + 5 + 'px',
            });
        });
        $("img").on('click', function () {
            $("body").append(`<div id="slider-container"></div>`)
                .append(`<div id="slider-config"></div>`)
                .append(`<div id="cloned-slider"></div>`);

            $("#slider-config").append(`<img class="img-slider" src="${src}"  alt="${alt}">`)
                .append(`<span id="next">❯</span>`)
                .append(`<span id="prev">❮</span>`)
                .append(`<span id="close"><i class="fa-solid fa-xmark"></i></span>`)
            $(".myImg").clone().appendTo("#cloned-slider").attr("class", "cloned-img")
            var startImg = [...$(".myImg")].indexOf(this)
            var images = [...$(".cloned-img")]
            $(".img-slider").remove()
            $("#cloned-slider").empty().append($(images[startImg]))


            $("#next").on("click", function () {
                $("#cloned-slider").empty()
                $("#cloned-slider").append($(images[++startImg]).animate({
                    top: "25%",
                }, "slow", "linear"))
                if (startImg == images.length) {
                    startImg = 0
                    $("#cloned-slider").append($(images[startImg]).animate({
                        top: "25%",
                    }, "slow", "linear"))
                }
            })


            $("#prev").on("click", function () {
                $("#cloned-slider").empty()
                if (startImg == 0) {
                    startImg = images.length
                    $("#cloned-slider").append($(images[startImg]).animate({
                        top: "25%"
                    }, "slow", "linear"))
                }
                $("#cloned-slider").append($(images[--startImg]).animate({
                    top: "25%"
                }, "slow", "linear"))
            })


            $("#slider-container,#close").on("click", function () {
                $("#slider-container").fadeOut(300, 'linear', function () {
                    $("#slider-container").remove()
                })
                $("#slider-config").fadeOut(300, 'linear', function () {
                    $("#slider-config").remove()
                })
                $("#cloned-slider").fadeOut(300, 'linear', function () {
                    $("#cloned-slider").remove()
                })

            })
        })
    });
}
