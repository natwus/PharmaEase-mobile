import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tabs from "./Tabs";
import Login from "./Login";
import Cadastro from "./Cadastro";

export default function Rotas() {
    const Tab = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Login" component={Login} options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="Cadastro" component={Cadastro} options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="Tabs" component={Tabs} options={{ headerShown: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
