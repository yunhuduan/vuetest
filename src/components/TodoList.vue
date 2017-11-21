<template>
	<div class="todo-list">
		<TodoItem v-for="(item, index) in items" :key="index" :data="item" :idx="index" @delItem="del"></TodoItem>
		<p class="no-data" v-if="items.length <= 0">请输入项目</p>
	</div>
</template>

<script>
	import TodoItem from './TodoItem.vue'

	export default {
		name: 'todoList',
		props: {
			items: {
				type: Array,
				default: []
			}
		},
		data() {
			return {}
		},
		methods: {
			del: function (index) {
				this.$emit('delItem',index)
			}
		},
		components: {TodoItem}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.todo-list {
		border: 1px solid #ffdf1a;
		padding: 5px;
	}
</style>
