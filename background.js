var isExtensionOn = false;

chrome.extension.onMessage.addListener(
function (request, sender, sendResponse) {
    if (request.cmd == "setOnOffState") {
        isExtensionOn = request.data.value;
        alert("the content changed to"+request.data.value);
    }

    if (request.cmd == "getOnOffState") {
        sendResponse(isExtensionOn);
    }
});

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     alert("url changed");
// });