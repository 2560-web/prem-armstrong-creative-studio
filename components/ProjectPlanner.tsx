'use client';
import {useState} from 'react';
import Link from 'next/link';

const offers=[
{title:'Landing page',detail:'A focused page with a compelling story, clear calls to action and a responsive finish.',base:200},
{title:'Business website',detail:'A small multi-page presence, built for clarity and useful customer enquiries.',base:500},
{title:'Website improvements',detail:'Fix a page, refine mobile layouts, improve interactions or finish an incomplete site.',base:80}
] as const;
export default function ProjectPlanner(){
 const [selected,setSelected]=useState(0);
 const [extras,setExtras]=useState<string[]>([]);
 const options=['Contact form','Extra page','Content tidy-up'];
 const extrasPrice=extras.reduce((sum,key)=>sum+(key==='Extra page'?100:50),0);
 const price=offers[selected].base+extrasPrice;
 function toggle(key:string){setExtras(old=>old.includes(key)?old.filter(x=>x!==key):[...old,key]);}
 const query=new URLSearchParams({type:offers[selected].title,notes:extras.length?extras.join(', '):'Initial enquiry'});
 return <section id="project-planner" className="section plannerSection" aria-labelledby="planner-heading"><div className="sectionTop"><span className="eyebrow">04 / START WITH A BRIEF</span><p>Get a feel for the work, shape your requirements and start a conversation. No generic sales pitch.</p></div><div className="plannerHeader"><div><span className="eyebrow">INTERACTIVE PROJECT PLANNER</span><h2 id="planner-heading">Your idea.<br/><em>A clearer next step.</em></h2></div><p>Select the work you have in mind. The guide updates as you explore; the final quote is always agreed after reviewing your brief.</p></div><div className="plannerGrid"><div className="plannerChoices"><h3>01 / What are you building?</h3><div className="plannerOptions" role="group" aria-label="Project type">{offers.map((offer,index)=><button key={offer.title} type="button" aria-pressed={selected===index} className={'plannerOption '+(selected===index?'isSelected':'')} onClick={()=>setSelected(index)}><span>{String(index+1).padStart(2,'0')}</span><strong>{offer.title}</strong><span aria-hidden="true">{selected===index?'●':'○'}</span></button>)}</div><h3>02 / Anything else?</h3><div className="plannerExtras">{options.map(item=><label key={item}><input type="checkbox" checked={extras.includes(item)} onChange={()=>toggle(item)}/><span>{item}</span></label>)}</div></div><div className="plannerSummary"><span className="eyebrow">YOUR STARTING POINT</span><h3>{offers[selected].title}</h3><p>{offers[selected].detail}</p><div className="plannerLine"><span>Illustrative budget from</span><strong>£{price.toLocaleString('en-GB')}</strong></div><p className="plannerSmall">Guide only, not an instant quote. Complexity, content and timing can change the final price.</p><Link className="plannerCTA" href={'/contact?'+query.toString()}>Get a Project <span aria-hidden="true">↗</span></Link><p className="plannerSmall">No obligation. Tell me what you need and I’ll review your brief.</p></div></div></section>
}
