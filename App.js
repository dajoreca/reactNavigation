import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'

//react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Start from './Views/Start';
import Us from './Views/Us';


const Stack = createStackNavigator();

const App = () => {
  return ( 
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Start'
          //si queremos poner estilo en todas las paginas de navigator
          screenOptions={{
            headerTitleAlign: 'center', //para android left, center (right no funciona bien)
            headerStyle:{
              backgroundColor: '#F4511E'
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
          >
          <Stack.Screen 
              name = 'Start'
              component={Start}
              options={{
                title: 'Componente Principal',

              }}

              // si se quiere poner estilo en solo una pantalla.
              //options={{
              //  title: 'Componente Principal',
              //  headerTitleAlign: 'center', //para android left, center (right no funciona bien)
              //  headerStyle:{
              //    backgroundColor: '#F4511E'
              //  },
              //  headerTintColor: '#FFF',
              //  headerTitleStyle: {
              //    fontWeight: 'bold'
              // }
              //}}
          />
          <Stack.Screen 
              name = 'Us'
              component={Us}
              options={ ({route}) =>({
                title: route.params.clientId
              })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>

   );
}
 




const styles = StyleSheet.create({

});


export default App;


