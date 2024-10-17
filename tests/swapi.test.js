const axios = require('axios');

describe('SWAPI Tests', () => {
    const baseUrl = 'https://swapi.dev/api';

    test('Get all planets', async () => {
        const response = await axios.get(`${baseUrl}/planets/`);
        expect(response.status).toBe(200);
        expect(response.data.count).toBeGreaterThan(0);
    });

    test('Get a specific starship', async () => {
        const response = await axios.get(`${baseUrl}/starships/9/`);
        expect(response.status).toBe(200);
        expect(response.data.name).toBe('Death Star');
    });

    test('Get all films', async () => {
        const response = await axios.get(`${baseUrl}/films/`);
        expect(response.status).toBe(200);
        expect(response.data.count).toBeGreaterThan(0);
    });

    test('Handle non-existent resource', async () => {
        try {
            await axios.get(`${baseUrl}/heroes/`);
        } catch (error) {
            expect(error.response.status).toBe(404);
        }
    });

    test('Get first planet', async () => {
        const response = await axios.get(`${baseUrl}/planets/1/`);
        expect(response.status).toBe(200);
        expect(response.data.name).toBe('Tatooine');
    });

    test('Get starships page 2', async () => {
        const response = await axios.get(`${baseUrl}/starships/?page=2`);
        expect(response.status).toBe(200);
        expect(response.data.count).toBeGreaterThan(0);
    });

    test('Get characters from film 1', async () => {
        const response = await axios.get(`${baseUrl}/films/1/`);
        expect(response.status).toBe(200);
        expect(response.data.characters.length).toBeGreaterThan(0);
    });

    test('Get an empty planet', async () => {
        try {
            await axios.get(`${baseUrl}/planets/999/`);
        } catch (error) {
            expect(error.response.status).toBe(404);
        }
    });

    test('Get starship with incorrect id', async () => {
        try {
            await axios.get(`${baseUrl}/starships/999/`);
        } catch (error) {
            expect(error.response.status).toBe(404);
        }
    });

    test('Get first film', async () => {
        const response = await axios.get(`${baseUrl}/films/1/`);
        expect(response.status).toBe(200);
        expect(response.data.title).toBe('A New Hope');
    });
});
