export abstract class FiguraGeometrica {
    private _nombre: string;

    
    constructor(nombre: string) {
        this._nombre = nombre;
    }

   
    public get nombre(): string {
        return this._nombre;
    }

   
    public set nombre(nuevoNombre: string) {
        this._nombre = nuevoNombre;
    }

    
    public abstract calcularArea(): number;
    public abstract calcularPerimetro(): number;

   
    public mostrarResultados(): void {
        console.log(`--- ${this.nombre} ---`);
        console.log(`Área: ${this.calcularArea().toFixed(2)}`);
        console.log(`Perímetro: ${this.calcularPerimetro().toFixed(2)}\n`);
    }
}