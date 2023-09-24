import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "HomePage",
			component: () => import("@/views/content/PageLayout.vue"),
			children: [],
		},

		{
			path: "/deneme",
			name: "DenemePage",
			component: () => import("/src/views/deneme/parentComp.vue"),
			children: [],
		},

		{
			path: "/dashboard",
			children: [
				{
					path: "welcome",
					name: "WelcomePage",
					component: () => import("/src/views/dashboard/WelcomePage.vue"),
				},
				{
					path: "elements",
					children: [
						{
							path: "checkboxelements",
							name: "CheckboxElements",
							component: () => import("/src/views/dashboard/elements/CheckboxElements.vue"),
						},
						{
							path: "textfieldelements",
							name: "TextFieldElements",
							component: () => import("/src/views/dashboard/elements/TextFieldElements.vue"),
						},
						{
							path: "radiobuttonelements",
							name: "RadiobuttonElements",
							component: () => import("/src/views/dashboard/elements/RadiobuttonElements.vue"),
						},
					],
				},
				{
					path: "ui",
					children: [
						{
							path: "modalui",
							name: "ModalUI",
							component: () => import("/src/views/dashboard/ui/ModalUI.vue"),
						},
						{
							path: "breadcrumbui",
							name: "BreadCrumbUI",
							component: () => import("/src/views/dashboard/ui/breadCrumbs/pageLayout.vue"),
						},
						{
							path: "tabs",
							name: "Tabs",
							component: () => import("/src/views/dashboard/ui/tabs/pageLayout.vue"),
						},
						{
							path: "accordion",
							name: "Accordion",
							component: () => import("/src/views/dashboard/ui/accordion/pageLayout.vue"),
						},
						{
							path: "table",
							name: "Table",
							component: () => import("/src/views/dashboard/ui/table/pageLayout.vue"),
						},
						{
							path: "cardui",
							name: "CardUI",
							component: () => import("/src/views/dashboard/ui/CardUI.vue"),
						},
						{
							path: "buttonui",
							name: "ButtonUI",
							component: () => import("/src/views/dashboard/ui/ButtonUI.vue"),
						},
					],
				},
				{
					path: "sectiontemplates",
					children: [
						{
							path: "footertemplates",
							name: "FooterTemplates",
							component: () => import("/src/views/dashboard/sectionTemplates/FooterTemplates.vue"),
						},
						{
							path: "headertemplates",
							name: "HeaderTemplates",
							component: () => import("/src/views/dashboard/sectionTemplates/HeaderTemplates.vue"),
						},
						{
							path: "herotemplates",
							name: "HeroSectionTemplates",
							component: () => import("/src/views/dashboard/sectionTemplates/HeroSectionTemplates.vue"),
						},
						{
							path: "testimonialtemplates",
							name: "TestimonialTemplates",
							component: () => import("/src/views/dashboard/sectionTemplates/TestimonialTemplates.vue"),
						},
					],
				},
				{
					path: "pagetemplates",
					children: [
						{
							path: "cart",
							name: "Cart",
							component: () => import("/src/views/dashboard/pagetemplates/CartTemplates.vue"),
						},
					],
				},
			],
		},
	],
});

export default router;
