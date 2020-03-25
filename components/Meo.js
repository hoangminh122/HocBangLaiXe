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
                    <Link to='/'><Text>Home</Text></Link>

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
                      horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}>
      <View>
        <View style={{display:'flex',flexDirection:'column',height:'100%',width:'100%'}}>
          <View style={styles.parentWarmingContent}>
            
            <View style={{flex:7,backgroundColor:'white'}}>
                {/* <View style={{margin:5}}> */}
                    <Text style={styles.childWarmingTxt}>Câu hỏi liên quan đến KHÁI NIỆM :</Text>
                {/* </View> */}
                <View style={{marginLeft:5}}>
                    <Text >Những câu hỏi về “khái niệm” hoặc “ hiểu như thế nào là đúng” thì có các từ trong ngoặc kép “…” ở đề bài thì để ý những từ sau:
                    </Text>
                       <Text style={{fontWeight:'bold',fontStyle:'italic'}}> + Vạch – Phố – Dải – Phần : Chọn đáp án số (1).</Text>
                       <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+ Làn – Tiên – Giới : Chọn đáp án số (2).</Text>
                       <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+ Khái niệm “Người điều khiển giao thông” : Chọn đáp án số (2) + (3).</Text>
                       <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+ Khái niệm “ đường bộ”, “văn hóa giao thông” : Chọn đáp án số (1) + (2).</Text>
                </View>
            </View>
          </View>
        
        
          <View style={styles.parentWarmingContent}>
            
            <View style={{flex:7,backgroundColor:'white'}}>
                {/* <View style={{margin:5}}> */}
                    <Text style={styles.childWarmingTxt}>Những câu luôn nằm trong ĐÁP ÁN ĐÚNG:</Text>
                {/* </View> */}
                <View style={{marginLeft:5}}>
                    <Text >Trong đáp án chứa những cụm từ sau , thì chọn luôn đáp án đó:</Text>
                    <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+ Bị nghiêm cấm.</Text>
                    <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+ Không được……. (không được phép, không được quay đầu).</Text>
                    <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+ UBND cấp tỉnh.</Text>
                    <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+ Cơ quan, tổ chức, cá nhân.</Text>
                </View>
            </View>
          </View>
        </View>
      </View>
        {/* //them */}
      <View>
        <View style={{display:'flex',flexDirection:'column',height:'100%',width:'100%'}}>
          <View style={styles.parentWarmingContent}>
          <View style={{flex:7,backgroundColor:'white'}}>
                  <Text style={styles.childWarmingTxt}>Câu hỏi về hiệu lệnh của CSGT:</Text>
              <View style={{marginLeft:5}}>
                  <Text >Luôn chọn:</Text>
                  <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+Giơ 1 tay: đáp án 2</Text>
                  <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+Giơ 2 tay: đáp án 1</Text>
              </View>
          </View>
        </View>
          <View style={styles.parentWarmingContent}>
           
            <View style={{flex:7,backgroundColor:'white'}}>
                    <Text style={styles.childWarmingTxt}>Từ khoá cần nắm luôn là câu đúng 100%:</Text>
                <View style={{marginLeft:5}}>
                    <Text >Thấy từ khóa trong đáp án thì chọn luôn đáp án đó:</Text>
                    <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+"không được…"</Text>
                    <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+"trái phép…” </Text>
                    <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+"giảm tốc độ, nhường đường..." </Text>
                    <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+"bị nghiêm cấm" </Text>
                    <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+"chấp hành..."</Text>
                </View>
            </View>
          </View>
        </View>
      </View>
      {/* them */}
        {/* //them */}
        <View>
        <View style={{display:'flex',flexDirection:'column',height:'100%',width:'100%'}}>
          
        
          <View style={styles.parentWarmingContent}>
         
          <View style={{flex:7,backgroundColor:'white'}}>
              {/* <View style={{margin:5}}> */}
                  <Text style={styles.childWarmingTxt}>Quy định nhường đường tại nơi giao nhau:</Text>
              {/* </View> */}
              <View style={{marginLeft:5}}>
                  <Text >Buộc tuân theo:</Text>
                  <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+KHÔNG CÓ vòng xuyến: nhường bên tay PHẢI</Text>
                  <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+CÓ vòng xuyến: nhường bênTRÁI</Text>
                  <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+Xe đi trên đường nhánh phải nhường đường cho tất cả  </Text>
                  <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+Phương tiện giao thông đường sắt được ưu tiên hoàn toàn so với đường bộ</Text>
                  <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+Đường ưu tiên là đường "được nhường"</Text>
              </View>
          </View>
        </View>
          <View style={styles.parentWarmingContent}>
           
            <View style={{flex:7,backgroundColor:'white'}}>
                {/* <View style={{margin:5}}> */}
                    <Text style={styles.childWarmingTxt}>Phần sa hình::</Text>
                {/* </View> */}
                <View style={{marginLeft:5}}>
                    <Text >Thứ tự đi phần sa hình:</Text>
                    <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+Thứ 1: Xe nào vào nơi giao nhau đi trước.</Text>
                    <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+Thứ 2: Xe ưu tiên đi trước: Quân sự, công an, cứu thương… </Text>
                    <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+Thứ 3: Xe nào đi trên đường ưu tiên thì được đi trước. </Text>
                    <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+Thứ 4: Xe bên phải không vướng đi trước.</Text>
                    <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+Thứ 5: Rẽ phải – Đi thẳng – Rẽ trái.</Text>
                </View>
            </View>
          </View>
        </View>
      </View>
      {/* them */}
        {/* //them */}
        <View>
        <View style={{display:'flex',flexDirection:'column',height:'100%',width:'100%'}}>
          
        
          <View style={styles.parentWarmingContent}>
         
          <View style={{flex:7,backgroundColor:'white'}}>
              {/* <View style={{margin:5}}> */}
                  <Text style={styles.childWarmingTxt}>Chú ý Xe con</Text>
              {/* </View> */}
              <View style={{marginLeft:5}}>
                  <Text >xe con là từ khóa đúng, xe con luôn chấp hành đúng quy tắc giao thông.</Text>
                  <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+ Khi đề bài hỏi xe nào được quyền đi trước, xe nào chấp hành đúng luật giao thông =>>>Trong đáp án có xe con thì luôn chọn</Text>
                  <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+ Khi đề bài hỏi xe nào vi phạm quy tắc giao thông =>> Chọn đáp án không có xe con (Vì xe con luôn đúng).</Text>
              </View>
          </View>
        </View>
          <View style={styles.parentWarmingContent}>
           
            <View style={{flex:7,backgroundColor:'white'}}>
                {/* <View style={{margin:5}}> */}
                    <Text style={styles.childWarmingTxt}>Phần sa hình:</Text>
                {/* </View> */}
                <View style={{marginLeft:5}}>
                    <Text >Có hình CSGT hoặc VÒNG TRÒN hoặc VÒNG XUYẾN: </Text>
                    <Text style={{fontWeight:'bold',fontStyle:'italic'}}>+Trong phần sa hình, câu nào xuất hiện hình CSGT hoặc VÒNG TRÒN, hoặc VÒNG XUYẾN thì chọn luôn đáp án số 3.</Text>
                </View>
            </View>
          </View>
        </View>
      </View>
      {/* them */}
      
      
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
      flex:1,
        // height:screen.height*1/10,
        width:screen.width
    },
    childView :{
      margin:1,
      flex:7,
        // height:screen.height*8/10,
        width:screen.width,
        backgroundColor:'white'
    },
    textThiSatHach:{

      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
      
  },
   parentWarmingContent:{
    display:'flex',
    flexDirection:'row',
    width:screen.width,
    height:screen.height/3
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



