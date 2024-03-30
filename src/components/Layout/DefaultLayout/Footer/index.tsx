import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='border-t border-gray-300 border-b py-10 my-5'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        <div className=''>
          <div className='flex justify-center items-center mb-5 px-2'>
            <img className='w-[80px] h-[24px]' src="./images/logoIvyModa.png" alt="" />
            <img className='w-[113px] h-[24px]' src="https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=0cfdeac4-6e7f-4fca-941f-57a0a0962777" alt="" />
            <img className='w-[113px] h-[32px]' src="https://pubcdn.ivymoda.com/ivy2/images/img-congthuong.png" alt="" />
          </div>
          <p className='font-thin my-5 px-3'>Công ty Cổ phần một thành viên</p>
          <p className='font-thin my-5 px-3'>kinh doanh: 09876543210</p>
          <p className='font-thin my-5 px-3'>Địa chỉ: T.Long Phú, X.Hòa Thạch, H.Quốc Oai, TP.Hà Nội, Việt Nam</p>
          <p className='font-thin my-5 px-3'>Email:npt@gmail.com</p>
          <div className='flex justify-between items-center px-3 my-5'>
            <Link to="">
              <img className='w-3 h-6' src="https://pubcdn.ivymoda.com/ivy2/images/ic_fb.svg" alt="" />
            </Link>
            <Link to="">
              <img className='w-[22px] h-[22px]' src="https://pubcdn.ivymoda.com/ivy2/images/ic_gg.svg" alt="" />
            </Link>
            <Link to="">
              <img className='w-[30px] h-[30px]' src="https://pubcdn.ivymoda.com/ivy2/images/ic_instagram.svg" alt="" />
            </Link>
            <Link to="">
              <img className='w-[27px] h-[27px]' src="https://pubcdn.ivymoda.com/ivy2/images/ic_pinterest.svg" alt="" />
            </Link>
            <Link to="">
              <img className='w-6 h-[17px]' src="https://pubcdn.ivymoda.com/ivy2/images/ic_ytb.svg" alt="" />
            </Link>
          </div>
          <div className='bg-[black] text-[#fff] rounded-tl-lg rounded-br-lg py-2 px-3 text-center mx-3 my-3'>
            HOTLINE: 0983 888 888
          </div>
        </div>
        <div className='px-5'>
          <h1 className='text-2xl font-semibold'>Giới thiệu</h1>
          <Link to="">
            <p className='font-thin my-5'>Về Ivy Moda</p>
          </Link>
          <Link to="">
            <p className='font-thin my-5'>Tuyển dụng</p>
          </Link>
          <Link to="">
            <p className='font-thin my-5'>Hệ thống cửa hàng</p>
          </Link>
        </div>
        <div className='px-3'>
          <h1 className='text-2xl font-semibold'>Dịch vụ</h1>
          <Link to="">
            <p className='font-thin my-5'>Chính sách điều khoản</p>
          </Link>
          <Link to="">
            <p className='font-thin my-5'>Hướng dẫn mua hàng</p>
          </Link>
          <Link to="">
            <p className='font-thin my-5'>Chính sách đổi trả</p>
          </Link>
          <Link to="">
            <p className='font-thin my-5'>Chính sách bảo hành</p>
          </Link>
          <Link to="">
            <p className='font-thin my-5'>Chính sách vận hành</p>
          </Link>
          <Link to="">
            <p className='font-thin my-5'>Q&A</p>
          </Link>
        </div>
        <div className='px-3'>
          <h1 className='text-2xl font-semibold'>Liên hệ</h1>
          <Link to="">
            <p className='font-thin my-5'>Hotline</p>
          </Link>
          <Link to="">
            <p className='font-thin my-5'>Email</p>
          </Link>
          <Link to="">
            <p className='font-thin my-5'>Live Chat</p>
          </Link>
          <Link to="">
            <p className='font-thin my-5'>Messenger</p>
          </Link>
          <Link to="">
            <p className='font-thin my-5'>Liên hệ</p>
          </Link>
        </div>
        <div className=''>
          <div className='border-[5px] rounded-tl-[70px] rounded-br-[70px]'>
            <h1 className='text-2xl font-semibold px-2 pt-4 text-center'>
              Nhận thông tin các chương trình Ivy Moda
            </h1>
            <div className='flex justify-center items-center px-2 mb-7 mt-5'>
              <input className='outline-none w-[150px]' type="text" placeholder='Nhập địa chỉ email' />
              <button className='border border-black hover:bg-[black] text-black font-thin py-2 px-4 rounded-tl-3xl rounded-br-3xl hover:text-[#fff] w-[100px]'>
                Đăng ký
              </button>
            </div>
          </div>
          <h1 className='text-2xl font-semibold py-5'>Download App</h1>
          <img className='mb-5' src="https://pubcdn.ivymoda.com/ivy2/images/appstore.png" alt="" />
          <img src="https://pubcdn.ivymoda.com/ivy2/images/googleplay.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;