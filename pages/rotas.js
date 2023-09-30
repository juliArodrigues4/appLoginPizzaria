import {createStackNavigator} from '@react-navigation/stack';

import Login from './Loginn';
import Home from './Homee';

const Stack = createStackNavigator();

export default function Rotas() {
  return(
    <Stack.Navigator>
    <Stack.Screen name="Loginn" component={Login} options ={{headerShown: false, title:"Login"}}/>
    <Stack.Screen name="Homee" component={Home} options ={{headerShown: false, title: "Home"}}/>
    </Stack.Navigator>
  );
}