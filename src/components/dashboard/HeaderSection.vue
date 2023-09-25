<script setup>
import { ref } from "vue";
const innerWidthRef = ref(window.innerWidth > 840 ? true : false);
const isExpandRef = ref(isExpand);
console.log(isExpandRef.value);
const { isExpand } = defineProps(["isExpand"]);
const emit = defineEmits(["toggleIsExpand"]);

const clickHandler = () => {
	emit("toggleIsExpand");
};
</script>
<template>
	<div id="dashboardHeader" class="min-h-[5vh] bg-cyan-100 text-cyan-950 flex shadow-bottom mb-[2vh]">
		<div class="min-w-[300px] flex">
			<div
				v-if="innerWidthRef"
				class="ml-2 my-auto bg-cyan-700 text-white px-4 py-1 rounded-md shadow-2xl hover:opacity-70 cursor-pointer SideBarIcon h-8"
				@click="() => clickHandler()"
			></div>
			<p class="m-auto">Logo area</p>
		</div>
		<div class="w-[calc(100%-300px)] flex">
			<router-link to="/" class="my-auto bg-red-600 text-white px-4 py-1 rounded-md shadow-2xl hover:bg-red-600/70"
				>Home</router-link
			>

			<p class="m-auto">Dashboard Header</p>
		</div>
	</div>
</template>

<style scoped>
.shadow-bottom {
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
}
</style>
