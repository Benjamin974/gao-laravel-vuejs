import Ordinateurs from '../components/dashboard-compos/Ordinateurs.vue';
import AddOrdi from '../components/dashboard-compos/AddOrdi.vue';
import DatePicker from '../components/dashboard-compos/DatePicker.vue';
import { EventBus } from "../eventBus";
import { apiService } from "../_services/apiService";
export default {
    components: {
        Ordinateurs,
        AddOrdi,
        DatePicker

    },
    data() {
        return {
            ordinateurs: [],
            date: new Date().toISOString().substr(0, 10),
            pagination: {
                page: 1,
                visible: 10,
                pageCount: 0,
            },
        }
    },

    methods: {

        selectDate(date) {
            this.ordinateurs = [];
            this.requete(1);
            this.date = date;

            EventBus.$on('deleteOrdi', (data) => {
                const index = this.ordinateurs.indexOf(data);
                this.ordinateurs.splice(index, 1)
            })
        },

        add(ordi) {
            const index = _.findIndex(this.ordinateurs, { id: ordi.id });
            this.ordinateurs.push(ordi);
        },

        requete(page) {
            this.ordinateurs = []
            apiService.post('api/ordinateur/get', { date: this.date, page: page }).then(({ data }) => {
                data.data.forEach(ordinateur => {
                    this.ordinateurs.push(ordinateur)
                });
                this.pagination.pageCount = data.meta.last_page
            })
        },

    }
}