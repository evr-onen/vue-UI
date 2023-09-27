<template>
	<div>value: {{ numberValue }}</div>
	<div class="">computed: {{ valueComp }}</div>
	<div class="">numberValueRef: {{ numberValueRef }}</div>
	<button class="buttonOne" @click="yyy">Change Ref</button>
</template>

<script setup>
import { watch, ref, computed, onUpdated, watchEffect, toRefs } from "vue";
const props = defineProps(["numberValue"]);

const { numberValue } = toRefs(props);
const numberValueRef = ref();

console.log(numberValue.value);
const valueComp = computed({
	get() {
		return numberValue.value;
	},
	set(newValue) {
		numberValueRef.value = newValue;
	},
});
const yyy = () => {
	console.log("asdasasd");
	valueComp.value = "asdasasd";
};
// onUpdated(() => {
// 	console.log(valueComp.value);
// });
</script>

<style></style>
