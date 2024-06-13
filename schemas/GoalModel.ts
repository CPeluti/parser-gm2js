import {z} from 'zod'

const NodeType = z.enum(['istar.Task' , 'istar.Goal' , 'istar.Actor'])

const CustomProperties = z.object({
    customProperties: z.record(z.string(), z.string())
}).strict()

const Diagram = z.object({
    width: z.number(),
    height: z.number()
}).strict()

const DisplayItem = z.object({
    width: z.number().optional(),
    height: z.number().optional(),
    backgroundColor: z.string()
}).strict()

const Link = z.object({
    id: z.string(),
    type: z.enum(['istar.AndRefinementLink', 'istar.OrRefinementLink']),
    source: z.string(),
    target: z.string()
})

const Display = z.record(z.string(), DisplayItem)

const Node = z.object({
    id: z.string(),
    text: z.string(),
    type: NodeType,
    parent: z.string().optional(),
    x: z.number(),
    y: z.number()
}).merge(CustomProperties).strict()

const Actor = z.object({
    nodes: z.array(Node)
}).merge(Node).strict()

const GoalModel = z.object({
    actors: z.array(Actor),
    orphans: z.tuple([]),
    dependencies: z.tuple([]),
    links: z.array(Link),
    display: z.array(Display),
    diagram: Diagram
})

export default {NodeType, CustomProperties, DisplayItem, Diagram, Display, Link, Node, Actor, GoalModel}