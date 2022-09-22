import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Snackbar } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

type SnackProps = {
  visible: boolean;
  setVisible: Function;
  text: string;
};

export function SnackError({ visible, setVisible, text }: SnackProps) {
  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <Snackbar
      wrapperStyle={styles.container}
      style={styles.snackbar}
      visible={visible}
      onDismiss={onDismissSnackBar}
      action={{
        label: "Ok",
        color: "#fdfdfd",
        onPress: () => {
          // Do something
        },
      }}
    >
      <View style={styles.content}>
        <MaterialIcons name="error-outline" size={24} color="white" />
        <Text style={styles.text}>{text}</Text>
      </View>
    </Snackbar>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    zIndex: 1,
    maxHeight: 100,
  },
  snackbar: {
    color: "#fdfdfd",
    backgroundColor: "#ee295e",
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    color: "#fdfdfd",
    paddingLeft: 10,
  },
});
