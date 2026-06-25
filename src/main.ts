/* import {Persona} from './clases/Persona';
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


 */
////////////////////////////////////////

/*import {Figura} from './Polimorfismo/Figura';
import {Rectangulo} from './Polimorfismo/rectangulo';
import {Pentagono} from './Polimorfismo/Pentagono';

const figura1:Figura= new Rectangulo(5,10);
console.log( figura1.calcularPerimetro());
console.log(figura1.imprimirPerimetro());

const figura2:Figura= new Pentagono(5);
console.log( figura2.calcularPerimetro());
console.log(figura2.imprimirPerimetro()); */


import { Calculadora } from "./calculadora/Calculadora";

class Main {
  static main(): void {
    const calculadora = new Calculadora();

    if (calculadora.dividir(10, 2) === null) {
      console.log('La division tuvo problemas');
    } else {
      console.log('La division estuvo correcta');
    }

    
  }
}

Main.main();