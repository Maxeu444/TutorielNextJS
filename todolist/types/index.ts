export interface ITask {
    _id: string;
    task: string;
    completed: boolean;
}

export interface AddTaskProps {
    task: string;
    setTask: (task: string) => void;
    handleCreateTask: () => void;
}

export interface TaskProps {
    individualTask: ITask;
    handleCompleteTask: (id: string) => void;
    handleDeleteTask: (id: string) => void;
}

export interface IDeleteTaskRequestParam {
    params: {
        id: string
    }
}

export interface IUser extends Document {
    email: string;
    password: string;
}