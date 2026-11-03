import {defineField,defineType} from 'sanity';
export const project = defineType({name:'project',title:'Portfolio project',type:'document',fields:[
 defineField({name:'title',type:'string',title:'Project title'}),
 defineField({name:'slug',type:'slug',title:'Slug',options:{source:'title'}}),
 defineField({name:'summary',type:'text',title:'Summary'}),
 defineField({name:'stack',type:'array',of:[{type:'string'}],title:'Technology stack'}),
 defineField({name:'projectType',type:'string',title:'Project type',options:{list:['Self-directed concept','Commercial client work']}})
]});