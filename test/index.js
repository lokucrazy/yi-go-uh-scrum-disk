import ActionsTestSuite from "./actions"
import ModelsTestSuite from "./models"
import ReducersTestSuite from "./reducers"
import { testRunner } from "./utilities"

testRunner([ActionsTestSuite, ModelsTestSuite, ReducersTestSuite])