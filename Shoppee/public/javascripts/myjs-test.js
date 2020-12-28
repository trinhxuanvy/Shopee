

$(document).ready(function () {
    var getI = document.getElementsByClassName('getImage');
    var image = document.querySelectorAll('.image img');
    var len;
    $('input[type="submit"]').click(function (e) { 
        e.preventDefault();
        var getArr = $("form").serializeArray();
    });
    
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
    
});