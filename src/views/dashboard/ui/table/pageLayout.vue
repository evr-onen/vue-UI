<script setup>
import Table from "@/components/ui/Table/Table.vue";
import CardOne from "/src/components/ui/Card/CardOne.vue";

const columns = [
	{
		label: "label 1",
		field: "field_1",
		width: "0.75",
	},
	{
		label: "label 2",
		field: "field_2",
		width: "1",
	},
	{
		label: "label 3",
		field: "field_3",
		width: "1.5",
	},
	{
		label: "label 4",
		field: "field_4",
		width: "1",
	},
	{
		label: "label 5",
		field: "field_5",
		width: "3",
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
		prop_name: "column",
		default: "must be mandatory",
		example: `[{
		label: '',
		field: '',
		width: '',
	}]`,
		explanation: "width will be in flex, so they are proportional among themselves. ",
	},
	{
		prop_name: "row",
		default: "must be mandatory",
		example: `[{
			field_1: '',
			field_2: '',
			 ...
		}]`,
		explanation: "data object in array",
	},
];
const rowsClass = [
	{ prop_name: "colClass", default: "none", example: "bg-teal-700 text-white", explanation: "" },
	{ prop_name: "cellClass", default: "none", example: "bg-teal-700 text-white", explanation: "" },
	{ prop_name: "titleClass", default: "none", example: "bg-teal-700 text-white", explanation: "" },
];
const rows = [
	{ field_1: "field 11", field_2: "field 21", field_3: "field 31", field_4: "field 41", field_5: "field 51" },
	{ field_1: "field 12", field_2: "field 22", field_3: "field 32", field_4: "field 42", field_5: "field 52" },
	{ field_1: "field 13", field_2: "field 23", field_3: "field 33", field_4: "field 43", field_5: "field 53" },
	{ field_1: "field 14", field_2: "field 24", field_3: "field 34", field_4: "field 44", field_5: "field 54" },
	{ field_1: "field 15", field_2: "field 25", field_3: "field 35", field_4: "field 45", field_5: "field 55" },
	{ field_1: "field 16", field_2: "field 26", field_3: "field 36", field_4: "field 46", field_5: "field 56" },
	{ field_1: "field 17", field_2: "field 27", field_3: "field 37", field_4: "field 47", field_5: "field 57" },
	{ field_1: "field 18", field_2: "field 28", field_3: "field 38", field_4: "field 48", field_5: "field 58" },
];
</script>
<template>
	<div class="pageWrapper flex justify-evenly">
		<div class="">
			<CardOne class="max-w-[700px] w-full">
				<Table :row="rows" :column="columns" titleClass="text-left">
					<template #field_5>
						<div class="flex items-center p-2">
							<button class="buttonStyle mr-2">Edit</button>
							<button class="buttonStyle !bg-danger">Delete</button>
						</div>
					</template>
				</Table>
			</CardOne>
			<CardOne class="max-w-[700px] w-full">
				<div class="flex flex-col w-full">
					<div class="flex flex-col w-full text-gray-600 text-[0.82rem]">
						<h4 class="text-center font-semibold">Table Class</h4>

						<Table :row="rowsClass" :column="columnsArr" titleClass=""> </Table>
					</div>
					<div class="flex flex-col w-full text-gray-600 text-[0.82rem] mt-4">
						<h4 class="text-center font-semibold">Table Props</h4>

						<Table :row="rowsProps" :column="columnsArr" titleClass=""> </Table>
					</div>
				</div>
			</CardOne>
		</div>
	</div>
</template>
<style scoped>
.buttonStyle {
	@apply bg-backGroundPrimary text-white py-3 px-4 flex justify-center items-center h-4 rounded-md hover:opacity-90;
}
</style>
