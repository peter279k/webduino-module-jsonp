+(function(factory) {
    if (typeof exports === 'undefined') {
        factory(webduino || {});
    } else {
        module.exports = factory;
    }
}(function(scope) {
    'use strict';

    var self;
    var proto;
    var Module = scope.Module;

    function hello() {
        Module.call(this);
        self = this;
    }

    hello.prototype = proto = Object.create(Module.prototype, {
        constructor: {
            value: hello
        }
    });

    proto.hey = function() {
        return "hello world";
    }

    scope.module.hello = hello;
}));