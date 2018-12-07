import { View, TextInput, Button, StyleSheet, Switch } from "react-native";
import React from "react";

type TaskFormProps = {
    onSubmit: (Task) => void
}

type TaskFormState = {
    name: string
    completed: boolean
}

export class TaskForm extends React.Component<TaskFormProps, TaskFormState> {

    constructor(props) {
        super(props)
        this.state = { name: '', completed: false }
    }

    render() {
        const submit = () => {
            this.props.onSubmit({ key: Date.now().toString(), name: this.state.name, completed: this.state.completed })
            this.setState({ name: '', completed: false })
        }
        return (
            <View>
                <TextInput
                    style={styles.form}
                    onChangeText={(text) => this.setState({ name: text })}
                    value={this.state.name} />
                <Switch value={this.state.completed} onValueChange={(value) => this.setState({ completed: value })} />
                <Button title="Cadastrar" onPress={submit}></Button>
            </View >
        )
    }

}

const styles = StyleSheet.create({
    form: {
        height: 40,
        width: 200,
        padding: 10,
        borderColor: '#eee',
        borderRadius: 5,
        borderWidth: 1
    }
})
