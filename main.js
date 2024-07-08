//------- Youtube video hero section --------

const videoContainer = document.querySelector(".video-container");
const videoThumbnail = document.querySelector(".video-thumbnail");
const videoIframe = document.querySelector(".video-container iframe");

videoThumbnail.addEventListener("click", () => {
  // iframe's src empty string
  videoIframe.src = "";

  //  YouTubeURL with autoplay enabled
  videoIframe.src = "https://www.youtube.com/embed/gcLKkZEWXwU?autoplay=1";
  videoIframe.style.display = "";
  videoThumbnail.style.display = "none"; //hiding thumnail after play
});
// ------- Youtube video hero section  end -----------

// ------- Youtube video hero section  end desktop -----------
const videoContainerDesktop = document.querySelector(".video-container-desktop");
const videoThumbnailDesktop = document.querySelector(".video-thumbnail-desktop");
const videoIframeDesktop = document.querySelector(".video-container-desktop iframe");

videoThumbnailDesktop.addEventListener("click", () => {
  // iframe's src empty string
  videoIframeDesktop.src = "";

  //  YouTubeURL with autoplay enabled
  videoIframeDesktop.src = "https://www.youtube.com/embed/gcLKkZEWXwU?autoplay=1";
  videoIframeDesktop.style.display = "";
  videoThumbnailDesktop.style.display = "none"; //hiding thumnail after play
});

//------- Form Validation --------


document.addEventListener('DOMContentLoaded', function () {
  function setupValidation(formId, nameId, emailId, phoneId, countryCodeId, nameErrorId, emailErrorId, phoneErrorId) {
      const form = document.getElementById(formId);
      const name = document.getElementById(nameId);
      const email = document.getElementById(emailId);
      const phone = document.getElementById(phoneId);
      const countryCode = document.getElementById(countryCodeId);

      const validLengths = {
          '+971': 14, '+966': 14, '+974': 13, '+973': 13, '+968': 13,
          '+213': 14, '+20': 14, '+98': 15, '+964': 15, '+972': 14,
          '+962': 14, '+965': 14, '+961': 12, '+218': 14, '+212': 14,
          '+249': 14, '+216': 13, '+967': 14
      };

      function updatePhoneNumber() {
          const code = countryCode.value;
          phone.value = code + ' ';
      }

      updatePhoneNumber();
      countryCode.addEventListener('change', updatePhoneNumber);

      name.addEventListener('input', function () {
          this.value = this.value.replace(/\d/g, '');
          if (this.value.trim() === '' && name.value !== '') {
              name.classList.add('is-invalid');
              document.getElementById(nameErrorId).style.display = 'block';
          } else {
              name.classList.remove('is-invalid');
              document.getElementById(nameErrorId).style.display = 'none';
          }
      });

      email.addEventListener('input', function () {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(this.value)) {
              email.classList.add('is-invalid');
              document.getElementById(emailErrorId).style.display = 'block';
          } else {
              email.classList.remove('is-invalid');
              document.getElementById(emailErrorId).style.display = 'none';
          }
      });

      phone.addEventListener('input', function () {
          const code = countryCode.value + ' ';
          if (!this.value.startsWith(code)) {
              this.value = code + this.value.replace(code, '').replace(/[^0-9]/g, ''); // Keep the code and only digits
          } else {
              this.value = this.value.replace(/[^0-9\s+]/g, ''); // Only allow digits and space
          }

          const phoneNumberWithoutCode = this.value.replace(code, '').trim();
          const isValidLength = this.value.length === validLengths[code.trim()];

          if (!isValidLength) {
              phone.classList.add('is-invalid');
              document.getElementById(phoneErrorId).style.display = 'block';
          } else {
              phone.classList.remove('is-invalid');
              document.getElementById(phoneErrorId).style.display = 'none';
          }
      });

      form.addEventListener('submit', function (event) {
          event.preventDefault();
          let isValid = true;

          if (name.value.trim() !== '' && name.value.trim() === '') {
              name.classList.add('is-invalid');
              document.getElementById(nameErrorId).style.display = 'block';
              isValid = false;
          }

          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(email.value)) {
              email.classList.add('is-invalid');
              document.getElementById(emailErrorId).style.display = 'block';
              isValid = false;
          }

          const code = countryCode.value + ' ';
          const phoneNumberWithoutCode = phone.value.replace(code, '').trim();
          const isValidLength = phone.value.length === validLengths[code.trim()];

          if (!isValidLength) {
              phone.classList.add('is-invalid');
              document.getElementById(phoneErrorId).style.display = 'block';
              isValid = false;
          }

          if (isValid) {
              form.submit();
          }
      });
  }

  setupValidation('contactFormTop', 'nameTop', 'emailTop', 'phoneTop', 'countryCodeTop', 'nameErrorTop', 'emailErrorTop', 'phoneErrorTop');
  setupValidation('contactFormBottom', 'nameBottom', 'emailBottom', 'phoneBottom', 'countryCodeBottom', 'nameErrorBottom', 'emailErrorBottom', 'phoneErrorBottom');
});

//------- Form Validation  end --------


// video testimonial 
document.addEventListener('DOMContentLoaded', function() {
  const testimonialModal = document.getElementById('testimonialModal');
  const testimonialVideo = document.getElementById('testimonialVideo');
  const playButtons = document.querySelectorAll('.play-button');

  playButtons.forEach(button => {
    button.addEventListener('click', function() {
      const videoUrl = this.getAttribute('data-video');
      testimonialVideo.src = videoUrl;
    });
  });

  testimonialModal.addEventListener('hidden.bs.modal', function() {
    testimonialVideo.src = '';
  });
});