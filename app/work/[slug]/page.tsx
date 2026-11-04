import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
const projects=[{"slug":"form-and-field","number":"01","title":"FORM & FIELD","tagline":"An editorial website for an imagined architecture studio.","discipline":"Visual identity / responsive front-end","stack":"HTML, CSS, JavaScript","intro":"An architecture practice should feel precise without feeling cold. I designed and coded this fictional studio experience to explore confident typography, considered whitespace and interaction that earns its place.","challenge":"Build a calm, premium-feeling presentation while keeping navigation, images and the project estimator usable on smaller screens.","approach":["A distinctive typographic hierarchy and simple colour system keep the editorial narrative readable.","Responsive image-led project cards balance the visual story with practical mobile browsing.","A JavaScript project estimator updates illustrative ranges in the browser; it is deliberately labelled as a concept."],"detail":"The demo includes mobile navigation and an interactive planning estimator. The enquiry links return visitors to my own working project form, rather than representing a real architecture studio.","demo":"/demos/form-and-field/index.html","next":"fern-and-fold"},{"slug":"atelier-nocturne","number":"02","title":"ATELIER NOCTURNE","tagline":"Atmosphere and logic for a fictional boutique hotel.","discipline":"Experience design / application engineering","stack":"Next.js, React, TypeScript, Sanity content model","intro":"Boutique hotels sell an atmosphere, but the interface must still help a guest understand choices. This self-directed prototype combines an editorial identity with working room and price interactions.","challenge":"Make room comparisons and date calculations comprehensible without suggesting a real booking, real inventory or payment system.","approach":["A component-driven room explorer responds to selection, guest capacity and date inputs.","An explicit validation path avoids misleading sample-price calculations.","A Sanity schema and query support structured room data; when not configured, the demo uses labelled sample content."],"detail":"This is a working estimator, not a reservation service. No real availability checks, booking confirmations or payments take place.","demo":"/#rooms","next":"form-and-field"},{"slug":"fern-and-fold","number":"03","title":"FERN & FOLD","tagline":"A clear, welcoming small-business website concept.","discipline":"Small-business design / responsive build","stack":"HTML, CSS, JavaScript","intro":"A neighbourhood café website should be beautiful, but more importantly useful: visitors need to understand the place and find key details quickly. This concept puts readability and mobile usability first.","challenge":"Give a local business a warm, characterful visual identity while keeping content simple and contact actions easy to discover.","approach":["A readable page structure gives the main content room to breathe.","Responsive layouts keep the presentation coherent across phones and larger screens.","Clear content hierarchy guides visitors toward practical information and next steps."],"detail":"This is an original self-directed demonstration, not a commissioned café website. It shows the type of small business work I can scope and build.","demo":"/demos/fern-and-fold.html","next":"atelier-nocturne"}];
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {slug}=await params;
 const p=projects.find(item=>item.slug===slug);
 if(!p)return {};
 return {title:p.title+' — Project Story | Prem Armstrong D',description:p.tagline,openGraph:{title:p.title+' — Project Story',description:p.tagline,type:'article'}};
}
export default async function ProjectStory({params}:Props){
 const {slug}=await params;
 const p=projects.find(item=>item.slug===slug);
 if(!p)notFound();
 return <><Navigation/><main className="storyPage">
   <div className="storyBreadcrumb"><Link href="/#work">← All selected work</Link><span>PROJECT / {p.number} — SELF-DIRECTED CONCEPT</span></div>
   <header className={'storyHero storyHero-'+p.slug}>
      <span className="eyebrow">{p.discipline}</span>
      <h1>{p.title}</h1>
      <p>{p.tagline}</p>
      <div className="storyMeta"><span>{p.stack}</span><span>PERSONAL CONCEPT / NOT A CLIENT COMMISSION</span></div>
   </header>
   <div className="storyBody">
     <section><span className="eyebrow">01 / CONTEXT</span><div><h2>What I set out to make.</h2><p>{p.intro}</p></div></section>
     <section><span className="eyebrow">02 / DESIGN CHALLENGE</span><div><h2>A clear goal, not just a visual.</h2><p>{p.challenge}</p></div></section>
     <section><span className="eyebrow">03 / IMPLEMENTATION</span><div><h2>How it comes together.</h2><ol>{p.approach.map(point=><li key={point}>{point}</li>)}</ol></div></section>
     <section><span className="eyebrow">04 / THE RESULT</span><div><h2>Explore the real interaction.</h2><p>{p.detail}</p><Link href={p.demo} className="storyDemoLink">Open the working demonstration <span aria-hidden="true">↗</span></Link></div></section>
   </div>
   <aside className="storyNext"><div><span className="eyebrow">HAVE A SIMILAR PROJECT?</span><h2>Make your next idea <em>real.</em></h2><p>Tell me what you need and I'll discuss a clear, practical scope.</p></div><Link href="/contact" className="storyNextButton">Get a Project <span aria-hidden="true">↗</span></Link></aside>
 </main><footer className="storyFooter"><Link href="/#work">← SELECTED WORK</Link><span>PREM ARMSTRONG D</span></footer></>;
}
