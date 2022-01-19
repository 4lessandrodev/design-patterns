/* // Protótipo base.
abstract class Shape is
    field X: int
    field Y: int
    field color: string

    // Um construtor normal.
    constructor Shape() is
        // ...

    // O construtor do protótipo. Um objeto novo é inicializado
    // com valores do objeto existente.
    constructor Shape(source: Shape) is
        this()
        this.X = source.X
        this.Y = source.Y
        this.color = source.color

    // A operação de clonagem retorna uma das subclasses Shape.
    abstract method clone():Shape


// Protótipo concreto. O método de clonagem cria um novo objeto
// e passa ele ao construtor. Até o construtor terminar, ele tem
// uma referência ao clone fresco. Portanto, ninguém tem acesso
// ao clone parcialmente construído. Isso faz com que o clone
// resultante seja consistente.
class Rectangle extends Shape is
    field width: int
    field height: int

    constructor Rectangle(source: Rectangle) is
        // Uma chamada para o construtor pai é necessária para
        // copiar campos privados definidos na classe pai.
        super(source)
        this.width = source.width
        this.height = source.height

    method clone():Shape is
        return new Rectangle(this)


class Circle extends Shape is
    field radius: int

    constructor Circle(source: Circle) is
        super(source)
        this.radius = source.radius

    method clone():Shape is
        return new Circle(this)


// Em algum lugar dentro do código cliente.
class Application is
    field shapes: array of Shape

    constructor Application() is
        Circle circle = new Circle()
        circle.X = 10
        circle.Y = 10
        circle.radius = 20
        shapes.add(circle)

        Circle anotherCircle = circle.clone()
        shapes.add(anotherCircle)
        // A variável `anotherCircle` contém uma cópia exata do
        // objeto `circle`.

        Rectangle rectangle = new Rectangle()
        rectangle.width = 10
        rectangle.height = 20
        shapes.add(rectangle)

    method businessLogic() is
        // O protótipo arrasa porque permite que você produza
        // uma cópia de um objeto sem saber coisa alguma sobre
        // seu tipo.
        Array shapesCopy = new Array of Shapes.

        // Por exemplo, nós não sabemos os elementos exatos no
        // vetor shapes. Tudo que sabemos é que eles são todos
        // shapes. Mas graças ao polimorfismo, quando nós
        // chamamos o método `clone` em um shape, o programa
        // checa sua classe real e executa o método de clonagem
        // apropriado definido naquela classe. É por isso que
        // obtemos clones apropriados ao invés de um conjunto de
        // objetos Shape simples.
        foreach (s in shapes) do
            shapesCopy.add(s.clone())

        // O vetor `shapesCopy` contém cópias exatas dos filhos
        // do vetor `shape`.
 */

interface ICar {
	speed: number;
	doors: number;
	clone: (car: Car) => Car;
}

export class Car implements ICar {
	speed: number;
	doors: number;

	constructor(speed: number, doors: number) {
		this.speed = speed;
		this.doors = doors;
	}

	clone(): Car {
		return new Car(this.speed, this.doors);
	};
}
