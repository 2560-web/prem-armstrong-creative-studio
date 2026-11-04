'use client';
import {useState} from 'react';
import Link from 'next/link';

const looks=[
 {id:'editorial',label:'Editorial',title:'Spaces made for living.',subtitle:'Thoughtful places. Beautifully considered.',color:'#f0e7d9',ink:'#2e3830',accent:'#b37043',font:'Georgia, serif'},
 {id:'modern',label:'Modern',title:'Make room for better.',subtitle:'Digital spaces with clarity and intent.',color:'#e0eeed',ink:'#173c45',accent:'#e46448',font:'Manrope, Arial, sans-serif'},
 {id:'nocturne',label:'Nocturne',title:'Designed to stay with you.',subtitle:'Distinctive spaces for singular experiences.',color:'#192326',ink:'#f3e8d8',accent:'#d4a46b',font:'Georgia, serif'}
] as const;
export default function ExperienceLab(){
  const [theme,setTheme]=useState(0);
  const [device,setDevice]=useState<'desktop'|'mobile'>('desktop');
  const [motion,setMotion]=useState(true);
  const [pointer,setPointer]=useState({x:50,y:45});
  const selected=looks[theme];
  const query=new URLSearchParams({type:'Landing page',notes:'Interested in a responsive website concept with '+selected.label+' art direction'});
  return <section className="section experienceSection" id="experience-lab" aria-labelledby="experience-title">
    <div className="sectionTop"><span className="eyebrow">05 / EXPERIENCE LAB</span><p>A living demonstration of front-end design systems: three visual directions, two device formats and purposeful motion. Change the experience yourself.</p></div>
    <div className="experienceIntro"><div><span className="eyebrow">INTERACTIVE FRONT-END EXPERIMENT</span><h2 id="experience-title">One idea.<br/><em>Infinite possibilities.</em></h2></div><p>Watch the typography, colour, composition and layout adapt together. This is a browser-rendered demonstration, not a static mock-up.</p></div>
    <div className="experienceLab">
      <div className="experienceControls" role="group" aria-label="Experience controls">
        <div className="experienceControlGroup"><span className="experienceLabel">ART DIRECTION</span><div className="experienceSegment">{looks.map((item,i)=><button key={item.id} type="button" aria-pressed={i===theme} onClick={()=>setTheme(i)} className={i===theme?'active':''}>{item.label}</button>)}</div></div>
        <div className="experienceControlGroup"><span className="experienceLabel">VIEWPORT</span><div className="experienceSegment"><button type="button" aria-pressed={device==='desktop'} onClick={()=>setDevice('desktop')} className={device==='desktop'?'active':''}>Desktop</button><button type="button" aria-pressed={device==='mobile'} onClick={()=>setDevice('mobile')} className={device==='mobile'?'active':''}>Mobile</button></div></div>
        <div className="experienceControlGroup"><span className="experienceLabel">MOTION</span><button className="experienceMotion" type="button" aria-pressed={motion} onClick={()=>setMotion(v=>!v)}>{motion?'On':'Off'} <span aria-hidden="true">{motion?'●':'○'}</span></button></div>
      </div>
      <div className="experienceStage" data-device={device} data-motion={motion?'on':'off'}>
        <div className="experienceDevice">
          <div className="experienceBrowser" aria-hidden="true"><span><i/><i/><i/></span><small>live concept / {selected.id}</small><span>↗</span></div>
          <div className="experiencePreview" style={{background:selected.color,color:selected.ink,'--experience-accent':selected.accent} as React.CSSProperties} onPointerMove={e=>{if(!motion)return;const rect=e.currentTarget.getBoundingClientRect();setPointer({x:Math.round((e.clientX-rect.left)/rect.width*100),y:Math.round((e.clientY-rect.top)/rect.height*100)})}}>
            <div className="experiencePreviewNav"><strong>STUDIO <span>01</span></strong><span>EXPERIENCES / IDEAS / SPACE</span><span>MENU +</span></div>
            <div className="experiencePreviewBody">
              <div className="experiencePreviewCopy"><span className="experiencePreviewKicker">A DIFFERENT PERSPECTIVE</span><h3 style={{fontFamily:selected.font}}>{selected.title}</h3><p>{selected.subtitle}</p><span className="experiencePreviewAction">Explore the concept <b aria-hidden="true">↗</b></span></div>
              <div className="experienceArt" style={{background:`radial-gradient(circle at ${pointer.x}% ${pointer.y}%,${selected.accent}88,transparent 56%)`}} aria-hidden="true"><div className="experienceOrb"/><div className="experienceFrame"/><span>FORM / FUNCTION</span></div>
            </div>
            <div className="experiencePreviewFoot"><span>CREATIVE SYSTEMS / 2026</span><span>SCROLL TO DISCOVER ↓</span></div>
          </div>
        </div>
      </div>
      <div className="experienceBottom"><p><strong>Built to adapt.</strong> These switches update a real responsive interface, not an image. The preview demonstrates composable visual systems, accessibility controls and interactive UI state.</p><Link href={'/contact?'+query.toString()} className="textButton">Build something distinctive <span aria-hidden="true">↗</span></Link></div>
    </div>
  </section>;
}
