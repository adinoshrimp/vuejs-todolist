export default {
    template: `
        <label :class="{
            'px-4 py-3 cursor-pointer w-full flex items-center items-center': true,
            'bg-green-100 hover:bg-green-200 active:bg-green-300': finished,
            'hover:bg-blue-200 active:bg-blue-300': !finished,
        }">
            <input type="checkbox" v-model="assignment.completed" class="me-2">
            <span class="select-none">{{ assignment.name }}</span>
        </label>
    `,

    props: {
        assignment: Object,
        finished: {
            type: Boolean,
            default: false
        },
    }
}