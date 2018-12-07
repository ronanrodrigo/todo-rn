import { Task } from "./Task";
import { View, Switch, Text, AppState } from "react-native";
import React from "react";

type TaskListItemState = {
    completed: boolean
}

export class TaskListItem extends React.Component<Task, TaskListItemState> {
    constructor(props) {
        super(props)
        this.state = { completed: this.props.completed }
    }

    render() {
        const toggleCompleted = (value) => this.setState({ completed: value })
        return (
            <View>
                <Text>{this.props.name}
                    <Switch value={this.state.completed} onValueChange={toggleCompleted}></Switch>
                </Text>
            </View >
        )
    }
}
