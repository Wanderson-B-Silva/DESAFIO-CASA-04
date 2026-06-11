import { View, Text } from 'react-native';
import estilos from '../Estilos/estilos';

export default function Sobre() {
  return (
    <View style={[estilos.tela, estilos.sobre]}>
      <Text style={estilos.tituloEscuro}>Sobre</Text>
      <Text style={estilos.textoEscuro}>Tela sobre usando Tabs e Drawer.</Text>
    </View>
  );
}
