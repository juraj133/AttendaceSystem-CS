import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    input: {
      borderWidth: 0.5,
      borderRadius: 5,
      borderColor: '#000',
      backgroundColor: '#dedede',
      margin: 15,
      padding: 10,
      height: 40,
      width: 300
    },
    container: {
      flex: 1,
      backgroundColor: '#393e41',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40
    },
    header:{
      color: '#e7e5df',
      fontSize: 30,
      textAlign: 'center',
    },
    text:{
      color: '#e7e5df',
      fontSize: 18,
      textAlign: 'center',
      marginRight: 10,
    },
    link:{
      flex: 1,
      textAlignVertical: 'center',
      color: '#9c9793',
    },
    row: {
      flexDirection: 'row',
    },
  });

export default styles;