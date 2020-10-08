import  React  from 'react';
import {View,Text,Image} from 'react-native';

const App=()=>{
    return(
    <View>
      <Image 
      style={{widht:'100%',height:100}}
      source={require('./images/bee.jpg')}
      />
      <Image
       style={{widht:'100%',height:350}}
       source={{uri:'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg'}}
      />
     
    </View>
      
  )
}
export default App; 