import TodoItem from '@/components/TodoItem'
import {shallow} from 'vue-test-utils'
//eslint 默认开启无用表达式检测避免eslint出错提示
/*eslint no-unused-expressions: [0]*/
const clickHandler = sinon.stub();
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

	it('should trigger event invoke correct', () => {
		var text = 'bar';
		var index = 0;
		const wrapper = shallow(TodoItem, {
			propsData: {
				data: text,
				idx: index
			}
		})
		wrapper.find('.item-op').trigger('click');
		//wrapper.emitted().delItem : [[0]]
		expect(wrapper.emitted().delItem.length).to.equal(1);
		expect(wrapper.emitted().delItem).to.deep.equal([[0]]);
		expect(wrapper.emitted().delItem[0]).to.deep.equal([index]);

	})

})
