define([
    "dojo/_base/window",
    "dojo/dom",
    "demo/widgets/Hello",
    "dojo/domReady!"
], function (
    win,
    dom,
    Hello
) {
    function greet(name) {
        dom.byId("mainHeading").innerText = "Hello " + (name || "World") + "!";
    }
    greet();

    (new Hello({
        onChange: function (name) {
            greet(name);
        }
    })).placeAt(win.body());
});
