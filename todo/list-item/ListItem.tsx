import React from "react";
import { Switch, Text, View } from "react-native";
import { IListItemProps } from "./IListItemProps";
import { IListItemState } from "./IListItemState";

export class ListItem extends React.Component<IListItemProps, IListItemState> {

    constructor(props) {
        super(props);
        this.state = { completed: this.props.task.completed };
    }

    public render() {
        return (
            <View>
                <Text>{this.props.task.name}
                    <Switch value={this.state.completed} onValueChange={this.toggleCompleted} />
                </Text>
            </View>
        );
    }

    private readonly toggleCompleted = (value) => this.setState({ completed: value });
}
