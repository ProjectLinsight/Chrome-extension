// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById("onoff").addEventListener("change", cha);
// });
// function cha() {
//   if (this.checked) {
//     var isExtensionOn = true;
//     chrome.extension.sendMessage({ cmd: "setOnOffState", data: { value: isExtensionOn } });
//   }
//   else {
//     var isExtensionOn = false;
//     chrome.extension.sendMessage({ cmd: "setOnOffState", data: { value: isExtensionOn } })
//   }
// }



document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("on").addEventListener("click", clickon);
}); 

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("off").addEventListener("click", clickoff);
}); 

function clickoff() {
  var isExtensionOn = false;
  chrome.extension.sendMessage({ cmd: "setOnOffState", data: { value: isExtensionOn } });
  }

function clickon() {
  var isExtensionOn = true;
  chrome.extension.sendMessage({ cmd: "setOnOffState", data: { value: isExtensionOn } });
}


window.onload = function () {
document.getElementById('save').onclick = function () {
  var thisvalue = document.getElementById("saveline").value;
  chrome.storage.sync.set({ 'username': thisvalue }, function () {
    console.log('Value is set to ' + thisvalue);
  });
}
document.getElementById('get').onclick = function () {
  chrome.storage.sync.get(['username'], function (result) {
    var user = result;
    console.log('Value currently is ' + result);
  });
}

}