import ActionsTestSuite from "./actions";
import ReducersTestSuite from "./reducers";

const suites = {
    ActionsTestSuite,
    ReducersTestSuite
};

function runTests(tests) {
    for (let test of tests) {
        try {
            test();
            console.log(test.name + ": PASSED")
        } catch (err) {
            console.log(test.name + ": FAILED")
            console.error(err)
        }
    }
}

function testRunner() {
    for (let suite in suites) {
        if (suites.hasOwnProperty(suite)) {
            runTests(suites[suite]);
        }
    }
}

testRunner();