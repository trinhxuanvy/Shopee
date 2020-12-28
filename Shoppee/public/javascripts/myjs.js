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

    var swiper = new Swiper('.swiper-container-search', {
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

    // $('#getImage').change(function (e) { 
    //     e.preventDefault();
    //     var src = URL.createObjectURL(e.target.files[0]);
    //     $('.content-product-all .product-image img').attr('src', src);
    // });
    
    var getI = document.getElementsByClassName('getImage');
    var image = document.querySelectorAll('.image img');
    var len;
    
    for(let k = 0; k < getI.length; k++){
        $(getI[k]).change(function (e) { 
            var files = getI[k].files;
            if(files.length > 1){
                if(files.length > 7){
                    len = 8;
                }
                else{
                    len = files.length;
                }
                for(let i = 0; i < len; i++){
                    var fileReader = new FileReader();
                    fileReader.onload = function (e) {
                        var src = e.target.result;
                        image[i].src = src;
                    }
                    fileReader.readAsDataURL(files[i]);
                }
            }
            else{
                var fileReader = new FileReader();
                fileReader.onload = function (e) {
                    var src = e.target.result;
                    image[k].src = src;
                }
                fileReader.readAsDataURL(files[0]);
            }
        });
    }

    var click = document.getElementsByClassName('click');
    var choose = document.querySelectorAll('.click p')
    var value = document.getElementsByClassName('value');
    for(let i = 0; i < click.length; i++){
        $(click[i]).click(function (e) { 
            e.preventDefault();
            for(let j = 0; j < value.length; j++){
                $(value[j]).val(0);
            }
            $(value[i]).val(choose[i].innerHTML);
        });
    }


    const nganhhang = [
        { IDNganhHang : 1, Ten: 'Thời Trang Nam'},
        { IDNganhHang : 2, Ten: 'Thời Trang Nữ'},
        { IDNganhHang : 3, Ten: 'Điện Thoại & Phụ Kiện'},
        { IDNganhHang : 4, Ten: 'Mẹ & Bé'},
        { IDNganhHang : 5, Ten: 'Thiết Bị Điện Tử'},
    ]

    const loaihang = [
        { IDLoaiHang : 1, IDNganhHang : 1, Ten : 'Áo thun'},
        { IDLoaiHang : 2, IDNganhHang : 1, Ten : 'Áo sơ mi'},
        { IDLoaiHang : 3, IDNganhHang : 1, Ten : 'Áo khoác & Áo vest'},
        { IDLoaiHang : 4, IDNganhHang : 1, Ten : 'Áo nỉ/ Áo len'},
        { IDLoaiHang : 5, IDNganhHang : 1, Ten : 'Đồ bộ/ Đồ mặc nhà'},
        { IDLoaiHang : 6, IDNganhHang : 1, Ten : 'Đồ đôi'},
        { IDLoaiHang : 7, IDNganhHang : 1, Ten : 'Quần'},
        { IDLoaiHang : 15, IDNganhHang : 2, Ten : 'Set trang phục & Jumpsuit'},
        { IDLoaiHang : 16, IDNganhHang : 2, Ten : 'Đồ đôi'},
        { IDLoaiHang : 17, IDNganhHang : 2, Ten : 'Đồ lót, Đồ ngủ & Đồ mặc nhà'},
        { IDLoaiHang : 18, IDNganhHang : 2, Ten : 'Đồ bơi'},
        { IDLoaiHang : 19, IDNganhHang : 2, Ten : 'Trang phục thể thao'},
        { IDLoaiHang : 20, IDNganhHang : 2, Ten : 'Phụ kiện may mặc'},
        { IDLoaiHang : 21, IDNganhHang : 2, Ten : 'Thời trang trung niên'},
    ]

    const maumathang = [
        { IDMauMatHang : 1, IDLoaiHang : 1, Ten : 'Áo ngắn tay có cổ'},
        { IDMauMatHang : 2, IDLoaiHang : 1, Ten : 'Áo ngắn tay không cổ'},
        { IDMauMatHang : 7, IDLoaiHang : 2, Ten : 'Áo kiểu'},
        { IDMauMatHang : 8, IDLoaiHang : 2, Ten : 'Cổ tàu'},
        { IDMauMatHang : 12, IDLoaiHang : 3, Ten : 'Áo khoác nhẹ'},
        { IDMauMatHang : 13, IDLoaiHang : 3, Ten : 'Áo khoác dù'},
        { IDMauMatHang : 24, IDLoaiHang : 4, Ten : 'Áo cổ trụ'},
        { IDMauMatHang : 25, IDLoaiHang : 4, Ten : 'Áo ba lỗ'},
    ]

    nganhhang.forEach(item => {
        console.log(item.Ten);
    });
    
    function renderHtml(name) {
        if(name == 'nganhhang'){
            const html = nganhhang.map(item => `
            <li class="${name}">
                <p>${item.Ten}</p>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </li>
            `).join(" ")
            console.log(html)
            $('.ul-nganhhang').html(html);
        }
        else if(name == 'loaihang'){
            const html = loaihang.map(item => `
            <li class="${name}">
                <p>${item.Ten}</p>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </li>
            `).join(" ")
            console.log(html)
            $('.ul-loaihang').html(html);
        }
        else if(name == 'maumathang'){
            const html = maumathang.map(item => `
            <li class="${name}">
                <p>${item.Ten}</p>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </li>
            `).join(" ")
            console.log(html)
            $('.ul-maumathang').html(html);
        }
    }
    
    renderHtml('nganhhang');

    function changeChar(string) {
        var result = '';
        for(let i = 0; i < string.length; i++){
            result += string[i];
            if(string[i] == '&'){
                for (let j = i + 1; j < string.length; j++) {
                    if(string[j] == ' '){
                        for(let k = j; k <= string.length; k++){
                            if(k == string.length){
                                return result;
                            }
                            result += string[k];
                        }  
                    }
                }
            }
        }
    }
    var click = document.querySelectorAll('.nganhhang');
    var clickget = document.querySelectorAll('.nganhhang p');
    var click1 = document.querySelectorAll('.loaihang');
    var clickget1 = document.querySelectorAll('.loaihang p');
    
    console.log(click.length);
    for(let i = 0; i < click.length; i++){
        $(click[i]).click(function (e) { 
            e.preventDefault();
            var id = document.getElementById('maumathang');
            var id1 = document.getElementById('label-mh');
            $(id1).html('');
            $(id).val('');
            var get = clickget[i].innerHTML;
            if(get.search('&amp;') != -1){
                get = changeChar(get);
            }
            var id;
            for(let j = 0; j < nganhhang.length; j++){
                if(nganhhang[j].Ten == get){
                    id = nganhhang[j].IDNganhHang;            
                }
            }
            var count = 0;
            var click1 = document.querySelectorAll('.loaihang');
            var clickget1 = document.querySelectorAll('.loaihang p');
            var clicki1 = document.querySelectorAll('.loaihang');

            var click2 = document.querySelectorAll('.maumathang');
            var clickget2 = document.querySelectorAll('.maumathang p');
            var clicki2 = document.querySelectorAll('.maumathang');
            
            for(let j = 0; j < click2.length; j++){
                clickget2[j].innerHTML = '';
                $(clicki2[j]).css('visibility', 'hidden');
            }

            for(let j = 0; j < loaihang.length; j++){
                if(id == loaihang[j].IDNganhHang){
                    console.log(id)
                    clickget1[count].innerHTML = loaihang[j].Ten;
                    $(clicki1[count]).css('visibility', 'visible');
                    count++;
                }
            }
            
        });
    }
    for(let i = 0; i < click1.length; i++){
        $(click1[i]).click(function (e) { 
            e.preventDefault();
            var get = clickget1[i].innerHTML;
            if(get.search('&amp;') != -1){
                get = changeChar(get);
            }
            var id;
            for(let j = 0; j < loaihang.length; j++){
                if(loaihang[j].Ten == get){
                    id = loaihang[j].IDLoaiHang;            
                }
            }
            var id1 = document.getElementById('label-mh');
            $(id1).html('');
            var count = 0;
            var click2 = document.querySelectorAll('.maumathang');
            var clickget2 = document.querySelectorAll('.maumathang p');
            var clicki2 = document.querySelectorAll('.maumathang');
            for(let j = 0; j < maumathang.length; j++){
                if(id == maumathang[j].IDLoaiHang){
                    console.log(id)
                    clickget2[count].innerHTML = maumathang[j].Ten;
                    $(clicki2[count]).css('visibility', 'visible');
                    count++;
                }
            }
            var id = document.getElementById('maumathang');
            $(id).val('');
        });
    }
    var click3 = document.querySelectorAll('.maumathang');
    var clearinput = document.querySelectorAll('.maumathang input');
    var clickget3 = document.querySelectorAll('.maumathang p');
    for(let i = 0; i < click3.length; i++){
        $(click3[i]).click(function (e) { 
            e.preventDefault();
            var id = document.getElementById('maumathang');
            $(id).val(clickget3[i].innerHTML);
            var id1 = document.getElementById('label-mh');
            $(id1).html(clickget3[i].innerHTML);
        });
    }
});

