const request = require('supertest');
const WebService = require('../../src/WebService');

describe('WebService.ouvir', () => {

    it('deve lançar erro ao receber uma porta não numérica', async () => {

        expect(() => {
            const ws = new WebService;
            ws.ouvir('porta');
        }).toThrow(TypeError);
        
    });

});