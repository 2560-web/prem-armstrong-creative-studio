'use client';
import Link from 'next/link';
import {useEffect,useState} from 'react';

const items=[
  {href:'/#work',text:'Work'},
  {href:'/#experience-lab',text:'Experience lab'},
  {href:'/#about',text:'Approach'},
  {href:'/case-study',text:'Case study'}
];
export default function Navigation(){
 const [open,setOpen]=useState(false);
 const [progress,setProgress]=useState(0);
 useEffect(()=>{
   let frame=0;
   const update=()=>{if(frame)return;frame=requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-window.innerHeight;setProgress(max>0?Math.min(100,window.scrollY/max*100):0);frame=0;});};
   update(); window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);
   return()=>{window.removeEventListener('scroll',update);window.removeEventListener('resize',update);cancelAnimationFrame(frame);};
 },[]);
 return <header className="nav" id="top">
   <Link href="/" className="wordmark" aria-label="Prem Armstrong home" onClick={()=>setOpen(false)}>P<span className="dot">.</span>A</Link>
   <button className="navToggle" type="button" aria-expanded={open} aria-controls="primary-navigation" aria-label={open?'Close navigation':'Open navigation'} onClick={()=>setOpen(v=>!v)}><span aria-hidden="true">{open?'✕':'☰'}</span><span>{open?'Close':'Menu'}</span></button>
   <nav id="primary-navigation" aria-label="Main" className={open?'navLinks isOpen':'navLinks'}>
     {items.map(item=><Link key={item.href} href={item.href} onClick={()=>setOpen(false)}>{item.text}</Link>)}
     <Link className="navContact" href="/contact" onClick={()=>setOpen(false)}>Get a Project <span aria-hidden="true">↗</span></Link>
   </nav>
   <div className="readingProgress" aria-hidden="true"><span style={{transform:`scaleX(${progress/100})`}}/></div>
 </header>;
}
