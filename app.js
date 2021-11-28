//reduce
//iterates, callback function
//reduces to the single value - it can be numbers, array, object
//1 parameter is total of all calculation
//2 parameter is current iteration

const myFriends=[
    {name: 'Murad', salary: 500, age: 21},
    {name: 'Bilal', salary: 700, age: 21},
    {name: 'Talib', salary: 900, age: 20},
    {name: 'Jasur', salary: 1200, age: 20}
]

//for loop
let amount = 0
for(let i=0; i<myFriends.length; i++){
    amount+=myFriends[i].salary
}
console.log(`${amount} this money was prduced by for loop`)

//however we have really amazing method which can do this process much better
//reduce() method
const amount1 = myFriends.reduce((total, wage)=>total+=wage.salary,0)
console.log(`${amount1} and this is by reduce() method`)
//above where we are using reduce() in callback function we pass 2 parameters one is for calculation
// and second is the value for current interation 
//see how it looks beautiful with only one line while with for loop 4 lines 