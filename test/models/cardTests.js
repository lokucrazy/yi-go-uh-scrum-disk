import { Card } from "../../src/models";
import { strict as assert } from "assert";
import { describe, it } from "../utilities";

export default describe("card tests", () => {
   it("creates a card", () => {
       const expectedTitle = "title";
       const expectedDesc = "desc";
       const actualCard = new Card(expectedTitle, expectedDesc);

       assert.equal(actualCard.title, expectedTitle);
       assert.equal(actualCard.desc, expectedDesc);
   });

   it("throws an error when given undefined title", () => {
       try {
           new Card(undefined, "desc");
       } catch (error) {
           assert.deepEqual(error, "title must be a string");
       }
   });

   it("throws an error when given undefined desc", () => {
       try {
           new Card("title", undefined);
       } catch (error) {
           assert.deepEqual(error, "desc must be a string");
       }
   });

   it("throws an error when given bad title", () => {
       try {
           new Card(5, "desc");
       } catch (error) {
           assert.deepEqual(error, "title must be a string");
       }
   });

   it("throws an error when given bad desc", () => {
       try {
           new Card("title", 5);
       } catch (error) {
           assert.deepEqual(error, "desc must be a string");
       }
   });
});