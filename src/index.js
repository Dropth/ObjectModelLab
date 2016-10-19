// import * as model from './model';


import  { data }  from '../test/model/sensors_data';
import  { Temperature }  from './model/index';
import  { Door }  from './model/index';
import  { FanSpeed }  from './model/index';
import  { TimeSeries }  from './model/index';
import  { Datum }  from './model/index';

const SensorType = {
  temp: 'TEMPERATURE',
  door: 'DOOR',
  vent: 'FAN_SPEED',
}

export function res () {

  let tabGlob = [];

  for (var i = 0; i < data.length; i++) {

    let tabObj = [];
    let tabData = [];

    for (var att in data[i]) {

      tabObj.push(data[i][att]);
    }

    var test = tabObj[3];

    for (var a in test) {
      tabData.push(test[a]);
    }

    if (tabData.length > 1)
      tabObj[3] = new TimeSeries(tabData[0], tabData[1]);
    else
      tabObj[3] = new Datum(tabData[0]);

    switch (tabObj[2]) {
      case SensorType.temp:
        tabGlob.push(new Temperature(tabObj[0], tabObj[1], tabObj[3]));
        break;
      case SensorType.door:
        tabGlob.push(new Door(tabObj[0], tabObj[1], tabObj[3]));
        break;
      case SensorType.vent:
        tabGlob.push(new FanSpeed(tabObj[0], tabObj[1], tabObj[3]));
        break;
      default:
        throw {name: 'SensorType', message: 'Le type transmis n\'est pas reconnu'};
    }
  }

  return tabGlob;

}

/*class Point {
  constructor(x, y) {
    this.data = [];
    this.data.push(x);
    this.data.push(y);
  }
  get x() {
    return this.data[0] || 0;
  }
  set x(val) {
    this.data[0] = val;
  }
  set y(val) {
    this.data[1] = val;
  }
  get y() {
    return this.data[1] || 0;
  }
}
class Point3D extends Point {
  constructor(x, y, z) {
    super(x, y);
    this.data[2] = z;
  }
  get z() {
    return this.data[2] || 0;
  }
  set z(val) {
    this.data[2] = val;
  }
  toString() {
    return (`(${this.x}, ${this.y}, ${this.z})`);
  }
}

const d3 = new Point3D(1, 2, 3);

const toto = ['un', 'deux', 'trois'];
const [un, deux, trois] = toto;
console.log(un, deux, trois);
const arr = [...toto, 'quatre'];
console.log(arr);

console.log('ok', d3.toString());

console.log('Hello World!');*/
