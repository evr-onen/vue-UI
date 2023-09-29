<template>
	<div class="w-full flex flex-col items-center">
		<router-link to="/dashboard/welcome" class="buttonOne">Go to Dashboard</router-link>
		<div class="w-full max-w-[1240px] px-4">
			<h1>vee-validate array fields</h1>

			<form class="bg-cyan-50 p-4" @submit.prevent="onSubmit">
				<p></p>

				<FieldArray name="users" v-slot="{ fields, push, remove, update }">
					<div
						class="InputGroup relative group/item border-2 border-backGroundPrimary p-4 flex items-center mt-4"
						v-for="(field, idx) in fields"
						:key="field.key"
					>
						<h2 class="mr-4">User #{{ idx + 1 }}</h2>
						<FieldArray
							:name="`users[${idx}].names`"
							v-slot="{ fields: nameFields, push: namesPush, remove: namesRemove }"
						>
							<div v-for="(nameField, ind) in nameFields" :key="ind" class="flex items-center">
								<div class="mr-4 flex items-center justify-center relative">
									<p class="uppercase text-sm font-semibold text-backGroundPrimary mr-2">Pet Name {{ ind + 1 }} :</p>
									<div class="flex flex-col relative">
										<Field
											as="input"
											class="inputOne"
											v-bind="nameField"
											type="text"
											:name="`users[${idx}].names[${ind}]`"
										/>
										<ErrorMessage
											:name="`users[${idx}].names[${ind}]`"
											class="text-red-600 mt-1 rounded-md text-center capitalize text-xs absolute bottom-full font-semibold"
										/>
									</div>
									<button
										v-if="nameFields.length === ind + 1 && ind < 2"
										class="buttonOne rounded-full bg-backGroundPrimary absolute hidden -right-16 group-hover/item:block"
										type="button"
										@click="namesPush('')"
									>
										+
									</button>
								</div>
							</div>

							<button
								class="buttonOne rounded-full hidden bg-backGroundPrimary absolute -right-0 group-hover/item:block"
								type="button"
								@click="remove(idx)"
							>
								Remove User
							</button>
						</FieldArray>
					</div>
					<button class="buttonOne bg-backGroundPrimary" type="button" @click="push({ names: [''] })">
						Add User +
					</button>
					<button class="buttonOne bg-backGroundPrimary" type="submit">Submit</button>
				</FieldArray>
			</form>
		</div>
	</div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { Form, Field, ErrorMessage, FieldArray, useFieldArray, useForm, configure } from "vee-validate";
import * as yup from "yup";

const rrr = ref(1);

const initialData = {
	users: [
		{
			names: [""],
		},
	],
};

const schema = yup.object().shape({
	users: yup
		.array()
		.of(
			yup.object().shape({
				names: yup.array().of(yup.string().required("bos birakilamaz")),
			})
		)
		.strict(),
});

const { errors, setErrors, setFieldValue, handleSubmit } = useForm({
	initialValues: initialData,
	validationSchema: schema,
});

// it is not need but u can use for its methods
// const { fields: usersFields, push, remove } = useFieldArray("users");

const { fields: namesFields, push: namesPush, remove: namesRemove } = useFieldArray("names");

configure({
	bails: false,
	validateOnInput: true,
});

const onSubmit = handleSubmit((data) => {
	console.log(JSON.stringify(data));
	console.log(namesFields.value);
});
</script>

<style>
.inputOne {
	@apply border-2 border-backGroundPrimary h-full pl-2;
}
</style>
