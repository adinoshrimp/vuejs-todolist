export default {
    template: `
        <button
            :class="{
                'cursor-pointer active:scale-95 px-3 py-1 rounded-full transition-transform duration-40 disabled:bg-slate-300 disabled:active:bg-slate-400 disabled:cursor-default disabled:scale-100': true,
                'bg-blue-300 hover:bg-blue-400': type === 'primary',
                'bg-purple-300 hover:bg-purple-400': type === 'secondary',
                'bg-blue-600 hover:bg-blue-500 text-white': type === 'active',
            }"
            :disabled="processing"
        >
            <slot />
        </button>
    `,

    props: {
        type: {
            type: String,
            default: 'primary',
        },

        processing: {
            type: Boolean,
            default: false
        }
    },
}