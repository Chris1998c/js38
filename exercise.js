const isLogged = true;


const primaPromise = new Promise((resolve, reject) => {
  if (isLogged) {
    const numeroCasuale = Math.random();
    resolve(numeroCasuale);
  } else {
    reject("Utente non  loggato");
  }
});


const secondaPromise = (numeroCasuale) => {
  return new Promise((resolve, reject) => {
    if (numeroCasuale > 0.5) {
      resolve({ nome: "Christian", età: 24 });
    } else {
      reject("Il numero nonè valido ");
    }
  });
};

primaPromise
  .then((numeroCasuale) => {
    return secondaPromise(numeroCasuale);
  })
  .then((dati) => {
    console.log(dati);
  })
  .catch((errore) => {
    console.error(errore);
  });