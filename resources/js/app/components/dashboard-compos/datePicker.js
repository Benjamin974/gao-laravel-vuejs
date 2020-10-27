export default {
    props: {
        ordinateur: {
            default: function () {
                return {}
            }
        }
    },

    data() {
        return {
            date: new Date().toISOString().substr(0, 10),
            dateDay: new Date(),
            dateFormat: '',
            modal: false,
            menu: false,
        }
    },

    created() {
        this.getDate();
    },

    methods: {
        getDate() {
            this.dateFormat = this.dateDay.getFullYear() + "-" + (this.dateDay.getMonth() + 1) + "-" + this.dateDay.getDate();
        },

        addDate(date) {
            this.$emit('addDate', date);
        }
    }
}