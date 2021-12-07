class CardapioService {

    url = 'http://localhost:3000/cardapio';

    getCardapio(id) {
        fetch(`http://${this.url}/cardapio/${id}`);
    }

}