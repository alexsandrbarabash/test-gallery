import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Indicator from "../indicator";
import { useNavigation } from "@react-navigation/native";

interface IProps {
  onPress: () => void;
  author: string;
  uri: string;
}

const CardPhoto: React.FC<IProps> = ({ onPress, author, uri }) => {
  const [viewSpinner, setViewSpinner] = useState(true);
  const navigation = useNavigation();
  const cutText = (text: string): string => {
    if (text.length > 17) {
      return text.slice(0, 17) + "...";
    }

    return text;
  };
  return (
    <TouchableOpacity
      onPress={() => {
        if (viewSpinner) {
          return;
        }
        onPress();
        navigation.navigate("Photo");
      }}
      activeOpacity={0.7}
    >
      <View style={styles.container}>
        <View style={styles.imgWrapper}>
          <Image
            style={styles.img}
            onLoadStart={() => setViewSpinner(true)}
            onLoadEnd={() => setViewSpinner(false)}
            source={{
              uri: uri,
            }}
          />
          {viewSpinner ? <Indicator /> : null}
        </View>
        <Text style={styles.text}>{cutText(author)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardPhoto;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 150,
    borderRadius: 15,
    marginVertical: 15,
    marginHorizontal: 25,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: "#fff",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  img: {
    height: "100%",
    borderRadius: 15,
  },
  imgWrapper: {
    height: "100%",
    width: "45%",
  },
  text: {
    marginLeft: 15,
    marginTop: 30,
  },
});
