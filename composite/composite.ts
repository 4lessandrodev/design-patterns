/**
 * USE-CASE
 * One order may has fruit-baskets and fruits
 * One fruit-basket has many fruits
 * One cart may has many fruits and many fruit-basket
 */

/** Common item */
abstract class Item {
	public calculateTotal(): number {
		return 0;
	}
}

/** Common fruit-basket extends to item */
class FruitBasket extends Item {
	
	constructor(
		public description: string,
		public price: number,
		public items: Item[]
	) {	
		super();
	}

	public calculateTotal(): number {
		let total = this.items.reduce((total, item) => item.calculateTotal() + total, 0);
		return total;
	}

	public getItems(): Item[] {
		return this.items;
	}

	public addItem(item: Item): void {
		this.items.push(item);
	}
}

/** Common fruit extends to item */
class Fruit extends Item {
	constructor(
		public description: string,
		public price: number
	) {
		super()
	}

	calculateTotal(): number {
		return this.price;
	}
}

/** Common order */
abstract class Order {
	protected items: Item[] = [];
	protected calculateTotal(): number { return 0 }
}

/** Cart extends to order */
export class Cart extends Order {

	private log(item: Item): void {
		const isFruit = item instanceof Fruit;
		const isBasket = item instanceof FruitBasket;
		console.log(isFruit ? '[Fruit]: added on cart' : isBasket ? '[FruitBasket]: added on cart' : '');
	}

	addItem(item: Item): void {
		this.log(item);
		this.items.push(item);
	}

	/** Calculate total on runtime */
	public calculateTotal(): number {
		const totalItems = this.items.reduce((subTotal, item) => item.calculateTotal() + subTotal, 0);
		return totalItems;
	}

	public getItems(): Item[] {
		return this.items;
	}
}

/** How it works */
export const clientCode = (cart: Cart) => {

	const fruitA = new Fruit('Apple', 100);
	const fruitB = new Fruit('Banana', 200);

	const basketA = new FruitBasket('Basket A', 300, [fruitA, fruitB]);
	const basketB = new FruitBasket('Basket B', 300, [fruitA, fruitB]);

	cart.addItem(fruitA); // add fruit

	console.log(cart.getItems());
	console.log(cart.calculateTotal());

	cart.addItem(basketA); // add basket
	console.log(cart.getItems());
	console.log(cart.calculateTotal());

	cart.addItem(basketB); // add basket
	console.log(cart.getItems());
	console.log(cart.calculateTotal());

	cart.addItem(fruitB); // add fruit
	console.log(cart.getItems());
	console.log(cart.calculateTotal());
}
