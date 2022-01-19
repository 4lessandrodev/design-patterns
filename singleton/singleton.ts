interface IConnection {
	get: () => any[];
	set: (data: any) => void;
}

export class Connection implements IConnection {

	private readonly data: any[];
	private static conn: Connection;
	private static total: number = 0;

	private constructor() {
		this.data = [];
		Connection.total = Connection.total + 1;
	}

	get(): any[] {
		return this.data;
	};

	set(data: any):  void {
		this.data.push(data);
	}

	/**
	 * returns total of instances
	 */
	get total() {
		return Connection.total;
	}

	public static create(): Connection {
		if (!Connection.conn) {
			Connection.conn = new Connection();
			console.log('created singleton: ', Connection.total);
		}

		return Connection.conn;
	};
}
