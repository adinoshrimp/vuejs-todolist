import AppButton from "./AppButton.js";

export default {
    components: {
        AppButton,
    },

    template: `
        <form class="relative">
            <input type="text" placeholder="Add a todo..." :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="w-full py-3 px-5 outline-0 placeholder-slate-400 hover:placeholder-slate-700 focus:placeholder-slate-700 focus:bg-blue-200 font-semibold" >
            <app-button class="absolute top-2 right-2" :processing="isInputEmpty">Add</app-button>
        </form>
    `,

    props: ['modelValue'],
    emits: ['update:modelValue'],

    computed: {
        isInputEmpty() {
            return this.modelValue.trim() === '';
        }
    }
}