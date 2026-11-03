import {defineField,defineType} from 'sanity';
export const siteSettings=defineType({name:'siteSettings',title:'Site settings',type:'document',fields:[
 defineField({name:'title',type:'string',title:'Website title'}),
 defineField({name:'intro',type:'text',title:'Introduction'}),
 defineField({name:'contactEmail',type:'string',title:'Contact email'})
]});