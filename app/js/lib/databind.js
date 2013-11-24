(function () {

    "use strict";

    var DataBind = window.DataBind = function (key, value) {
        this.set(key, value);
        this._listener();
    };

    DataBind.prototype = {
        get: function (key) {
            if (!key) { return this.model; }
            return this.model[key] || "";
        },
        set: function (key, value) {
            this.model = this.model || {};
            if (!key || (typeof key === 'object' && Object.keys(key).length === 0)) { return; }
            if (typeof key !== 'object') {
                this.model[key] = value || "";
                this._changeHandler(key);
            } else {
                this.model = this._mergeObjects(this.model, key);
                var k = Object.keys(key),
                    length = k.length;

                while (length--) {
                    this._changeHandler(k[length]);
                }
            }
        },
        push: function (key, value) {
            var val = this.get(key);
            val.push(value);
            this.set(key, val);
        },
        unset: function (key) {
            if (!key) { return; }
            if (Array.isArray(key)) {
                var length = key.length;
                while (length--) {
                    delete this.model[key[length]];
                    this._changeHandler(key[length]);
                }
            } else {
                delete this.model[key];
                this._changeHandler(key);
            }
        },
        _changeHandler: function (key) {
            var binded = document.querySelectorAll('[data-bind="' + key + '"]'),
                length = binded.length;

            while (length--) {
                var el = binded[length],
                    value = this.get(key);

                if (this._isInput(el)) {
                    el.value = value;
                } else {
                    el.innerHTML = value;
                }
            }

            this._createRepeater(key);
        },
        _listener: function () {
            if (document.addEventListener) {
                document.addEventListener('change', this._listenerHandler(), false);
            } else { // IE8 Support
                document.attachEvent('onchange', this._listenerHandler());
            }
        },
        _listenerHandler: function () {
            var self = this;
            return function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement,
                    key = target.getAttribute('data-bind'),
                    value = target.value;
                if (!key) {
                    return e;
                }

                self.set(key, value);
            };
        },
        _createRepeater: function (key) {
            var repeater = document.querySelectorAll('[data-repeat="' + key + '"]'),
                length = repeater.length;

            while (length--) {
                var el = repeater[length],
                    value = this.get(key),
                    fragment = document.createDocumentFragment(),
                    parent = el.parentNode;

                for (var i=0, len=value.length; i<len; i++) {
                    var clone = el.cloneNode(true);

                    if (this._isInput(clone)) {
                        clone.value = value[i];
                    } else {
                        clone.innerHTML = value[i];
                    }

                    fragment.appendChild(clone);
                }

                if (parent) {
                    parent.innerHTML = "";
                    parent.appendChild(fragment);
                }
            }
        },
        _isInput: function (el) {
            var bool = (el.tagName && el.tagName.toLowerCase() === "input") ||
                (el.tagName && el.tagName.toLowerCase() === "textarea") ||
                (el.tagName && el.tagName.toLowerCase() === "select");
            return bool;
        },
        _mergeObjects: function (obj1, obj2) {
            var k = Object.keys(obj2),
                length = k.length;
            while (length--) {
                obj1[k[length]] = obj2[k[length]];
            }
            return obj1;
        }
    };

}());