<h1> npm vakinha </h1>
<p>Apenas um pacote feito para facilitar busca de dados no site https://www.vakinha.com.br/.</p>
<h3>modo de uso:</h3>

```js
const { info } = require('vakinha')

info('2721487')
  .then(result => console.log(result))
```
