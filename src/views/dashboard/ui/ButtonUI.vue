<template>
	<div class="pageWrapper">
		<CardOne class="w-[300px]">
			<template #header> <p class="text-lg font-semibold text-cyan-900">buttonOne</p> </template>
			<button class="buttonOne text-xs font-bold">Click Me</button>
		</CardOne>
		<CardOne class="w-full">
			<p class="text-sm font-semibold">Just add class and override it like "bg-yellow-200 text-cyan-900"</p>
		</CardOne>
	</div>
</template>

<script setup>
import CardOne from "@/components/ui/Card/CardOne.vue";
</script>

<style scoped></style>
