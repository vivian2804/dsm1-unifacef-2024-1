import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Curso from './src/Curso'
import Instituicao from './src/Instituicao'
import MeuApp from './src/MeuApp'
import SobreMim from './src/SobreMim'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="MeuApp" component={MeuApp} />
        <Stack.Screen name="SobreMim" component={SobreMim} />
        <Stack.Screen name="Curso" component={Curso} />
        <Stack.Screen name="Instituicao" component={Instituicao} />
        
        

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

