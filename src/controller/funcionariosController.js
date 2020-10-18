const funcionarios = require("../model/funcionarios.json");
const fs = require("fs")

const getAll = (req, res) => {
  console.log(req.url);
  res.status(200).send(funcionarios);
};

const getById = (req, res) => {
  const id = req.params.id;

  res.status(200).send(funcionarios.find((funcionario) => funcionario.id == id));
};

const postFuncionarios = (req, res) => {
  console.log(req.body);
  const { id, nomeFuncionario, idade, dataNascimento, cargo} = req.body;
  funcionarios.push({id, nomeFuncionario, idade, dataNascimento,cargo});
  
  fs.writeFile("./src/model/funcionarios.json", JSON.stringify(funcionarios), 'utf8',function(err) {
    if (err) {
      return res.status(424).send({ message: err});
    }
    console.log("Arquivo atualizado com sucesso!");
  });

  res.status(201).send(funcionarios)
}

const deleteFuncionarios = (req, res) => {
  const id = req.params.id;
  const funcionarioFiltrado = funcionarios.find((funcionario) => funcionario.id == id);
  const index = funcionarios.indexOf(funcionarioFiltrado);

  funcionarios.splice(index,1);

  fs.writeFile("./src/model/funcionarios.json", JSON.stringify(funcionarios), 'utf8', function(err){
    if(err) {
      return res.status(424).send({message: err});
    }
    console.log(index)
    console.log("Arquivo atualizado com sucesso!")
  });

  res.status(200).send(funcionarios);
  // send({index:})
}

const putFuncionarios = (req, res) => {
  const id = req.params.id;
  try {
    const funcionarioAserModificado = tarefas.find((funcionario) => funcionario.id == id);
  console.log(funcionarioAserModificado);
  const funcionarioAtualizado = req.body;
  console.log(funcionarioAtualizado);

  //Index
  const index = funcionarios.indexOf(funcionarioAserModificado);
  console.log(index);

  //Buscando no array o endereço, excluindo o registro antigo e substituindo pelo novo
  funcionarios.splice(index, 1, funcionarioAtualizado)
  console.log(funcionarios);

  fs.writeFile("./src/models/funcionarios.json", JSON.stringify(funcionarios), 'utf8', function (err) {
    if (err) {
      return res.status(424).send( { message: err});
    }
    console.log("Arquivo Atualizado com Sucesso!");
  })

  res.status(200).send(funcionarios);
} catch (err) {
  return res.status(424).send({ message: err})

}
}
const patchFuncionarios =(req, res) => {
  const id = req.params.id;
  const atualizacao = req.body;
  console.log(atualizacao)
  try {
    const funcionarioAserModificado =  funcionarios.find((funcionario) => funcionario.id == id);
    console.log(Object.keys(funcionarioAserModificado))

    Object.keys(atualizacao).forEach((chave) => {
      funcionarioAserModificado[chave] = atualizacao[chave]
    });

    fs.writeFile("./src/models/funcionarios.json", JSON.stringify(funcionarios), 'utf8', function (err) {
      if(err) {
        return res.status(424).send({ message: err});
      }
      console.log("Arquivo atualizado com sucesso!")
    });

    return res.status(200).send(funcionarios);
  } catch (err) {
    return res.status(424).send({ message: err});
  }

}
  
module.exports = {
    getAll,
    getById,
    postFuncionarios,
    deleteFuncionarios,
    putFuncionarios,
    patchFuncionarios
};