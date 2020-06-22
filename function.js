//Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias
//Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];


  function checaSeUsuarioUsaCSS (usuario) {
    for ( let tecnologia of usuario.tecnologias) {
      const encontreiTecnologiaCSS = tecnologia === 'CSS'
      if (encontreiTecnologiaCSS) return true;
    }

    return false;
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  }
}
