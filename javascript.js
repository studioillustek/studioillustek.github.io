var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Studio illuStek')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Visuals & Illustraties')
    .pauseFor(2500)
    .deleteAll()
    // .deleteChars(7)
    // .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();