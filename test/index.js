import ActionsTestSuite from "./actions";
import ReducersTestSuite from "./reducers";
import ModelsTestSuite from "./models";
import { testRunner } from "./utilities";

testRunner([ActionsTestSuite, ModelsTestSuite, ReducersTestSuite]);