class Loader{
    constructor(){
        this.loader = document.getElementById("loader")
        this.counter = 0
    }

    show(){
        this.loader.classList.add = ("visible")
        this.counter++;
    }
    hide(){
        this.counter--;
        
        if(this.counter == 0) this.loader.classList.remove = ("visible")
    }
}

const loader = new Loader();