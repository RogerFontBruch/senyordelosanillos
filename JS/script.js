var boto_mesVol=document.getElementById("boto_mesVol");
var boto_menysVol=document.getElementById("boto_menysVol");
var boto_play=document.getElementById("boto_play");
var boto_pausa=document.getElementById("boto_pausa");
var boto_stop=document.getElementById("boto_stop");
var boto_endevant=document.getElementById("boto_endevant");
var boto_enrere=document.getElementById("boto_enrere");
var Hobbiton=document.getElementById("Hobbiton");
var Rivendel=document.getElementById("Rivendel");
var Mordor=document.getElementById("Mordor");
var Isengard=document.getElementById("Isengard");
var Rohan=document.getElementById("Rohan");
var Moria=document.getElementById("Moria");
var el_meu_video=document.getElementById("zona_video");
var video_actual = '';
var Thobbiton=document.getElementById('textHobbiton');
var Trivendel=document.getElementById('textRivendel');
var Tmordor=document.getElementById('textMordor');
var Tisengard=document.getElementById('textIsengard');
var Trohan=document.getElementById('textRohan');
var Tmoria=document.getElementById('textMoria');
var tic = 0;
function entrarmapa(){
    var paginaportada=document.getElementById('portada');
    paginaportada.style.visibility='hidden';
    var pagina_mapa=document.getElementById('mapaPag');
    pagina_mapa.style.visibility='visible';
}
function entrarcredits(){
    var paginaportada=document.getElementById('portada');
    paginaportada.style.visibility='hidden';
    var pagina_credits=document.getElementById('creditsPag');
    pagina_credits.style.visibility='visible';
}

function entrarInici(){
    var pagina_credits=document.getElementById('creditsPag');
    pagina_credits.style.visibility='hidden';
    var paginaportada=document.getElementById('portada');
    paginaportada.style.visibility='visible';
}

function entrarInici2(){
    var pagina_mapa=document.getElementById('mapaPag');
    pagina_mapa.style.visibility='hidden';
    var paginaportada=document.getElementById('portada');
    paginaportada.style.visibility='visible';
}

Hobbiton.onclick=function(){
    var fonsvideo=document.getElementById('fonsvideo');
    fonsvideo.style.visibility='visible';
    Thobbiton.style.visibility='visible';
    video_actual='MEDIA/hobbiton.mp4';
    reinici_valors();
}

function tancarVid(){
    var fonsvideo=document.getElementById('fonsvideo');
    fonsvideo.style.visibility='hidden';
    Thobbiton.style.visibility='hidden';
    Trivendel.style.visibility='hidden';
    Tmordor.style.visibility='hidden';
    Tisengard.style.visibility='hidden';
    Trohan.style.visibility='hidden';
    Tmoria.style.visibility='hidden';
    
    
}

Rivendel.onclick=function(){
    var fonsvideo=document.getElementById('fonsvideo');
    fonsvideo.style.visibility='visible';
    Trivendel.style.visibility='visible';
    video_actual = "MEDIA/rivendel.mp4";
    reinici_valors();
    

    
}

Mordor.onclick=function(){
    var fonsvideo=document.getElementById('fonsvideo');
    fonsvideo.style.visibility='visible';
    Tmordor.style.visibility='visible';
    video_actual = "MEDIA/Mordor.mp4";
    reinici_valors();
    

    
}

Isengard.onclick=function(){
    var fonsvideo=document.getElementById('fonsvideo');
    fonsvideo.style.visibility='visible';
    Tisengard.style.visibility='visible';
    video_actual = "MEDIA/isengard.mp4";
    reinici_valors();
    

    
}

Rohan.onclick=function(){
    var fonsvideo=document.getElementById('fonsvideo');
    fonsvideo.style.visibility='visible';
    Trohan.style.visibility='visible';
    video_actual = "MEDIA/rohan.mp4";
    reinici_valors();
    

    
}

Moria.onclick=function(){
    var fonsvideo=document.getElementById('fonsvideo');
    fonsvideo.style.visibility='visible';
    Tmoria.style.visibility='visible';
    video_actual = "MEDIA/moriavideo.mp4";
    reinici_valors();
    

    
}
boto_play.onclick=function(){
    el_meu_video.play();
    el_meu_video.playbackRate=1;
    fes_tic();
}
boto_pausa.onclick=function(){
    el_meu_video.pause();
}
boto_stop.onclick=function(){
    reinici_valors();
}
boto_endavant.onclick=function(){
  el_meu_video.playbackRate=3,5;  
}
boto_enrere.onclick=function(){
    el_meu_video.playbackRate=el_meu_video.playbackRate - 2;
}
function reinici_valors(){
    el_meu_video.src=video_actual;
}
boto_mesVol.onclick=function(){
    el_meu_video.volume= el_meu_video.volume + 0.2;
}
boto_menysVol.onclick=function(){
    el_meu_video.volume= el_meu_video.volume - 0.2;
}
function getVolume(){
    alert(el_meu_video.volume);
}
function fes_tic(){
    document.getElementById("marcador"),innerHTML = video_actual.currentTime;
    setTimeout(fes_tic, 1000);
}
window.onload= function(){
    
}








    
