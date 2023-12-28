import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const Drawer = createDrawerNavigator();
const BottomTabs = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style={"light"} />

      {/* DRAWER TABS NAVIGATOR */}

      {/* <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#ff5f4d",
            },
            headerTintColor: "#fff",
            // drawerActiveBackgroundColor: "#bfdcf8",
            drawerActiveBackgroundColor: "#f7c3be",
            drawerActiveTintColor: "#ff5f4d",
            drawerStyle: {
              // backgroundColor: "#f2f2f2",
            },
          }}
        >
          <Drawer.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              drawerLabel: "Welcome Screen",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="User"
            component={UserScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer> */}

      {/* BOTTOM TABS NAVIGATOR */}

      <NavigationContainer>
        <BottomTabs.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#ff5f4d",
            },
            headerTintColor: "#fff",
            tabBarActiveTintColor: "#ff5f4d",
          }}
        >
          <BottomTabs.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="User"
            component={UserScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
            }}
          />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
