
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}
const pasteOpt = () => {
    let a = new window.Clipboard();
    a.readText().then(data => console.log(data));
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