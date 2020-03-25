import React, { Component } from 'react';
import De from './BoDe'
import {Link} from 'react-router-native'
import {View, FlatList,StyleSheet,AppRegistry,Text,Image, Platform,
    Modal,TouchableHighlight, Dimensions, ScrollView, TextInput, CheckBox, Alert, Button} from 'react-native'
var screen =Dimensions.get('window');

class HorizontalFlatListItem extends Component {
    constructor(props){
        super(props);
        
        this.state={
            check1:false,
            check2:false,
            check3:false,
            keyChange:0
        }
    }
    //kiem tra check1,check2,... ddungs khong
    checkValueIndex =(index) =>{
        // console.log("index: "+index)
         switch(index){
             case 0:{
                  return this.state.check1;
                //   break;
             }
             case 1:{
                return this.state.check2;
                // break;
           }
           case 2:{
            return this.state.check3;
            // break;
       }
         }
    }
    checkOnChange =(key,index) =>{
        switch(index){
            case 0:{
                this.setState({
                     check1 : !this.state.check1,
                     keyChange:key
                 });
                //  console.log(this.state.check1)
                 break;
            }
            case 1:{
                this.setState({
                    check2 : !this.state.check2,
                    keyChange:key
                });
               break;
          }
          case 2:{
                this.setState({
                    check3 : !this.state.check3,
                    keyChange:key
                });
                break;
          }
        }
        // console.log("key:" +key)
        //save answer change
      
    }
    render(){
        if(this.state.check1 !=0 || this.state.check2 != 0 || this.state.check3 != 0)
        this.props.parentFlatList.getAnswerUser(this.state.keyChange,this.state.check1,this.state.check2,this.state.check3)
       if(this.props.item.image ==""){
            return (
                <View  style={styles.horizontalParent}>
                    <View style={[styles.childTitle,{backgroundColor:'white'}]}>
                        <Text style={{flex:1}}>
                            Cau {this.props.index+1}
                        </Text>
                        <View style={{flexDirection:'row',flex:1}}>
                            <Text  style={{justifyContent:'flex-end'}}>
                                20:00
                            </Text>
                        </View>
                    
                        <Text style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                0/30
                        </Text>
                    </View>
                <Text style={styles.itemTitle}>{this.props.item.title}</Text>
                    <View key={this.props.index} style={{margin:5}}>
                        {this.props.item.result.map((val,index) => <View style={{flexDirection:'row'}}><CheckBox value={this.checkValueIndex(index)}  onChange = {() => this.checkOnChange(this.props.index,index) } ></CheckBox><Text style={{marginTop:5}}>{val}</Text></View>)} 
                    </View>
                </View>
            )
        }else{
            
            return (
               
                <View key={this.props.index} style={styles.horizontalParent}>
                    <View style={[styles.childTitle,{backgroundColor:'white'}]}>
                        <Text style={{flex:1}}>
                            Cau {this.props.index+1}
                        </Text>
                        <View style={{flexDirection:'row',flex:1}}>
                            <Text  style={{justifyContent:'flex-end'}}>
                                20:00
                            </Text>
                        </View>
                    
                        <Text style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                0/30
                        </Text>
                    </View>
                    <Text style={styles.itemTitle}>{this.props.item.title}</Text>
                    <View style={{margin:2,marginTop:10}}>
                        <Image source={{uri:this.props.image}} style={styles.imageIcon}></Image>
                    </View>

                {/* // <Image source={require('../images/de1-20.jpg')} style={{height:100,width:100}}></Image> */}
                    <View style={{margin:5}}>
                    {this.props.item.result.map((val,index) => <View style={{flexDirection:'row'}}><CheckBox value={this.checkValueIndex(index)}  onChange = {() => this.checkOnChange(this.props.index,index) } ></CheckBox><Text style={{marginTop:5}}>{val}</Text></View>)} 
                    </View>
                </View>
            )
        }
    }
}
var De1;

export default class componentName extends Component {
    answerUser = new Map();
    constructor(props){
        super(props)
        this.state={
            modalVisible :false,
        };
    }

    setDeSetup =(num) =>{
        switch(num){
            case 1: return De[0].de1;
            case 2: return De[1].de2;
            case 3: return De[2].de3;
        }
    }

    setModalVisible(visible){
        this.setState({modalVisible:visible})
    }

