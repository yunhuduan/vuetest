import TodoList from '@/components/TodoList'
import TodoItem from '@/components/TodoItem'
import {mount} from 'vue-test-utils'

//eslint 默认开启无用表达式检测避免eslint出错提示
/*eslint no-unused-expressions: [0]*/

describe('TodoList.vue', () => {
	it('should render correct contents', () => {
		var items = ['Apple', 'Banana', 'Orange']
		const wrapper = mount(TodoList, {
			propsData: {
				items: items
			}
		});
		expect(wrapper.findAll('.todo-item').length).to.equal(items.length)
		expect(wrapper.contains(TodoItem)).to.be.true;
	})
	it('should render correct with empty items contents', () => {
		var items = []
		const wrapper = mount(TodoList, {
			propsData: {
				items: items
			}
		});
		expect(wrapper.findAll('.todo-item').length).to.equal(items.length);
		expect(wrapper.contains(TodoItem)).to.be.false;
		expect(wrapper.findAll('.no-data').length).to.equal(1)
	})
})
