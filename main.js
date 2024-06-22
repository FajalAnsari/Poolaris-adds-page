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

//------- Form Validation --------







document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const countryCode = document.getElementById('countryCode');

  // Map to store the valid length for each country code (including the space)
  const validLengths = {
    '+971': 14, // UAE: +971 followed by 9 digits
    '+966': 14, // KSA: +966 followed by 9 digits
    '+974': 13, // Qatar: +974 followed by 8 digits
    '+973': 13, // Bahrain: +973 followed by 8 digits
    '+968': 13, // Oman: +968 followed by 8 digits
    '+213': 14, // Algeria: +213 followed by 9 digits
    '+20': 14,  // Egypt: +20 followed by 10 digits
    '+98': 15,  // Iran: +98 followed by 10 digits
    '+964': 15, // Iraq: +964 followed by 10 digits
    '+972': 14, // Israel: +972 followed by 9 digits
    '+962': 14, // Jordan: +962 followed by 9 digits
    '+965': 14, // Kuwait: +965 followed by 8 digits
    '+961': 12, // Lebanon: +961 followed by 8 digits
    '+218': 14, // Libya: +218 followed by 9 digits
    '+212': 14, // Morocco: +212 followed by 9 digits
    '+249': 14, // Sudan: +249 followed by 9 digits
    '+216': 13, // Tunisia: +216 followed by 8 digits
    '+967': 14  // Yemen: +967 followed by 9 digits
  };

  // Append country code and space to phone input field
  function updatePhoneNumber() {
    const code = countryCode.value;
    phone.value = code + ' ';
  }

  // Initial update of phone number field with the default country code
  updatePhoneNumber();

  // Update phone number field when the country code changes
  countryCode.addEventListener('change', updatePhoneNumber);

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

  // Validate phone number in real-time
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

    const code = countryCode.value + ' ';
    const phoneNumberWithoutCode = phone.value.replace(code, '').trim();
    const isValidLength = phone.value.length === validLengths[code.trim()];

    if (!isValidLength) {
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
