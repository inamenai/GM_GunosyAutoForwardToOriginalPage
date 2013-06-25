// ==UserScript==
// @name        Gunosy auto forward to original page
// @namespace   http://inasphere.net/
// @description Gunosyの記事ページを開いた時に自動的に実ページヘ転送する
// @include     http://gunosy.com/g/*
// ==/UserScript==

(function() {
    location.href = document.querySelector('a.articles-show-click').href;
})();
