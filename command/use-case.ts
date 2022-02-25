/** command interface */
interface ICommand<T, D> {
	execute(data: T): D
}

/** simple command */
class SpeakCommand implements ICommand<string, void> {
	execute(data: string): void {
		console.log(`speak: ${data}`);
	}
}

interface ISpeakerTool {
	speak(data: string): void
}
/** command with dependency injection */
class SpeakWithToolCommand implements ICommand<string, void> {
	/** inject a speaker */
	constructor(private readonly speaker: ISpeakerTool){}

	execute(data: string): void {
		this.speaker.speak(data);
	}
	
}

/** speaker implementation of ISpeakerTool */
class Speaker implements ISpeakerTool {
	speak(data: string): void {
		console.log(data.toUpperCase());
	}
}

/** Simple entity */
class User {
	public name: string;

	constructor(name: string) {
		this.name = name;
	}

	speak(command: ICommand<string, void>): void {
		command.execute(`hi, my name is ${this.name}`)
	}

	dialog(command: ICommand<string, void>, data: string): void {
		command.execute(data);
	}
}

/** data to be provided to Chat command */
interface IData {
	talk: string[],
	tool: ICommand<string, void>
}

/** Chat command. example how to build complex commands */
class ChatCommand implements ICommand<IData, void> {
	
	constructor(
		private readonly userA: User,
		private readonly userB: User
	) { }

	execute(data: IData): void {
		data.talk.forEach((say, index) => {
			const isPair = index % 2 === 0;
			
			if (isPair) {
				this.userA.dialog(data.tool, `User A say: ${say}`);
			} else {
				this.userB.dialog(data.tool, `User B say: ${say}`);
			}

		})
	}
	
}

export const clientCode = () => {
	
	/** --------------------- */
	
	// simple command
	const speakCommand = new SpeakCommand();
	speakCommand.execute('say something');
	
	/** --------------------- */

	// command with dependency injection 
	const microphone = new Speaker();
	const speakWithMicCommand = new SpeakWithToolCommand(microphone);
	speakWithMicCommand.execute('something laugh');

	/** --------------------- */

	// simple dialog between two users
	const talk: string[] = ['hello', 'hi, how are you?', 'fine', 'my name is Doe', 'Hi, Doe'];
	
	// users
	const userA = new User('Doe');
	const userB = new User('Mike');
	
	// they speak using a speaker
	const speaker = new Speaker();
	const tool = new SpeakWithToolCommand(speaker);

	// create chat command instance
	const chatCommand = new ChatCommand(userA, userB);
	
	// run dialog
	chatCommand.execute({ talk, tool });

		
	return (0);
}
