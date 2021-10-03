chrome.browserAction.onClicked.addListener(function () {
    showCookie();
});

function text2clip(text) {
    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = text;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    body.removeChild(copyFrom);
}
function notify(msg) {
    if (window.Notification) { new Notification(chrome.app.getDetails().name, { icon: chrome.app.getDetails().icons['48'], body: msg }); }
}




async function showCookie() {
    let cookieString = await getIdFromCookie();
    text2clip(cookieString);
    notify("Cookies 已经成功复制到剪切板。");
}

async function getIdFromCookie() {
    let promise1 = new Promise((resolve, reject) => {
        chrome.tabs.getSelected(null, function (tab) {
            var url = tab.url;
            var arr = url.split("/");
            var result = arr[0] + '//' + arr[2]

            resolve(result)
        })
    })

    let domain = await promise1;
    console.log("domain", domain);
    let stringCookie = "";
    let promise = new Promise((resolve, reject) => {
        chrome.cookies.getAll({
            url: domain
        }, async function (cookies) {
            for (var i = 0; i < cookies.length; i++) {
                if (cookies[i].name.length > 0 && cookies[i].value.length > 0) {
                    stringCookie = stringCookie + cookies[i].name + "=" + cookies[i].value + "; ";
                }
            }
            resolve(stringCookie);

        });
    })
    try {
        let result = await promise;
        return result;
    } catch (error) {
        return false;
    }
}

