import React from 'react';
import { StyleSheet, Text, View, FlatList, Switch, TextInput, Button } from 'react-native';
import { TaskForm } from './todo/TaskForm';
import { Task } from './todo/Task';
import { TaskListItem } from './todo/TaskListItem';

type AppState = {
  taskItems: Array<Task>
}

export default class App extends React.Component<{}, AppState> {

  private readonly addItem = (task: Task) => {
    const currentTaskItems = this.state.taskItems
    this.setState({ taskItems: currentTaskItems.concat(task) })
  }
  private readonly renderItem = task => { return <TaskListItem task={task} /> }

  constructor(props) {
    super(props)
    this.state = { taskItems: [] }
  }
  render() {
    return (
      <View style={styles.container}>
        <TaskForm onSubmit={this.addItem} />
        <Text>{this.state.taskItems.length}</Text>
        <FlatList data={this.state.taskItems} renderItem={({ item }) => { return this.renderItem(item) }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
