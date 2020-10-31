import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import MuuriGrid from './components/MuuriGrid.vue'
import ItemLink from './components/items/ItemLink.vue'
import ItemSm from './components/items/ItemSm.vue'
import ItemMd from './components/items/ItemMd.vue'
import ItemLg from './components/items/ItemLg.vue'

export {
    MuuriGrid,
    ItemLink,
    ItemSm,
    ItemMd,
    ItemLg,
}

createApp(App).use(router).mount('#app')
