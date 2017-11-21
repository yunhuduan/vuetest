import TodoItem from '@/components/TodoItem'
import {shallow} from 'vue-test-utils'
//eslint 默认开启无用表达式检测避免eslint出错提示
/*eslint no-unused-expressions: [0]*/
describe('TodoItem.vue', () => {
	it('should render correct contents', () => {
		var text = 'bar';
		var index = 0;
		const wrapper = shallow(TodoItem, {
			propsData: {
				data: text,
				idx: index
			}
		})
		expect(wrapper.find('.index-class').text()).to.equal(index + '')
		expect(wrapper.find('.item-ctx').text()).to.equal(text)
	})
})
