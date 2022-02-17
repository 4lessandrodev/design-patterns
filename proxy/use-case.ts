// common interface to proxy and useCase
interface IUseCase<T> {
	execute(data: T): Promise<T>
}


//-----------------------------
// real useCase implementation
class UseCase<T> implements IUseCase<T> {
	execute(data: T): Promise<T> {

		// your use case logic
		return new Promise((resolve) => resolve(data));
	}
}


//-----------------------------
// proxy implementation
export class ProxyPermission implements IUseCase<string>{
	
	constructor(private readonly useCase: IUseCase<string>){}
	
	// do stuff and calls injected service
	execute(data: string): Promise<string> {
		
		const canAccess = this.canAccess(data);

		if (!canAccess) {
			return new Promise((resolve) => resolve("permission denied"));
		}
		return this.useCase.execute(data);
	}
	
	// you may use some business logic
	private canAccess(data: string): boolean {

		console.log('checking access for resource: ', data);

		if (data === 'invalid') {
			return false;
		}

		return true;
	}
}



//-----------------------------
// client code 
export const clientCode = (data: string): Promise<string> => {
	
	const useCase = new UseCase<string>();
	const proxyCase = new ProxyPermission(useCase);
	
	return proxyCase.execute(data);
}
