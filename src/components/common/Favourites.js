import React from 'react';
import {TouchableOpacity,Image} from 'react-native';
export default function Favourites(props) {
    const {isFavourite}=props
    let favouriteStar=(isFavourite==-1 || isFavourite===false || isFavourite===null )?false:true
  return (
    <TouchableOpacity
      onPress={
        favouriteStar ? props.removeFromFavourites : props.addToFavourites
      }
      style={{
        borderColor: 'white',
        marginRight: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {favouriteStar ? (
          <Image 
          style={{width:25,height:25}}
          source={require("../../../assets/imgs/star.png")}/>
      ) : (
        <Image 
        style={{width:25,height:25}}
        source={require("../../../assets/imgs/emptyStar.png")}/>
      )}
    </TouchableOpacity>
  );
}
