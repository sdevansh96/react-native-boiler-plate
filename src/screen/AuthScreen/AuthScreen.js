import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors, fonts, strings } from "../../utils/index";
import { RFValue } from "react-native-responsive-fontsize";
import { useDispatch } from "react-redux";
import { START_LOGIN } from "../../redux/user/actionType";
const { width, height } = Dimensions.get("window");

const AuthScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Auth</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  text: {
    fontSize: RFValue(18),
    color: colors.black,
    fontFamily: fonts.boldItalic,
    textAlign: "center",
  },
});

export default AuthScreen;
