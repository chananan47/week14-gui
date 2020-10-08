import  React  from 'react';
import {View,Text} from 'react-native';

const App=()=>{
    return(
    <View style={{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'stretch',
      }}>
    <View style={{width:50,height:50,backgroundColor:'#ff1493'}}></View>
    <View style={{width:50,height:100,backgroundColor:'#ff00ff'}}></View>
    <View style={{width:50,height:150,backgroundColor:'#ffd700'}}></View>
    </View>
  )
}
export default App; 