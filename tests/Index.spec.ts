import { assertType, test } from "vitest";
import { parseGoalModel } from "..";
import { readFileSync } from "fs";
import type { GoalModel } from "../types/GoalModel";

test("Execute parser on JSON",()=>{
    const json = readFileSync('assets/gm.json', 'utf8')
    assertType<GoalModel>(parseGoalModel(JSON.parse(json)))
})