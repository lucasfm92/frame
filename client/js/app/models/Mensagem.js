class Mensagem {

    constructor (texto = '') {

        this._texto = texto;

    }

    get texto () {

        return this._texto;

    }

    set texto(texto) {

        this._texto = texto;

    }

}

let mensagem = new Mensagem ('Lucas Furtado');
console.log(mensagem.texto);