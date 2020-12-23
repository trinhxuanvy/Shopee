$(document).ready(function () {
    var ruler = document.getElementsByClassName('ruler');
    var bought = document.getElementsByClassName('cost');
    for (var i = 0; i < ruler.length; i++) {
        var cost = bought[i].innerHTML;
        var set = cost * 100 / 130;
        ruler[i].style.width = set.toString() + '%';
    }

    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var swiper = new Swiper('.swiper-container-1', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    

    var swiper = new Swiper('.swiper-container-2', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: false,
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var swiper = new Swiper('.slide-channel-sell', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        spaceBetween: 0,
        pagination: {
            el: false,
            clickable: true,
        },
    });

    var arr1 = [1258.1818181818182, 1258.1818181818182, 1258.1818181818182, 1384, 1384, 1258.1818181818182, 1730];
    var arr2 = [637.9310344827586, 637.9310344827586, 804.3478260869565, 840.9090909090909, 637.9310344827586, 637.9310344827586, 355.7692307692308];
    var arr3 = [77.55102040816327, 49.60753532182104, 41.444270015698585, 12.461059190031152, 65.26479750778816, 76.76609105180533, 1.533742331288343];
    var arr4 = [30.76923076923077, 6.410256410256411, 36.41975308641975, 6.134969325153374, 55.12820512820513, 62.17948717948718, 7.518796992481203];

    var footerImg = document.getElementsByClassName('image-card');

    for (var i = 0; i < footerImg.length; i++) {
        footerImg[i].style.backgroundSize = arr1[i].toString() + '% ' + arr2[i].toString() + '%';
        footerImg[i].style.backgroundPosition = arr3[i].toString() + '% ' + arr4[i].toString() + '%'
    }


    $("a").popover({
        trigger: "manual",
        html: true,
        animation: true
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide");
            }
        }, 200);
    });

    var position = $('.menu-channel-sell').position();
    var top = position.top;
    $(window).scroll(function () { 
        var win = $(this).scrollTop();
        if(top < win){
            $('.menu-channel-sell').addClass('fixed');
        }
        else{
            $('.menu-channel-sell').removeClass('fixed');
        }
    });
    
    
    var sidebar = document.querySelectorAll('.sidebar .header');
    var string;
    var id1 = [], id2 = [], id3 = [];
    for(var i = 1; i <= sidebar.length; i++){
        string = '#btn-show-hide-' + i.toString();
        id1.push(string);
        string = '#link-item-' + i.toString();
        id2.push(string);
        string = '#chevron-down-' + i.toString();
        id3.push(string);
    }
    for(let i = 0; i < sidebar.length; i++){
        $(id1[i]).click(function (e) { 
            e.preventDefault();
            $(id3[i]).toggleClass('rotate');
            $(id2[i]).toggle();
        });
    }

    $('#getImage').change(function (e) { 
        e.preventDefault();
        var src = URL.createObjectURL(e.target.files[0]);
        $('.content-product-all .product-image img').attr('src', src);
    });
    
});

