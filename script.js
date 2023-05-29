//referencia: https://www.youtube.com/watch?v=lVqHiTCIRQg&t=2085s
//Funciones-------------------------------

function hello() {
    console.log('Hello')
}
hello()

function number() {
    return 20
}

console.log(number())

function bai() {
    return function () {
        return 'Baibai'
    }
}

console.log(bai()())

//Parametros de funciones--------------------

function helloByName(name) {
    return 'Hello ' + name
}

console.log(helloByName('user'))

function add(x, y) {
    return x + y
}

console.log(add(2, 2))

//Funciones parametros por defecto-----------

function addUndefined(x = 0, y = 0) {

    return x + y
}

console.log(addUndefined(2))


//Objetos-------------------------------------

const user = {
    name: 'Camila',
    lastname: 'Saenz',
    age: 21,
    address: {
        country: 'Costa Rica',
        city: 'San Jose',
        street: 'Calle Boqueron'
    },
    pets: ['maya', 'betka', 'coco', 'eva', 'paco'],
    active: true,
    sendMail: function () {
        return 'sending email..'
    }
}

console.log(user)
console.log(user.name)

//Shortland property names-----------------------

const name = 'laptop'
const price = 3000

const newProduct = {
    name,
    price
}

console.log(newProduct)

//Manipulacion del DOM---------------------------

const title = document.createElement('h1')
title.innerText = 'Hello from js'
document.body.append(title)

const button = document.createElement('button')
button.innerText = 'click me'
document.body.append(button)

button.addEventListener('click', function () {
    title.innerHTML = 'Texto actualizado'
    alert('Click realizado')
})


//Objetos como parametros dentro del DOM-------- 

const person = {
    name: 'joe',
    age: 20
}

function printInfo(user) {
    return '<h1>Hola ' + person.name + '</h1>'
}

document.body.innerHTML = printInfo(person)


//Destructuring de Objetos
function printAge({ age }) {
    return '<h2>Edad:  ' + age + '</h2>'
}

document.body.innerHTML = printAge(person)


//Funciones anonimas ----------------------------

console.log(
    function () {
        return 'Starting...'
    }()
)

const helloButton = document.createElement('button')
button.innerText = 'Say hello'

helloButton.addEventListener('click', function () {
    alert('Hello!')
})

document.body.append(helloButton)


//Funciones de flecha ---------------------------
const add = (x, y) => {
    return x + y
}

const helloButton2 = document.createElement('button')
button.innerText = 'Say hello 2'

helloButton.addEventListener('click', () => {
    alert('Hello!')
})

document.body.append(helloButton2)

//Inline arrow funtions-------------------------

const showText = () => 'Hola mundo!'
console.log(showText())