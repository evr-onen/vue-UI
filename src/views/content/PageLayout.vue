<template>
	<div class="flex flex-col items-center w-full h-screen">
		<h1 class="mt-16 text-6xl">Welcome To Evren's UI Templates</h1>
		<div class="p-4 mt-8">
			<router-link to="/dashboard/welcome" class="buttonOne">Dashboard</router-link>
			<!-- <form @submit="onSubmit">
				<span class="bg-red-100 mr-4">
					<input v-bind="email" name="email" type="email" class="bg-teal-100 mr-4" />
					<span>{{ errors.email }}</span>
				</span>

				<span class="bg-red-100 mr-4">
					<input v-bind="pass" name="pass" type="password" class="bg-teal-100 mr-4" />
					<span>{{ errors.password }}</span>
				</span>

				<button>Submit</button>
			</form> -->
		</div>
	</div>
</template>

<script setup>
import { useForm } from "vee-validate";
import { watchEffect } from "vue";
import * as yup from "yup";
import { configure } from "vee-validate";
const schema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().min(6).required(),
});
configure({
	bails: false,
	validateOnInput: true,
});
const { defineInputBinds, errors, handleSubmit, setFieldValue } = useForm({
	validationSchema: schema,
});

watchEffect(() => {
	console.log(errors.value);
	// setFieldValue("email", "example@gmail.com");
});
const email = defineInputBinds("email");
const pass = defineInputBinds("password");

const onSubmit = handleSubmit((values) => {
	console.log(values);
});
</script>

<style scoped></style>
