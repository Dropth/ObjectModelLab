/* TODO : Créer le modèle objet ici */
// import * as model from './model';

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

    toString() {
        return (`(${this.x}, ${this.y}, ${this.z})`);
    }
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
    toString() {
        return (`(${this.x}, ${this.y}, ${this.z})`);
    }
}

export class Sensor {

    constructor(id,name,data) {
        this._id = id;
        this._name = name;
        this._data = data;
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

    get data() {
        return this._data;
    }
    set data(data) {
        this._data = dat;
    }

}

export class Temperature extends Sensor {

    constructor(id,name,data) {
        super (id,name,data);
    }
}

export class Door extends Sensor {

    constructor(id,name,data) {
        super (id,name,data);
    }
}

export class FanSpeed extends Sensor {

    constructor(id,name,data) {
        super (id,name,data);
    }
}