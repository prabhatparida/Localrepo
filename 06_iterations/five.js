const coding = ["Java", "Ruby", "Js", "Python", "Cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach((item) => {
//     console.log(item);
// })

// function printCodingArray(item){
//     console.log(item);
// }

// coding.forEach(printCodingArray)

// coding.forEach((item, index, array) =>{
//     console.log(item, index, array);
// })

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})