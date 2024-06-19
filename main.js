const videoContainer = document.querySelector('.video-container');
const videoThumbnail = document.querySelector('.video-thumbnail');
const videoIframe = document.querySelector('.video-container iframe');

videoThumbnail.addEventListener('click', () => {
  // iframe's src empty string  
  videoIframe.src = "";

  //  YouTubeURL with autoplay enabled
  videoIframe.src = "https://www.youtube.com/embed/gcLKkZEWXwU?autoplay=1"; 
  videoIframe.style.display = ''; 
  videoThumbnail.style.display = 'none'; //hiding thumnail after play
});
