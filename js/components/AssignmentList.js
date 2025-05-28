import Assignment from './Assignment.js';

export default {
    components: { Assignment },

    template: `
        <ul v-show="assignments.length">
            <p class="py-2 px-4 font-bold">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </p>
            <li v-for="assignment in assignments" class="flex flex-col items-center justify-center w-full" :key="assignment.id">
                <assignment :assignment="assignment" :finished="finished"></assignment>
            </li>
        </ul>
    `,

    props: {
        assignments: Array,
        title: String,
        finished: {
            type: Boolean,
            default: false,
        },
    }
}