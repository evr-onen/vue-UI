<script setup>
import {} from "vue";
const { row, column } = defineProps({
	row: Object,
	column: Object,
	colClass: { type: String, default: "flex-1" },
	cellClass: String,
	titleClass: String,
});
</script>
<template>
	<div class="wrapper border border-backGroundPrimary w-full p-1">
		<div class="flex w-full">
			<div
				class="w-full flex flex-col justify-between"
				:class="{ colClass }"
				:style="`flex:${columnItem.width}`"
				v-for="columnItem in column"
				:key="columnItem.field"
			>
				<div
					class="font-semibold text-md uppercase bg-backGroundPrimary text-white text-center mb-1 py-2"
					:class="titleClass"
				>
					{{ columnItem.label }}
				</div>
				<div
					class="border-2 border-white text-center capitalize grid-auto-rows h-16 p-2 overflow-hidden grid items-center justify-center"
					:class="cellClass"
					v-for="(rowItem, rowIndex) in row"
					:key="columnItem.field + rowIndex"
				>
					<slot :name="columnItem.field" v-if="$slots[columnItem.field]"></slot>

					{{ !$slots[columnItem.field] ? rowItem[columnItem.field] : "" }}
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped></style>
