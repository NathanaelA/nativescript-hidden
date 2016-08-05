"use strict";

var page;
exports.onNavigatingTo = function(args) {
    page = args.object;
};

exports.hidden = function() {
    var elem = page.getViewById('elem');
    elem.className = "title hidden";
};

exports.show = function() {
    var elem = page.getViewById('elem');
    elem.className = "title shown";
};

exports.collapse = function() {
    var elem = page.getViewById('elem');
    elem.className = "title collapse";
};
