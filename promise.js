const amISexy = new Promise((resolve, reject) => {
    throw Error("something is wrong");
});

amISexy
    .then(value => console.log(value))
    .catch(value => console.log(value));