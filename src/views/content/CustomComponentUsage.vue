<script setup>
import { ref, watchEffect } from "vue";
import TextFieldComp from "./TextFieldComp.vue";
import { Form, Field, ErrorMessage, FieldArray, useFieldArray, useForm, configure } from "vee-validate";
import * as yup from "yup";
import InputText from "primevue/inputtext";

const rrr = ref(1);

const initialData = {
	users: [
		{
			name: 1,
		},
	],
};

const schema = yup.object().shape({
	users: yup
		.array()
		.of(
			yup.object().shape({
				name: yup.number().required("it must not be empty"),
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
	bails: false,
	validateOnInput: true,
});

const onSubmit = handleSubmit((data) => {
	console.log(JSON.stringify(data));
});

watchEffect(fields, () => {
	console.log(rrr.value);
	console.log(fields.value);
});
</script>

<template>
	<div class="w-full flex flex-col items-center">
		<router-link to="/dashboard/welcome" class="buttonOne"> go to Dashboard</router-link>
		<div class="w-full max-w-[1240px] px-4">
			<h1>vee-validate array fields</h1>

			<form class="bg-cyan-50 p-4" @submit.prevent="onSubmit">
				<p></p>

				<FieldArray name="users" v-slot="{ fields, push, remove, update }">
					<fieldset
						class="InputGroup relative group/item border-2 border-backGroundPrimary p-4 flex"
						v-for="(field, idx) in fields"
						:key="field.key"
					>
						<h2 class="mr-4">User #{{ idx + 1 }}</h2>
						<div class="mr-4">
							<Field
								v-slot="{ field, value, errorMessage }"
								type="text"
								:id="`name_${idx}`"
								:name="`users[${idx}].name`"
							>
								<TextFieldComp v-bind="field" @setValue="(val) => update(idx, { name: val })" />

								{{ errorMessage }}
							</Field>
							<!-- <ErrorMessage :name="`users[${idx}].name`" /> -->
						</div>
						<button
							class="buttonOne rounded-full bg-backGroundPrimary absolute -top-4 right-0 group-hover/item:block"
							type="button"
							@click="remove(idx)"
						>
							X
						</button>
					</fieldset>

					<button class="buttonOne bg-backGroundPrimary" type="button" @click="push({ name: 1 })">Add User +</button>
				</FieldArray>
				<button class="buttonOne bg-backGroundPrimary" type="submit">Submit</button>
			</form>
		</div>
	</div>
</template>

<style></style>
