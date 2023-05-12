import Lampa from "./Lampa.js";
$(function() {
    const szuloElem = $(".lampak")
    for (let index = 0; index < 9; index++) {
        let blub = new Lampa(index, szuloElem);
        console.log("TEST");
    }
});
