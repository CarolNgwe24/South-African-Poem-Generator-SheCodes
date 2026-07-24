function generatePoem(event){
    event.preventDefault();

    new Typewriter("#Poem", {
        strings: "On a day like tainted heaven, gods in suits come-bands of saviours carrying branded water cans and cameras.",
        autoStart: true,
        delay: 1,
        cursor: "",
 });
}

let poemFormElement = document.querySelector(#poem-generator-form);
poemFormElement.addEventListener("submit, generatePoem");

