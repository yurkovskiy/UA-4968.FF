"use strict";

(function() {
    const mcont = document.getElementsByTagName("main")[0]
    const size = 10
    for (let i = 0; i < size; i++) {
        const sectionEl = document.createElement("section")
        sectionEl.innerHTML = `<p>${i + 1}</p>`
        mcont.appendChild(sectionEl)
    }
}())
