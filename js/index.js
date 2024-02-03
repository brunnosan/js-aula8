const cepRegex = /[0-9]{8}/;

cep.onkeyup = () => {
  if (cepRegex.test(cep.value.replace('-','').replace('.',''))) {
    try {
      fetch(`https://viacep.com.br/ws/${cep.value.replace('-','').replace('.','')}/json/`)
      .then(response => response.json())
      .then(response => {
        if(response.erro) {
          alert('Cep incorreto');
          cep.value = '';
          return;
        }
        logradouro.value = response.logradouro;
        bairro.value = response.bairro;
        localidade.value = response.localidade;
        uf.value = response.uf;
        console.log(response);
      })
    } catch (error) {
      console.log(`Deu erro ${cep.value}`);
      console.log(error.message);
    }
  }
}