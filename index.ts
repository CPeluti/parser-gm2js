import GoalModelSchema from "./schemas/GoalModel"
import type { GoalModel } from "./types/GoalModel"

export const parseGoalModel = (json: JSON): GoalModel => {
    return GoalModelSchema.GoalModel.parse(json)
}