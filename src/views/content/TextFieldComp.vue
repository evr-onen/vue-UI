<template>
	<div class="flex w-fit">
		<div
			class="minus noselect cursor-pointer duration-500 bg-gray-200 hover:bg-black hover:text-white w-8 h-8 flex justify-center items-center border border-gray-600"
			@click.self="valueRef--"
		>
			-
		</div>
		<input
			class="flex w-16 border-y border-black text-center font-semibold"
			type="number"
			:value="valueRef"
			@input="valueRef = Number($event.target.value)"
		/>
		<div
			class="plus noselect cursor-pointer duration-500 bg-gray-200 hover:bg-black hover:text-white w-8 h-8 flex justify-center items-center border border-gray-600"
			@click.self="valueRef++"
		>
			+
		</div>
	</div>
</template>

<script setup>
import { toRef, ref, watch } from "vue";
const props = defineProps(["value"]);
const emit = defineEmits(["update:value", "setValue"]);
const { value } = toRef(props);
const valueRef = ref(value.value);

watch(valueRef, (newVal, oldVal) => {
	if (emit("setValue", newVal)) {
		emit("setValue", newVal);
	} else {
		emit("update:value", newVal);
	}
});
</script>
<style scoped>
input:focus {
	outline: none;
}
input[type="number"] {
	appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
</style>
