var urls = [];
i = 0;
/*
function getCurrentTab() {
  var content = document.getElementById('tabs');
  var currentURL = window.location.href;
  urls[i] = currentURL;
  content.innerHTML += '*' + urls[i] + '\n';   
  document.execCommand('Copy');
  i++;
}

#this returns null because it executes before the DOM fully loads.
document.addEventListener('DOMContentLoaded', function () {
  getCurrentTab();
});
*/

window.onload=function(){
  var mb = document.getElementById("btn");
  mb.addEventListener("click", handler);
}
function handler() {
  var content = document.getElementById('tabs');
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    urls.push(url);
    content.innerHTML += '*' + urls[i] + '\n';
    //document.execCommand('Copy');
    i++;
    });
}

/*
var content = document.getElementById('content');
    chrome.tabs.getAllInWindow(
        null,
        function(tabs) {
            for (var i in tabs) {
                tab = tabs[i];
                content.innerHTML += '* [' + tab.url + ' ' + tab.title + '] \n';
            }
            content.select();
            document.execCommand('Copy');
        }
    );
    */

    /*
    function handler() {
  var content = document.getElementById('tabs');
  var currentURL = window.location.href;
  urls[i] = currentURL;
  //var subStrings = urls[i].substring(18,);
  content.innerHTML += '*' + urls[i] + '\n';   
  document.execCommand('Copy');
  i++;
}
*/