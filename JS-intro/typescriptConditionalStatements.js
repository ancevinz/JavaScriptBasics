"use strict";
var ages = 55;
if (ages > 18) {
    console.log("eligible");
}
else {
    console.log("not eligible");
}
if (ages < 13) {
    console.log("child");
}
else if (ages >= 13 && ages <= 19) {
    console.log("teenager");
}
else {
    console.log("adult");
}
