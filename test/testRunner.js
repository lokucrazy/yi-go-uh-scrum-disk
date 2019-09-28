import ActionsTest from "./actions/actionsTest";

function testRunner() {
    for (let test of ActionsTest) {
        try {
            test();
            console.log(test.name + ": PASSED")
        } catch (err) {
            console.log(test.name + ": FAILED")
            console.error(err)
        }
    }
}

testRunner();