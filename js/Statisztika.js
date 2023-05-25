class Statisztika {
    lista;
    constructor(lista) {
        this.lista = lista;
    }
    nemszerintSzama(nem) {
        let db = 0;
        this.lista.forEach((element) => {
            if (element.nem === nem) {
                db++;
            }
        });
        return db;
    }
    atlagEletkor() {
        let atlag = 0;
        this.lista.forEach((element) => {
            if (atlag / this.lista.length == NaN) {
                atlag= 0;
            }else
            {
            atlag += element.kor;
            }
        });
        return atlag / this.lista.length;
    }
    nemszerintAtlagEletkora(nem) {
        let atlag = 0;
        let db = 0;
        this.lista.forEach((element) => {
            if (element.nem === nem) {
                atlag += element.kor;
                db++;
            }
        });
        return atlag / db;
    }
}

export default Statisztika;