import AppForm from "./AppForm.js";

export default {
    components: {
        AppForm,
    },

    template: `
        <app-form @submit.prevent="add" v-model="newAssignment" placeholder="Add a todo..."></app-form>
    `,

    data() {
        return {
            newAssignment: '',
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        }
    },
}