// backend.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

// Middleware para permitir CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Rota POST para /fecharpedido
app.post('/fecharpedido', async (req, res) => {
    const { id_estabelecimento, forma_de_pagamento, total, itens } = req.body;

    if (!itens || itens.length === 0) {
        return res.status(400).json({ message: 'Não há itens no pedido.' });
    }

    try {
        // Lógica para criar o pedido (exemplo fictício)
        const pedido = {
            id_estabelecimento,
            forma_de_pagamento,
            total,
            itens,
        };

        // Suponha que você tenha um modelo ou lógica para salvar no banco de dados
        // Vamos apenas simular uma resposta aqui:
        res.status(200).json({
            message: 'Pedido realizado com sucesso!',
            pedido,
        });
    } catch (error) {
        console.error('Erro ao processar o pedido:', error);
        res.status(500).json({ message: 'Erro ao processar o pedido' });
    }
});

// Exportando a aplicação para ser usada em outro arquivo
module.exports = app;
