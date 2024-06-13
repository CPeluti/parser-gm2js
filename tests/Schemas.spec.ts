import {assertType, expect, expectTypeOf, test} from 'vitest'
import {z} from 'zod'
import GoalModelSchema from '../schemas/GoalModel'
import type { NodeType, CustomProperties, Diagram, DisplayItem, Display, Link, Node, Actor, GoalModel } from '../types/GoalModel'

test('Validate schema of NodeTypes',()=>{
    const task = 'istar.Task'
    const goal = 'istar.Goal'
    const actor = 'istar.Actor'
    const t = GoalModelSchema.NodeType.parse(task)
    const g = GoalModelSchema.NodeType.parse(goal)
    const a = GoalModelSchema.NodeType.parse(actor)
    assertType<NodeType>(t)
    assertType<NodeType>(g)
    assertType<NodeType>(a)
})

test('Validate schema of CustomProperties',()=>{
    const customProperties = {customProperties: {"Description": ""}}
    const parsed = GoalModelSchema.CustomProperties.parse(customProperties)
    assertType<CustomProperties>(parsed)
})

test('Validate schema of Diagram',()=>{
    const diagram = {width:0, height:0}
    const parsed = GoalModelSchema.Diagram.parse(diagram)
    assertType<Diagram>(parsed)
})

test('Validate schema of DisplayItem',()=>{
    const displayItem = {
        backgroundColor: "#000000",
        width: 0,
        height: 0
    }
    const parsed = GoalModelSchema.DisplayItem.parse(displayItem)
    assertType<DisplayItem>(parsed)
})

test('Validate schema of Display',()=>{
    const displayItem = {
        backgroundColor: "#000000",
        width: 0,
        height: 0
    }
    const display: Display = {"item1": displayItem}
    const parsed = GoalModelSchema.Display.parse(display)
    assertType<Display>(parsed)
})

test('Validate schema of Display',()=>{
    const displayItem = {
        backgroundColor: "#000000",
        width: 0,
        height: 0
    }
    const display: Display = {"item1": displayItem}
    const parsed = GoalModelSchema.Display.parse(display)
    assertType<Display>(parsed)
})

test('Validate schema of Link',()=>{
    const and = {
        type: "istar.AndRefinementLink",
        id: "f4c04979-a30d-420b-8357-116ed9d4f5fe",
        source: "90bb6cd3-5df4-4ed1-b944-11eadd4ea888",
        target: "66b89690-6933-4962-aeb1-79958c65f99b"
    }
    const or = {
        type: "istar.OrRefinementLink",
        id: "f4c04979-a30d-420b-8357-116ed9d4f5fe",
        source: "90bb6cd3-5df4-4ed1-b944-11eadd4ea888",
        target: "66b89690-6933-4962-aeb1-79958c65f99b"
    }
    const parsedAnd = GoalModelSchema.Link.parse(and)
    const parsedOr = GoalModelSchema.Link.parse(or)
    assertType<Link>(parsedAnd)
    assertType<Link>(parsedOr)
})

test('Validate schema of Node',()=>{
    const goal = {
        "id": "66b89690-6933-4962-aeb1-79958c65f99b",
        "x": 578,
        "y": 167,
        "type": "istar.Goal",
        "parent": "31223c4e-8210-4140-a36b-9accde8a55f5",
        "customProperties": {
            "Description": ""
        },
        "text": "G1: Deliver Food to Patients [G2;G3]"
    }
    const task = {
        "id": "a51d3961-56b4-4bbe-b048-286eef924ae4",
        "x": 695,
        "y": 560,
        "type": "istar.Task",
        "parent": "31223c4e-8210-4140-a36b-9accde8a55f5",
        "customProperties": {
            "Description": "",
            "Location": "kitchen_loc",
            "Params": "current_delivery"
        },
        "text": "AT1: GetFood"
    }
    const parsedGoal = GoalModelSchema.Node.parse(goal)
    const parsedTask = GoalModelSchema.Node.parse(task)
    assertType<Node>(parsedGoal)
    assertType<Node>(parsedTask)
})

test('Validate schema of Actor',()=>{
    const actor = {
        "id": "31223c4e-8210-4140-a36b-9accde8a55f5",
        "text": "M1: teste",
        "type": "istar.Actor",
        "x": 355,
        "y": 135,
        "customProperties": {
            "Description": ""
        },
        "nodes": [{
                "id": "16ceb27e-114a-419d-92c0-1a96e5d3c2d3",
                "x": 1215,
                "y": 478,
                "type": "istar.Goal",
                "parent": "31223c4e-8210-4140-a36b-9accde8a55f5",
                "customProperties": {
                    "Description": ""
                },
                "text": "G10: Deliver Food To Patient"
            }]
    }
    const parsedActor = GoalModelSchema.Actor.parse(actor)
    assertType<Actor>(parsedActor)
})

test('Validate schema of Goal Model', ()=>{
    const gm = {
        "actors": [
            {
                "id": "31223c4e-8210-4140-a36b-9accde8a55f5",
                "text": "M1: teste",
                "type": "istar.Actor",
                "x": 355,
                "y": 135,
                "customProperties": {
                    "Description": ""
                },
                "nodes": [
                    {
                        "id": "66b89690-6933-4962-aeb1-79958c65f99b",
                        "x": 578,
                        "y": 167,
                        "type": "istar.Goal",
                        "parent": "31223c4e-8210-4140-a36b-9accde8a55f5",
                        "customProperties": {
                            "Description": ""
                        },
                        "text": "G1: Deliver Food to Patients [G2;G3]"
                    },
                ]
            }
        ],
        "orphans": [],
        "dependencies": [],
        "links": [
            {
                "type": "istar.AndRefinementLink",
                "id": "f4c04979-a30d-420b-8357-116ed9d4f5fe",
                "source": "90bb6cd3-5df4-4ed1-b944-11eadd4ea888",
                "target": "66b89690-6933-4962-aeb1-79958c65f99b"
            }
        ],
        "display": [],
        "diagram": {
            "width": 2000,
            "height": 1300
        }
    }
    const parsedGoalModel = GoalModelSchema.GoalModel.parse(gm)
    assertType<GoalModel>(parsedGoalModel)
})

