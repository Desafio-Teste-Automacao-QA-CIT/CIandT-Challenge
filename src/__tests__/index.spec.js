const { open, close, firstCase, secondCase, customCase } = require("../index");

beforeEach(async () => {
  await open();
});

afterAll(async () => {
  await close();
});

describe("interface tests", () => {
  describe('When search for "Science: Computers"', () => {
    it('should return "No questions found."', async () => {
      const result = await firstCase();
      expect(result).toEqual("No questions found.");
    });
  });

  describe('When select "Category" and search for "Science: Computers"', () => {
    it('should return return a 25 items list and pagination element should be present', async () => {
      const { isPaginationEl, listItemsCount } = await secondCase();
      expect(listItemsCount).toBe(25);
      expect(isPaginationEl).toBe(true);
    });
  });

  describe('When search for "Video Game"', () => {
    it('there should be only the "Easy", "Medium" and "Hard" dificulties', async () => {
      expect(await customCase()).toBeUndefined();
    });
  });
});
