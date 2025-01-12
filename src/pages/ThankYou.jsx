import Thanks from '../assets/thanks.webp'
export default function ThankYou() {
  return (
    <div className='thankYou-page wrapper'>
      <img src={Thanks} alt='thank you ' />
      <h2>Thanks for your order</h2>
      <p>We will contact you soon..</p>
   </div>
  );
}
