import {Dimensions, StyleSheet} from 'react-native';

export const htmlStyles = StyleSheet.create({
  inputStyle: {
    width: Dimensions.get('window').width - 15,
    minHeight: 1,
  },
});

export const customStyle = `
p,
span,
strong {
  color: #000000 !important;
  background-color: #fff !important;
  overflow: "hidden" !important;
  margin: 0 !important;
}

body {
  background-color: #fff !important;
  overflow: "hidden" !important;
}

img {
  height: auto;
  width:${Dimensions.get('window').width};
}
`;
