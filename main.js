var app = new Vue({
  el: '#app',
  data: {
    tipi: ["All"],
    dischi: []
  },
  //PROMEMORIA
  // author: (...)
  // genre: (...)
  // poster: (...)
  // title: (...)
  // year: (...)
  mounted(){
    axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((result) => {
        console.log(result);
        // in dischi mettiamo tutto il contenuto del richiamo
        this.dischi = result.data.response;
        console.log(this.dischi);
      })
      .catch(error => console.log('errore'));
  }
});
