import * as FileSystem from 'expo-file-system/legacy';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const html = `
  <html>
    <body>
      <h1>PDF Test</h1>
      <p>Gerado com Expo</p>
    </body>
  </html>
`;

const gerarPdf = async () => {
  // Gera o PDF com nome automático
  const { uri } = await Print.printToFileAsync({ html });

  // Nome desejado
  const novoNome = 'relatorio_cliente.pdf';

  // Caminho final com novo nome
  const novoCaminho = FileSystem.documentDirectory + novoNome;

  // Move (renomeia) o arquivo
  await FileSystem.moveAsync({
    from: uri,
    to: novoCaminho,
  });

  // Compartilha o PDF com nome correto
  await Sharing.shareAsync(novoCaminho);
};

export default function ModalScreen() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React PDF Generator</Text>
      <TouchableOpacity onPress={gerarPdf} style={{ height: "5%", width: "40%", backgroundColor:"#c91a1a", alignItems:"center", justifyContent:"center" }}>
        <Text style={{ color: "#fff" }}>Generate .PDF</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
