import React from 'react'
 import { Text, View, TouchableOpacity,StyleSheet} from 'react-native';

 export default class App extends React.Component{
   render (){
     return (
      <View style= {{ flex:1 ,  flexDirection:'column'}}>

        <View style={{alignItems:'center', paddingTop:70,}}>
        <Text style={{ fontSize: 40, }}> PROJET SJP5</Text>
        </View>

      <View style={styles.boxall}> 
     
      <View style={styles.boxHautgd}>
        <Text> Texte 1</Text>
        <Text> Texte 2</Text>
        <Text> Texte 3 </Text> 
      </View>
      <View style={styles.boxmil}>
        <TouchableOpacity onPress={()=>{}}> 
          <Text>  pass</Text>
        </TouchableOpacity>

        <TouchableOpacity> 
          <Text> rass </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.boxHautgd}>
      <Text> Texte 1</Text>
      <Text> Texte 2</Text>
      <Text> Texte 3 </Text> 

      </View>
      </View>

      <View style={styles.boxallbas}>
      <View style={styles.boxBas}>
      <TouchableOpacity style={styles.miniBox}> 
          <Text>  + </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.miniBox}> 
          <Text>  M </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.miniBox}> 
          <Text>  -  </Text>
        </TouchableOpacity>

      </View>
      
      <View style={{ height:30, width:50 }}></View>

      <View style={styles.boxBas}>
      <TouchableOpacity style={styles.miniBox}> 
          <Text>  + </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.miniBox}> 
          <Text>  M </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.miniBox}> 
          <Text>  -  </Text>
        </TouchableOpacity>
      </View>
      
        </View>
      </View>
     )
   }
  }
  const styles= StyleSheet.create({
    miniBox:{
      height:30, 
      width:30, 
      backgroundColor:'white', 
      borderWidth:2, 
      borderColor:'blue'
    },
    boxBas:{
      height:70, 
      width:120,
      flexDirection:'row', 
      alignItems: 'center', 
      justifyContent: 'space-evenly'

    },
    boxHautgd:{
      height:200, 
      width:120, 
      borderColor: 'magenta',
      alignItems:'center',
      flexDirection: 'column', 
      justifyContent:'space-evenly',
      borderWidth: 2,
    },
    boxall:{
      flex:1,
      alignItems:'center',
      flexDirection:'row', 
      backgroundColor:'white',
      justifyContent: 'space-evenly', 
      marginTop: 100,
    },
    boxmil:{
      height:200, 
      width:50, 
      backgroundColor: 'magenta', 
      alignItems: 'center', 
      flexDirection: 'column', 
      justifyContent:'space-evenly',

    },
    boxallbas:{
      flex:1,
      alignItems:'center', 
      flexDirection:'row',
      backgroundColor:'white',
      justifyContent: 'space-evenly',
      marginTop:10,

    }
  })
