import Vue from 'vue'
import TodoItem from '@/components/TodoItem'
import {mount} from 'vue-test-utils'

describe('TodoItem.vue', () => {
	it('should render correct contents', () => {
		var text = 'bar';
		var index = 0;
		const wrapper = mount(TodoItem, {
			propsData: {
				data: text,
				idx: index
			}
		})
		expect(wrapper.find('.index-class').text()).to.equal(index + '')
		expect(wrapper.find('.item-ctx').text()).to.equal(text)
	})
})
