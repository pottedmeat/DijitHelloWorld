import win from "dojo/_base/window";
import dom from "dojo/dom";
import Hello from "demo/widgets/Hello";
import "dojo/domReady!";
    function greet(name) {
        dom.byId("mainHeading").innerText = "Hello " + (name || "World") + "!";
    }
    greet();

    (new Hello({
        onChange: function (name) {
            greet(name);
        }
    })).placeAt(win.body());
