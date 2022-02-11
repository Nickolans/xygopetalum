import React, { useState } from "react";
import { View, Text } from "react-native";
import ExampleTasks from "../data/example_tasks";
import Styles from "../styles/styles";

const taskCell = ({ task }) => {
  const [children, toggleChildren] = useState(true);

  return (
    <View>
      {/* MAIN TASK */}
      <View style={Styles.taskCellContainer}>
        <View style={Styles.taskCompletionButton} />
        <Text style={Styles.taskCellText}>{task.name}</Text>
      </View>

      {/* TASK CHILDREN */}
      {children
        ? task.children.map((child) => {
            const child_task = ExampleTasks.find((task) => {
              return task.identifier == child;
            });

            return (
              <View style={Styles.subtaskCellContainer}>
                <View style={Styles.taskCompletionButton} />
                <Text style={Styles.taskCellText}>{child_task.name}</Text>
              </View>
            );
          })
        : null}
    </View>
  );
};

export default taskCell;
