import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { IAppState } from "./IAppState";
import { TaskForm } from "./todo/form/TaskForm";
import { ITask } from "./todo/ITask";
import { ListItem } from "./todo/list-item/ListItem";

export default class App extends React.Component<{}, IAppState> {

  constructor(props) {
    super(props);
    this.state = { taskItems: [] };
  }

  public render() {
    return (
      <View style={styles.container}>
        <TaskForm onSubmit={this.addItem} />
        <Text>{this.state.taskItems.length}</Text>
        <FlatList data={this.state.taskItems} renderItem={({ item }) => this.renderItem(item)} />
      </View>
    );
  }

  private readonly addItem = (task: ITask) => {
    const currentTaskItems = this.state.taskItems;
    this.setState({ taskItems: currentTaskItems.concat(task) });
  }

  private readonly renderItem = (task) => <ListItem task={task} />;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginTop: 100,
  },
});
