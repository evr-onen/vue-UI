<script setup>
import Accordion from "@/components/ui/Accordion/Accordion.vue";
import CardOne from "/src/components/ui/Card/CardOne.vue";
import Table from "@/components/ui/Table/Table.vue";
const content = [
	{
		title: "Tab One",
		content:
			"1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolores debitis earum! Rerum nemo eaque fuga consectetur, eligendi ipsam blanditiis dolore molestiae molestias similique sunt labore, natus voluptatem, sapiente doloremque enim repudiandae voluptate architecto saepe inventore omnis optio animi. Aut numquam, earum rerum sint consequuntur sit fuga dolores obcaecati labore.",
	},
	{
		title: "Tab Two",
		content:
			"2Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolores debitis earum! Rerum nemo eaque fuga consectetur, eligendi ipsam blanditiis dolore molestiae molestias similique sunt labore, natus voluptatem, sapiente doloremque enim repudiandae voluptate architecto saepe inventore omnis optio animi. Aut numquam, earum rerum sint consequuntur sit fuga dolores obcaecati labore.",
	},
	{
		title: "Tab Three",
		content:
			"3Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolores debitis earum! Rerum nemo eaque fuga consectetur, eligendi ipsam blanditiis dolore molestiae molestias similique sunt labore, natus voluptatem, sapiente doloremque enim repudiandae voluptate architecto saepe inventore omnis optio animi. Aut numquam, earum rerum sint consequuntur sit fuga dolores obcaecati labore.",
	},
	{
		title: "Tab Four",
		content:
			"4Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolores debitis earum! Rerum nemo eaque fuga consectetur, eligendi ipsam blanditiis dolore molestiae molestias similique sunt labore, natus voluptatem, sapiente doloremque enim repudiandae voluptate architecto saepe inventore omnis optio animi. Aut numquam, earum rerum sint consequuntur sit fuga dolores obcaecati labore.",
	},
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

const rowsProps = [
	{
		prop_name: "data",
		default: "",
		example: `[ { title:" " , content: " " }... ] `,
		explanation: "You can use only this prop or you can split titles and content",
	},
	{
		prop_name: "titles",
		default: "",
		example: `[ "title a" ,"title b"... ]`,
		explanation: "data object in array",
	},
	{
		prop_name: "contents",
		default: "",
		example: `[ :"content a" ,"content b"... ]`,
		explanation: "data object in array",
	},
	{
		prop_name: "disableRounded",
		default: "false",
		example: `false`,
		explanation: "for disable border radius effect",
	},
];

const rowsSlots = [
	{
		prop_name: "#0",
		default: "",
		example: ` <template #0> content 1</template>... `,
		explanation: "you can send component with slot",
	},
];
const rowsClass = [
	{
		prop_name: "titleClass",
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
		prop_name: "selectedTabClass",
		default: "",
		example: `"bg-black text-white"`,
		explanation: "for selected btn style",
	},
];

const titles = ["tab A", "tab B", "tab C", "tab D"];
const contents = ["content A", "content B", "content C", "content D"];
</script>
<template>
	<div class="pageWrapper flex justify-evenly">
		<div class="">
			<CardOne class="max-w-[700px] w-full">
				<Accordion :data="content" :titles="titles">
					<template #0>content 1</template>
					<template #1>content 2</template>
					<template #2>content 3</template>
					<!-- <template #3>content 4</template> -->
				</Accordion>
			</CardOne>
			<CardOne class="max-w-[700px] w-full">
				<div class="flex flex-col w-full">
					<div class="flex flex-col w-full text-gray-600 text-[0.82rem]">
						<h4 class="text-center font-semibold">Accordion Props</h4>

						<Table :row="rowsProps" :column="columnsArr" titleClass=""> </Table>
					</div>
					<div class="flex flex-col w-full text-gray-600 text-[0.82rem] mt-4">
						<h4 class="text-center font-semibold">Accordion Slot</h4>

						<Table :row="rowsSlots" :column="columnsArr" titleClass=""> </Table>
					</div>
					<div class="flex flex-col w-full text-gray-600 text-[0.82rem] mt-4">
						<h4 class="text-center font-semibold">Accordion Class</h4>

						<Table :row="rowsClass" :column="columnsArr" titleClass=""> </Table>
					</div>
				</div>
			</CardOne>
		</div>
	</div>
</template>
<style scoped></style>
