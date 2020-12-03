import Axios from "axios"
import { EventBus } from '../../eventBus';
import { apiService } from "../../_services/apiService";
export default {

    props: {
        ordinateur: {
            default: function () {
                return {}
            }
        },
    },

    data() {
        return {
            dialog: false,
        }
    },

    methods: {
        deleteOrdinateur(item) {
            apiService.post('api/ordinateur/delete/' + this.ordinateur.id).then(data => {
                EventBus.$emit('deleteOrdi', item)
            })
        }
    },
}