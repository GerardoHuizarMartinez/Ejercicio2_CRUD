
//La variable model servida como comunicador con la clase students
let model = require('./student');
var students = [];

let student ={
    name: 'Gerardo Huizar',
    controlNumber: '16401252',
    email: 'lugehuizarma@ittepic.edu.mx',
    grade: 100
};

let student2 ={
    name: 'Aura Avila',
    controlNumber: '16401253',
    email: 'auciavilala@ittepic.edu.mx',
    grade: 70
    
};

let student3 ={
    name: 'Isabel Martinez',
    controlNumber: '58749631',
    email: 'maismartinezga@ittepic.edu.mx',
    grade: 85 
    
};

let student4 ={
    name: 'Cesar Alberto',
    controlNumber: '12176602',
    email: 'auciavilala@ittepic.edu.mx',
    grade: 60
    
};

console.log('------------------------ Despues de Insertar ------------------------');
stundents = model.create(student, students)
stundents = model.create(student2, students)
stundents = model.create(student3, students)
stundents = model.create(student4, students)
model.read(students);

console.log("---------------- actualizando y eliminando por NC ---------------------------");
//0 = Nombre     1= Numero de Ctrl              2 = Email          3 = Grado
//model.updateForNC("16401252", "Corro.pirata@fishing.com", 2, students);
//model.eraseForNC("12176602", students)
//model.read(students)

model.readForNC("16401253", students);
model.aprob(students);

model.read(students);
/*

*/