let instructionsInput = document.querySelector("#user-instruction");
let apiKey = "1e1cb74ecefd5a7o05tdff4f07af3b19";
let recipeElement = document.querySelector("#recipe");

function generateRecipe(event) {
  event.preventDefault();

  let prompt = instructionsInput.value;
  let context =
    "Respond directly and creatively to the user's request on the recipe and the quote. If the request is for a recipe, list the ingredients, then the steps, then add a rough estimated cost to make it in South African Rand (ZAR) on its own line before the sign-off. Separate each line or list item with a <br/>. Sign the response with 'SheCodes AI' inside a <strong/> element. Do not include a title unless the user specifically asks for one.";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating your recipe...</div>`;

  axios.get(apiURL).then(displayRecipe);
}

function displayRecipe(response) {
  let recipeText = response.data.answer;

  recipeElement.innerHTML = `<div id="Recipe"></div>`;

  let typewriter = new Typewriter("#Recipe", {
    delay: 1,
    cursor: "",
  });

  typewriter.typeString(recipeText).start();
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
