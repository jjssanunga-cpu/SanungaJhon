import {Persona} from './clases/Persona';
const persona = new Persona();
persona.nombre = 'Juan';
persona.fechaNacimiento = new Date('2000-01-01');
persona.estatura =180;

persona.calcularMayorEdad();

const persona2 = new Persona();
persona2.nombre = 'Juan';
persona2.fechaNacimiento = new Date('2020-01-01');
persona2.estatura =180;

persona2.calcularMayorEdad();