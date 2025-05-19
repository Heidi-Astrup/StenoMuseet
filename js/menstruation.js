/* Fil: menstruation.js
formål: at lave javascript til menstruationssiden, hvor en video skal stoppes og startes med spørgsmål */


//kilde: https://stackoverflow.com/questions/53921097/html5-video-pause-for-a-few-seconds-then-continue-playback
var video = document.getElementById('video');

video.addEventListener("timeupdate", tick);

function tick(e) {
  var t = this.currentTime;
  if (t >= 91) {
    this.pause();
    video.removeEventListener("timeupdate", tick);
    knap(); //hjælp fra chatGPT: https://chatgpt.com/share/68248075-2b30-800e-bd4a-ed1d5a6fbc4e
  }
}

function knap () {
        sporgsmalsBoks.innerHTML += `
        <article id="boks">
          <h3>Hvor meget bløder en kvinde i gennemsnit?</h3>
          <button type="button" onclick="playVid()">10 ml = 1 spiseske</button>
          <button type="button" onclick="playVid()">50 ml = 3 spiseskeer</button>
          <button type="button" onclick="playVid()">1 dl = 6 spiseskeer</button>

        </article>
        `
    }

  //https://www.w3schools.com/TagS/tryit.asp?filename=tryhtml5_av_met_play_pause
let vid = document.getElementById("video"); 

  function playVid() { 
  vid.play(); 
  sporgsmalsBoks.innerHTML = `
        
        `
  tick2();
} 




  //hjælp dfra chatGPT: https://chatgpt.com/c/68248a79-4164-800e-bf2b-09271e01c140
function tick2 () {
  setTimeout(() => {
      video.pause(); // Pause the video
      // Optionally reset the video's playback position
      // video.currentTime = 0;
    knap2()
    }, 69 * 1000);
    
  }

  function knap2 () {
    sporgsmalsBoks.innerHTML += `
        <article id="boks">
          <h3>Hvor mange dage varer en menstruation i gennemsnit?</h3>
          <button type="button" onclick="playVid2()">1-3 dage</button>
          <button type="button" onclick="playVid2()">4-5 dage</button>
          <button type="button" onclick="playVid2()">7-9 dage</button>

        </article>
        `
  }

    function playVid2() { 
  vid.play(); 
  sporgsmalsBoks.innerHTML = `
        
        `
  tick3();
} 

  function tick3 () {
  setTimeout(() => {
      video.pause(); // Pause the video
      // Optionally reset the video's playback position
      // video.currentTime = 0;
    knap3()
    }, 52 * 1000); //tidspunkt hvor den skal stoppe: 3:32
    
  }

  function knap3 () {
    sporgsmalsBoks.innerHTML += `
        <article id="boks">
          <h3>Endometriose</h3>
          <a href="#endometriose"><button type="button">Vil du læse mere?</button></a>

          <button type="button" onclick="playVid3()">Fortsæt video</button>
        </article>
        `
  }

      function playVid3() { 
  vid.play(); 
  sporgsmalsBoks.innerHTML = `
        
        `
} 


