import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import MainNavigation from "./src/config/navigation/NavigationStack";
import { useNetInfo } from "@react-native-community/netinfo";
import { useSelector, useDispatch } from "react-redux";
import { offline, online } from "./src/redux/netInfo/action";
// import AlertComp from "./src/components/common/AlertComp";
// import WarningComp from "./src/components/WarningComp";

const App = () => {
  /***************** Redux Hooks
   */ const dispatch = useDispatch();

  /***************** NetInfo
   */ const netStatus = useNetInfo();
  /***************** Header Color
   */ const color = useSelector((state) => state.headerColorReducer);

  /***************** Net handler
   */ const netStatusHandler = () => {
    if (netStatus) {
      if (netStatus.isConnected && netStatus.isInternetReachable) {
        dispatch(online(netStatus));
      } else {
        dispatch(offline());
      }
    }
  };
  /***************** Use Effect
   */ useEffect(() => {
    netStatusHandler();
    console.log("--- -- - - ", netStatus);
  }, [netStatus]);
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: color }}></SafeAreaView>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={color === colors.black4c ? "light-content" : "dark-content"}
          backgroundColor={color}
        />
        <MainNavigation />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
