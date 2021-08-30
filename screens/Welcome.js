import React from 'react'
import { 
    View, 
    Button, TouchableOpacity,Text, StyleSheet ,
    
} from 'react-native';
import { AuthContext } from '../components/context'

const Welcome = () => {
const {signOut} = React.useContext(AuthContext);

    return (
        <View style={styles.container}>
              <TouchableOpacity
                    onPress={() => {signOut()}}
                    style={ {
                        backgroundColor: '#009387',
                        margin: 15,
                        width:'35%',
                        height:50,alignItems:'center',justifyContent:'center'
                    }}
                >
                    <Text style={{
                        color: 'white',fontWeight:'bold'
                        
                    }}>Sign Out</Text>
                </TouchableOpacity>
        </View>
    )
   
}
//  const styles = StyleSheet.create({
//     container: {
//       flex: 1, 
//       backgroundColor: '#009387',
//     },
//     });
export default Welcome;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems:'center',
      justifyContent:'center'
    },
   
  });
