import Vue from 'vue'
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Password from "primevue/password";
import InputText from "primevue/inputtext";
import ProgressBar from 'primevue/progressbar';
import SelectButton from 'primevue/selectbutton';
import Message from 'primevue/message';
import Aura from '@primevue/themes/aura';


Vue.use(PrimeVue, {
    ripple: true,
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            // darkModeSelector: '.my-app-dark',
            cssLayer: false
        }
    }
});
Vue.component('Button', Button);
Vue.component('Password', Password);
Vue.component('InputText', InputText);
Vue.component('ProgressBar', ProgressBar);
Vue.component('SelectButton', SelectButton);
Vue.component('Message', Message);