import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator()

import Pag1 from './src/Pag1'
import Pag2 from './src/Pag2'


export default function App() {
  return(
  <NavigationContainer>
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '##fff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold',
      },
    }}
  >

    <Stack.Screen name="Pag1" component={Pag1} />
    <Stack.Screen name="Pag2" component={Pag2} />

    </Stack.Navigator>
      <StatusBar styles="auto" />
    </NavigationContainer>
  )
}


