import {z} from 'zod'

const NodeType = z.enum(['istar.Task' , 'istar.Goal' , 'istar.Actor'])

export default {NodeType}