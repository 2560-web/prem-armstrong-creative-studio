import {NextStudio} from 'next-sanity/studio';
import config from '../../../sanity.config';
export const dynamic='force-dynamic';
export default function StudioPage(){
 if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return <main style={{padding:40}}>Sanity Studio needs NEXT_PUBLIC_SANITY_PROJECT_ID. See README.</main>;
 return <NextStudio config={config}/>;
}
