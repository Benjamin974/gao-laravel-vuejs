import Axios from "axios";
import { apiService } from "../../_services/apiService";

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
      apiService.post('api/ordinateur/add', {name: this.name, date: this.date}).then(({data}) => {
        this.$emit('addOrdi', data.data)
        this.dialog = false;
      })
    }
  }
}