import  React  from 'react';
import {View,Text} from 'react-native';

const App=()=>{
    return(
      <View style={{flex:1,marginTop:20,marginRight:20 }}>
        <View style={{flex:1,backgroundColor:'#ff1493'}}>
          <Text style={{color:'orange'}}>Hello World</Text>
        </View> 
        <View style={{flex:2,backgroundColor:'#ff69b4'}}></View>
        <View style={{flex:3,backgroundColor:'#adff2f'}}></View>
      </View>
    )
}
export default App;