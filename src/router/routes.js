import Billboard from '../pages/Billboard/Billboard.vue'
import Cinema from '../pages/Cinema/Cinema.vue'
import Hotspot from '../pages/Hotspot/Hotspot.vue'
import Msite from '../pages/msite/Msite.vue'
import Perform from '../pages/Perform/Perform.vue'
import Movies from '../pages/Movies/Movie.vue'
import Market from '../pages/Market/Market.vue'
import Detail from '../pages/Detail/Detail.vue'
import Query from '../pages/Query/Query.vue'
import MarketDetail from "../pages/MarketDetail/MarketDetail.vue"
import Profile from "../pages/Profile/Profile.vue"
import Login from '../pages/Login/Login.vue'
//引入hothome
import HotHome from '../pages/HotHome/HotHome.vue'
//引入hotmusic
import HotMusic from '../pages/HotMusic/HotMusic.vue'
//引入Newinformation
import NewInformation from '../pages/NewInformation/NewInformation.vue'
//引入trailer
import Trailer from '../pages/Trailer/Trailer.vue'
//引入picture
import Picture from '../pages/Picture/Picture.vue'
import Shopcat from '../pages/Shopcat/Shopcat.vue'
import Ticket from '../pages/Ticket/Ticket.vue'

export default [
  {
    path: '/login',
    component: Login

  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: '/perform',
    component: Perform

  },
  {
    path: '/detail',
    component: Detail,
    children:[
      {
        path:'/detail/ticket',
        component:Ticket
      }
    ]

  },

  {
    path: '/movies',
    component: Movies
  },

  {
    path: '/billboard',
    component: Billboard
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/hotspot',
    component: Hotspot,
    children:[
      {
        path:'/hotspot/hothome',
        component:HotHome
      },
      {
        path:'/hotspot/hotmusic',
        component:HotMusic
      },
      {
        path:'/hotspot/newinformation',
        component: NewInformation
      },
      {
        path:'/hotspot/trailer',
        component:Trailer
      },
      {
        path:'/hotspot/picture',
        component:Picture
      },
      { // 自动重定向路由
        path: '/hotspot',
        redirect: '/hotspot/hothome'
      }
    ]
  },
  {
    path: '/market',
    component: Market,
    children: [
      {
        path: '/market/marketdetail',
        component: MarketDetail

      }
    ]
  },
  {
    path: '/query',
    component: Query
  },
  {
    path: '/msite',
    component: Msite
  },
  {
    path: '/',
    redirect: '/msite'
  }


]