import { Stack, Tabs } from "expo-router";

export default function StackLayout(){
    return(
        <Stack
            screenOptions={
                {
                    headerShown: false
                }
            }
        >
            <Stack.Screen name="index/index" 
            options={{title: "Inicio"}}/>

            <Stack.Screen
            name="produto/index"
            options={{title: "Produto"}}/>
        </Stack>
    )
}