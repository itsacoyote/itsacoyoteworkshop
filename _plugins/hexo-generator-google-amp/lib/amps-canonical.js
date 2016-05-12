'use strict';

module.exports = function (config, post) {
    var baseURL = config.url;

    var postDate = new Date(post.date);
        var postYear = postDate.getFullYear();
        var postMonth =("0" + (postDate.getMonth() + 1)).slice(-2);

    if (config.url.charAt(config.url.length - 1) !== '/') baseURL += '/';

    return '<link rel="amphtml" href="' + baseURL + postYear + '/' + postMonth + '/' + post.slug + '/' + post.slug + '.amp.html">';
};