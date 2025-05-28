import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
import AppButton from "./AppButton.js";

export default {
    components: {
        AssignmentList,
        AssignmentCreate,
        AppButton,
    },

    template: `
        <div class="p-3 flex gap-1">
            <app-button 
                @click="currentTag = tag"
                v-for="tag in tags"
                :type="tag === currentTag ? 'active' : 'primary'"
            >
                {{ tag == None ? 'uncategorized' : tag }}
            </app-button>
        </div>
        <assignment-list :assignments="filters.inProgress" title="In work"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Done" :finished="true"></assignment-list>
        <assignment-create @add="add"></assignment-create>
    `,

    data() {
        return {
            assignments: [
                { name: 'Finish project', completed: false, id: 1, tag: 'math' },
                { name: 'Read first chapter', completed: false, id: 2, tag: 'reading' },
                { name: 'Do Homework', completed: false, id: 3, tag: 'math' },
            ],
            currentTag: 'all',
        }
    },

    computed: {
        filteredAssignments() {
            if(this.currentTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        },

        filters() {
            return {
                inProgress: this.filteredAssignments.filter(assignment => ! assignment.completed),
                completed: this.filteredAssignments.filter(assignment => assignment.completed),
            }
        },

        tags() {
            return ['all', ... new Set(this.assignments.map(a => a.tag))];
        }
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1,
            });
        }
    }
}