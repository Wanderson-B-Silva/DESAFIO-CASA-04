import { View, Text } from 'react-native';
import estilos from '../Estilos/estilos';

export default function Detalhes() {
  return (
    <View style={[estilos.tela, estilos.detalhes]}>
      <Text style={estilos.tituloEscuro}>Detalhes</Text>
      <Text style={estilos.textoEscuro}>Esta tela foi aberta pela Navegação por Pilha a partir da tela Home.</Text>
    </View>
  );
}
