<script setup>
import {} from "vue";
import CardOne from "@/components/ui/Card/CardOne.vue";
import BreadCrumbs from "@/components/ui/BreadCrumbs/BreadCrumbs.vue";
import chevronRight from "@/components/icons/chevronRight.vue";
import Table from "@/components/ui/Table/Table.vue";
const pathPropValue = [
	{ href: "a", name: "a" },
	{ href: "b", name: "b" },
	{ href: "c", name: "c" },
	{ href: "d", name: "d" },
];

const columnsArr = [
	{
		label: "prop name",
		field: "prop_name",
		width: ".50",
	},
	{
		label: "default",
		field: "default",
		width: ".75",
	},
	{
		label: "example",
		field: "example",
		width: "1",
	},
	{
		label: "explanation",
		field: "explanation",
		width: "1",
	},
];

const rowsProps = [
	{
		prop_name: "path",
		default: "get route and make it automatically",
		example: `[ { href:" " , name: " " }... ]`,
		explanation: "You can use for to using manual path",
	},
	{
		prop_name: "useHomeIcon",
		default: "false",
		example: `true`,
		explanation: "you can use home icon if you want",
	},
];
const rowsSlots = [
	{
		prop_name: "Default",
		default: "",
		example: `<svg> or <component/>`,
		explanation: "for seperator",
	},
];
</script>
<template>
	<div class="pageWrapper flex flex-col items-center justify-evenly flex-wrap">
		<div class="">
			<CardOne class="max-w-[350px] w-full">
				<BreadCrumbs :path="pathPropValue" useHomeIcon><chevronRight class="w-5 h-5" /></BreadCrumbs>
			</CardOne>

			<CardOne class="max-w-[350px] w-full">
				<BreadCrumbs />
			</CardOne>
		</div>
		<div class="">
			<CardOne class="max-w-[700px] w-full">
				<div class="flex flex-col w-full">
					<div class="flex flex-col w-full text-gray-600 text-[0.82rem]">
						<h4 class="text-center font-semibold">Breadcrumbs Props</h4>

						<Table :row="rowsProps" :column="columnsArr" titleClass=""> </Table>
					</div>
					<div class="flex flex-col w-full text-gray-600 text-[0.82rem] mt-4">
						<h4 class="text-center font-semibold">Breadcrumbs Slots</h4>

						<Table :row="rowsSlots" :column="columnsArr" titleClass=""> </Table>
					</div>
				</div>
			</CardOne>
		</div>
	</div>
</template>
<style scoped></style>
