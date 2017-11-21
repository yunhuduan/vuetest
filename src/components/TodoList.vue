<template>
	<div class="todo-list">
		<TodoItem v-for="(item, index) in items" :key="index" :data="item" :idx="index" @delItem="del"></TodoItem>
	</div>
</template>

<script>
	import TodoItem from './TodoItem.vue'

	export default {
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
