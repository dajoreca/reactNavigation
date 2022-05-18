import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const Us = ({navigation, route}) => {
    console.log(route)
    const { clientId } = route.params;

    const returnStart = () => {
        //navigation.navigate('Start') //esta bien, pero hay otras opciones
        //navigation.push('Start') // las transiciones siempre son de derecha a izquierda
       navigation.goBack()
    
    }

    return ( 
        <View style={styles.container}>
        <Text> {clientId} </Text>
        <Button 
            title="Return"
            onPress={() => returnStart() }
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

export default Us;