import Home from '../pages/home/home'
import PageIconLayer from '../pages/icon-layer/pageiconlayer'
import PageLoading from '../pages/loading/pageloading'
import PageColorTransition from '../pages/color-transition/pagecolortransition'
import PagePageButtonCreative from '../pages/button-creative/pageButtonCreative'

const routes = [
    {path: '/home', component: Home},
    {path: '/iconlayer', component: PageIconLayer},
    {path: '/loading', component: PageLoading},
    {path: '/transitioncontainer', component: PageColorTransition },
    {path: '/pagebuttoncreative', component: PagePageButtonCreative},
]

export default routes