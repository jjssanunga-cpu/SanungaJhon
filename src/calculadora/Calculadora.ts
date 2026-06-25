export class Calculadora {

    dividir(numerador: number, denominador: number): number | null {
        try {
            if (denominador === 0) {
                throw new Error('No se puede dividir para 0');
            }

            const resultado = numerador / denominador;
            return resultado;
        } catch (error: any) {
            console.log(error.message);
            return null;
        }
    }

    
}