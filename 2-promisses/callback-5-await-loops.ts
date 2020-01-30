async function fakeRequest5() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Setting data");
            let importantData: string = "Some new data";
            resolve(importantData);
        }, 500);
    });
};

function processData5(data) {
    console.log(`Processing ${data}`);
}

(async () => {

    // Kod poniżej zadziała tak jak się tego spodziewamy
    let value = null;
    for (let i = 0; i < 5; i++) {
        value = await fakeRequest5();
    }

    // Kod poniżej nie zadziała tak jak się tego spodziewamy !!!
    // let idx = [0, 1, 2, 3, 4]
    // idx.forEach(async function (i) {
    //     value = await fakeRequest4();
    // })

    processData5(value);
})();

