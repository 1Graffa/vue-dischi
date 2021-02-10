var app = new Vue({
  el: '#app',
  data: {
    dischi: [],
    generi: ["All"],
    genereSelect: "All"
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
       // console.log(result);
        // in dischi mettiamo tutto il contenuto del richiamo
        this.dischi = result.data.response;
        // console.log(this.dischi);

        this.dischi.forEach((element,i) => {
          // console.log(element);
          if(!this.generi.includes(element.genre)){
            this.generi.push(element.genre);
          }
        });
      })
      // messaggio di errore
      .catch(error => console.log('errore'));
  },
});
