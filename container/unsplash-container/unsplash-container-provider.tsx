import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ACCESS_TOKEN } from "@env";
import axios from "axios";
import { IData } from "./types";
import UnsplashContext from "./unsplash-context";
import Indicator from "../../components/indicator";

const UnsplashContainerProvider: React.FC = ({ children }) => {
  const [photos, setPhotos] = useState<IData[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectPhotoLink, setSelectPhotoLink] = useState("");

  const updateState = (data: any): IData[] => {
    return data.map((item: any) => ({
      id: item.id,
      link: item.links.download,
      name: item.user.name,
    }));
  };

  useEffect(() => {
    console.log(ACCESS_TOKEN);
    axios
      .get("https://api.unsplash.com/photos/random/", {
        params: { client_id: ACCESS_TOKEN, count: 30 },
      })
      .then((res) => updateState(res.data))
      .then((data) => setPhotos(data))
      .then(() => setLoading(false))
      .catch((e) => {
        console.log(e.message);
        setError(true);
      });
  }, []);

  if (error) {
    return <Text>Error</Text>;
  }

  if (loading) {
    return (
      <View style={{ flex: 1 }}>
        <Indicator sizeIndicator={60} />
      </View>
    );
  }

  return (
    <UnsplashContext.Provider
      value={{ data: photos, setSelectPhotoLink, selectPhotoLink }}
    >
      {children}
    </UnsplashContext.Provider>
  );
};

export default UnsplashContainerProvider;
