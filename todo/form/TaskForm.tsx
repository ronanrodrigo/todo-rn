import React from "react";
import { Button, StyleSheet, Switch, TextInput, View } from "react-native";
import { ITaskFormProps } from "./ITaskFormProps";
import { ITaskFormState } from "./ITaskFormState";

export class TaskForm extends React.Component<ITaskFormProps, ITaskFormState> {

    constructor(props) {
        super(props);
        this.state = { name: "", completed: false };
    }

    public render() {
        return (
            <View>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({ name: text })}
                    value={this.state.name} />
                <Switch value={this.state.completed} onValueChange={(value) => this.setState({ completed: value })} />
                <Button title="Cadastrar" onPress={this.submit} />
            </View>
        );
    }

    private submit = () => {
        this.props.onSubmit({ key: Date.now().toString(), name: this.state.name, completed: this.state.completed });
        this.setState({ name: "", completed: false });
    }

}

const styles = StyleSheet.create({
    textInput: {
        borderColor: "#eee",
        borderRadius: 5,
        borderWidth: 1,
        height: 40,
        padding: 10,
        width: 200,
    },
});
