/**
 * Use Case 
 * notify users 
 * by email
 * by sms
 * by slack
 */
interface INotify {
	sendMessage(message: string): string;
}

/** Default notify method concrete implementation */
export class Notify implements INotify {
	public sendMessage(message: string): string {
		return message;
	}
}

/** Decorator implementation for method */
class NotifyDecorator implements INotify {

	constructor(protected service: INotify) { }

	sendMessage(message: string): string {
		return this.service.sendMessage(message);
	}
}

/** implementation for each service [SLACK] */
export class SlackNotify extends NotifyDecorator {
	sendMessage(message: string): string {
		return this.service.sendMessage('[SLACK]: ' + message);
	}
}

/** implementation for each service [SMS] */
export class SMSNotify extends NotifyDecorator {
	sendMessage(message: string): string {
		return this.service.sendMessage('[SMS]: ' + message);
	}
}

/** implementation for each service [EMAIL] */
export class EmailNotify extends NotifyDecorator {
	sendMessage(message: string): string {
		return this.service.sendMessage('[EMAIL]: ' + message);
	}
}

/** Client implementation */
export const decoratorClientCode = (notifier: INotify, message: string): string => {
	return notifier.sendMessage(message);
}
