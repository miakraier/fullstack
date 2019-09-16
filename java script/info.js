//how to write js correctly
//סוגי משתנים
//string
let name = "mia"
//number
let age = 23
//boolean
let shit = false
//null (empty)
let b = null
//undefined
//way 1
let c = undefined
//way 2
let d

//concatenation (שרשור)-------------------------------------------------------
console.log('my name is' + name + 'and i am' + age + 'years old')
//template string
console.log(`my name is ${name} and i am ${age} years old`)

let hello = `my name is ${name} and i am ${age} years old`
console.log(hello)
console.log(hello.length) /*number of letters*/
console.log(hello.split('')) /*spliting the string by the sign in the ('')*/

//array (מערך)--------------------------------------------------------------------
//way 1
let t = 'a, b, c, d'
console.log(t.split(','))
//way 2
let t = ['a', 'b', 'c', 'd']
console.log(t[0]) /*will reframe to 'a' */
t[4] = 'e' /*will add another cell in array t*/
t.push('f') /*will add another cell in the end of the array,
 good to use when we dont know how many cells we have in the array*/
t.unshift('z') /*will add another cell in the beggining of the array
 and push the other cells one number bigger in the array placement*/

//objects-----------------------------------------------------------------------
let person = {
    firstname: "mia",
    lastname: "kraier",
    age: 23,
    hobbies: ['music', 'movies', 'sleeping'],
    address: {
        neighborhood: "the birds",
        city: "kibbutz maabarot",
        state: "israel"
    }
}
person.email = "miakraier@gmail.com" /*will add another property to the object*/
console.log(person.firstname, person.lastname)
console.log(person.hobbies[0])
console.log(person.address.city)

//array of objects
let ToDos = [
    {
        id: 1,
        text: 'take out trash',
        isComplited: false,
    }
         {
        id: 2,
        text: 'meeting with boss',
        isComplited: false,
    }
        {
        id: 3,
        text: "doc's appt",
        isComplited: false,
    }
]
console.log(ToDos[1].text)

//conditions--------------------------------------------
let x = 10
if (x === 10) {
    console.log("it's true");
} else {
    console.log("it's false");
}// === is comparing also the data types
//------
let x = 10
let color = x > 10 ? 'red' : 'blue';
// ? means "if this is true: then..."
// : means else
console.log(color)
//constructor functions------------------------------------------
function Person(firstname, lastname, dateofbirth) {
    this.firstname = firstname,
        this.lastname = lastname,
        this.dateofbirth = new Date(dateofbirth),
        this.getbirthyear = function () {
            return this.dateofbirth.getbirthyear()
        }
    this.getfullname = function () {
        return `${this.firstname} ${this.lastname}`
    }
}
//instantiate objects
let person1 = new Person('mia', 'kraier', '13-9-1996')
console.log(person1.getbirthyear())
console.log(person1.getfullname())

//DOM------------------------------------------------------------
let ul = document.querySelector('.justaclass')
ul.remove() //will remove the item
ul.lastElementChild.remove() //will remove his last element child
ul.firstElementChild.textContent = 'hello' //will change the content of the first element child
ul.children[1].innerText = 'change' //will choose the second child and chage it's content
ul.lastElementChild.innerHTML = "<h1>hello</h1>" //will change the last element child content to hello and put it in h1 tag

//example of error messege----------------------------------------
let form=document.getElementById("example")
let maneinput=document.querySelector("#name")
let emailinput=document.querySelector("#email")
let msg=document.getElementById("errormsg")
let userlist=document.querySelector(".users")
 //the following lines will make an error messege when the fiekds are not filled and the submit button is clicked
form.addEventListener('submit', validation)
function validation(e){
    e.preventDefault()
    if(nameinput.value==='' || emailinput.value===''){
        msg.classList.add('error')
        msg.innerHTML='please enter fields'
        setTimeout(()=>msg.remove(),3000) //will make the messege disapere after 3 seconds
    }else{ //the following lines will take the input content and save it in li tag it created
        let li=document.createElement('li')
        li.appendChild(document.createTextNode(`${nameinput.value} : ${emailinput.value}`))
        userlist.appendChild(li)
        //clear fields
        nameinput.value=''
        emailinput.value=''
    }
}