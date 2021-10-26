const axios = require("axios");
const cowsay = require("cowsay2");

async function getJoke() {
  try {
    // get a joke
    const hdrs = {
      headers: { Accept: "application/json", "User-Agent": "cs240 class" },
    };
    let response = await axios.get("https://icanhazdadjoke.com", hdrs);
    return response.data.joke;
  } catch (err) {
    return "error!";
  }
}

async function printJoke() {
  console.log(cowsay.say(await getJoke()));
}

printJoke();
