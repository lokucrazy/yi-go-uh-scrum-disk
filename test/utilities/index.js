let total = 0;
let pass = 0;
let fail = 0;
let errors = [];
let exitCode = 0;

let PASSED = "\x1b[32mPASSED\x1b[0m";
let FAILED = "\x1b[31mFAILED\x1b[0m";

let describe = (description, testFunc) => {
    return () => {
        description = "describe " + description;
        if (testFunc instanceof Function) {
            console.log("\x1b[33m" + description + "\x1b[0m");
            console.group();
            testFunc();
            console.groupEnd();
        }
    }
};

let it = (description, testFunc) => {
    description = "it " + description;
    if (testFunc instanceof Function) {
        console.group();
        try {
            testFunc();
            console.log(description + ": " + PASSED);
            pass++;
        } catch (err) {
            console.log(description + ": " + FAILED);
            console.group();
            console.log("\x1b[31m" + err + "\x1b[0m");
            console.groupEnd();
            errors.push(description);
            fail++;
        }
        console.groupEnd();
    }
};
let test = it;

function logCompletion() {
    console.log("\x1b[32mTests Completed:\x1b[0m");
    console.log("\x1b[32mTotal: " + total + "\x1b[0m");
    console.log("\x1b[32mPassed: " + pass + "\x1b[0m");
    console.log("\x1b[32mFailed: " + fail + "\x1b[0m");

    if (errors.length !== 0) {
        console.group();
        for (let err of errors) {
            console.log("\x1b[31m" + err + "\x1b[0m");
        }
        console.groupEnd();
        exitCode = 1;
    }
}

let testRunner = (describers) => {
    console.log("\n\x1b[36mRunning Tests...\x1b[0m");
    if (describers instanceof Array) {
        for (let describer of describers) {
            describer();
        }
    }

    logCompletion();
    process.exit(exitCode);
};



export { testRunner, describe, it, test }