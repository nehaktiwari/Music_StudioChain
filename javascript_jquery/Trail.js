$("document").ready(function(){
    let Username=prompt("Enter your name");
    console.log(Username);
    // document.getElementById("greet").innerHTML = "Hello " + Username + "!";
    $(".greet").html("Hye "+Username+" , enjoy listening");
});

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('../songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Suna Hai Tere Dil Pe Mera" , filePath: "../songs/1.mp3" , coverPath: "../covers/1.jpg"},
    {songName: "Shri Krishna Govind Hare Murari" , filePath: "../songs/2.mp3" , coverPath: "../covers/2.jpg"},
    {songName: "Meri Maa Ke Barabar Koi Nahi" , filePath: "../songs/3.mp3 ", coverPath: "../covers/3.jpg"},
    {songName: "Sath Tera Hume Har Kadam Chahiye" , filePath: "../songs/4.mp3 ", coverPath: "../covers/4.jpg"},
    {songName: "Ye Soch Ke Dil Mera Joro Se Dhadakta Hai" , filePath: "../songs/5.mp3 ", coverPath: "../covers/5.jpg"},
    {songName: "Mast Nazron Se Allah Bachaye" , filePath: "../songs/6.mp3 ", coverPath: "../covers/6.jpg"},
    {songName: "Tumse Pyaar Karke" , filePath: "../songs/7.mp3 ", coverPath: "../covers/7.jpg"},
    {songName: "Mere Baba" , filePath: "../songs/8.mp3 ", coverPath: "../covers/8.jpg"},
    {songName: "Gham Hai Ya Khushi Hai Tu" , filePath: "../songs/9.mp3 ", coverPath: "../covers/9.jpg"},
    {songName: "Raatan Lambiyan" , filePath: "../songs/10.mp3" , coverPath: "../covers/10.jpg"}
]


// play/pause 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        // /songs/1.mp3
        audioElement.src = `../songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    // /songs/1.mp3
    audioElement.src = `../songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    // /songs/1.mp3
    audioElement.src = `../songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})



songItems.forEach((element, i)=>{ 
     element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
     element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
 })