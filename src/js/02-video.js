import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');

const player = new Player(iframe);

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }


  window.addEventListener('DOMContentLoaded', () => {
    const currentTime = localStorage.getItem('videoplayer-current-time');
    if (currentTime) {
      player.setCurrentTime(parseFloat(currentTime));
    }
  });
