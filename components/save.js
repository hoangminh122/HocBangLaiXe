import React, { Component } from 'react';
import { TouchableHighlight,Platform,View,Text,StyleSheet,Dimensions,Image, Button} from 'react-native';
import {Link} from 'react-router-native'

var screen =Dimensions.get('window');
let margin_left = (screen.width - screen.width/2)/7.5
export default class componentName extends Component {
  render() {
    return (
      <View style={styles.parentView}>
        <View style={styles.childTitle}>
          <View style={styles.textThiSatHach}>
            <Text style={styles.textThiSatHach_txtChild}>
                 Thi Sát Hạch GPLX
            </Text>
          </View>
          
        </View>
      <View style={styles.footerView}>
      </View>
      <View style={styles.childView}>
        <View style={[styles.viewParentButton,{marginLeft:margin_left}]}>
            <Link to="/Meo" style={{borderTopWidth:2,borderRightWidth:0.5, borderColor:'gray'}}>
                <View style={[styles.txtButton,{margin:7,backgroundColor:'white',borderWidth:1,borderLeftWidth:3,borderBottomWidth:3,borderColor:'gray'}]}>
                <View style={styles.viewChildButton}>
                    <Text style={styles.txtChildButton}>
                        jhgy
                    </Text>
                </View>
                </View>
            </Link>
        </View>
       
              
      </View>
      <View style={styles.footerView}>
      </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  parentView :{
      flex:1,
      flexDirection :'column',
      marginTop:Platform ==='ios' ?34 : 0,
      backgroundColor:'#E8E8E8'
  },
  childTitle:{
    // alignItems:'center',
    borderTopWidth:0.5,
    borderTopColor:'gray',
    // flex:1,
    backgroundColor :'#58D3F7',
    flexDirection:'row',
    display:'flex',
    height:screen.height*1/10,
    width:screen.width,
    
  },
  textThiSatHach:{

    flex:16,
    // flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'red'
    
  },
  textThiSatHach_txtChild:{
      // fontWeight: 'bold',
      // fontSize:20,
      // color:'#FFFFFF'
  },
  childView :{

    height:screen.height*8/10,
    width:screen.width
  },
  footerView:{
    height:screen.height*0.5/10,
    width:screen.width
  },
  txtButton:{
    backgroundColor:'blue',
    width:screen.width/2,
    height:screen.height/9,
    borderBottomWidth:1,
    borderRadius:10
  },
  viewParentButton :{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
  },
  viewChildButton :{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
    txtChildButton :{
      color:'black'

    }


  

});



