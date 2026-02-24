import { musicPlayer } from "./data.js"






let playBtn=document.querySelector('.play')
let pause=document.querySelector('.pause')
let artistname=document.querySelector('.artist-name')
let songtitle=document.querySelector('.music-title')
let songRange=document.querySelector('.range-music')
let prevBtn=document.querySelector('.prev-btn')
let forwardBtn=document.querySelector('.forward-btn')
let img=document.querySelector('.img')
let displayError=document.querySelector('.display-error')
let progress=document.querySelector('.range-music')
let currentTime=document.querySelector('.current-time')
let duration=document.querySelector('.duration')
let list=document.querySelector('.list')
let faShow=document.querySelector('.fa-bars')
let eachMusic=document.querySelectorAll('.fa-bars')
let audio=document.createElement('audio')


faShow.addEventListener('click',()=>{
    listAppear()
})

eachMusic.forEach((btn)=>[
btn.addEventListener('click',()=>{
   listAppear()
})
])


function listAppear(){
if(list.classList.contains('display')){
list.classList.remove('display')

    }
    else{
        list.classList.add('display')
    }
}


let currentSongIndex=0
updateSong()

prevBtn.addEventListener('click',()=>{
    if(currentSongIndex==0){
       
        return;
    }
  
   currentSongIndex--;
   updateSong()
audio.play()
 playBtn.innerHTML='<i class="fa fa-pause" aria-hidden="true"></i>'
})

forwardBtn.addEventListener('click',()=>{
    if(currentSongIndex==musicPlayer.length - 1){
        return;
    }
      
    currentSongIndex++;
  updateSong()
audio.play()
 playBtn.innerHTML='<i class="fa fa-pause" aria-hidden="true"></i>'
})

playBtn.addEventListener('click',()=>{
    if(!audio.paused){
        audio.pause()
 playBtn.innerHTML='<i class="fa fa-play" aria-hidden="true"></i>'
    }
    else{
  audio.play()

     playBtn.innerHTML='<i class="fa fa-pause" aria-hidden="true"></i>'
    }
  
})

function formatTime(seconds){
let mins=Math.floor(seconds/60);
let secs=Math.floor(seconds%60);
if(secs <  10)secs = '0' + secs
return mins + ':' +secs
}

function updateSong(){
    const recentSong=musicPlayer[currentSongIndex]
    img.src=recentSong.images
artistname.innerText=recentSong.artistName
songtitle.innerText=recentSong.songTitle

audio.src=recentSong.song

audio.onloadedmetadata=()=>{
progress.value=0
duration.textContent=formatTime(audio.duration)
progress.max=Math.floor(audio.duration)
}
}

audio.addEventListener('timeupdate',()=>{
currentTime.textContent=formatTime(audio.currentTime)
progress.value=Math.floor(audio.currentTime)
})

progress.addEventListener('change',()=>{
    audio.currentTime= progress.value
    audio.play()
     playBtn.innerHTML='<i class="fa fa-pause" aria-hidden="true"></i>'
})

function moveSlider(){
    progress.value=audio.currentTime

}
setInterval(moveSlider,500)

/*

song.onloadedmetadata=function(){
    songRange.max=song.duration;
    songRange.value=song.currentTime;
}


play.addEventListener('click',()=>{
   
  song.play()
pause.classList.remove('pause')
play.classList.add('pause')

    
  
})

pause.addEventListener('click',()=>{
   
song.pause()
pause.classList.add('pause')
play.classList.remove('pause')
 
   
 
   

})


if(song.play()){
    setInterval(()=>{
 songRange.value=song.currentTime;
    },500)
}



songRange.onchange=()=>{
    song.play()
    song.currentTime=songRange.value
    pause.classList.remove('pause')
play.classList.add('pause')
}
*/