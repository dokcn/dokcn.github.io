let myHeading = document.querySelector('h2');
myHeading.textContent = concat("Hello", "world!");


let myImage = document.querySelector('img')
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-old.png') {
        myImage.setAttribute('width', '200')
        myImage.setAttribute('src', "images/firefox.jpg")
    } else {
        myImage.setAttribute('width', '189')
        myImage.setAttribute('src', 'images/firefox-old.png')
    }
}


let myButton = document.querySelector("button");
myButton.onclick = function () {
    setUsername()
};


if (!localStorage.getItem('name')) {
    setUsername();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
