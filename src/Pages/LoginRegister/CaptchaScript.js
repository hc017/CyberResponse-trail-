// CaptchaScript.js:

const initializeCaptcha = () => {
  const captcha = document.querySelector(".captcha");
  const reloadBtn = document.querySelector(".reload-btn");
  const inputField = document.querySelector(".input-captcha input");
  const statusTxt = document.querySelector(".status-text");

  if (!captcha || !reloadBtn || !inputField || !statusTxt) {
      console.error("One or more elements not found.");
      return;
  }

  let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
      'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
      'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
      't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  ];

  const getCaptcha = () => {
      let captchaText = "";
      for (let i = 0; i < 6; i++) {
          let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
          captchaText += `${randomCharacter} `;
      }
      captcha.innerText = captchaText.trim();
  };

  getCaptcha();

  if (reloadBtn) {
      reloadBtn.addEventListener("click", () => {
          removeContent();
          getCaptcha();
      });
  }

  const removeContent = () => {
      inputField.value = "";
      captcha.innerText = "";
      statusTxt.style.display = "none";
  };
};

export default initializeCaptcha;
