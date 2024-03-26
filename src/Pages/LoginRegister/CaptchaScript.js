// CaptchaScript.js

const initializeCaptcha = () => {
    const captcha = document.querySelector(".captcha");
    const reloadBtn = document.querySelector(".reload-btn");
    const inputField = document.querySelector(".input-captcha input");
    const checkBtn = document.querySelector(".check-btn");
    const statusTxt = document.querySelector(".status-text");
  
    if (!captcha || !reloadBtn || !inputField || !checkBtn || !statusTxt) {
      console.error("One or more elements not found.");
      return;
    }
  
    let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                       'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                       'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                       't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    const getCaptcha = () => {
      let captchaText = "";
      for (let i = 0; i < 6; i++) {
        let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        captchaText += `${randomCharacter} `;
      }
      captcha.innerText = captchaText.trim();
    };
  
    getCaptcha();
  
    reloadBtn.addEventListener("click", () => {
      removeContent();
      getCaptcha();
    });
  
    checkBtn.addEventListener("click", e => {
      e.preventDefault();
      statusTxt.style.display = "block";
      let inputVal = inputField.value.split('').join(' ');
      if (inputVal === captcha.innerText) {
        statusTxt.style.color = "#4db2ec";
        statusTxt.innerText = "Nice! You don't appear to be a robot.";
      } else {
        statusTxt.style.color = "#ff0000";
        statusTxt.innerText = "Captcha not matched. Please try again!";
        inputField.value = "";
      }
    });
  
    const removeContent = () => {
      inputField.value = "";
      captcha.innerText = "";
      statusTxt.style.display = "none";
    };
  };
  
  export default initializeCaptcha;
  