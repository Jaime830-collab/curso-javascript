class Carrinho {
    constructor(produtos, qtd, valorTotal) {
        this.produtos = produtos;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }

    addItem(item) {

        let contador = 0;

        for (let itemCarrinho in this.produtos) {
            if (this.produtos[itemCarrinho].id == item.id) {
                this.produtos[itemCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }

        if (contador == 0) {
            this.produtos.push(item);
        }

        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd;

    }

    removeItem(item) {

        for (let itemCarrinho in this.produtos) {
            if (this.produtos[itemCarrinho].id == item.id) {

                let objeto = this.produtos[itemCarrinho];
                let index = this.produtos.findIndex(function (objeto) {
                    return objeto.id == item.id
                });

                this.qtd -= this.produtos[itemCarrinho].qtd;
                this.valorTotal -= this.produtos[itemCarrinho].preco * this.produtos[itemCarrinho].qtd;

                this.produtos.splice(index, 1);

            }
        }
    }

}

let carrinho = new Carrinho([
    {
        id: 1,
        nome: "Camisa",
        qtd: 1,
        preco: 20
    },
    {
        id: 2,
        nome: "Calça",
        qtd: 2,
        preco: 50
    }
], 3, 120);

console.log(carrinho);





carrinho.addItem({id: 1, nome: "Camisa", qtd: 2, preco: 20});

console.log(carrinho);



carrinho.addItem({id: 3, nome: "Boné", qtd: 1, preco: 15});

console.log(carrinho);




carrinho.removeItem({id: 1, nome: "Camisa", qtd: 1, preco: 20});

console.log(carrinho);

