import Home from '../pages/home/home'
import IconLayer from '../pages/icon-layer/iconlayer'
import Loading from '../pages/loading/loading'
import ColorTransition from '../pages/color-transition/colortransition'
import PageButtonCreative from '../pages/button-creative/pageButtonCreative'

const routes = [
    {path: '/home', component: Home},
    {path: '/iconlayer', component: IconLayer},
    {path: '/loading', component: Loading},
    {path: '/transitioncontainer', component: ColorTransition },
    {path: '/pagebuttoncreative', component: PageButtonCreative},
]

export default routes