const carrinho = [
    '{ "nome": "borracha", "preco": 3.45}',
    '{ "nome": "caderno", "preco": 13.40}',
    '{ "nome": "borracha", "preco": 3.45}',
    '{ "nome": "caderno", "preco": 13.40}'
]

const parseJson = json => JSON.parse(json)
const preco = o => o.preco

const resultado = carrinho.map(parseJson).map(preco)

console.log(resultado)