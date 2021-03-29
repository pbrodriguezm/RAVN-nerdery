const fetchAPI = require("../src/callback");

function request(url) {
  return new Promise((resolve, reject) => {
    fetchAPI(url, (error, data) => {
      if (error) {
        return reject(error);
      }
      return resolve(data);

    });
  });
}

it("should return the information of Luke", async () => {
  const API = "https://swapi.dev/api/people/1/";
  
  const result = await request(API);
  expect(result).not.toBeNull();
  expect(result.name).toBe('Luke Skywalker')

});


it("should throw an error", async () => {
  const API = "https://swapi.dev/api/people/b/";
  
  await expect(request(API)).rejects.toThrow();

});
