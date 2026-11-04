import './globals.css';
import type {Metadata} from 'next';
export const metadata: Metadata={title:'Prem Armstrong D — Creative Front-end Developer',description:'Self-directed digital experiences, responsive websites and interaction design by Prem Armstrong D.',robots:{index:true,follow:true},metadataBase:new URL("https://prem-armstrong-creative-studio.vercel.app"),openGraph:{type:"website",title:"Prem Armstrong D — Creative Front-end Developer",description:"Thoughtful websites, working interactions, and original front-end concepts."}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>};
