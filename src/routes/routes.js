import Home from '../pages/home/home'
import IconLayer from '../pages/icon-layer/iconlayer'
import Loading from '../pages/loading/loading'
import ColorTransition from '../pages/color-transition/colortransition'

const routes = [
    {path: '/home', component: Home},
    {path: '/iconlayer', component: IconLayer},
    {path: '/loading', component: Loading},
    {path: '/transitioncontainer', component: ColorTransition },
]

export default routes