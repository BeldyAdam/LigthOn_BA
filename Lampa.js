/* import JatekTer from "./JatekTer.js"; */
class Lampa{
    #allapot;
    #id;
    #divElem;

    constructor(id, szuloElem, allapot, divElem){
        this.#allapot = allapot;
        this.#divElem = divElem;
        this.#id = id;
        this.szuloElem = szuloElem.append(`<div class="lampa" id="${this.#id}"></div>`)
        this.lampak = $(".lampa");
        this.lampak.on("click", () => {
        this.lampak.find(`#${this.#id}`)
        console.log(this.lampak)
        const random = Math.floor(Math.random()* 2);
        if(random == 1){
            this.#allapot = false;
            this.lampak.css("background-color", "black");
        }else{
            this.#allapot = true;
            this.lampak.css("background-color", "yellow");
        }

        });
        
    }

    kattintasTrigger(){

        const esemeny = new CustomEvent("elem", {
          detail: this,
        });
        window.dispatchEvent(esemeny);
      
}

} 

 export default Lampa;