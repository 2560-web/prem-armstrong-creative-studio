import { createClient } from '@sanity/client';

export type Room = { _id: string; name: string; category: string; description: string; rate: number; capacity: number; features: string[]; accent: string; availabilityNote: string };
export type Project = { slug: string; title: string; eyebrow: string; summary: string; stack: string[]; outcome: string; };
export const demoRooms: Room[] = [
  { _id:'room-1',name:'The Obsidian Suite',category:'Signature suite', description:'A quieter kind of grandeur. Travertine, charcoal linen and a room designed around the evening light.',rate:285,capacity:2,features:['King bed','Rain shower','City outlook'],accent:'01',availabilityNote:'Sample room — request availability'},
  { _id:'room-2',name:'The Atelier Room',category:'Design room',description:'Soft architectural forms, a warm palette and a place for slowing down.',rate:195,capacity:2,features:['Queen bed','Writing desk','Courtyard view'],accent:'02',availabilityNote:'Sample room — request availability'},
  { _id:'room-3',name:'The Penthouse',category:'Private residence',description:'An expansive retreat with its own rhythm, panoramic views and a private terrace.',rate:460,capacity:3,features:['Private terrace','Lounge','Panoramic view'],accent:'03',availabilityNote:'Sample room — request availability'}
];
export const projects:Project[] = [
 {slug:'atelier-nocturne',title:'ATELIER NOCTURNE',eyebrow:'01 / HOSPITALITY EXPERIENCE',summary:'An editorial boutique hotel concept with interactive room selection and a live, local price estimate.',stack:['React','Next.js','TypeScript','Sanity content model'],outcome:'Working interface and demonstration booking estimator — no real reservations or payments.'},
 {slug:'form-and-field',title:'FORM & FIELD',eyebrow:'02 / CREATIVE PRACTICE',summary:'Brand-led design studio concept focused on negative space, elegant typography and confident pacing.',stack:['HTML','CSS','JavaScript'],outcome:'Self-directed concept; no commercial client.'},
 {slug:'fern-and-fold',title:'FERN & FOLD',eyebrow:'03 / INDEPENDENT HOSPITALITY',summary:'A responsive neighbourhood café concept with clear navigation, service information and customer enquiry pathways.',stack:['HTML','CSS','JavaScript'],outcome:'Self-directed concept; no commercial client.'}
];
export async function getRooms():Promise<{rooms:Room[],source:'sanity'|'demo'}>{
 const projectId=process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
 const dataset=process.env.NEXT_PUBLIC_SANITY_DATASET||'production';
 if(!projectId) return {rooms:demoRooms,source:'demo'};
 try{
  const client=createClient({projectId,dataset,apiVersion:process.env.NEXT_PUBLIC_SANITY_API_VERSION||'2025-01-01',useCdn:false});
  const entries=await client.fetch<Room[]>(`*[_type == "room" && defined(name)] | order(sortOrder asc){"_id":_id,name,category,description,rate,capacity,features,accent,availabilityNote}`);
  if(entries?.length) return {rooms:entries,source:'sanity'};
 }catch(error){console.warn('Sanity unavailable; using explicit demo content.',error)}
 return {rooms:demoRooms,source:'demo'};
}
