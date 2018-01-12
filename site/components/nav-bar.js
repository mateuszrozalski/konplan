(function(window, document, undefined) {
    // Refers to the "importer", which is index.html
    var thatDoc = document;

    // Refers to the "importee", which is src/hello-world.html
    var thisDoc =  (thatDoc._currentScript || thatDoc.currentScript).ownerDocument;

    // Gets content from <template>
    var template = thisDoc.querySelector('template').content;

    // Creates an object based in the HTML Element prototype
    var MyElementProto = Object.create(HTMLElement.prototype);

    // Fires when an instance of the element is created
    MyElementProto.createdCallback = function() {
        // Creates the shadow root
        var shadowRoot = this.createShadowRoot();

        // Adds a template clone into shadow root
        var clone = thatDoc.importNode(template, true);
        shadowRoot.appendChild(clone);

    };

    // Registers <nav-bar> in the main document
    window.MyElement = thatDoc.registerElement('nav-bar', {
        prototype: MyElementProto
    });
})(window, document);
