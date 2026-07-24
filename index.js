function generatePoem(event) {
  event.preventDefault();

  document.querySelector("#Poem").innerHTML = "";

  let apiKey = "1e1cb74ecefd5a7o05tdff4f07af3b19";
  let topic = document.querySelector(".instructions").value;
  let prompt = `Write a South African poem about ${topic}`;
  let context =
    "South African poetry and separate each line with a <br/> and only contain four lines of the poem Sign the poem with 'SheCodes AI'; inside a <strong/> elements Do not include the title";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}

function displayPoem(response) {
  let poemText = response.data.answer;

  let typewriter = new Typewriter("#Poem", {
    delay: 1,
    cursor: "",
  });

  typewriter.typeString(poemText).start();
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
