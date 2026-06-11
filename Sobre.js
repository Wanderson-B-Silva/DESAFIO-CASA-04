import { View, Text, TouchableOpacity } from 'react-native';
import estilos from '../Estilos/estilos';

export default function Home({ navigation }) {
  return (
    <View style={[estilos.tela, estilos.home]}>
      <Text style={estilos.tituloClaro}>Home</Text>
      <Text style={estilos.textoClaro}>Tela acessada por Tabs e Drawer. A partir dela existe navegação por Pilha.</Text>

      <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Detalhes')}>
        <Text style={estilos.textoBotao}>Abrir Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}
