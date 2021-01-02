import LocalizedStrings from 'react-native-localization';

const strings = new LocalizedStrings({
  en: {
    intro: 'One Single Import to import strings,colors,fonts and Images ',
    clickMe:
      'Touch me to simulate a login, which will call a saga action to chnage the user state to login state and the naigation stack will change ',
    persistText:
      'Redux Persist is Implemented so if the app relods You will still see me as I am logined',
  },
});
module.exports = strings;
