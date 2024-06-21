//------- Youtube video hero section --------

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
// ------- Youtube video hero section  end -----------



//------- Form Validation --------
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');

  // Restrict digits in name field and validate
  name.addEventListener('input', function () {
      this.value = this.value.replace(/\d/g, '');
      if (this.value.trim() === '') {
          name.classList.add('is-invalid');
          document.getElementById('nameError').style.display = 'block';
      } else {
          name.classList.remove('is-invalid');
          document.getElementById('nameError').style.display = 'none';
      }
  });

  // Validate email in real-time
  email.addEventListener('input', function () {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.value)) {
          email.classList.add('is-invalid');
          document.getElementById('emailError').style.display = 'block';
      } else {
          email.classList.remove('is-invalid');
          document.getElementById('emailError').style.display = 'none';
      }
  });

  // Restrict alphabets in phone field and validate
  phone.addEventListener('input', function () {
      this.value = this.value.replace(/\D/g, '');
      if (this.value.length !== 10) {
          phone.classList.add('is-invalid');
          document.getElementById('phoneError').style.display = 'block';
      } else {
          phone.classList.remove('is-invalid');
          document.getElementById('phoneError').style.display = 'none';
      }
  });

  form.addEventListener('submit', function (event) {
      event.preventDefault();
      let isValid = true;

      // Final validation before submitting
      if (name.value.trim() === '') {
          name.classList.add('is-invalid');
          document.getElementById('nameError').style.display = 'block';
          isValid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value)) {
          email.classList.add('is-invalid');
          document.getElementById('emailError').style.display = 'block';
          isValid = false;
      }

      if (phone.value.length !== 10) {
          phone.classList.add('is-invalid');
          document.getElementById('phoneError').style.display = 'block';
          isValid = false;
      }

      if (isValid) {
          form.submit();
      }
  });
});

//------- Form Validation  end --------
