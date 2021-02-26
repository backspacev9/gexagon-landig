var slides = document.querySelectorAll(".hexPolygon");
var btn = document.querySelectorAll(".SlideBtn");
console.log(slides.length+"--"+btn.length);

function fill (){
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.backgroundImage = "url(img/slide" + i + ".jpg)";
    }

}

function remap (idButtun){
  
    if(idButtun >= 2){
        for (let i= 0; i<3; i++){
            slides[i].style.backgroundImage = slides[i+1].style.backgroundImage;
        }
        for (let i= 4; i<8; i++){
            slides[i].style.backgroundImage = slides[i+1].style.backgroundImage;
        }
        for (let i= 9; i<12; i++){
            slides[i].style.backgroundImage = slides[i+1].style.backgroundImage;
        }
    }    
    if(idButtun <= 1){
        for (let i= 3; i>0; i--){
            slides[i].style.backgroundImage = slides[i-1].style.backgroundImage;
        }
        for (let i= 8; i>4; i--){
            slides[i].style.backgroundImage = slides[i-1].style.backgroundImage;
        }
        for (let i= 12; i>9; i--){
            slides[i].style.backgroundImage = slides[i-1].style.backgroundImage;
        }
      
    } 
}

checkbtn.onclick = function() {



    var s = document.querySelectorAll(".hexPolygon");
    console.log(s.length);
    console.log(slides.length);
}

function Activebtn(id){
    remap(id);
    for (let i= 0; i<btn.length;i++){
        btn[i].style.backgroundColor= "#b9b8b8";
    }
  
    btn[id].style.backgroundColor= "#414141";
    console.log(id);
}


document.addEventListener('DOMContentLoaded', function(){
    fill();
    
 });