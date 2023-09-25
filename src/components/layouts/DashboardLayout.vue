<template>
	<div class="dashboardLayout bg-cyan-50">
		<HeaderSection :isExpand="isExpand" @toggleIsExpand="toggleIsExpand" class="fixed top-0 w-full" />
		<SideNav v-model:isExpand="isExpand" class="mt-12">
			<slot />
		</SideNav>
	</div>
</template>
<script setup>
import HeaderSection from "@/components/dashboard/HeaderSection.vue";
import SideNav from "@/components/dashboard/SideNav.vue";
import { ref, watch } from "vue";

const isExpand = ref(window.innerWidth > 840 ? true : false);
const toggleIsExpand = () => {
	isExpand.value = !isExpand.value;
};
watch(isExpand, () => {
	console.log(isExpand.value);
});
const screenRef = ref(window.innerWidth);
console.log(screenRef.value);
</script>
<style></style>
