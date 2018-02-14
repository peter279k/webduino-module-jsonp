+(function(window, webduino) {
    'use strict';
    window.hello = function() {
        return new webduino.module.hello();
    };
}(window, window.webduino));