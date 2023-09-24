<template>
	<div class="pageWrapper">
		<CardOne class="w-[700px]">
			<button class="buttonOne" @click="openModal">Open Modal</button>
		</CardOne>
		<CardOne class="w-[700px]">
			<div class="flex flex-col w-full">
				<div class="flex flex-col w-full text-gray-600 text-[0.82rem]">
					<h4 class="text-center font-semibold">Tabs Props</h4>

					<Table :row="rowsProps" :column="columnsArr" titleClass=""> </Table>
				</div>
				<div class="flex flex-col w-full text-gray-600 text-[0.82rem] mt-4">
					<h4 class="text-center font-semibold">Modal Class</h4>

					<Table :row="rowsClass" :column="columnsArr" titleClass=""> </Table>
				</div>
				<div class="flex flex-col w-full text-gray-600 text-[0.82rem] mt-4">
					<h4 class="text-center font-semibold">Modal Slots</h4>

					<Table :row="rowsSlots" :column="columnsArr" titleClass=""> </Table>
				</div>
			</div>
		</CardOne>
	</div>
	<ModalOne v-model:isOpen="open" headerClass="font-semibold" modalClass="max-w-[700px]" buttons="true">
		<template #header> Header Example</template>
		<template #actions>
			<div class="flex justify-end">
				<button class="buttonOne bg-danger mr-4" @click="open = false">Cancel</button>
				<button class="buttonOne bg-succes" @click="open = false">Save</button>
			</div>
		</template>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos repellendus qui explicabo impedit numquam, fuga est
		alias, pariatur nihil omnis, aliquam nobis hic saepe. Blanditiis, corporis officia voluptate exercitationem
		inventore, aliquam similique voluptates nesciunt dolore a saepe! Soluta odio molestiae nisi obcaecati ullam
		corporis! Accusantium culpa repellat totam similique beatae voluptate!
	</ModalOne>
</template>

<script setup>
import { ref } from "vue";
import ModalOne from "@/components/ui/Modal/ModalOne.vue";
import CardOne from "@/components/ui/Card/CardOne.vue";
import Table from "@/components/ui/Table/Table.vue";

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
		prop_name: "v-model:isOpen",
		default: "",
		example: `v-model:isOpen="booleanRefValue" `,
		explanation: "for open and close by ref",
	},
	{
		prop_name: "buttons",
		default: "true",
		example: `buttons="true"`,
		explanation: "button cam be placed if you use action prop",
	},
	{
		prop_name: "action",
		default: "",
		example: `()=>funcName()`,
		explanation: "for save button",
	},
];
const rowsClass = [
	{
		prop_name: "contentClass",
		default: "",
		example: `text-cyan-700 `,
		explanation: "for open and close by ref",
	},
	{
		prop_name: "modalClass",
		default: "true",
		example: `text-cyan-700 `,
		explanation: "button cam be placed if you use action prop",
	},
	{
		prop_name: "actionClass",
		default: "",
		example: `text-cyan-700 `,
		explanation: "for save button",
	},
];
const rowsSlots = [
	{
		prop_name: "default",
		default: "",
		example: `<modalComponent> or <div> modal content </div> `,
		explanation: "Default slot is for content, You can use as a child",
	},
	{
		prop_name: "#header",
		default: "",
		example: `<modalHeaderComponent> or <div> modal header </div>`,
		explanation: "this named slot make its header change as components  ",
	},
	{
		prop_name: "#actions",
		default: "",
		example: `<modalFooterComponent> or <div> modal footer actions <button class="buttonOne">save</button> </div>`,
		explanation: "for content area style",
	},
];
const open = ref(false);

const openModal = () => {
	open.value = true;
};
</script>

<style></style>
