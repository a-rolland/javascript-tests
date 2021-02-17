const cities = [
  "miami",
  "barcelona",
  "madrid",
  "amsterdam",
  "berlin",
  "sao paulo",
  "lisbon",
  "mexico city",
  "paris",
];

const newArray = cities.map(
  (capCity) =>
    capCity.charAt(0).toUpperCase() + capCity.substring(1, capCity.length)
);

console.log(newArray);

const students = [
  {
    name: "Tony Parker",
    firstProject: 80,
    secondProject: 75,
    finalExam: 90,
  },
  {
    name: "Marc Barchini",
    firstProject: 84,
    secondProject: 65,
    finalExam: 65,
  },
  {
    name: "Claudia Lopez",
    firstProject: 45,
    secondProject: 95,
    finalExam: 99,
  },
  {
    name: "Alvaro Briattore",
    firstProject: 82,
    secondProject: 92,
    finalExam: 70,
  },
  {
    name: "Isabel Ortega",
    firstProject: 90,
    secondProject: 32,
    finalExam: 85,
  },
  {
    name: "Francisco Martinez",
    firstProject: 90,
    secondProject: 55,
    finalExam: 78,
  },
  {
    name: "Jorge Carrillo",
    firstProject: 83,
    secondProject: 77,
    finalExam: 90,
  },
  {
    name: "Miguel López",
    firstProject: 80,
    secondProject: 75,
    finalExam: 75,
  },
  {
    name: "Carolina Perez",
    firstProject: 85,
    secondProject: 72,
    finalExam: 67,
  },
  {
    name: "Ruben Pardo",
    firstProject: 89,
    secondProject: 72,
    finalExam: 65,
  },
];

//MAP
// return un objeto
// ponemos eso dentro del map

const finalGrades = students.map((students) => {
  let calificacion =
    ((students.firstProject + students.secondProject) / 2) * 0.4 +
    students.finalExam * 0.6;

  return { name: students.name, finalGrade: calificacion };
});

console.log(finalGrades);

// Calificar los estudiantes en función de su desempeño en dos proyectos (40%) y su examen final (60%).
// calificación final = promedio de los proyectos * 0.40 + examen final * 0.60
// Respuesta:

// REDUCE

const objs = [
  { nombre: "ana", edad: 30 },
  { nombre: "bob", edad: 40 },
  { nombre: "raul", edad: 50 },
];

function reducir(acc, persona) {
  console.log(acc, persona);
  return acc + persona.edad;
}

objs.reduce(reducir, 0) / objs.length;

const menu = [
  { name: "Carrots", calories: 150 },
  { name: "Steak", calories: 350 },
  { name: "Broccoli", calories: 120 },
  { name: "Chicken", calories: 250 },
  { name: "Pizza", calories: 520 },
];

function reduceCalories(acc, alimento) {
  console.log(acc, alimento);

  return acc + alimento.calories;
}

totalCalories = "Total de calories : " + menu.reduce(reduceCalories, 0);

//FILTER
// Giving the following arrays of objects, let’s filter just the places with a pool.

const places = [
  {
    title: "Awesome Suite 20' away from la Rambla",
    price: 200,
    type: "Private Room",
    pool: true,
    garage: false,
  },
  {
    title: "Private apartment",
    price: 190,
    type: "Entire Place",
    pool: true,
    garage: true,
  },
  {
    title: "Apartment with awesome views",
    price: 400,
    type: "Entire Place",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment in la Rambla",
    price: 150,
    type: "Private Room",
    pool: false,
    garage: true,
  },
  {
    title: "Comfortable place in Barcelona´s center",
    price: 390,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "Room near Sagrada Familia",
    price: 170,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Great house next to Camp Nou",
    price: 140,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "New apartment with 2 beds",
    price: 2000,
    type: "Entire place",
    pool: false,
    garage: true,
  },
  {
    title: "Awesome Suite",
    price: 230,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment 10' from la Rambla",
    price: 930,
    type: "Entire place",
    pool: true,
    garage: true,
  },
];

//Filtro : solo con piscinas

function onlyPiscina(elem) {
  return elem.pool === true;
}

let newArray2 = places.filter(onlyPiscina);

console.log(newArray);

num = [1, 2, 3, 4, 5, 6, 7];

function onlyEven(elem) {
  return elem % 2 === 0;
}

numEven = num.filter(onlyEven);
console.log(numEven);
numCuadrado = numEven.map((elem) => `This is an even number: ${elem}`);
console.log(numCuadrado);
