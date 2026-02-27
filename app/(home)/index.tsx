import * as FileSystem from 'expo-file-system/legacy';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const data = [
  { item: "Jordan 4", qtn: 1, value: 1699.9, hasStock: true },
  { item: "Shirt Barcelona", qtn: 5, value: 699.9, hasStock: true },
  { item: "Nike Soccer Ball", qtn: 14, value: 199.0, hasStock: true },
  { item: "Adidas Ultraboost", qtn: 3, value: 899.9, hasStock: true },
  { item: "Puma RS-X", qtn: 4, value: 599.9, hasStock: true },
  { item: "Nike Air Max 90", qtn: 6, value: 799.9, hasStock: true },
  { item: "Jordan 1 High", qtn: 2, value: 1299.9, hasStock: true },
  { item: "Moletom Nike", qtn: 8, value: 349.9, hasStock: true },
  { item: "Camisa PSG", qtn: 7, value: 649.9, hasStock: true },
  { item: "Camisa Real Madrid", qtn: 5, value: 649.9, hasStock: true },
  { item: "Camisa Manchester City", qtn: 6, value: 649.9, hasStock: true },
  { item: "Camisa Liverpool", qtn: 4, value: 649.9, hasStock: true },
  { item: "Bermuda Adidas", qtn: 10, value: 199.9, hasStock: true },
  { item: "Jaqueta Corta Vento", qtn: 3, value: 499.9, hasStock: true },
  { item: "Boné New Era", qtn: 12, value: 149.9, hasStock: true },
  { item: "Chuteira Nike Mercurial", qtn: 5, value: 999.9, hasStock: true },
  { item: "Chuteira Adidas Predator", qtn: 4, value: 899.9, hasStock: true },
  { item: "Meião Futebol", qtn: 20, value: 49.9, hasStock: true },
  { item: "Caneleira Nike", qtn: 15, value: 89.9, hasStock: true },
  { item: "Luva de Goleiro", qtn: 7, value: 249.9, hasStock: true },
  { item: "Regata Treino", qtn: 9, value: 129.9, hasStock: true },
  { item: "Calça Jogger Puma", qtn: 6, value: 299.9, hasStock: true },
  { item: "Relógio Casio Sport", qtn: 4, value: 399.9, hasStock: true },
  { item: "Mochila Nike", qtn: 11, value: 249.9, hasStock: true },
  { item: "Squeeze Adidas", qtn: 18, value: 59.9, hasStock: true },
  { item: "Top Esportivo", qtn: 10, value: 119.9, hasStock: true },
  { item: "Legging Fitness", qtn: 8, value: 189.9, hasStock: true },
  { item: "Tênis Asics Gel", qtn: 5, value: 699.9, hasStock: true },
  { item: "Tênis Mizuno Wave", qtn: 4, value: 749.9, hasStock: true },
  { item: "Tênis Vans Old Skool", qtn: 6, value: 499.9, hasStock: true },
  { item: "Chinelo Nike", qtn: 13, value: 99.9, hasStock: true },
  { item: "Camisa Juventus", qtn: 5, value: 649.9, hasStock: true },
  { item: "Camisa Bayern", qtn: 5, value: 649.9, hasStock: true },
  { item: "Camisa Arsenal", qtn: 6, value: 649.9, hasStock: true },
  { item: "Camisa Chelsea", qtn: 4, value: 649.9, hasStock: true },
  { item: "Camisa Inter Miami", qtn: 7, value: 699.9, hasStock: true },
  { item: "Bola Adidas Champions", qtn: 9, value: 299.9, hasStock: true },
  { item: "Garrafa Térmica", qtn: 14, value: 89.9, hasStock: true },
  { item: "Fone Bluetooth Sport", qtn: 6, value: 199.9, hasStock: true },
  { item: "Camiseta Dry Fit", qtn: 12, value: 99.9, hasStock: true },
  { item: "Shorts Nike Pro", qtn: 8, value: 179.9, hasStock: true },
  { item: "Jaqueta Adidas Originals", qtn: 3, value: 599.9, hasStock: true },
  { item: "Tênis Converse All Star", qtn: 7, value: 349.9, hasStock: true },
  { item: "Camisa Atlético Madrid", qtn: 4, value: 649.9, hasStock: true },
  { item: "Camisa Borussia Dortmund", qtn: 5, value: 649.9, hasStock: true },
  { item: "Camisa Milan", qtn: 6, value: 649.9, hasStock: true },
  { item: "Camisa Roma", qtn: 3, value: 649.9, hasStock: true },
  { item: "Camisa Tottenham", qtn: 4, value: 649.9, hasStock: true },
  { item: "Camisa Napoli", qtn: 5, value: 649.9, hasStock: true },
  { item: "Kit Treino Infantil", qtn: 9, value: 299.9, hasStock: true },
  { item: "Jaqueta Impermeável", qtn: 4, value: 459.9, hasStock: true },
  { item: "Tênis Under Armour", qtn: 5, value: 699.9, hasStock: true },
];

const itemsHtml = data.map(products => `
  <tr>
    <td>${products.item}</td>
    <td>${products.qtn}</td>
    <td>${products.value.toFixed(2)}</td>
    <td>${products.hasStock ? "Em estoque" : "Sem Estoque"}</td>
  </tr>  
`)

const html = `
<html>
  <head>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
        }

        .header h1 {
            margin: 0;
            margin-top: 50px
        }

        .info {
            width: 90%;
            margin: 0 auto 30px auto;
            font-size: 14px;
        }

        .info-row {
            display:grid;
            justify-content: space-between;
            margin-bottom: 8px;
            margin-right: -35px;
        }

        table {
            width: 100%;
            margin: 0 auto;
            border-collapse: collapse;
            margin-top: 5px;
        }

        th, td {
            border: 1px solid #000;
            padding: 4px;
            text-align: center;
        }

        th {
            background-color: #ffffff;
        }

        .text-left {
          text-align: left;
        }

        .text-right {
          text-align: right;
        }

        .text-data {
            margin-top: 5px;
        }

        .separator-line {
            margin-top: 8px;
            height: 0.5px;
            width: 100%;
            background-color: #000;
        }

    </style>
  </head>

  <body>

    <div class="header">
      <h1>Relatorio Geral</h1>
    </div>

    <div class="info">

      <div class="info-row">
        <div class="text-data"><strong>Nome:</strong> User 1</div>
        <div class="text-data"><strong>Data:</strong> 26/02/2026 - 22:00 </div>
        <div class="text-data"><strong>Documento:</strong> Teste</div>
        <div class="text-data"><strong>Status:</strong> Ativo</div>
      </div>

    </div>


    <div class="separator-line"></div>

    <table>
      <thead>
        <tr>
          <th class="text-left">Item</th>
          <th>Quantidade</th>
          <th>Valor Unit.</th>
          <th>Estoque</th>
        </tr>
      </thead>
      <tbody>
        ${itemsHtml}
      </tbody>
    </table>

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
  }

});
