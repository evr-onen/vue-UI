<script setup>
import SideNavItems from "./SideNavItems.vue";

defineProps(["isExpand"]);
</script>
<template>
	<div class="sideNawWrapper flex w-full">
		<div
			class="sideNav mt-4 w-[50px] h-[89vh] overflow-hidden hover:w-[300px] duration-300 fixed left-0 rounded-xl contentShadow group overflow-y-auto"
			:class="{ '!w-[230px]': isExpand }"
		>
			<div class="bg-cyan-100 rounded-xl h-full">
				<SideNavItems :isExpand="isExpand" />
			</div>
		</div>

		<div class="contentWrapper w-full px-8 py-4 ml-12 duration-300" :class="{ 'ml-56': isExpand }">
			<div class="content p-8 min-h-[89vh] contentShadow rounded-xl bg-white">
				<slot />
			</div>
		</div>
	</div>
</template>

<style scoped>
.sideNav::-webkit-scrollbar-thumb {
	background: linear-gradient(to bottom right, #4d7fff 0%, #2b758e 100%);
	border-radius: 5px;
}
.sideNav::-webkit-scrollbar {
	width: 10px;
	height: 10px;
	@apply bg-cyan-300 text-cyan-950;
}
</style>
