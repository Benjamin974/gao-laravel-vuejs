import Axios from "axios";

export default {
    props: {
        ordinateur: {
            default: function () {
                return {}
            },
        }
    },

    data() {
        return {
            attributions: [],
            horaires: [{ horaire: '8' }, { horaire: '9' }, { horaire: '10' }, { horaire: '11' }, { horaire: '12' }, { horaire: '13' }, { horaire: '14' }, { horaire: '15' },]

        }
    },

    created() {
        this.initialize();
        this.displayHoraire(this.attributions);
    },

    methods: {
        initialize() {
            this.ordinateur.client.forEach(attribution => {
                this.attributions.push({horaire: attribution.pivot.horaire, firstname:attribution.firstname})

            })

        },

        displayHoraire(attributions) {
            attributions.forEach(attribution => {
                for (let i = 0; i < this.horaires.length; i++) {
                    if (this.horaires[i].horaire == attribution.horaire) {
                        this.horaires[i] = attribution;

                    }
                }
            })


        }
    }
}