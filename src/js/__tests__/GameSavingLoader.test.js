import GameSavingLoader from "../GameSavingLoader";

describe('GameSavingLoader test', () => {
    test('GameSavingLoader works', async () => {
        const result = await GameSavingLoader.load();
        expect(result).toEqual({
            "id": 9,
            "created": 1546300800,
            "userInfo": {
                "id": 1,
                "name": "Hitman",
                "level": 10,
                "points": 2000
            }
        });
    });
});

describe('GameSavingLoader error with mock', () => {
    
    test('GameSavingLoader error', async () => {
        const mockError = new Error('Failed to read data');
        const readSpy = jest.spyOn(GameSavingLoader, 'load').mockRejectedValue(mockError);
        
        await expect(GameSavingLoader.load()).rejects.toThrowError('Failed to read data');

        readSpy.mockRestore();
    });
})
