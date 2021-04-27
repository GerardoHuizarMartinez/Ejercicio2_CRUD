

//Funcion para crear nuevos alumnos e insertarlos en el arreglo 
function create(student, students){
    students.push(student);
    return students;
}


//Funcion para hacer la lectura del arreglo mostrando todos elementos del arreglo
function read(students){
        console.log("Nombre: " + students.name);
        console.log("Numero de control: " + students.controlNumber);
        console.log("Email: " + students.email);
        console.log("Grado: " + students.grade);
        console.log("\n")
        

}


//Funcion para hacer el update de toda la informacion
function update(pos, newElement, students){
    students[pos] = newElement
    return students;
}


//Funcion para eliminar a traves de una posición de un arreglo
function eraser(position, students){
        students.splice(position,1);
    return students;
}

//funcion para aeliminar pasandole como parametro el numero de control
function eraseForNC(controlN, students){
    for(var i = 0; i < students.length; i++){
        if(students[i].controlNumber == controlN){
            students.splice(i,1);
        }
    };
    return students;
}

//funcion para actualizar pasandole como parametro el numero de control cambiando un solo campo
function updateForNC(controlN, newElement, position ,students){
    students.forEach(element=> {
        if(element.controlNumber == controlN){
            
            if(position == 0){
                element.name = newElement;
            }
            else if(position == 1){
                element.controlNumber = newElement
            }
            else if (position == 2){
                element.email = newElement;
            }
            else if (position == 3){
                element.grade = newElement;
            }

        }
    });
    return students;
}

function readForNC(controlN, students){
    students.forEach((element) => {
       if(element.controlNumber == controlN){
           read(element);
       }
        
    });

}

function aprob(students){
    students.forEach( elements => {
        if(elements.grade >= 70 ){
            read(elements);
        }
    })

}


module.exports.create = create;
module.exports.read = read;
module.exports.eraser = eraser;
module.exports.update = update;
module.exports.eraseForNC = eraseForNC;
module.exports.updateForNC = updateForNC;
module.exports.readForNC = readForNC;
module.exports.aprob = aprob;