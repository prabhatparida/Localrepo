// var c = 400;

let a = 330;

if(true) {
    let a = 23;
    const b = 20;
    // var c = 267; 
    // console.log("Inner Value", a);
}

 //  console.log(a);
 //  console.log(b);
 //  console.log(c);


 function one(){
    const username = "Prabhat"

    function two(){
        const website = "Youtube"
        console.log(username); 
    }
    // console.log(website);

    two();
 }

// one();

if(true){
    const username = "Prabhat";
    if(username === "Prabhat"){
        const website = "Youtube";
        // console.log(username +" " +  website);

    }
    // console.log(website);

}
// console.log(username);

// ++++++++++++++++++++ Interesting +++++++++++++++++++++

console.log(addOne(5));


function addOne(num){
    return num + 1;

}


console.log(addTwo(5));

const addTwo = function(num){
    return num + 2 ;
}

