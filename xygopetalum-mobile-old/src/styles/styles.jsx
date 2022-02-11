import React from "react";
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  taskCellContainer: {
    borderRadius: 15,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 3,
    padding: 15,
    margin: 5,
    display: "flex",
    flexDirection: "row",
  },
  subtaskCellContainer: {
    borderRadius: 15,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 3,
    padding: 15,
    margin: 5,
    marginLeft: 35,
    display: "flex",
    flexDirection: "row",
  },
  taskCellText: {
    fontWeight: "600",
    color: "white",
  },
  taskCompletionButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#636363",
    marginRight: 15,
  },
});

export default Styles;
