import { Task } from "./Task";
import { View, Switch, Text, AppState } from "react-native";
import React from "react";

type TaskListItemProps = {
    task: Task
}

type TaskListItemState = {
    completed: boolean
}

export class TaskListItem extends React.Component<TaskListItemProps, TaskListItemState> {

    private readonly toggleCompleted = value => this.setState({ completed: value })

    constructor(props) {
        super(props)
        this.state = { completed: this.props.task.completed }
    }

    render() {
        return (
            <View>
                <Text>{this.props.task.name}
                    <Switch value={this.state.completed} onValueChange={this.toggleCompleted} />
                </Text>
            </View>
        )
    }
}
