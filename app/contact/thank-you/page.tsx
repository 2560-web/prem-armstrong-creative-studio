import Navigation from '../../../components/Navigation';
import Link from 'next/link';
export const metadata={title:'Enquiry Sent — Prem Armstrong D'};
export default function Thanks(){return <><Navigation/><main className="enquiryPage"><div className="intro"><span className="eyebrow">PROJECT ENQUIRY</span><h1>Thank you<br/><em>for getting in touch.</em></h1><p>Your enquiry was received and saved securely. I'll review it and respond to the email address you provided.</p><p><Link href="/" className="textButton">Back to portfolio ↗</Link></p><p className="enquiryNote">If you don't hear back, email <a href="mailto:prempugh@gmail.com?subject=Website%20project%20enquiry">prempugh@gmail.com</a> directly.</p></div></main></>}
