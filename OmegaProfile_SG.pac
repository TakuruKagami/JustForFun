var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+SG", {
    "+SG": function() {
        ;
function FindProxyForURL(url, host) { host = host.toLowerCase(); const domain = host.split(':')[0]; const domainIs = function (host, domain) { return host === domain || dnsDomainIs(host, '.' + domain); }; const siteFilters = [{"format":"domain","pacReturn":"HTTPS sg2.tcdn.me:443; HTTPS sg3.tcdn.me:443; HTTPS sg10.tcdn.me:443; HTTPS sg7.tcdn.me:443; HTTPS sg4.tcdn.me:443; HTTPS sg6.tcdn.me:443; HTTPS sg1.tcdn.me:443; HTTPS sg9.tcdn.me:443; HTTPS sg5.tcdn.me:443; HTTPS sg8.tcdn.me:443","value":"hentai2read.com"}].map(({ format, value, pacReturn }) => { if (format === 'regex') value = new RegExp(value); return { format, value, pacReturn }; }); const directCondition = (() => { if (isPlainHostName(host)) return true; if (typeof isInNetEx !== 'undefined') { if (isInNetEx(host, 'fc00::/7') || isInNetEx(host, 'fe80::/10')) { return true; } } if (!/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/.test(host)) { return false; } const ipRanges = [['0.0.0.0', '255.0.0.0'], ['10.0.0.0', '255.0.0.0'], ['127.0.0.0', '255.0.0.0'], ['169.254.0.0', '255.255.0.0'], ['172.16.0.0', '255.240.0.0'], ['192.0.2.0', '255.255.255.0'], ['192.88.99.0', '255.255.255.0'], ['192.168.0.0', '255.255.0.0'], ['198.18.0.0', '255.254.0.0'], ['224.0.0.0', '240.0.0.0'], ['240.0.0.0', '240.0.0.0']]; return ipRanges.some(([start, end]) => isInNet(host, start, end)); })(); if (directCondition) return 'DIRECT'; if (["tenet","dns","eth","local","ip","intra","intranet","onion","discordapp.io","edit.boxlocalhost.com","localhost.megasyncloopback.mega.nz","localhost.wwbizsrv.alibaba.com","localtest.me","lvh.me","spotilocal.com","vcap.me","www.amazonmusiclocal.com","google-analytics.com","secure.gate2shop.com","cdn.safecharge.com","paddle.com","tcdn.me"].some(item => domainIs(host, item))) { return 'DIRECT'; } const siteFilter = siteFilters.find(filter => { switch (filter.format) { case 'domain': return domain === filter.value || domain.endsWith('.' + filter.value); case 'full domain': return domain === filter.value; case 'regex': return filter.value.test(domain); default: return false; } }); return siteFilter ? siteFilter.pacReturn : 'DIRECT'; }

/* End of PAC */;
        return FindProxyForURL;
    }.call(this)
});