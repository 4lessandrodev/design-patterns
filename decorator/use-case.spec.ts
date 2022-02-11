import { decoratorClientCode, EmailNotify, Notify, SlackNotify, SMSNotify } from "./use-case"

describe('decorator', () => {
	it('should send message with slack', () => {

		const message = 'some message';
		const fakeService = new Notify();

		const slackNotify = new SlackNotify(fakeService);
		const result = decoratorClientCode(slackNotify, message);

		expect(result).toBe('[SLACK]: ' + message);
	});

	it('should send message with sms', () => {

		const message = 'some message';
		const fakeService = new Notify();

		const smsNotify = new SMSNotify(fakeService);
		const result = decoratorClientCode(smsNotify, message);

		expect(result).toBe('[SMS]: ' + message);
	});

	it('should send message with email', () => {

		const message = 'some message';
		const fakeService = new Notify();

		const emailNotify = new EmailNotify(fakeService);
		const result = decoratorClientCode(emailNotify, message);

		expect(result).toBe('[EMAIL]: ' + message);
	});
})
