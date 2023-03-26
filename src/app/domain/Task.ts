
export default interface Task {
    id: string,
    description: string,
    startDateTime: number,
    endDateTime?: number,
    accumulatedTime: number,
    createDate?: string,
    modificationDate?: string,
}

