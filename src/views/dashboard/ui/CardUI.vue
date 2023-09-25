<script setup>
import CardOne from "/src/components/ui/Card/CardOne.vue";
import Table from "@/components/ui/Table/Table.vue";
const ttt = () => console.log("action");

const columnsArr = [
	{
		label: "prop name",
		field: "prop_name",
		width: ".50",
	},
	{
		label: "default",
		field: "default",
		width: ".50",
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

const rowsSlots = [
	{
		prop_name: "default",
		default: "",
		example: `<content> `,
		explanation: "content is written as child component",
	},
	{
		prop_name: "#header",
		default: "",
		example: `<template #header> <headerComonent/> </template>`,
		explanation: "header is written as slot named #header template",
	},
];
const rowsClass = [
	{
		prop_name: "headerClass",
		default: "",
		example: `"bg-black text-white" `,
		explanation: "for all tab buttons style",
	},
	{
		prop_name: "contentClass",
		default: "",
		example: `"bg-black text-white"`,
		explanation: "for content area style",
	},
	{
		prop_name: "actionClass",
		default: "",
		example: `"bg-black text-white"`,
		explanation: "for selected btn style",
	},
];
const rowsProps = [
	{
		prop_name: "buttons",
		default: "false",
		example: `true`,
		explanation: "for all tab buttons style",
	},
	{
		prop_name: "action",
		default: "",
		example: `()=>funcName()`,
		explanation: "for content area style",
	},
];
</script>

<template>
	<div class="pageWrapper flex flex-col items-center">
		<div class="flex flex-col items-center">
			<CardOne class="max-w-[300px] w-full" buttons="true" :action="() => ttt()" m="1rem">
				<template #header> header </template>
				<p class="">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod libero illo cumque doloremque mollitia veniam
					obcaecati, aliquam quos tempore tempora consequuntur, corporis in deserunt assumenda debitis nostrum harum id
					nemo, earum quisquam! Veniam eius mollitia quisquam unde facilis aut, quibusdam, quos amet deleniti, et non?
					Eaque assumenda in at neque voluptates velit natus dolorum blanditiis asperiores?
				</p>
			</CardOne>
			<CardOne class="max-w-[700px] w-full">
				<div class="flex flex-col w-full">
					<div class="flex flex-col w-full text-gray-600 text-[0.82rem] mt-4">
						<h4 class="text-center font-semibold">Card Props</h4>

						<Table :row="rowsProps" :column="columnsArr" titleClass=""> </Table>
					</div>
					<div class="flex flex-col w-full text-gray-600 text-[0.82rem] mt-4">
						<h4 class="text-center font-semibold">Card Slots</h4>

						<Table :row="rowsSlots" :column="columnsArr" titleClass=""> </Table>
					</div>
					<div class="flex flex-col w-full text-gray-600 text-[0.82rem] mt-4">
						<h4 class="text-center font-semibold">Card Class</h4>

						<Table :row="rowsClass" :column="columnsArr" titleClass=""> </Table>
					</div>
				</div>
			</CardOne>
		</div>
	</div>
</template>

<style></style>
