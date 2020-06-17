// Exercise 1
exDivider(1)
const names = ['Idan', 'Kundi', 'Sefi', 'Galit']
const ages = [37, 7, 36, 32]

for (let i = 0; i < names.length; i++){
  console.log(names[i]+' is '+ages[i]+' years old')
}

// Exercise 2
exDivider(2)

const numbers = [1,4,2,3,6,8,23,45,45]

let sum = 0;

for(let number of numbers){
  sum += number
}

console.log('The sum is: '+sum)


// Exercise 3
exDivider(3)
let numAvg = sum/numbers.length
console.log('The Avg is: '+numAvg)

// Exercise 4
exDivider(4)
const nums = []
for (let i = 1; i <= 100; i++){
  nums.push(i)
}

console.log(nums)

// Exercise 5
exDivider(5)
for (number of nums){
  (number%2 > 0) && console.log(number)
}

// Exercise 6
exDivider(6)
let numbs = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]

for (index in numbs){
  (numbs[index] === 709)&&console.log('The number 709 is at index number: '+index)
}


// Exercise 7
exDivider(7)
const pnames = ["Ashley", "Donovan", "Lucas"]
const pages = [23, 47, 18]
const people = []

for (let index in pnames){
  people[index] = {
    name: pnames[index],
    age: pages[index]
  }
}

console.log(people)

// Exercise 8
exDivider(8)

for (person of people){
  console.log(person.name+" is "+person.age+" years old")
}

// Exercise 9
exDivider(9)
const posts = [
  {id: 1, text: "Love this product"},
  {id: 2, text: "This is the worst. DON'T BUY!"},
  {id: 3, text: "So glad I found this. Bought four already!"}
]

for (index in posts){
  (posts[index].id===2)&&posts.splice(index,1)
}
console.log(posts)

// Exercise 10
exDivider(10)

const newPosts = [
  {
    id: 1, 
    text: "Love this product",
    comments: []
  },
  { 
    id: 2, 
    text: "This is the worst. DON'T BUY!", 
    comments: [
                {id: 1, text: "Idiot has no idea"}, 
                {id: 2, text:"Fool!"}, 
                {id: 3, text: "I agree!"}
              ]
   },
   {
    id: 3, 
    text: "So glad I found this. Bought four already!",
    comments: []
   }
]

for (post of newPosts){
  if(post.id===2){
    for (index in post.comments){
      post.comments[index].id === 3 && post.comments.splice(index,1)
    }
  }
}
console.log(newPosts)

// Exercise 11
exDivider(11)

const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

const dicKeys = Object.keys(dictionary)

for (letter of dicKeys) {
  console.log("Words that begin with  "+letter+":")
  for (word of dictionary[letter]) {
    console.log(word)
  }
}

function exDivider(number){
  console.log(' ')
  console.log(' ')
  console.log('==========================')
  console.log('Exercise '+number)
  console.log('==========================')
  console.log(' ')
}