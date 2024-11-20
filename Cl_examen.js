export default class Cl_examen {
    constructor() {
        this.estudiantes = [];
    }

    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }

    eliminarEstudiante(nombre) {
        const index = this.estudiantes.findIndex(est => est.nombre === nombre);
        if (index !== -1) {
            this.estudiantes.splice(index, 1);
            return true;
        }
        return false;
    }

    porcentajeAprobado(minimo = 10) { // Aquí puedes definir el mínimo aprobatorio que desees
        const aprobados = this.estudiantes.filter(est => est.nota >= minimo);
        return (aprobados.length / this.estudiantes.length) * 100;
    }

    porcentajeReprobado(minimo = 10) {
        const reprobados = this.estudiantes.filter(est => est.nota < minimo);
        return (reprobados.length / this.estudiantes.length) * 100;
    }

    mejorNota() {
        if (this.estudiantes.length === 0) return null;
        return this.estudiantes.reduce((max, est) => est.nota > max.nota ? est : max, this.estudiantes[0]);
    }

    chicasProm() {
        const chicas = this.estudiantes.filter(est => est.sexo.toLowerCase() === 'f');
        if (chicas.length === 0) return 0;
    
        const sumaNotas = chicas.reduce((sum, est) => sum + est.nota, 0);
        const promedio = sumaNotas / chicas.length;
    
        return promedio;
    }

    chicasPorEncimaPromedio() {
        const promedio = this.chicasProm();
        const chicas = this.estudiantes.filter(est => est.sexo.toLowerCase() === 'f' && est.nota > promedio);
        return chicas;
    }
    
    
}
