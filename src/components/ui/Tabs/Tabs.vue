<script setup>
import { ref, computed } from "vue";
const { data, titles, contents, titleClass } = defineProps([
	"data",
	"titleClass",
	"contentClass",
	"selectedTabClass",
	"titles",
	"contents",
]);

const dataProp = computed(() => {
	if (data) {
		console.log("asdasd");
		return data;
	} else {
		let tmpData = [];
		for (let i = 0; i < titles.length; i++) {
			let tmpObj = {};
			tmpObj["title"] = titles[i];
			tmpObj["content"] = contents[i];
			tmpData.push(tmpObj);
		}
		return tmpData;
	}
});
const selectedTabIndex = ref(0);
</script>
<template>
	<div class="wrapper w-full border border-black">
		<div class="tab-buttons flex">
			<div
				class="p-2 min-w-20 w-full text-center font-semibold text-xs bg-backGroundPrimary hover:opacity-80 text-white cursor-pointer duration-300"
				v-for="(content, index) in dataProp"
				:class="{
					selectedTab: selectedTabIndex === index,
					selectedTabClass: selectedTabIndex === index,
					[titleClass]: true,
				}"
				:key="content"
				@click="selectedTabIndex = index"
			>
				{{ content.title }}
			</div>
		</div>
		<div class="p-4" :class="{ [contentClass]: true }">
			{{ dataProp[selectedTabIndex].content }}
		</div>
		{{ console.log(selectedTabIndex) }}
	</div>
</template>
<style scoped>
.selectedTab {
	@apply bg-transparent text-black;
}
</style>
