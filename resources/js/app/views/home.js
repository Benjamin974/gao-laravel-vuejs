import Axios from "axios";
import Ordinateurs from '../components/dashboard-compos/Ordinateurs.vue';
import AddOrdi from '../components/dashboard-compos/AddOrdi.vue';
import DatePicker from '../components/dashboard-compos/DatePicker.vue';
export default {
    components: {
        Ordinateurs,
        AddOrdi,
        DatePicker

    },
    data() {
        return {
            nom: 'toto',
            ordinateurs: [],
            date: ''
        }
    },

    created() {
        this.getOrdinateurs();
    },

    methods: {
        getOrdinateurs() {
            Axios.get('api/ordinateurs').then(({ data }) => {
                data.data.forEach(ordinateur => {
                    this.ordinateurs.push(ordinateur)
                })
            })
        },

        add(ordi) {
            const index = _.findIndex(this.ordinateurs, { id: ordi.id });
            this.ordinateurs.push(ordi);
        },

        getDate(date) {
            this.date = date;
        }
    }
}