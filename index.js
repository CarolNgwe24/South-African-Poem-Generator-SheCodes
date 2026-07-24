function generatePoem(event){
    event.preventDefault();
    
    document.querySelector("#Poem").innerHTML = ""; 
    
    let typewriter = new Typewriter("#Poem", {
        delay: 1,
        cursor: "",
    });

    typewriter
        .typeString("On a day like tainted heaven, gods in suits come-bands of saviours carrying branded water cans and cameras.")
        .start();
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
