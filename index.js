/**
Se desea llevar un control de los estudiantes que
asisten a presentar un examen. Se tiene por cada
participante: nombre, cédula, sexo y nota. Se requiere
de un programa que permita el registro de esta
información, conociendo al principio de la ejecución el
valor del examen y el mínimo aprobatorio.
Se desea saber:
 Porcentaje de aprobados y reprobados.
 Estudiantes con la mejor nota
 Chicas por encima de la nota promedio
 */
 import Cl_estudiante from "./Cl_estudiante.js";
 import Cl_examen from "./Cl_examen.js";
import Dt_estudiantes from "./Dt_estudiantes.js";

 const examen = new Cl_examen()

 Dt_estudiantes.forEach((estudiante) => {
    examen.agregarEstudiante(
        new Cl_estudiante(estudiante.nombre, estudiante.cedula, estudiante.sexo, estudiante.nota)
    )
 });

 let porcentajeAprobado = (examen, salida2) => {
    let aprobados = examen.porcentajeAprobado()
    salida2.innerHTML = `<br> Porcentaje de aprobados: ${aprobados}`
 }

 let porcentajeReprobado = (examen, salida2) => {
    let reprobados = examen.porcentajeReprobado()
    salida2.innerHTML = `<br> Porcentaje de reprobados: ${reprobados}`
 }

 let mejorNota = (examen, salida2) => {
    let mayor = examen.mejorNota()
    salida2.innerHTML = `<br> Estudiante con Mejor Nota: ${mayor}`
 }

 let chicasPorEncimaPromedio = (examen, salida2) => {
    let chicasProm = examen.chicasPorEncimaPromedio()
    salida2.innerHTML = `<br> Chicas por encima del Promedio: ${chicasProm}`
 }

 let agregarEstudiante = (examen) => {
    let nombre = prompt("Ingrese el nombre del estudiante:");
    let cedula = prompt("Ingrese la cedula del estudiante:");
    let sexo = prompt("Ingrese el sexo del estudiante:");
    let nota = prompt("Ingrese la nota del estudiante:");
    examen.agregarEstudiante (new Cl_estudiante (nombre, cedula, sexo, nota));
 }

 let eliminarEstudiante = (examen) => {
    let nombre = prompt("Ingrese el nombre del estudiante a eliminar:");
    if (examen.eliminarEstudiante(nombre)) alert(`Se elimino al estudiante ${nombre}`);
    else alert(`No existe el estudiante ${nombre}`);
 }

 let listarEstudiantes = (examen, salida) => {
    salida.innerHTML = "";
    examen.estudiantes.forEach((estudiante) => {
        salida.innerHTML += `<br>${estudiante.nombre} ${estudiante.cedula} ${estudiante.sexo} ${estudiante.nota}`
    });
 }

 let salida1 = document.getElementById("salida1"),
 salida2 = document.getElementById("salida2"),
 opciones = document.getElementById("opciones");

salida1.innerHTML = `<br>Seleccione una opción:
 <br>1= Agregar estudiante
 <br>2= Porcentaje de estudiantes aprobados
 <br>3= Porcentaje de estudiantes reprobados
 <br>4= Estudiantes con la mejor nota
 <br>5= Chicas por encima de la nota promedio
 <br>6= Listar estudiantes
 <br>7= Eliminar estudiante`;

opciones.onclick = () => {
 let opcion = +prompt("Seleccione su opción:");
 switch (opcion) {
   case 1:
     agregarEstudiante(examen);
     break;
   case 2:
     porcentajeAprobado(examen, salida2);
     break;
   case 3:
     porcentajeReprobado(examen, salida2);
     break;
   case 4:
     estudiantesConMejorNota(examen, salida2);
     break;
   case 5:
    chicasPorEncimaPromedio(examen, salida2);
     break;
   case 6:
     listarEstudiantes(examen, salida2);
     break;
   case 7:
     eliminarEstudiante(examen);
     break;
 }
};
 