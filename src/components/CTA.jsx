import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Bạn có muốn liên hệ với mình <br className='sm:block hidden' />
        Hãy click nút ở bên dưới
      </p>
      <Link to='/contact' className='btn'>
        Liên hệ
      </Link>
    </section>
  );
};

export default CTA;
