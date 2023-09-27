<script setup>
import { ref } from "vue";
import { Form, Field } from "vee-validate";
const onSubmit = (values) => {
	console.log(values);
};
</script>
<template>
	<div class="">
		<Form @submit.prevent="onSubmit">
			<Field name="username" type="text" />
			<button class="buttonOne">submit</button>
		</Form>
	</div>
</template>
<style scoped></style>
