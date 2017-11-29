'use strict';

browser.browserAction.onClicked.addListener(function(){
    var gettingActiveTab = browser.tabs.query({currentWindow: true});
    gettingActiveTab.then(function (tabs) {
        if(!tabs.length) return;
        let tabUrls = tabs.map(function(_){ return _.url;});
        let uniqueUrls = tabUrls.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
        for(let i = 0; i < uniqueUrls.length; i++){
            let ids = tabs.filter(function(_){ return _.url === uniqueUrls[i];}).map(function(_){ return _.id; });
            ids.shift(); // Remove first item in array
            browser.tabs.remove(ids);
        }
      });
});