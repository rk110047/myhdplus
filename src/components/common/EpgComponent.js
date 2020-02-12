import React, { Component } from 'react'
import {View, FlatList,Text,Image} from 'react-native'
const xml2js = require ('react-native-xml2js')
var parser = new xml2js.Parser();
export default class EpgComponent extends Component {
constructor(props){
    super(props);
    this.state={
        epgData:{}
    }
}
componentDidMount(){
    fetch(this.props.epgLink?this.props.epgLink:'http://185.94.77.114/media/tvguideBBC_vWZeEJl.xml')
    .then(response => response.text())
    .then(data => {
      parser.parseString(data, (err, result)=> {
          console.log({result})
          this.setState({
              epgData:result
          })
        console.log('Done');
    })
    })
}
renderChannelCard=(item)=>{
    const title=item.title&& item.title[0]._
    const desc=item.desc&& item.desc[0]._
    const imageSrc=item.icon && item.icon[0] && item.icon[0].$.src
    return(
        <View style={{width:150,height:150,marginHorizontal:5}}>
            <Image source={{uri:imageSrc}} style={{width:"100%",height:70}}/>
           <Text style={{color:"white"}}
           numberOfLines={1}
           >{title}</Text> 
           <Text style={{color:"white"}}
           numberOfLines={1}
           >{desc}</Text> 

        </View>
    )
}
    render() {
        return (<>
        <Text style={{color:"white",fontSize:17,marginVertical:5,marginBottom:15}}>Channel Programmes</Text>
                <FlatList
                data={this.state.epgData.tv && this.state.epgData.tv.programme}
                renderItem={({item}) => this.renderChannelCard(item)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
              </>
        )
    }
}
