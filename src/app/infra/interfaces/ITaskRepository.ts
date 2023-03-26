import Task from "../../domain/Task";

export default interface ITaskRepository {
    get(): Task,
    getAll(): Task[],
    create(task: Task): boolean,
    update(task: Task): boolean,
}