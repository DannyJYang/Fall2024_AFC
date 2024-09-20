const phoneInput = document.getElementById("phoneInput");
phoneInput.placeholder = "###-###-####";
phoneInput.maxLength = "12";

document.getElementById("phoneInput").addEventListener("input", function () {
  let input = this.value.replace(/\D/g, "");

  if (input.length > 6) {
    input = input.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  } else if (input.length > 3) {
    input = input.replace(/(\d{3})(\d{3})/, "$1-$2");
  }
  this.value = input;
});

const textarea = document.getElementById("moreInfo");
const charCountDisplay = document.getElementById("charCount");
const maxChars = 30;

textarea.addEventListener("input", function () {
  const currentLength = this.value.length;
  const charLeft = maxChars - currentLength;
  charCountDisplay.textContent = `${charLeft} Characters Left`;

  if (charsLeft < 10) {
    charCountDisplay.style.color = "red";
  } else {
    charCountDisplay.style.color = "black";
  }
});
charCountDisplay.textContent = `${maxChars} Characters left`;

document
  .getElementById("hiringForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const ageInput = document.getElementById("ageInput").value;
    const errorMessage = document.getElementById("error-message-age");
    const age = Number(ageInput);

    if (isNaN(age)) {
      // errorMessage.style.display = 'none';
      alert("Please enter a valid input for age");
    } else if (age < 21 || age > 99) {
      alert("Please enter age that's at least 21 and less than 99");
    } else {
      // errorMessage.style.display = 'none';
      const fName = document.getElementById("fName").value;
      const lName = document.getElementById("lName").value;
      //age is already created from above
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phoneInput").value;
      const address1 = document.getElementById("inputAddress").value;
      const address2 = document.getElementById("inputAddress2").value;
      const city = document.getElementById("inputCity").value;
      const state = document.getElementById("inputState").value;
      const zip = document.getElementById("zip").value;
      const criminalRecord = document.getElementById("criminalRecord").value;
      const moreInfo = document.getElementById("moreInfo").value;

      console.log(`fName: ${fName}, lName: ${lName}, email: ${email}, phone: ${phone}, 
        address1: ${address1}, address2: ${address2}, city: ${city}, state: ${state}, zip: ${zip}, 
        criminalRecord: ${criminalRecord}, moreInfo: ${moreInfo}`);

      alert("Submitted!");
    }
  });
