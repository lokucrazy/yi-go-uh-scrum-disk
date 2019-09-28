import { Card } from "../../src/models";
import { strict as assert } from "assert";


const testCardConstructor = () => {
    const expectedTitle = "title";
    const expectedDesc = "desc";
    const actualCard = new Card(expectedTitle, expectedDesc);

    assert.equal(actualCard.title, expectedTitle);
    assert.equal(actualCard.desc, expectedDesc);
};

const testUndefinedTitleCardConstructor = () => {
    try {
        new Card(undefined, "desc");
    } catch (error) {
        assert.deepEqual(error, "title must be a string");
    }
};

const testUndefinedDescCardConstructor = () => {
    try {
        new Card("title", undefined);
    } catch (error) {
        assert.deepEqual(error, "desc must be a string");
    }
};

const testBadTitleCardConstructor = () => {
    try {
        new Card(5, "desc");
    } catch (error) {
        assert.deepEqual(error, "title must be a string");
    }
};

const testBadDescCardConstructor = () => {
    try {
        new Card("title", 5);
    } catch (error) {
        assert.deepEqual(error, "desc must be a string");
    }
};

const cardTests = [
    testCardConstructor,
    testUndefinedTitleCardConstructor,
    testUndefinedDescCardConstructor,
    testBadTitleCardConstructor,
    testBadDescCardConstructor
];

export default cardTests;