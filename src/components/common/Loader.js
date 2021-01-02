import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Modal,
  ActivityIndicator,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { colors, fonts, images, strings } from "../../utils/index";
import { useDispatch, useSelector } from "react-redux";

const { width, height } = Dimensions.get("window");

const LoadingComp = (props) => {
  const { status, text } = useSelector((state) => state.loader);
  if (status) {
    return (
      <Modal
        // onRequestClose={() => (onClose ? onClose() : null)}
        animationType="fade"
        transparent={true}
        visible={status}
      >
        <View style={styles.container}>
          <View style={styles.subCont}>
            {/************ Text ************** */}
            <Text style={styles.topText}>{strings.downloadingDoc}</Text>
            {/************ Spinner ************** */}
            <View style={{ paddingVertical: 12 }}>
              <ActivityIndicator color={colors.white} />
            </View>
          </View>
        </View>
      </Modal>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width,
    height,
    backgroundColor: "rgba(255, 255, 255,0.9)",
  },
  subCont: {
    paddingVertical: 12,
    width: (width * 90) / 100,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.black4c,
    alignItems: "center",
    backgroundColor: colors.black4c,
  },
  topText: {
    fontSize: RFValue(14),
    textAlign: "center",
    fontFamily: fonts.bold,
    color: colors.white,
  },
});

export default LoadingComp;
