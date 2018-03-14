chrome.runtime.sendMessage({type: 'showPageAction'});

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var mainObserver = new MutationObserver(function(mutations, observer) {
	var navNode = document.querySelector("." + NAV_CLASS);
	if (navNode) {
		observer.disconnect();
		addCategorySelector(navNode);
	}
});

if (navNode = document.querySelector("." + NAV_CLASS)) {
	addCategorySelector(navNode);
} else {
	mainObserver.observe(document, { childList: true, subtree: true });
}