// Calcular el promedio final de n alumnos y mostrar el estado del alumno (Aprobado o Reprobado).

const alumnos = prompt('Ingrese la cantidad de alumnos');
const materias = 5;

let suma = 0;
let promedio;

for (let i = 0; i < alumnos; i++) {
    for (let j = 0; j < materias; j++) {
        suma += parseInt(prompt('Ingrese la calificacion del alumno ' + (i+1) + " \nEn la materia " + (j+1)));
    }
    promedio = suma/materias;
    if (promedio >= 8) {
        alert('EL Alumno ' + (i+1) + ' esta APROBADO con: ' + promedio);
    }
    else{
        alert('EL Alumno ' + (i+1) + ' esta REPROBADO con: ' + promedio);
    }
}