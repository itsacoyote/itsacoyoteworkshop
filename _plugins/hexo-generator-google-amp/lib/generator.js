'use strict';

var _ = require('underscore');
var nunjucks = require('nunjucks');
var env = new nunjucks.Environment();
var pathFn = require('path');
var fs = require('fs');
var log = require('hexo-log')({
  debug: false,
  silent: false
});

nunjucks.configure({
    autoescape: false,
    watch: false
});

env.addFilter('uriencode', function(str) {
    return encodeURI(str);
});

var ampTmplSrc = pathFn.join(__dirname, '../amp-template.html');
var ampTmpl = nunjucks.compile(fs.readFileSync(ampTmplSrc, 'utf-8'), env);
var image_url = "http://images.itsacoyoteworkshop.com/posts/";

function createAmpPosts(posts, config) {
    var result = [];

    _.each(posts.toArray(), function(post) {
        var postDate = new Date(post.date);
        var postYear = postDate.getFullYear();
        var postMonth =("0" + (postDate.getMonth() + 1)).slice(-2);
        var postDay = ("0" + postDate.getDate()).slice(-2);

        var updateDate = new Date(post.updated);
        var updateYear = updateDate.getFullYear();
        var updateMonth =("0" + (updateDate.getMonth() + 1)).slice(-2);
        var updateDay = ("0" + updateDate.getDate()).slice(-2);

        var dates = {
          postDate: {
            fullDate: postDate,
            day: postDay,
            month: postMonth,
            year: postYear
          },
          updateDate: {
              fullDate: updateDate,
              day: updateDay,
              month: updateMonth,
              year: updateYear
          }
        };

        var postURL = config.url + '/' + postYear + '/' + postMonth + '/' + post.slug;

        var ampPost = ampTmpl.render({post: post, config: config, postDates: dates, image_url: image_url, postURL: postURL});

         result.push({
             path: postYear + '/' + postMonth + '/' + post.slug + '/' + post.slug + '.amp.html',
             data: ampPost
        });
    });

    return result;
}

module.exports = function(locals) {
    var self = this;

    var allPosts = locals.posts.sort('-date');
    if (!allPosts.length) return;

    var result = createAmpPosts(allPosts, this.config);

    return result;
};