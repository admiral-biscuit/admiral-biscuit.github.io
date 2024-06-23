/* contact.js */

function generateMailAddress(showIcon) {
  const part1 = "jorid";
  const part2 = "king";
  const part3 = "poo.steed";
  const firstName = part1.substring(0, 3) + part1.charAt(4) + part1.charAt(3);
  const lastName = part2.charAt(0) + "l" + part2.substring(1);
  const domain = part3.substring(0, 2) + part3.substring(4, 7) + part3.substring(2, 4) + part3.charAt(8) + part3.charAt(7);
  const result = firstName + lastName + "@" + domain;

  return mailToLink(result, showIcon);
}

function injectMailAddress() {
  const elements = document.getElementsByClassName("mail");
  for (const element of elements) {
    const showIconString = element.getAttribute("data-show-icon");
    element.innerHTML = generateMailAddress(showIconString === "true");
  }
}

function generateMobileNumber() {
  const block3 = "";
  const block2 = "";
  const block1 = "";
  return reverseString(block1) + " " + reverseString(block2) + " " + reverseString(block3);
}

function injectMobileNumber() {
  const mobileNumber = generateMobileNumber();
  const elements = document.getElementsByClassName("mobile");
  for (const element of elements) {
    element.innerHTML = mobileNumber;
  }
}

addEventListener("DOMContentLoaded", (e) => {
  injectMailAddress();
  injectMobileNumber();
});

/* utils.js */

function mailToLink(str, showIcon) {
  let icon = "";
  if (showIcon) {
    icon = "<span class=\"material-icons\">mail</span>";
  }
  return "<a class=\"mail-link\" href=\"mailto:" + str + "\">" + icon + str + "</a>";
}

function reverseString(str) {
  return str.split("").reverse().join("");
}