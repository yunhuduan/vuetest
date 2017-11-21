import TodoList from '@/components/TodoList'
import Todo from '@/components/Todo'
import {mount} from 'vue-test-utils'

//eslint 默认开启无用表达式检测避免eslint出错提示
/*eslint no-unused-expressions: [0]*/

describe('Todo.vue', () => {
	it('should render correct contents', () => {
		var items = ['Apple', 'Banana', 'Orange']
		const wrapper = mount(Todo);
		wrapper.setData({itemList: items})

		expect(wrapper.findAll('.todo-item').length).to.equal(items.length)

		expect(wrapper.contains(TodoList)).to.be.true;
	})

	it('should input text correct', () => {
		const wrapper = mount(Todo);
		var item = 'Apple';
		var input = wrapper.find('#itemInput');
		wrapper.vm.inputItem = item;
		input.trigger('keyup.enter');
		console.log('itemList:' + wrapper.vm.itemList + ',length:' + wrapper.vm.itemList.length);
		expect(wrapper.vm.itemList).to.deep.equal([item]);

	})
	it('should del item correct', () => {
		const wrapper = mount(Todo);
		var items = ['Apple', 'Banana'];
		wrapper.setData({
			itemList: items
		})

		expect(wrapper.vm.itemList.length).to.be.equal(items.length)

		//find 组件时被find的组件(TodoList)必须是要声明组件  name属性的
		wrapper.find(TodoList).vm.$emit('delItem', 0);

		expect(wrapper.vm.itemList.length).to.be.equal(1)
		expect(wrapper.vm.itemList).to.deep.equal(['Banana'])

	})

})
