/* Ce fichier contient une fonction qui permet de récupérer les données du fichier
   sensors_data.js afin d'obtenir les objets que nous voulons */

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

  for (let i = 0; i < data.length; i++) {

    let tabObj = [];
    let tabData = [];

    for (let att in data[i]) {

      tabObj.push(data[i][att]);
    }

    let test = tabObj[3];

    for (let a in test) {
      tabData.push(test[a]);
    }

    if (tabData.length > 1)
      tabObj[3] = new TimeSeries(tabData[0], tabData[1]);
    else
      tabObj[3] = new Datum(tabData[0]);

    switch (tabObj[2]) {
      case SensorType.temp:
        tabGlob.push(new Temperature(tabObj[0], tabObj[1], tabObj[2], tabObj[3]));
         Object.assign(tabGlob[i].data, tabObj[3]);
        break;
      case SensorType.door:
        tabGlob.push(new Door(tabObj[0], tabObj[1], tabObj[2], tabObj[3]));
        Object.assign(tabGlob[i].data, tabObj[3]);
        break;
      case SensorType.vent:
        tabGlob.push(new FanSpeed(tabObj[0], tabObj[1], tabObj[2], tabObj[3]));
        Object.assign(tabGlob[i].data, tabObj[3]);
        break;
      default:
        throw {name: 'SensorType', message: 'Le type transmis n\'est pas reconnu'};
    }
  }

  return tabGlob;

}