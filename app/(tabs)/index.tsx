import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <TouchableOpacity
        onPress={() => router.replace("/welcome")}
        style={{
          marginTop: 20,
          alignSelf: "flex-start",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "#3B82F6", fontSize: 18, fontWeight: "bold" }}>
          ← Back
        </Text>
      </TouchableOpacity>

      <View className="flex-1 justify-center items-center">
        <Text className="text-5xl text-dark-100 font-bold">
          Welcome to my app.
        </Text>

        <Text className="text-5xl text-dark-100 font-bold">Hello Jonathan</Text>
      </View>
    </View>
  );
}
