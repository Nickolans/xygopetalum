import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TasksMainScene from './src/scenes/task_main_scene';

export default function App() {
  return (
    <TasksMainScene />
  );
}
