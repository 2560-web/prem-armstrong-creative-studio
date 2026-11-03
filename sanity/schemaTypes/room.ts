import {defineField,defineType} from 'sanity';
export const room = defineType({name:'room',title:'Hotel Room',type:'document',fields:[
 defineField({name:'name',title:'Name',type:'string',validation:r=>r.required()}),
 defineField({name:'sortOrder',title:'Display order',type:'number'}),
 defineField({name:'category',title:'Category',type:'string'}),
 defineField({name:'description',title:'Description',type:'text',rows:4}),
 defineField({name:'rate',title:'Nightly sample rate (GBP)',type:'number',validation:r=>r.required().min(1)}),
 defineField({name:'capacity',title:'Guests',type:'number',validation:r=>r.required().min(1)}),
 defineField({name:'features',title:'Features',type:'array',of:[{type:'string'}]}),
 defineField({name:'accent',title:'Visual number',type:'string'}),
 defineField({name:'availabilityNote',title:'Availability message',type:'string'})
]});