    changeBoolenToInt = (val) =>{
         if(val ==true) return 1;
         else 
            return 0;
         return 0;
    }

    getAnswerUser =(key,check1,check2,check3) =>{
            let arr=[];
            arr.push(this.changeBoolenToInt(check1));
            arr.push(this.changeBoolenToInt(check2));
            arr.push(this.changeBoolenToInt(check3));
            this.answerUser.set(key,arr);
          
    }
   showButtonSubmit = () =>{
       Alert.alert(
           "Submit",
           "Ban muon ket thuc va nop bai ?",
           [
               {
                   text:"Cancel", onPress: () => {
                        console.log("cancel");
                   }
                },
                {
                    text:"OK",onPress : () =>{
                        this.setModalVisible(true);
                    }
                }

           ]
       )
   }
   compareTwoArray =(arr1,arr2) =>{
       console.log("kiem tra" +arr1.length+ arr2.length)
        if(arr1.length != arr2.length) return false;
        else{
            for(let i=0;i<arr1.length;i++){
                console.log("kiem tra"+arr1[i]+"="+arr2[i])
                if(arr1[i] != arr2[i]) return false
            }
        }
        return true;
   }
   compareResult =(result) =>{
       let temp= [];
       let countTrue=0;
    for(var [key,value] of result){
        if(this.compareTwoArray(value,De1[key].resultTrue)){
            console.log("trueresult")
            temp.push(1);
            countTrue=countTrue+1;
        } 
        else{
            console.log("falseResult");
            temp.push(0);
        }
          
    }
     return countTrue;
   }
  render() {
      console.log(typeof this.props.match.params.id)
        De1=this.setDeSetup(parseInt(this.props.match.params.id))
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
            
            <View style ={styles.childView}>
                <FlatList style={styles.flatList}
                data={De1}
                horizontal={true}
                renderItem = {({item,index}) =>{
                        return (
                        <HorizontalFlatListItem  image={item.image} index={index} item={item} parentFlatList={this}>
                        </HorizontalFlatListItem>
                        );
                }}
                >
                </FlatList>
            </View>
            <View >
                <Modal
                    style={{ 
                        justifyContent:'center',
                        borderRadius:3,
                        width:screen.width-80,
                        height:280
                    }}
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{marginTop: 22,backgroundColor:'blue'}}>
                        <View>
                            <View>
                                <Text>Số Câu Trả Lời Đúng: <Text>{this.compareResult(this.answerUser)}/20</Text></Text>
                                

                            </View>
                            <Link to='/XemDapAn'>
                                <Text>Xem Đáp Án</Text>
                            </Link>
                            
                        <Link to='/sdf' style={{height:100,backgroundColor:'green',width:screen.width}}>
                           
                                <Text>Hide Modal</Text>
                            {/* </TouchableHighlight> */}
                        </Link>
                        </View>
                    </View>
            </Modal>
            </View>

            <View style={styles.childTitle}>
                <View style={{flex:1}}>
                    <Button onPress={() =>this.showButtonSubmit()}  style={{flex:0.2,justifyContent:'flex-end'}} title="Nop Bai" ></Button>
                </View>
            </View>
        </View>
        // modal
                    
        

    );
  }
}

const styles = StyleSheet.create({
    parentView :{
        flex:1,
        flexDirection :'column',
        marginTop:Platform ==='ios' ?34 : 0
    },
    childView :{
        height:screen.height*8/10,
        width:screen.width
    },
    flatList :{
        opacity:0.8,
        backgroundColor :'gray'
    },
    horizontalParent:{
        flex:1,
        flexDirection:'column',
        alignItems:'flex-start',
        borderColor:'grey',
        margin:4,
        borderWidth:1,
        borderRadius:10,
        backgroundColor:'white',
        width:screen.width,
        height:screen.height,
        
    },
    itemTitle:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
    },
    childTitle:{
        alignItems:'center',
        borderTopWidth:0.5,
        borderTopColor:'gray',
        // flex:1,
        backgroundColor :'#58D3F7',
        flexDirection:'row',
        height:screen.height*1/10,
        width:screen.width
    },
    imageIcon:{
        resizeMode:'contain',
        width:screen.width,
        height:screen.height/5
    },
    textThiSatHach:{

        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
        
    },
    textThiSatHach_txtChild:{
        // fontWeight: 'bold',
        // fontSize:20,
        // color:'#FFFFFF'
    }

})