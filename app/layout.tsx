import './globals.css';
import type {Metadata} from 'next';
export const metadata: Metadata={title:'Prem Armstrong D — Creative Front-end Developer',description:'Self-directed digital experiences, responsive websites and interaction design by Prem Armstrong D.',robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>};
