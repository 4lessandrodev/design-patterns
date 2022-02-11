import { XmlToJsonAdapter } from "./use-case"

describe('adapter', () => {
	it("should adapt", () => {
		const toJson = new XmlToJsonAdapter();

		const json = toJson.adapt({ data: '<user_name>John Doe</user_name>' });
		expect(json).toEqual({ data: { user_name: 'John Doe'}})
	})
})