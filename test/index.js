import ActionsTestSuite from "./actions";
import ReducersTestSuite from "./reducers";
import ModelsTestSuite from "./models";

const suites = {
    ActionsTestSuite,
    ReducersTestSuite,
    ModelsTestSuite
};

let total = 0;
let pass = 0;
let fail = 0;
let errors = [];

let PASSED = "\x1b[32mPASSED\x1b[0m";
let FAILED = "\x1b[31mFAILED\x1b[0m";

function runTests(tests) {
    for (let test of tests) {
        total++;
        try {
            test();
            console.log(test.name + ": " + PASSED);
            pass++;
        } catch (err) {
            console.log(test.name + ": " + FAILED);
            console.group();
            console.log("\x1b[31m" + err + "\x1b[0m");
            console.groupEnd();
            errors.push(test.name);
            fail++;
        }
    }
}

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
    }
}

function testRunner() {
    console.log("\n\x1b[36mRunning Tests...\x1b[0m");
    for (let suite in suites) {
        console.log("\x1b[33m" + suite + "\x1b[0m");
        console.group();
        if (suites.hasOwnProperty(suite)) {
            runTests(suites[suite]);
        }
        console.groupEnd();
        console.log();
    }

    logCompletion();
}

testRunner();