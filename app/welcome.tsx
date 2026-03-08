import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Welcome() {
    return (
        <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-3x1 font-bold">Welcome Page</Text>

        <Button 
        title='Go to app' onPress={() => router.replace('/(tabs)')}
        />

      

        </View>



    );

}