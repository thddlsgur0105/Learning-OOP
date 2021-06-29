const amISexy = new Promise((resolve, reject) => {
    // console Yes You Are ~== API returned value
    setTimeout(resolve, 2000, "Yes You Are")
    setTimeout(reject, 3000, "You Are Ugly")
});

amISexy
    .then(result => console.log(result))
    .catch(error => console.log(error))