import React, { Component } from 'react';
import { TouchableHighlight,Platform,View,Text,StyleSheet,Dimensions, Button} from 'react-native';
import {Link} from 'react-router-native'

var screen =Dimensions.get('window');
export default class componentName extends Component {
  render() {
    return (
      <View style={styles.parentView}>
        <View style={styles.childTitle}>
          <View style={styles.textThiSatHach}>
            <Text style={styles.textThiSatHach_txtChild}>
                 Thi Sát Hạch GPLX
            </Text>
            <Link to='/'><Text>Home</Text></Link>
          </View>
        </View>
      <View style={styles.footerView}>
      </View>
      <View style={styles.childView}>
        <View style={styles.viewParentButton}>
          <Link to="/LoaiDichVu/A1" style={{backgroundColor:'black'}}>
            <View style={[styles.txtButton,{backgroundColor:'#C53CF5'}]}>
              <View style={styles.viewChildButton}>
                <Text style={styles.txtChildButton}>
                      A1
                </Text>
              </View>
            </View>
          </Link>
        </View>
        <View style={styles.viewParentButton}>
          <Link to='/TestTheoBoDe' style={[styles.txtButton,{backgroundColor:'#31C6BD'}]}>
            <View style={styles.viewChildButton}>
              <Text style={styles.txtChildButton}>
                    A2
              </Text>
            </View>
          </Link>
        </View>
        <View style={styles.viewParentButton}>
          <TouchableHighlight style={[styles.txtButton,{backgroundColor:'#DE3030'}]}>
            <View style={styles.viewChildButton}>
              <Text style={styles.txtChildButton}>
                    A3
              </Text>
            </View>  
          </TouchableHighlight>
        </View>
      
        <View style={styles.viewParentButton}>
          <TouchableHighlight style={[styles.txtButton,{backgroundColor:'#F4CD00'}]}>
            <View style={styles.viewChildButton}>
              <Text style={styles.txtChildButton}>
                    B1
              </Text>
            </View>   
          </TouchableHighlight>
        </View>
        <View style={styles.viewParentButton}>
          <TouchableHighlight style={[styles.txtButton,{backgroundColor:'#656262'}]}>
            <View style={styles.viewChildButton}>
              <Text style={styles.txtChildButton}>
                    B2
              </Text>
            </View>   
          </TouchableHighlight>
        </View>
        <View style={styles.viewParentButton}>
          <TouchableHighlight style={[styles.txtButton,{backgroundColor:'#2DA34E'}]}>
            <View style={styles.viewChildButton}>
              <Text style={styles.txtChildButton}>
                    C,D,E,F
              </Text>
            </View>   
          </TouchableHighlight>
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
      marginTop:Platform ==='ios' ?34 : 0
  },
  childTitle:{
    alignItems:'center',
    // color:'black'
    borderTopWidth:0.5,
    borderTopColor:'gray',
    // flex:1,
    backgroundColor :'#58D3F7',
    flexDirection:'row',
    height:screen.height*1/10,
    // height:200,
    width:screen.width,
    
  },
  textThiSatHach:{

    flex:1,
    flexDirection:'row',
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
    justifyContent:'center',
  },
  viewChildButton :{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  txtChildButton :{
    color:'white'

  }


  

});



