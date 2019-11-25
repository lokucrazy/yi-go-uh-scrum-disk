const total = 0
let pass = 0
let fail = 0
const errors: string[] = []
let exitCode = 0

const PASSED = '\x1b[32mPASSED\x1b[0m'
const FAILED = '\x1b[31mFAILED\x1b[0m'

const describe = (description: string, testFunc: Function): Function => {
	return (): void => {
		description = 'describe ' + description
		if (testFunc instanceof Function) {
			console.log('\x1b[33m' + description + '\x1b[0m')
			console.group()
			testFunc()
			console.groupEnd()
		}
	}
}

const it = (description: string, testFunc: Function): void => {
	description = 'it ' + description
	if (testFunc instanceof Function) {
		console.group()
		try {
			testFunc()
			console.log(description + ': ' + PASSED)
			pass++
		} catch (err) {
			console.log(description + ': ' + FAILED)
			console.group()
			console.log('\x1b[31m' + err + '\x1b[0m')
			console.groupEnd()
			errors.push(description)
			fail++
		}
		console.groupEnd()
	}
}
const test = (description: string, testFunc: Function): void => {
	description = 'test ' + description
	if (testFunc instanceof Function) {
		console.group()
		console.log('\x1b[33m' + description + '\x1b[0m')
		testFunc()
		console.groupEnd()
	}
}

function logCompletion(): void {
	console.log('\x1b[32mTests Completed:\x1b[0m')
	console.log('\x1b[32mTotal: ' + total + '\x1b[0m')
	console.log('\x1b[32mPassed: ' + pass + '\x1b[0m')
	console.log('\x1b[32mFailed: ' + fail + '\x1b[0m')

	if (errors.length !== 0) {
		console.group()
		for (const err of errors) {
			console.log('\x1b[31m' + err + '\x1b[0m')
		}
		console.groupEnd()
		exitCode = 1
	}
}

const testRunner = (describers: Function[]): void => {
	console.log('\n\x1b[36mRunning Tests...\x1b[0m')
	if (describers instanceof Array) {
		for (const describer of describers) {
			describer()
		}
	}

	logCompletion()
	process.exit(exitCode)
}



export { testRunner, describe, it, test }