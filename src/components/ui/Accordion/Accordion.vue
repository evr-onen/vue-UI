<script setup>
import { ref, computed } from "vue";
const { data, titles, contents, titleClass, disableRounded } = defineProps({
	data: Array,
	titleClass: String,
	contentClass: String,
	selectedTabClass: String,
	titles: Array,
	contents: Array,
	disableRounded: Boolean,
});

const dataProp = computed(() => {
	if (data) {
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
const selectedTabIndex = ref(null);
const changeTabIndexHandler = (index) => {
	if (selectedTabIndex.value !== index) {
		selectedTabIndex.value = index;
	} else {
		selectedTabIndex.value = null;
	}
};
</script>

<template>
	<div class="wrapper w-full border-2 border-cyan-700" :class="{ 'rounded-md': !disableRounded }">
		<div
			class="border-cyan-700"
			:class="{ 'border-b': index !== dataProp.length - 1 }"
			v-for="(itemData, index) in dataProp"
			:key="itemData"
		>
			<div
				class="title p-4 cursor-pointer uppercase font-semibold text-sm tracking-widest text-cyan-700 bg-cyan-200"
				:class="{
					'rounded-t-md': index === 0 && !disableRounded,
					'rounded-b-md': index === dataProp.length - 1 && !disableRounded,
					[titleClass]: true,
				}"
				@click="changeTabIndexHandler(index)"
			>
				{{ itemData.title }}
			</div>

			<div
				class="content bg-cyan-700 text-white max-h-0 transition-all overflow-hidden"
				:class="{ selectedTab: selectedTabIndex === index }"
			>
				<div class="w-full px-4 py-4" :class="{ [contentClass]: true }">
					<slot v-if="$slots[Object.keys($slots)[index]]" :name="index" class="py-4" />
					<p v-else class="">
						{{ itemData.content }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.selectedTab {
	@apply max-h-[500px];
}
.content {
	transition: 700ms;
}
</style>
