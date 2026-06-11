import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackRoutes from './HomeStackRoutes';
import Sobre from '../Telas/Sobre';
import Contato from '../Telas/Contato';

const Tab = createBottomTabNavigator();

export default function TabRoutes({ route }) {
  const initialRouteName = route?.params?.screen || 'Home';

  return (
    <Tab.Navigator initialRouteName={initialRouteName}>
      <Tab.Screen name="Home" component={HomeStackRoutes} options={{ headerShown: false }} />
      <Tab.Screen name="Sobre" component={Sobre} />
      <Tab.Screen name="Contato" component={Contato} />
    </Tab.Navigator>
  );
}
