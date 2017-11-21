<template>
	<div class="todo-item">
		<p>
			<span class="index-class">{{idx}}</span>
			<span class="item-ctx">{{data}}</span>
			<a class="item-op" href="javascript:void(0);" @click="del(idx)">done</a>
		</p>
	</div>
</template>

<script>
	export default {
		props: {
			data: {
				type: String,
				required: true
			},
			idx: {
				type: Number,
				required: true
			}
		},
		data() {
			return {}
		},
		methods: {
			del: function (index) {
				console.log('item del')
				this.$emit('delItem', index)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.todo-item {
		margin-bottom: 5px;
		border: 1px solid #ff3445;
	}

	.item-op {
		margin-left: 5px;
	}
</style>
