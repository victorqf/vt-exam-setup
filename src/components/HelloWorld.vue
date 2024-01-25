<template>
    <div class="hello">
        <b-row>
            <b-col cols="12" class="text-center">
                <h1>{{ msg }}</h1>
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="4"></b-col>
            <b-col cols="4">
                <p>
                    The goal of this task is to develop a simple application that will allow users to setup new tasks in a to-do list. The use must be able to add new tasks to their list, complete and delete them.
                </p>
                <p>
                    The application should be developed using Parse Platform as a back-end API. There is already an instance of the API setup, running and integrated into this project via the main.js. Everything is ready to for you to use, with the following parameters:
                </p>
                <b-list-group class="mb-4">
                    <b-list-group-item>
                        <strong>Host:</strong> <pre class="mb-0">https://exam.cineself.com/parse</pre>
                    </b-list-group-item>
                    <b-list-group-item>
                        <strong>App ID:</strong> <pre class="mb-0">exam_core</pre>
                    </b-list-group-item>
                    <b-list-group-item>
                        <strong>App Secret (Master key):</strong> <pre class="mb-0">XWuxVsY190gG</pre>
                    </b-list-group-item>
                    <b-list-group-item>
                        <strong>Relevant object class:</strong> <pre class="mb-0">ToDos</pre>
                    </b-list-group-item>
                </b-list-group>

                <p>A sample query that fetches the existing todos is already included in the methods of this component. Besides the default object properties like ID, createdAt, modifiedAt, the following item properties are available:</p>
                <b-list-group horizontal="md" class="justify-content-center">
                    <b-list-group-item>title<br/><small class="text-muted font-small-2">(String)</small></b-list-group-item>
                    <b-list-group-item>done<br/><small class="text-muted font-small-2">(Boolean)</small></b-list-group-item>
                    <b-list-group-item>completedOn<br/><small class="text-muted font-small-2">(Date)</small></b-list-group-item>
                </b-list-group>


                <h3 class="py-4"><font-awesome-icon :icon="['fas', 'clock']"/>  Expected delivery</h3>
                <p>The material expected to be delivered for this task is a github repo link, that you will send back via e-mail. The repo has to be setup in a way that the examiner can clone and then simply run <pre class="d-inline font-italic">npm install</pre> and <pre class="d-inline font-italic">npm run serve</pre> to launch the application.</p>
                <p>The due date is specified in the e-mail with which you received this repo. The task is considered completed when the following functionality works: </p>
                <b-list-group class="text-left">
                    <b-list-group-item class="d-flex"><font-awesome-icon :icon="['fas', 'check']" class="text-success"/> <span class="text-left">There is a list of ToDo items in a neatly formatted layout, one item per line with a button or a checkbox to mark the item as completed.</span></b-list-group-item>
                    <b-list-group-item class="d-flex"><font-awesome-icon :icon="['fas', 'check']" class="text-success"/> <span class="text-left">There is a button "Add task" which when clicked allows the user to add an item to the list</span></b-list-group-item>
                    <b-list-group-item class="d-flex"><font-awesome-icon :icon="['fas', 'check']" class="text-success"/> <span class="text-left">There is a button for each item "Delete task" which when clicked removes the item from the list</span></b-list-group-item>
                    <b-list-group-item class="d-flex"><font-awesome-icon :icon="['fas', 'check']" class="text-success"/> <span class="text-left">Completing, adding and deleting an item saves the data in the parse core listed above via API requests, such that when the screen is refreshed the data is not reset.</span></b-list-group-item>
                </b-list-group>

                <h3 class="py-4"><font-awesome-icon :icon="['fas', 'link']"/> Essential Links</h3>
                <ul>
                    <li><a href="https://docs.parseplatform.org/js/guide/" target="_blank" rel="noopener">Parse JS Guide</a></li>
                    <li><a href="https://v2.vuejs.org/v2/guide/" target="_blank" rel="noopener">Vue2 Guide</a></li>
                    <li><a href="https://bootstrap-vue.org/docs/components" target="_blank" rel="noopener">Bootstrap Vue components</a></li>
                </ul>
            </b-col>
        </b-row>

        <b-row class="py-4">
            <b-col cols="4"></b-col>
            <b-col cols="4">
                <h4 class="text-success">Happy coding! <font-awesome-icon :icon="['fas', 'smile' ]"/></h4>
            </b-col>
        </b-row>

    </div>
</template>

<script>
import Parse from 'parse';
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data(){
        return {
            tasks: [],
            newTask: '',
            error: ''
        }
    },
    created(){
        this.fetchTasks();
    },
    methods: {
        fetchTasks(){
            const query = new Parse.Query('ToDos');
            query.find().then((results) => {
                console.log("Tasks are: ", results)
                this.tasks = results;
            }, (error) => {
                this.error = error.message;
            });
        },
    }
}
</script>

<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
