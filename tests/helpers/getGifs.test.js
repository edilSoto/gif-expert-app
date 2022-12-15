import getGifs from "../../src/helpers/getGifs"

describe('Testing the helper getGifs', () => {
    test('Must return an array with gifs', async() =>{

        const gifs = await getGifs('Dragon ball');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    })
})