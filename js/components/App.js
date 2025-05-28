import AppButton from "./AppButton.js";
import AssignmentList from "./AssignmentList.js";
import Assignments from "./Assignments.js";
import AppForm from "./AppForm.js";
import Assignment from './assignment.js';
import AssignmentCreate from './AssignmentCreate.js';

export default {
    components: {
        'app-button': AppButton,
        'app-form': AppForm,
        'assignments-list': AssignmentList,
        'assignments': Assignments,
        'assignment': Assignment,
        'assignment-create': AssignmentCreate,
    },

    template: `
        <div class="fixed top-0 left-0 flex w-screen p-4 justify-end">
            <app-button type="secondary">Share</app-button>
        </div>
        <div class="flex flex-col items-center justify-center h-screen">
            <h2 class="text-5xl font-bold mb-10 text-slate-700">Assignments</h2>
            <div class="flex flex-col bg-blue-100 rounded-xl overflow-hidden w-150 shadow-xl m-10 overflow-y-auto ">
                <assignments></assignments>
            </div>
        </div>
    `,
};