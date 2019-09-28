import addCardActionTests from "./addCardActionTests";
import drawCardActionTests from "./drawCardActionTests";
import graveyardActionTests from "./graveyardActionTests";
import moveCardActionTests from "./moveCardActionTests";

const ActionsTestSuite = [].concat(addCardActionTests,
                                   drawCardActionTests,
                                   graveyardActionTests,
                                   moveCardActionTests);

export default ActionsTestSuite;