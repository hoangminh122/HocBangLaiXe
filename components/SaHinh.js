import React, { Component } from 'react';
import { TouchableHighlight,Platform,View,Image,Text,StyleSheet,Dimensions, Button, ScrollView, TextInput} from 'react-native';
import {Link} from 'react-router-native'
import BienBao from './BoBienBaoCam.js'

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
                </View>
                <View style={{flex:1,borderRadius:45,height:'50%',flexDirection:'column',backgroundColor:'#CCFFFF',marginRight:5,marginTop:15,borderWidth:1,justifyContent:'flex-end',}}>
                  <View style={{}} >
                    <Link to='/' ><Image style={{resizeMode:'contain',width:'100%',height:'80%',}} source={require('../image/home.png')}></Image></Link>
                  </View>
                </View>

            </View>
        <View style={[styles.childTitle,{backgroundColor:'white'}]}>
          <View style={styles.childTitle}>
          <View style={[styles.textThiSatHach,{backgroundColor:'#C4C4C4'}]}>
                    <Text style={[styles.textThiSatHach_txtChild,{fontSize:30,fontWeight:'bold'}]}>
                        Mẹo Nhớ Nhanh Đáp Án
                    </Text>
                </View>
          </View>
        </View>
     
      <View style={styles.childView }>
        <ScrollView 
                     
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}>
      <View>
            <View style={{display:'flex',flexDirection:'column',height:'100%',width:'100%'}}>
                <View style={styles.parentWarmingContent}>
                    
                    <View style={{flex:7,backgroundColor:'white'}}>
                        {/* <View style={{margin:5}}> */}
                            <Text style={[styles.childWarmingTxt,{margin:10}]}>Thi Sa Hình Thực Hành:</Text>
                        {/* </View> */}
                        <View style={{marginLeft:5}}>
                            <Text style={{fontWeight:'bold',fontStyle:'italic'}}><Text  style={{fontWeight:'bold',color:'red'}}> Bài số 1:</Text> Đi hình số 8 </Text>
                                                                                  <Text>  <Text style={{fontWeight:'bold',color:'red'}}>Hướng dẫn cách thi:</Text> Bạn nên để xe ở số 3 , đi theo vòng số 8 như H1 ( Lưu ý : đi hết vòng số 8,tránh trường hợp đi chưa hết vòng đã chuyển sang H2 ).
                            </Text>
                            <Text style={{fontWeight:'bold',fontStyle:'italic'}}><Text  style={{fontWeight:'bold',color:'red'}}> Bài số 2:</Text> Đi theo vạch đường thẳng</Text>
                                                                                  <Text>  <Text style={{fontWeight:'bold',color:'red'}}>Hướng dẫn cách thi:</Text>Từ lối ra của H1 đi tiếp thẳng như H2 , giữ đều ga và vận tốc nhỏ hơn 20km/h.
                            </Text>
                            <Text style={{fontWeight:'bold',fontStyle:'italic'}}><Text  style={{fontWeight:'bold',color:'red'}}> Bài số 3:</Text> Đi đường có vạch cản </Text>
                                                                                  <Text>  <Text style={{fontWeight:'bold',color:'red'}}>Hướng dẫn cách thi:</Text>  Sau khi đi hết H2,đi theo hình vòng như H3 ( Lưu ý : chỉ cần hơi chếch tay lái 1 chút để đi được như hình,không cần quá nghiêng sẽ gây ra đổ xe ).
                            </Text>
                            <Text style={{fontWeight:'bold',fontStyle:'italic'}}><Text  style={{fontWeight:'bold',color:'red'}}> Bài số 4:</Text>  Đi đường ghồ ghề </Text>
                                                                                  <Text>  <Text style={{fontWeight:'bold',color:'red'}}>Hướng dẫn cách thi:</Text> Tiếp tục lối ra của H3,đi tiếp lên H4 với vận tốc  nhỏ hơn 20km/h , đi theo đường mấp mô nên cần giữ tay lái chắc 1 chút , tạo cảm giác chắc chắn hơn khi lái xe ở đoạn đường này.
                            </Text>
                            <Text style={{fontWeight:'bold',fontStyle:'italic'}}><Text  style={{fontWeight:'bold',color:'red'}}> Lưu Ý</Text> </Text>
                                                                                  <Text>  <Text style={{fontWeight:'bold',color:'red'}}></Text>  Máy đã nổ và để số sẵn (số 3) các bạn chỉ việc đi thôi.– Trong lúc người khác đang thi trong hình bạn tập trung lắng nghe giám khảo gọi tên và quan sát.
                            </Text>
                        </View>
                    </View>
                </View>
                </View>
            </View>
        
        
            
         
       
        </ScrollView>
      </View>
      <View style={styles.footerView}>
      </View>
    </View>
   
    );
  }
}
const styles = StyleSheet.create({
    parentView :{
        // flex:1,
        display:'flex',
        flexDirection :'column',
        backgroundColor:'#58D3F7',
        // height:400,
         height:screen.height,
         width:screen.width,
        marginTop:Platform ==='ios' ?34 : 0
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
    childView :{
      margin:1,
      flex:7,
        // height:screen.height*8/10,
        width:screen.width,
        backgroundColor:'white'
    },
    textThiSatHach:{

      flex:16,
      // flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
      
  },
   parentWarmingContent:{
    display:'flex',
    flexDirection:'row',
    width:screen.width,
    height:screen.height/1
   },
   childWarmingImage:{
    width:'100%',
    height:screen.height/6
   },
   childWarmingTxt:{
    marginLeft:5,
    fontSize:20,
    fontWeight:'bold',
    color:'red'
   }

 


  

});



