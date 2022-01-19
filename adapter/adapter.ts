/**
 // Digamos que você tenha duas classes com interfaces
// compatíveis: RoundHole (Buraco Redondo) e RoundPeg (Pino
// Redondo).
class RoundHole is
    constructor RoundHole(radius) { ... }

    method getRadius() is
        // Retorna o raio do buraco.

    method fits(peg: RoundPeg) is
        return this.getRadius() >= peg.getRadius()

class RoundPeg is
    constructor RoundPeg(radius) { ... }

    method getRadius() is
        // Retorna o raio do pino.


// Mas tem uma classe incompatível: SquarePeg (Pino Quadrado).
class SquarePeg is
    constructor SquarePeg(width) { ... }

    method getWidth() is
        // Retorna a largura do pino quadrado.


// Uma classe adaptadora permite que você encaixe pinos
// quadrados em buracos redondos. Ela estende a classe RoundPeg
// para permitir que objetos do adaptador ajam como pinos
// redondos.
class SquarePegAdapter extends RoundPeg is
    // Na verdade, o adaptador contém uma instância da classe
    // SquarePeg.
    private field peg: SquarePeg

    constructor SquarePegAdapter(peg: SquarePeg) is
        this.peg = peg

    method getRadius() is
        // O adaptador finge que é um pino redondo com um raio
        // que encaixaria o pino quadrado que o adaptador está
        // envolvendo.
        return peg.getWidth() * Math.sqrt(2) / 2


// Em algum lugar no código cliente.
hole = new RoundHole(5)
rpeg = new RoundPeg(5)
hole.fits(rpeg) // true

small_sqpeg = new SquarePeg(5)
large_sqpeg = new SquarePeg(10)
// Isso não vai compilar (tipos incompatíveis).
hole.fits(small_sqpeg)

small_sqpeg_adapter = new SquarePegAdapter(small_sqpeg)
large_sqpeg_adapter = new SquarePegAdapter(large_sqpeg)
hole.fits(small_sqpeg_adapter) // true
hole.fits(large_sqpeg_adapter) // false
*/

interface IAdapter<I, O> {
	adapt: (data:I) => O
}

interface XML { 
	data: string;
}

interface JSON {
	data: { [key: string]: string };
}

export class XmlToJsonAdapter implements IAdapter<XML, JSON> {
	adapt(_data: XML): JSON {
		/** LOGIC TO CONVERT XML TO JSON */
		return { data: { user_name: 'John Doe'} }
	};
}
