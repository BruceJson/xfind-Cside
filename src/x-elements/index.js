import XButton from './components/button';
import Flexbox from './components/flexbox';
import {
    Tab,
    TabItem
} from './components/tab';
import XLink from './components/link';
import IdentifyCode from './components/identify';
import {
    XSteps,
    XStep
} from './components/steps';
import XAddress from './components/address';

var comps = {
    XButton,
    Flexbox,
    FlexItem: Flexbox.flexItem,
    Tab,
    TabItem,
    XLink,
    IdentifyCode,
    XSteps,
    XStep,
    XAddress
};

const install = function (Vue, opts = {}) {
    if (install.installed) return;

    Object.keys(comps).forEach(key => {
        Vue.component(key, comps[key]);
    });
}

const API = {
    install
};

export default API;
