import React from "react";
import { StatusBar, View } from "react-native";
import Navigation from "./app/Navigation/Navigation";
import { firebaseApp } from "./app/utils/Firebase";

export default function App() {
  return <Navigation />;
}
