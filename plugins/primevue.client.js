import Vue from 'vue'
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Password from "primevue/password";
import InputText from "primevue/inputtext";
import ProgressBar from 'primevue/progressbar';
import SelectButton from 'primevue/selectbutton';


Vue.use(PrimeVue, { ripple: true });
Vue.component('Button', Button);
Vue.component('Password', Password);
Vue.component('InputText', InputText);
Vue.component('ProgressBar', ProgressBar);
Vue.component('SelectButton', SelectButton);