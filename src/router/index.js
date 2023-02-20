import { createRouter, createWebHistory } from "vue-router"
import QuizzesView from "../Views/QuizzesView.vue"
import QuizView from "../Views/QuizView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.BASE_URL),
    routes: [
        {
            path:"/",
            name:'quizzes',
            component: QuizzesView
            
        },
        {
            path:"/quiz/:id",
            name:'quiz',
            component: QuizView
            
        }
    ]
})

export default router