import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import MainNavigation from "./src/config/navigation/NavigationStack";
import { useNetInfo } from "@react-native-community/netinfo";
import { useSelector, useDispatch } from "react-redux";
import { offline, online } from "./src/redux/netInfo/action";
import AlertComp from "./src/components/common/AlertComp";
import WarningComp from "./src/components/WarningComp";
const App = () => {
  /***************** Redux Hooks
   */ const dispatch = useDispatch();
  /***************** Use Effect
   */ useEffect(() => {
    netStatusHandler();
    console.log("--- -- - - ", netStatus);
  }, [netStatus]);
  /***************** NetInfo
   */ const netStatus = useNetInfo();

  const netStatusHandler = () => {
    if (netStatus.isConnected && netStatus.isInternetReachable) {
      dispatch(online(netStatus));
    } else {
      dispatch(offline());
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <MainNavigation />
      <AlertComp />
      <View style={{ zIndex: 9999999 }}>
        <WarningComp />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
