console.log("welcome to Geet player");
let songIndex = 0;
let audioElement = new Audio("song/2.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let songs = [
  { songName: "tujhe", filePath: "song/1.mp3", coverPath: "cvoer.jpg" },
  {
    songName: "teri nazron ne X your eyes got my heart falling for you",
    filePath: "song/2.mp3",
    coverPath: "cvoer.jpg",
  },
  { songName: "tujhe", filePath: "song/1.mp3", coverPath: "cvoer.jpg" },
  { songName: "tujhe", filePath: "song/1.mp3", coverPath: "cvoer.jpg" },
  { songName: "tujhe", filePath: "song/1.mp3", coverPath: "cvoer.jpg" },
  { songName: "tujhe", filePath: "song/1.mp3", coverPath: "cvoer.jpg" },
  { songName: "tujhe", filePath: "song/1.mp3", coverPath: "cvoer.jpg" },
  { songName: "tujhe", filePath: "song/1.mp3", coverPath: "cvoer.jpg" },
];

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
  }
});
document.addEventListener("timeupdate", () => {
  console.log("timeupdate");
});
