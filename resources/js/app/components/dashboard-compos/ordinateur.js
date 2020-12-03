import AddAttribution from './AddAttribution.vue'
import DeleteOrdinateur from './DeleteOrdinateur.vue'
import DeleteAttribution from './DeleteAttribution.vue';
export default {
    components: {
        AddAttribution,
        DeleteOrdinateur,
        DeleteAttribution
    },

    props: {
        ordinateur: {
            default: function () {
                return {}
            },
        },
        date: {
            default: function () {
                return {}
            },
        }
    },

    watch: {
        ordinateur: function () {
            this.initialize();
        }
    },

    data() {
        return {
            attributions: {},
            horaires: []
        }
    },

    created() {
        this.initialize();
    },

    methods: {
        initialize() {
            this.ordinateur.attributions.forEach(attributions => {
                this.attributions[attributions.horaire] = {
                    id: attributions.id,
                    nom: attributions.client.name,
                    prenom: attributions.client.firstname
                }
            })
            this.displayHoraire();
        },

        displayHoraire() {
            this.horaires = [];
            for (let i = 0; i < 10; i++) {
                this.horaires.push({
                    index: i + 8,
                    attribution: (typeof this.attributions[i + 8] !== 'undefined') ? this.attributions[i + 8] : false
                })
            }
        },

        update(attribution) {
            this.ordinateur.attributions.push(attribution)
            this.initialize();
        },

        deleteAttribution(horaire) {

            _.unset(this.attributions, horaire)
            this.displayHoraire();
        },
    }
}