import React from "react";
import { View } from "react-native";
import TaskCell from "../components/task_cell";
import ExampleTasks from "../data/example_tasks";

const TasksMainScene = () => {
  return (
    <View style={{ backgroundColor: "gray", width: "100%", height: "100%" }}>
      {ExampleTasks.map((task) =>
        task.parent == "" ? (
          <TaskCell task={task} key={task.identifier} />
        ) : null
      )}
    </View>
  );
};

export default TasksMainScene;
