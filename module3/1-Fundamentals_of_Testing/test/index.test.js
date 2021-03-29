import { sumar, restar, multiplicar, dividir } from '../index.js';

describe('Matha operations', () => {
    test('SUM', () => {
        expect(sumar(1,1)).toBe(2);
    });
    test('subs', () => {
        expect(restar(1,1)).toBe(0);
    });
    test('MUL', () => {
        expect(multiplicar(1,1)).toBe(1);
    });
    test('Div', () => {
        expect(dividir(1,1)).toBe(1);
    });
});