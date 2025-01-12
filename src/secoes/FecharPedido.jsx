import styles from './FecharPedido.module.css'

function FecharPedido() {

    // Vai buscar o carrinho
    const concluirPedido = async () => {
      


        
        const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || [];
    
        if (carrinhoAtual.length === 0) {
            alert("Seu carrinho está vazio. Atenda uma mesa e adicione itens no carrinho!");
            return;
        }
    
        // Calcula o total do pedido
        const totalPedido = carrinhoAtual.reduce((total, item) => total + (item.total_item || 50.20), 0);
    
        const pedido = {
            id_estabelecimento: localStorage.getItem("estabelecimento_id"),
            forma_de_pagamento: 'Cartão',
            total: totalPedido,
            itens: carrinhoAtual.map(item => ({
                id_estabelecimento: localStorage.getItem("estabelecimento_id"),
                id_produto: item.id_item,
                quantidade: item.quantidade || 1,
                total_item: item.total_item || 50.20
            }))
        };
    
        try {
            const response = await fetch('http://localhost:5001/fecharpedido', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pedido),
            });
    
            const textResponse = await response.text();
            console.log('Resposta do servidor:', textResponse);
    
            if (response.ok) {
                const result = JSON.parse(textResponse);
                alert('Pedido realizado com sucesso!');
                localStorage.removeItem('carrinho');
                window.location.href = '/confirmacao-pedido';
            } else {
                alert(`Erro ao realizar o pedido: ${textResponse}`);
            }
        } catch (error) {
            console.error('Erro ao enviar o pedido:', error);
            alert('Ocorreu um erro ao tentar realizar o pedido. Tente novamente.');
        }
    };
    

    return (
        <div className="fechar-pedido-container">
            <button 
                className={styles.fechar_pedido_btn} 
                onClick={concluirPedido} // Adiciona o evento de clique
            >
                Fechar Pedido
            </button>
        </div>
    );
}

export default FecharPedido;
