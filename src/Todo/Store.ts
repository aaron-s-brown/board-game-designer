import { Writable, writable } from "svelte/store";

// todo: hook this writable/store up to a websocket
const defeaultTodo: Todo = {
    text: "Hook me up to websocket",
    done: false,
};

export const todos: Writable<Todo[]> = writable([defeaultTodo]);
