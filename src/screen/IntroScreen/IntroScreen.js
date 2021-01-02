import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors, fonts, images, strings} from '../../utils/index';
const {width, height} = Dimensions.get('window');

const IntroScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{strings.intro}</Text>
      <Image source={images.bigpdf} />
      <Text style={styles.text}>{strings.persistText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: RFValue(18),
    paddingHorizontal: 10,
    textAlign: 'center',
    color: colors.black,
    fontFamily: fonts.boldItalic,
  },
});

export default IntroScreen;
