<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { sideMenuItems } from "/src/constant/sideMenuItems.js";

const { isExpand } = defineProps(["isExpand"]);

const route = useRoute();

const navItems = ref(sideMenuItems);

const openTitle = (e, length) => {
	const target = e.currentTarget.nextSibling;
	target.style.height === "0px" ? (target.style.height = length * 34 + "px") : (target.style.height = 0);
};
</script>
<template>
	<div class="p-2" v-for="title in navItems" :key="title.label">
		<div
			class="item text-center bg-cyan-700 text-cyan-100 rounded-lg tracking-widest cursor-pointer py-2 flex hover:opacity-90"
			@click="($event) => openTitle($event, title.children.length)"
		>
			<span class="my-auto homeIcon w-6 h-6 w mx-1" :class="title.icon">
				<p
					class="pl-8 whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:flex duration-300"
					:class="{ '!opacity-100': isExpand, '!visible': isExpand }"
				>
					{{ title.label }}
				</p>
			</span>
		</div>
		<div
			class="overflow-hidden duration-300"
			:style="{
				height: route.fullPath.split('/')[2] === title.href.toLowerCase() ? title.children.length * 34 + 'px' : 0,
			}"
		>
			<router-link
				:to="item.href"
				class="flex mt-2 border h-6 border-backGroundPrimary rounded-lg pl-3 items-center hover:bg-cyan-300"
				:class="{ currentItem: route.fullPath === item.href }"
				v-for="item in title.children"
				:key="item.label"
			>
				<i class="circleIcon w-2 h-2 flex mr-1 items-center">
					<p
						class="pl-8 whitespace-nowrap not-italic text-sm font-semibold text-backGroundPrimary"
						:class="{ '!text-cyan-100': route.fullPath === item.href }"
					>
						{{ item.label }}
					</p>
				</i>
			</router-link>
		</div>
	</div>
</template>

<style scoped>
.currentItem {
	@apply bg-cyan-500 text-cyan-100 hover:!opacity-90;
}
a {
	font-size: 16px !important;
}
</style>
