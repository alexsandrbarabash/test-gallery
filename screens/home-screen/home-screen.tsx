import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CardPhoto from "../../components/card-photo";
import { UnsplashContext } from "../../container/unsplash-container";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {

  const { data, setSelectPhotoLink } = useContext(UnsplashContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item: { name, link } }) => (
          <CardPhoto
            author={name}
            uri={link}
            onPress={() => {
              setSelectPhotoLink(link);

            }}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 1000,
    backgroundColor: "#fff",
  }
});
