import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const Start = ({navigation}) => { //navigation //debug stack

    const information = {
        clientId: 20,
        totalPayment: 500
        //puedes pasar state, funciones, objetos, etc.
    }

    const goUs = () => {
        navigation.navigate('Us', information)
    }

    return ( 
        <View style={styles.container}>
            <Text>Start</Text>
            <Button 
                title="Go to Us"
                onPress={() => goUs() }
            />
        </View>
        
     );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});
 
export default Start;