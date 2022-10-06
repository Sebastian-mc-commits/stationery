import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StationeryCategory, StationeryItems, StationeryItem } from "../screens";

const Stack = createNativeStackNavigator();

const StationeryMain = () => {

  return (

    <Stack.Navigator>

      <Stack.Screen
        name="StationeryCategory"
        component={StationeryCategory}
        options={{
          title: "Categorias",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {

            fontWeight: "bold"
          }
        }} />

      <Stack.Screen
        name="StationeryItems"
        component={StationeryItems}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: route.params.background,
          },
          headerTitleStyle: {

            fontWeight: "bold"
          },
        })} />

      <Stack.Screen
        name="StationeryItem"
        component={StationeryItem}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: route.params.background,
          },
          headerTitleStyle: {

            fontWeight: "bold"
          },
        })} />

    </Stack.Navigator>
  );
}
export default StationeryMain;