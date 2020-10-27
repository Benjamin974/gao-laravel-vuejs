import Axios from "axios";

export default {

  data() {
    return {
      dialog: false,
      lazy: false,
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Un nom est requis',
        v => (v && v.length <= 25) || 'Le nom ne doit pas être supérieure à 25 Caractères',
      ],
    } 
  },

  methods: {
    addOrdinateur() {
      Axios.post('api/ordinateur', {name: this.name, date: this.date}).then(({data}) => {
        this.$emit('addOrdi', data.data)
        this.dialog = false;
      })
    }
  }
}