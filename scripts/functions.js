function concat(s1, s2) {
    return s1 + ' ' + s2;
}

function setUsername() {
    let myName = prompt('请输入你的名字。');
    console.log('\'' + myName + "'")
    if (!myName) {
        setUsername()
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerText = 'Mozilla 酷毙了，' + myName;
    }
}
