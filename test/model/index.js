/* Ce fichier contient les test que nous opéront sur nos objets */

import expect from 'expect';

import { res } from '../../src/index';

let tab = res();

describe('Sensor model tests', () => {
    /* TODO: Ecrire ici la suite de tests pour le modèle objet.*/

    describe('Test du premier objet', () => {
        it('L\'entité 1 est un objet', () => {
            expect(typeof(tab[0]) === 'object').toBe(true);
        });

        it('L\'objet numero 1 doit être de type Temperature et que son attribut soit accessible', () => {
            expect(tab[0].type).toEqual('TEMPERATURE');
        });

        tab[0].name = 'Température de Bureau';

        it('Test du set de l\'objet en question', () => {
            expect(tab[0].name).toEqual('Température de Bureau');
        });

        it('Test de la méthode average donnant la température moyenne', () => {
            expect(tab[0].data.average() == 23.11).toBe(true);
        });

        it('Température minimum', () => {
            expect(tab[0].data.min() == 21).toBe(true);
        });

        it('Température maximum', () => {
            expect(tab[0].data.max() == 25).toBe(true);
        });

        it('Dernières mesures de la température', () => {
            expect(tab[0].data.lastDate()).toEqual('2016-10-19T16:00:00.000Z');
        });
    });

    describe('Test du deuxième objet', () => {
        it('L\'entité 2 est un objet', () => {
            expect(typeof(tab[1]) === 'object').toBe(true);
        });

        it('L\'objet numero 2 doit être de type Door et que son attribut soit accessible', () => {
            expect(tab[1].type).toEqual('DOOR');
        });

        tab[1].name = 'Porte Garage';

        it('Test du set de l\'objet en question', () => {
            expect(tab[1].name).toEqual('Porte Garage');
        });

        it('Savoir si la porte est ouverte ou non', () => {
            expect(tab[1].data.isOpen()).toBe(false);
        });
    });

    describe('Test du troisième objet', () => {
        it('L\'entité 3 est un objet', () => {
            expect(typeof(tab[2]) === 'object').toBe(true);
        });

        it('L\'objet numero 3 doit être de type FAN_SPEED et que son attribut soit accessible', () => {
            expect(tab[2].type).toEqual('FAN_SPEED');
        });

        tab[2].name = 'Ventilateur de l\'Ordinateur de Bureau';

        it('Test du set de l\'objet en question', () => {
            expect(tab[2].name).toEqual('Ventilateur de l\'Ordinateur de Bureau');
        });

        it('Test de la méthode average donnant la ventilation moyenne', () => {
            expect(tab[2].data.average() == 1774.50).toBe(true);
        });

        it('Ventilation minimum', () => {
            expect(tab[2].data.min() == 1073).toBe(true);
        });

        it('Ventilation maximum', () => {
            expect(tab[2].data.max() == 2299).toBe(true);
        });

        it('Dernières mesures de la ventilation', () => {
            expect(tab[2].data.lastDate()).toEqual('2016-10-19T10:25:00.000Z');
        });
    });
});
