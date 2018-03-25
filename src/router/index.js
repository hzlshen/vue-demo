import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList.vue'
import Title from '@/views/Title.vue'
import Image from '@/views/image.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/goods',
        name: 'GoodsList',
        component: GoodsList,
        children: [{
                name: 'title',
                path: 'title',
                component: Title
            },
            {
                name: 'image',
                path: 'image',
                component: Image
            }
        ]
    }]
})