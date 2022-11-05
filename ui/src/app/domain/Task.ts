
export default interface Task {
    id: string,
    description: string,
    startDateTime: number,
    endDateTime?: number,
    createDate?: string,
    modificationDate?: string,
}

