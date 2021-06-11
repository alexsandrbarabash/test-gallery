import React, { useContext } from "react";
import { Image, StyleSheet, View } from "react-native";
import { UnsplashContext } from "../../container/unsplash-container";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const PhotoScreen = () => {
  const { selectPhotoLink } = useContext(UnsplashContext);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AntDesign
        style={styles.arrowLeft}
        name="arrowleft"
        size={45}
        color="#fff"
        onPress={() => navigation.navigate("Home")}
      />
      <Image style={styles.img} source={{ uri: selectPhotoLink }} />
    </View>
  );
};

export default PhotoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  img: {
    flex: 1,
  },
  arrowLeft: {
    position: "absolute",
    zIndex: 10,
    top: 35,
    left: 10,
  },
});
