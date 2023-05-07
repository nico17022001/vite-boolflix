import {reactive} from 'vue'

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=c59f31103c6297db76e2008f8333dfa4&language=it-IT',
  apiUrlSerie: 'https://api.themoviedb.org/3/search/tv?api_key=c59f31103c6297db76e2008f8333dfa4&language=it-IT',
  arrayFilm:[],
  arraySerie:[],
  titolo: ""
})