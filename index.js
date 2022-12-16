(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
    ga('create', 'UA-5019032-61', 'auto');
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    ga('set', 'dimension1',(ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1) ? 'Facebook' : 'None');
    ga('send', 'pageview');


function trackEvent(send, event, category, action, label, value) {
    if (typeof ga != 'undefined') {
        ga(send, event, category, action, label, value);
    }
    if (typeof gtag != 'undefined') {
        gtag(event, action, {
            'event_label': label,
            'event_category': category,
            'value': value
        });
    }
    if (typeof dataLayer != 'undefined') {
        dataLayer.push({
            'event': 'customeventgtm', //It is configured in GTM Panel with General Custom Event Click. Please check GTM panel and read - https://www.simoahava.com/analytics/create-a-generic-event-tag/
            'customEvent': event,
            'eventCategory': category,
            'eventAction': action,
            'eventLabel': label,
            'eventValue': value
        })
    }
} 

var _comscore = _comscore || [];
_comscore.push({ c1: "2", c2: "6036484" });
(function() {
	var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
	s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
	el.parentNode.insertBefore(s, el);
})();


