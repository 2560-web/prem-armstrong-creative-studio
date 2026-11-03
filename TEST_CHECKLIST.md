# Release QA checklist

- [ ] `npm install` succeeds and `npm run build` passes
- [ ] Homepage and case study render in current Chrome, Firefox, Safari
- [ ] Desktop 1440px, laptop 1280px, tablet 768px, phone 390px and 320px, landscape checked
- [ ] Keyboard tab navigation, visible focus, no keyboard traps
- [ ] Room selection changes description, rate, features and selected state
- [ ] Invalid / same-day / reverse dates do not show a sample total
- [ ] Valid 2-night booking displays correct arithmetic (e.g. 2 × £285 = £570)
- [ ] Capacity 3 for 2-capacity room shows warning; penthouse accepts 3
- [ ] All project links and email links open correctly
- [ ] `/studio` shows setup message when no project ID is configured
- [ ] After connecting Sanity, editing published room rate visibly changes homepage
- [ ] CMS public/private datasets and CORS settings checked
- [ ] No real-booking or commercial-client claims
- [ ] Lighthouse accessibility / best practices reviewed
- [ ] Capture real desktop/mobile screenshots and screen recording after live deployment
