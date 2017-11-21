<template>
	<div class="todo">
		<div class="add-item-container">
			<input v-model="inputItem" @keyup.enter="addItem"/>
		</div>
		<div class="item-list-container">
			<TodoList @delItem="delItem" :items="itemList"></TodoList>
		</div>
	</div>
</template>

<script>
	import TodoList from './TodoList.vue'

	export default {
		data() {
			return {
				inputItem: '',
				itemList: []
			}
		},
		methods: {
			addItem: function () {
				this.itemList.push(this.inputItem)
			},
			delItem: function (index) {
				console.log('todo del item:' + index);
				this.itemList.splice(index, 1);
			}
		},
		components: {TodoList}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
