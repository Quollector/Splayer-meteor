document.addEventListener('DOMContentLoaded', () => {
    
    /* Boutons controls */
    var btnPlay = document.querySelector('.meteor-play');
    var btnStop = document.querySelector('.meteor-stop');
    var btnVolumeDown = document.querySelector('.meteor-volumeDown');
    var btnVolumeUp = document.querySelector('.meteor-volumeUp');

    var iconPlay = document.querySelector('.material-play');
    var iconPause = document.querySelector('.material-pause');

    /* Vidéos */

    var lecteur = document.querySelector('video');

    var circleProgress = document.querySelector('#circleProgress');

    var circumferenceCircle = (document.querySelector('.meteor-screen').offsetWidth)*Math.PI;

    circleProgress.style.strokeDasharray = circumferenceCircle;
    circleProgress.style.strokeDashoffset = circumferenceCircle;

    /* Volume */

    var element = document.querySelector('.view-volume');
    var indiceVolume = parseInt(element.style.height);

    /* Action controls */

    var playOrStop = 0;    

    lecteur.volume = 0.5;

    btnPlay.addEventListener('click', function() {
        if(playOrStop == 0){

            lecteur.play();

            iconPlay.style.display = "none";
            iconPause.style.display = "block";

            circleProgress.style.display = "block";
            circleProgress.classList.add("progressBar");

            circleProgress.style.animationDuration = lecteur.duration + "s";

            playOrStop = 1;
        }
        else if(playOrStop == 1){           

            lecteur.pause();

            iconPlay.style.display = "block";
            iconPause.style.display = "none";

            playOrStop = 0;
        }
        
    });
    
    btnStop.addEventListener('click', function() {
        lecteur.pause();

        iconPlay.style.display = "block";
        iconPause.style.display = "none";

        circleProgress.style.display = "none";

        playOrStop = 0;
        lecteur.currentTime = 0;
    })

    btnVolumeDown.addEventListener('click', function(){
            lecteur.volume = lecteur.volume - 0.1;

            indiceVolume -= 10;

            element.style.height = indiceVolume + '%';
    })

    btnVolumeUp.addEventListener('click', function(){
        lecteur.volume = lecteur.volume + 0.1;

        indiceVolume += 10;

        element.style.height = indiceVolume + '%';
    })

    btnVolumeUp.addEventListener('mouseover', function(){
        document.querySelector('.view-volume-container').style.opacity = 0.8;
    })

    btnVolumeDown.addEventListener('mouseover', function(){
        document.querySelector('.view-volume-container').style.opacity = 0.8;
    })

    btnVolumeUp.addEventListener('mouseout', function(){
        document.querySelector('.view-volume-container').style.opacity = 0;
    })

    btnVolumeDown.addEventListener('mouseout', function(){
        document.querySelector('.view-volume-container').style.opacity = 0;
    })

    lecteur.onended = function(){
        iconPlay.style.display = "block";
        iconPause.style.display = "none";

        circleProgress.style.display = "none";

        playOrStop = 0;
        lecteur.currentTime = 0;
    }
});