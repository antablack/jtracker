import Task from "../domain/Task"
import ITaskRepository from "../infra/interfaces/ITaskRepository"


export default (task: Task, taskRepository: ITaskRepository): boolean => {

    return true
}

