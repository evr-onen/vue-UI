<script setup>
import { ref } from "vue";
import { Form, ErrorMessage, FieldArray, useFieldArray, useForm, configure } from "vee-validate";
import * as yup from "yup";

const initialData = {
	users: [
		{
			name: "",
		},
	],
};

const schema = yup.object().shape({
	users: yup
		.array()
		.of(
			yup.object().shape({
				name: yup.string().required("it must not be empty"),
			})
		)
		.strict(),
});
const { errors, setErrors, setFieldValue, handleSubmit } = useForm({
	initialValues: initialData,
	validationSchema: schema,
});

const { fields, push, remove } = useFieldArray("users");
configure({
	bails: true,
	validateOnInput: false,
});
const onSubmit = handleSubmit((data) => {
	console.log(JSON.stringify(data));
});
</script>

<template>
	<div class="w-full flex flex-col items-center">
		<router-link to="/dashboard/welcome" class="buttonOne"> go to Dashboard</router-link>
		<div class="max-w-[700px] w-full">
			<h1>vee-validate array fields</h1>

			<form class="border-2 border-backGroundPrimary bg-cyan-50 p-4" @submit.prevent="onSubmit">
				<p></p>

				<FieldArray name="users" v-slot="{ fields, push, remove }">
					<fieldset class="InputGroup relative group/item" v-for="(field, idx) in fields" :key="field.key">
						<h2>User #{{ idx + 1 }}</h2>
						<div class="flex flex-col">
							<label class="text-backGroundPrimary font-semibold" :for="`name_${idx}`">Name</label>
							<input
								v-model="field.value.name"
								class="px-4 py-2 border border-black focus-visible:outline-cyan-800 focus-visible:rounded-none"
								:id="`name_${idx}`"
								:name="`users[${idx}].name`"
							/>
							<!-- {{ errorMessage }} -->
							<ErrorMessage :name="`users[${idx}].name`" />
						</div>
						<button
							class="buttonOne rounded-full bg-backGroundPrimary absolute -top-4 right-0 group-hover/item:block"
							type="button"
							@click="remove(idx)"
						>
							X
						</button>
					</fieldset>

					<button class="buttonOne bg-backGroundPrimary" type="button" @click="push({ name: '' })">Add User +</button>
				</FieldArray>
				<button class="buttonOne bg-backGroundPrimary" type="submit">Submit</button>
			</form>
		</div>
		<div class="">
			{{ errors }}
		</div>
	</div>
</template>

<style></style>
