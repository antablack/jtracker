import Task from "../../domain/Task"
import ITaskRepository from "../interfaces/ITaskRepository"

const TaskRepository: ITaskRepository = {
    get: function (): Task {
        throw new Error("Function not implemented.")
    },
    getAll: function (): Task[] {
        throw new Error("Function not implemented.")
    },
    create: function (task: Task): boolean {
        throw new Error("Function not implemented.")
    },
    update: function (task: Task): boolean {
        throw new Error("Function not implemented.")
    }
}

export default TaskRepository


