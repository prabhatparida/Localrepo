// Immediately Invoked Function EXPRESSIONS (IIFE)

(function newDatabase(){
    // named IIFE
    console.log(`New Database Connected`);
}());



( (name) =>  {
    console.log(`DB Connected Two ${name}`);
} )('Prabhat');

