import { supabase } from "@/lib/supabase";

const packages = [
  { coins: "50 Coin", bonus: "+10 Bonus", total: "60", price: "10,000 MMK" },
  { coins: "220 Coin", bonus: "+20 Bonus", total: "240", price: "23,000 MMK" },
  { coins: "325 Coin", bonus: "+25 Bonus", total: "350", price: "35,000 MMK" },
  { coins: "450 Coin", bonus: "+50 Bonus", total: "500", price: "47,000 MMK" },
  { coins: "950 Coin", bonus: "+150 Bonus", total: "1,100", price: "75,000 MMK" }
];

export default function Home() {
  const configured = Boolean(supabase);
  return <main className="shell">
    <header><div className="brand">RET <span>×</span> NOVA KEY STORE</div><nav><a href="https://t.me/qualityvdatPP" aria-label="Telegram">Telegram</a><a href="https://www.tiktok.com/@qualityvdatp?_r=1&_t=ZS-9BFPK9DTKpZ" aria-label="TikTok">TikTok</a></nav></header>
    <section className="hero"><p className="eyebrow">RET PRESENTS</p><h1>NOVA KEY<br/>STORE</h1><p>Choose your Coin package. Pay with KBZPay. Submit your receipt and receive your Nova Key by email after verification.</p><a className="cta" href="#packages">VIEW PACKAGES ↓</a></section>
    <section id="packages"><h2>Choose Your Package</h2><div className="grid">{packages.map((p) => <article className="pkg" key={p.coins}><h3>{p.coins}</h3><p className="bonus">{p.bonus}</p><p>Total {p.total} Coins</p><strong>{p.price}</strong><p className="note">Ordering and payment submission will be enabled in the next development step.</p></article>)}</div></section>
    <section className="payment"><h2>Payment</h2><p>KBZPay payment details will be displayed here after the owner confirms the final public-facing setup.</p><p>Payment receipts must be checked manually before an order is approved.</p></section>
    <footer>© NOVA KEY STORE · RET</footer>
    {!configured && <small className="setup">Setup required: add your Supabase URL and Publishable Key to environment variables.</small>}
  </main>;
}