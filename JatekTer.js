class JatekTer{
    #db;
    #allapotLista;
    #meret;
    #lepes;
    constructor(){


    }
    #setAllapotLista(){
        if (this.allapot== false){
            this.#allapot= true;
        }else{
            this.allapot=true
        }
        this.szinBeallitas();
    }

    szinBeallitas(){
    
    }
    #szomszedKeresese(){

    }
    #init(){
        for (let index = 0; index < this.#allapotLista.length; index++) {
        }
    }
    #ellenorzes(){
        if (this.#db == this.#allapotLista.length){
        }
    }
}

export default JatekTer;