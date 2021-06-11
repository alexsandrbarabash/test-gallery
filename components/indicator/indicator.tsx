import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

interface IProps {
  sizeIndicator?: number;
}

const Indicator: React.FC<IProps> = ({ sizeIndicator = 45 }) => {
  return (
    <ActivityIndicator
      style={{
        ...styles.indicator,
        transform: [
          { translateX: -1 * (sizeIndicator / 2) },
          { translateY: -1 * (sizeIndicator / 2) },
        ],
      }}
      size={sizeIndicator}
      color="#222020"
    />
  );
};

export default Indicator;

const styles = StyleSheet.create({
  indicator: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
});
