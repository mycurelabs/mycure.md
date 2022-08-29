import Vue from 'vue';
import Vuetify from 'vuetify';
import { createLocalVue, mount } from '@vue/test-utils';
import Account from '../account';

describe('Account', () => {
  Vue.use(Vuetify);

  describe('props', () => {
    it('should render with account page', () => {
      const localVue = createLocalVue();
      const wrapper = mount(Account, {
        localVue,
      });
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
