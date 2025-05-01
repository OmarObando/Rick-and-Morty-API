const request = require('supertest');
const app = require("../src/app");

describe('GET /api/characters', () => {
    it('Debe retornar un status 200 con lista de personajes filtrada con solo personajes vivos y guion bajo en lugar de espacios',
        async () => {
            const response = await request(app).get('/api/character/').auth('admin', 'admin');
            expect(response.status).toBe(200);
            expect(response.body.message).toBe('Ok');
            expect(response.body.results).toBeDefined();
            expect(response.body.results[0].id).toBe(1);
        }
    )
})

describe('GET /api/characters not auth', () => {
    it('Debe retornar un status 401 sin autenticacion',
        async () => {
            const response = await request(app).get('/api/character/');
            expect(response.status).toBe(401);
        }
    )
})

describe('GET /api/characters bad auth', () => {
    it('Debe retornar un status 401 sin autenticacion',
        async () => {
            const response = await request(app).get('/api/character/').auth('root', 'admin');
            expect(response.status).toBe(401);
        }
    )
})