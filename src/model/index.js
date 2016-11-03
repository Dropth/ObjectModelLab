/* Ce fichier contient toutes les classes que nous allons utiliser.*/

export class Data {
    constructor() {
    }
}
export class TimeSeries extends Data {
    constructor(values,labels) {
        super();
        this._values=values;
        this._labels=labels;
    }
    get values() {
        return this._values;
    }
    set values(value) {
        this._values = value;
    }
    set labels(label) {
        this._labels = label;
    }
    get labels() {
        return this._labels;
    }

    average (){

        //super.average();

        let av = 0;
        let i = 0;

        for (i; i < this._values.length; i++) {

            av += this._values[i];
        }

        let res = av/i;
        res = res.toFixed(2);

        return res;

    }

    min () {

        let min = this._values[0];

        for(let i = 1; i < this._values.length; i++) {
            if(this._values[i]<min)
                min = this._values[i];
        }

        return min;
    }

    max () {

        let max = this._values[0];

        for(let i = 1; i < this._values.length; i++) {
            if(this._values[i]>max)
                max = this._values[i];
        }

        return max;
    }

    lastDate () {return this._labels[this.labels.length-1]}
}
export class Datum extends Data {
    constructor(value) {
        super();
        this._value = value;
    }
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = val;
    }

    isOpen () {return this._value==1;}

}

export class Sensor {


    constructor(id,name,type) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._data = new Data();
    }

    get id() {
        return this._id;
    }
    set id(nId) {
        this._id = nId;
    }

    get name() {
        return this._name;
    }
    set name(nom) {
        this._name = nom;
    }

    get type() {
        return this._type;
    }
    set type(t) {
        this._type = t;
    }

    get data() {
        return this._data;
    }
    set data(data) {
        this._data = dat;
    }

}

export class Temperature extends Sensor {

    constructor(id,name,type) {
        super (id,name,type);

        this._data = new TimeSeries();
    }
}

export class Door extends Sensor {

    constructor(id,name,type) {
        super (id,name,type);

        this._data = new Datum();
    }
}

export class FanSpeed extends Sensor {

    constructor(id,name,type) {
        super (id,name,type);

        this._data = new TimeSeries();
    }
}