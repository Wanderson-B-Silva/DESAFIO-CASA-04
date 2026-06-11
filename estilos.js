import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Telas/Home';
import Detalhes from '../Telas/Detalhes';

const Stack = createNativeStackNavigator();

export default function HomeStackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePrincipal" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
    </Stack.Navigator>
  );
}
