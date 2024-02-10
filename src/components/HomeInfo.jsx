import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Xin chào, mình là 
        <span className='font-semibold mx-2 text-white'> Trí Việt</span>
        👋
        <br />
       Hiện đang học tập tại <a href="https://thcsnguyenduq1.hcm.edu.vn/homegd11">THCS Nguyễn Du Q1</a>
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Mình đã từng làm rất nhiều sản phẩm  <br /> và giành giải tại các cuộc thi thành phố và quốc gia
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Tìm hiểu thêm
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
         Những dự án đầu tay của mình 
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Xem thêm 
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
     Bạn đang tìm một người cùng bạn tìm hiểu về lập trình? <br/> Mình có thể giúp bạn!!
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Đi nào!!
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
