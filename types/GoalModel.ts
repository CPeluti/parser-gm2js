export type id = string;

export interface GoalModel {
    actors: Actor[]
    orphans: never[]
    dependencies: never[]
    links: Link[]
    display: Display[]
    diagram: Diagram
}

export interface Actor extends Node {
    nodes: Node[],
}

export type NodeType = 'istar.Task' | 'istar.Goal' | 'istar.Actor';
export interface Node extends CustomProperties {
    id: id
    text: string
    type: NodeType
    parent?: string
    x: number
    y: number
}

export interface Link {
    id: id
    type: 'istar.AndRefinementLink' | 'istar.OrRefinementLink'
    source: string
    target: string
}

export interface Display {
    [K: string]: DisplayItem
}

export interface DisplayItem {
    backgroundColor: string
    width?: number
    height?: number
}

export interface Diagram {
    width: number
    height: number
}

export interface CustomProperties {
    customProperties: Record<string,string>
}