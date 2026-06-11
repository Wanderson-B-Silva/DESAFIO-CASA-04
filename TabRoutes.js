import { View, Text } from 'react-native';
import estilos from '../Estilos/estilos';

export default function Contato() {
  return (
    <View style={[estilos.tela, estilos.contato]}>
      <Text style={estilos.tituloEscuro}>Contato</Text>
      <Text style={estilos.textoEscuro}>Tela contato usando Tabs e Drawer.</Text>
    </View>
  );
}
