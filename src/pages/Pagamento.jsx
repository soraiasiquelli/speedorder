import React, { useState } from 'react';
import styles from './Pagamento.module.css'

function Pagamento() {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [checkoutLink, setCheckoutLink] = useState('');

    const handlePayment = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: parseInt(amount) * 100, description }),
            });

            const data = await response.json();

            if (response.ok) {
                setCheckoutLink(data.checkoutLink);
                alert('Pedido criado com sucesso! Prossiga para o pagamento.');
            } else {
                alert(`Erro: ${data.message}`);
            }
        } catch (error) {
            console.error('Erro ao processar o pagamento:', error);
            alert('Erro ao processar o pagamento.');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'Arial' }}>
            <h1>Pagamento</h1>
            <form onSubmit={handlePayment}>
                <input
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ display: 'block', margin: '10px 0', padding: '10px', width: '100%' }}
                />
                <input
                    type="number"
                    placeholder="Valor (R$)"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    style={{ display: 'block', margin: '10px 0', padding: '10px', width: '100%' }}
                />
                <button type="submit" style={{ padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}>
                    Pagar
                </button>
            </form>
            {checkoutLink && (
                <div style={{ marginTop: '20px' }}>
                    <p>Prossiga para o pagamento:</p>
                    <a href={checkoutLink} target="_blank" rel="noopener noreferrer">
                        Ir para o PagSeguro
                    </a>
                </div>
            )}
        </div>
    );
}

export default Pagamento;
