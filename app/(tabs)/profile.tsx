import { images } from "@/constants/images";
import React from "react";
import { Image, Text, View } from "react-native";

const Profile = () => {
  return (
    <View className="bg-primary flex-1">
      <Image
        source={images.bg}
        className="w-full flex-1 absolute z-0"
        resizeMode="cover"
      />
      <Text>Profile</Text>
    </View>
  );
};
export default Profile;
