
import './style.css';
export default function NewsLetter() {
  return (
    <div className="newsletter">
      <input type="email" name="email" id="" placeholder='Insira seu e-mail'/>
      <button className='botao'>Assinar newsletter</button>
    </div>
  );
}
