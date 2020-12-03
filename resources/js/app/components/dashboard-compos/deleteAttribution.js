import Axios from "axios"
import { apiService } from "../../_services/apiService"

export default {
    props: {
        attribution: {
            default: function () {
                return {}
            }
        },

        horaire: {
            default: function () {
                return {}
            }
        }
    },
    data() {
        return {
            dialog: false,
        }
    },
    methods: {
        deletePoste() {
            apiService.post('api/attributions/delete/' + this.attribution.id).then(response => {
                this.$emit('deleteAttribution', this.horaire)
            })
        }
    },
}