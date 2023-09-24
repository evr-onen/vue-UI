<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import homeIcon from "@/components/icons/homeIcon.vue";
const { fullPath } = useRoute();
const { path, useHomeIcon, seperator } = defineProps({ path: Array, useHomeIcon: Boolean, seperator: Object });

const pathNameRef = ref([]);
const pathHrefRef = ref([]);
const pathProp = ref([]);

if (path) {
	pathProp.value = [{ href: "", name: "" }, ...path];
}

const fullPathOfPage = computed(() => {
	if (pathProp.value.length) {
		pathProp.value.map((pathObj) => {
			pathNameRef.value.push(pathObj.name);
			pathHrefRef.value.push(pathObj.href);
		});

		return pathNameRef.value;
	}

	return fullPath.split("/");
});

const createLink = (ind) => {
	let theLink = "/";
	for (let i = 0; i < ind + 1; i++) {
		if (pathHrefRef.value.length) {
			theLink += pathHrefRef.value[i];
		} else {
			theLink += fullPathOfPage.value[i];
		}
		theLink += i !== 0 ? "/" : "";
	}

	return theLink;
};
</script>
<template>
	<div class="Breadcrumbs wrapper flex flex-nowrap p-4">
		<div class="flex items-center" v-for="(pathName, index) in fullPathOfPage" :key="pathName + index">
			<div class="ml-2 text-3xl font-thin" v-if="index !== 0">
				<i class="chewronIcon w-4 h-4" v-if="!$slots.default"></i>
				<slot v-if="$slots.default" />
			</div>
			<router-link :to="createLink(index)" class="ml-2 hover:opacity-90" v-if="index === 0 && useHomeIcon"
				><homeIcon class="w-6 h-6 fill-backGroundPrimary" /></router-link
			><router-link :to="createLink(index)" class="ml-2" v-else-if="index + 1 !== fullPathOfPage.length"
				><p class="uppercase font-sm font-condensed font-semibold opacity-80 hover:opacity-100">
					{{ index === 0 ? "home" : pathName }}
				</p>
			</router-link>
			<p class="ml-2 uppercase font-sm font-condensed font-semibold" :class="{ homeIcon: useHomeIcon }" v-else>
				{{ pathName }}
			</p>
		</div>
	</div>
</template>
<style scoped></style>
