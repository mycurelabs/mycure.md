import { mount } from '@vue/test-utils';
import Money from '@/components/commons/Money.vue';

describe('Money', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Money);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
