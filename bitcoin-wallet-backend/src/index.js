const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

const app = express();

// Configuração do CORS
app.use(cors());

// Configuração do bodyParser
app.use(bodyParser.json());

app.post('/generate-wallet', (req, res) => {
  try {
    const network = bitcoin.networks.testnet;
    const path = `m/49'/1'/0'/0`;

    let mnemonic = bip39.generateMnemonic();
    const seed = bip39.mnemonicToSeedSync(mnemonic);

    // Utilizando a função apropriada para a versão da biblioteca
    let root = bip32.fromSeed(seed); // Ajuste aqui se necessário
    
    let account = root.derivePath(path);
    let node = account.derive(0).derive(0);

    let btcAddress = bitcoin.payments.p2pkh({
      pubkey: node.publicKey,
      network: network,
    }).address;

    res.json({
      address: btcAddress,
      privateKey: node.toWIF(),
      seed: mnemonic,
    });
  } catch (error) {
    console.error('Error generating wallet:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
