import App from './App.vue';
import PageOne from './PageOne.vue';
import PageTwo from './PageTwo.vue';
import Time from './Time.vue';
import Relax from './Relax.vue';
import Final from './Final.vue';

const routes = [
  {
    path: '/',
    component: PageOne
  },
  {
    path: '/page-two',
    component: PageTwo
  },
  {
    path: '/time',
    component: Time
  },
  {
    path: '/relax',
    component: Relax
  },
  {
    path: '/final',
    component: Final
  }
]

export default routes;