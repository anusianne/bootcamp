// fetch("https://swapi.dev/api/people/2/")
//   .then((res) => {
//     console.log("RESOLVED!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("JSON DONE", data);
//     return fetch("https://swapi.dev/api/people/1/");
//   })
//   .then((res) => {
//     console.log("SECOND REQUEST", res.json());
//   })
//   .catch((e) => {
//     console.log("ERROR", e);
//   });

const loadStarWarsChar = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/4/");
    const data = await res.json();
    console.log(data.name);
  } catch (e) {
    console.log(e);
  }
};
loadStarWarsChar();
