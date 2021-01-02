import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableOpacity,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { colors, fonts, images, strings } from "../utils/index";
import { useDispatch, useSelector } from "react-redux";
import { hideWarning } from "../redux/warningReducer/action";
const { width, height } = Dimensions.get("window");

const AlertComp = (props) => {
  /****************** Dispatch
   */ const dispatch = useDispatch();
  const { status, text } = useSelector((state) => state.warningReducer);

  /**************** State
   */ const [show, setShow] = useState(false);

  /****************** Effect
   */ useEffect(() => {
    if (status === true) {
      setTimeout(() => setShow(true), 600);
    } else {
      setShow(false);
    }
  }, [status]);
  if (show) {
    return (
      <Modal animationType="fade" transparent={true} visible={show}>
        <View style={styles.container}>
          <View style={styles.subCont}>
            {/************ Heading ************** */}
            <Text style={styles.topText}>{strings.error}</Text>
            {/************ Sub Heading ************** */}
            <Text style={styles.subText}>{text ? text : strings.vpn}</Text>
            {/************ Btn ************** */}
            <TouchableOpacity
              onPress={() => dispatch(hideWarning())}
              style={styles.btnCont}
            >
              <Text style={[styles.btnText]}>OK</Text>
            </TouchableOpacity>
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
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  subCont: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: (width * 90) / 100,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.pearWhite,
    alignItems: "center",
    backgroundColor: colors.pearWhite,
  },
  topText: {
    fontSize: RFValue(14),
    fontFamily: fonts.bold,
    color: colors.black,
  },
  subText: {
    textAlign: "center",
    fontSize: RFValue(14),
    fontFamily: fonts.medium,
    color: colors.black,
    paddingVertical: 12,
  },
  btnText: {
    textAlign: "center",
    fontSize: RFValue(12),
    fontFamily: fonts.bold,
    color: colors.white,
  },
  btnCont: {
    height: (height * 5) / 100,
    borderWidth: 1,
    borderColor: colors.green7f,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    width: (width * 85) / 100,
    backgroundColor: colors.green7f,
  },
});

export default AlertComp;
