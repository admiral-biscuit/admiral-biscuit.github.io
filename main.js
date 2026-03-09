/* mail.js */

function assembleMailAddress() {
    const part1 = "jorid";
    const part2 = "king";
    const part3 = "poo.steed";

    const firstName = part1.substring(0, 3) + part1.charAt(4) + part1.charAt(3);
    const lastName = part2.charAt(0) + "l" + part2.substring(1);
    const domain = part3.substring(0, 2) + part3.substring(4, 7) + part3.substring(2, 4) + part3.charAt(8) + part3.charAt(7);

    return firstName + lastName + "@" + domain;
}

function injectMailAddress() {
    const elements = document.getElementsByClassName("mail-link");
    for (const element of elements) {
        const mailAddress = assembleMailAddress();
        element.innerHTML = mailAddress;
        element.href = "mailto:" + mailAddress;
    }
}

addEventListener("DOMContentLoaded", (e) => {
    injectMailAddress();
});