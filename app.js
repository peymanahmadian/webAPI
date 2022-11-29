if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}
const pasteOpt = () => {
    debugger;
    let element = document.getElementById("pasteHolder");
    navigator.clipboard.readText().then(data => {
        element.innerHTML = data;

    }).catch(() => { console.error("clipboard not support") })
    //let value = document.execCommand("paste");

}
const shareCode = async () => {

    if (navigator.share) {
        navigator
            .share({
                text: "this is a share text"
            })
            .catch((err) => {
                console.log(`Couldn't share because of`, err.message);
            });
    }
}