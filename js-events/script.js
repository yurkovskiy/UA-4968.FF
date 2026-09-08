const div_A = document.getElementById("A");

const mouseEvents = ["click", "mouseup", "mousedown"];

for (let i = 0; i < mouseEvents.length; i++) {
    div_A.addEventListener(mouseEvents[i], function(e) {
        console.log(e.type);
    });
}

const nbu_link = document.getElementsByTagName("a")[0];
const inp = document.getElementById("user");

nbu_link.addEventListener("click", function(e) {
    console.log("nbu link clicked");
    e.preventDefault();
});

const keyboardEvents = ["keydown", "keyup", "keypress"];
for (let i = 0; i < keyboardEvents.length; i++) {
    inp.addEventListener(keyboardEvents[i], function(e) {
        console.log(e);
    });
}
