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
    constructor(props) {
        super(props)
        this.state = { completed: this.props.task.completed }
    }

    render() {
        const toggleCompleted = (value) => this.setState({ completed: value })
        return (
            <View>
                <Text>{this.props.task.name}
                    <Switch value={this.state.completed} onValueChange={toggleCompleted}></Switch>
                </Text>
            </View >
        )
    }
}
