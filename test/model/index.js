import expect from 'expect';

// import { ??? } from '../../src/model';

import { res } from '../../src/index';

let tab = res();

for (let i = 0; i < tab.length; i++) {
    console.log(tab[i].name);
}

describe('Sensor model tests', () => {
    /* TODO: Ecrire ici la suite de tests pour le modèle objet.*/
});
