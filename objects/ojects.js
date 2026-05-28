let student = {
    name: "Ramakrishna",
    age : 24,
    course: "Bsc",
    city : "Hyderabad"
}
console.log(student)


let student = [{
    name: "Ramakrishna",
    age : 24,
    course: "Bsc",
    city : "Hyderabad"
    
},
{
     name: "krishna",
    age : 25,
    course: "Bsc",
    city : "Hyderabad"
}];
console.log(student)


// Count Word Frequency

let sentence = "hello hi hello rk hi";

let words = sentence.split(" ");

let frequency = {};

for (let word of words) {

    if (frequency[word]) {
        frequency[word]++;
    } else {
        frequency[word] = 1;
    }
}

console.log(frequency);





