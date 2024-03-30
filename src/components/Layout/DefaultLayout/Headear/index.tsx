import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  return (
    <div className='sticky top-0 z-50 bg-white border-b border-gray-300 pb-[5px] pt-[10px] flex justify-between items-center'>
      <div className='flex justify-center items-center text-sm font-semibold'>
        <h1 className='mr-5 hover:text-[#AC2F33] relative group'>
          NAM
          <div className="hidden group-hover:flex absolute top-[15px] left-0 z-10 w-[480px] rounded-md bg-gray-300 flex-col justify-center items-center space-y-2 p-4 mt-[18px]
        after:content-[''] after:h-[10px] after:w-[10px] after:z-20 after:border-l-[20px] after:border-l-transparent after:border-solid after:border-b-[20px] 
        after:border-r-[20px] after:border-r-transparent after:border-b-gray-300 after:top-[-10px] after:left-[0px] after:absolute">
            <div className='flex justify-center'>
              <div className='mr-10'>
                <h1 className='text-black mb-2 text-[15px] font-semibold'>ÁO</h1>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Áo thun</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Áo khoác</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Áo sơ mi</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Áo vest</p>
                </Link>
              </div>
              <div className='mr-10'>
                <h1 className='text-black mb-2 text-[15px] font-semibold'>QUẦN NAM</h1>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Quần jeans</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Quần short</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Quần dài</p>
                </Link>
              </div>
              <div className=''>
                <h1 className='text-black mb-2 text-[15px] font-semibold'>Phụ kiện</h1>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Phụ kiện</p>
                </Link>
              </div>
            </div>
          </div>
        </h1>
        <h1 className='mr-5 hover:text-[#AC2F33] relative group'>
          NỮ
          <div className="hidden group-hover:flex absolute top-[15px] left-0 z-10 w-[500px] rounded-md bg-gray-300 flex-col justify-center items-center space-y-2 p-4 mt-[18px]
        after:content-[''] after:h-[10px] after:w-[10px] after:z-20 after:border-l-[20px] after:border-l-transparent after:border-solid after:border-b-[20px] 
        after:border-r-[20px] after:border-r-transparent after:border-b-gray-300 after:top-[-10px] after:left-[0px] after:absolute">
            <div className='flex justify-center'>
              <div className='mr-10'>
                <h1 className='text-black mb-2 text-[15px] font-semibold'>ÁO</h1>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Áo sơ mi</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Áo dáng peplum</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Áo thun/ len</p>
                </Link>
              </div>
              <div className='mr-10'>
                <h1 className='text-black mb-2 text-[15px] font-semibold'>ÁO KHOÁC</h1>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Áo vest/ blazer</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Áo dạ/ măng tô</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Áo phao</p>
                </Link>
              </div>
              <div className=''>
                <h1 className='text-black mb-2 text-[15px] font-semibold'>SET BỘ</h1>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Set bộ công sở</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Set bộ co-ords</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Set bộ thun/ len</p>
                </Link>
              </div>
            </div>
          </div>
        </h1>
        <h1 className='mr-5 hover:text-[#AC2F33] relative group'>
          BIG SALE THÁNG {currentMonth}
          <div className="hidden group-hover:flex absolute top-[15px] left-0 z-10 w-[500px] rounded-md bg-gray-300 flex-col justify-center items-center space-y-2 p-4 mt-[18px]
        after:content-[''] after:h-[10px] after:w-[10px] after:z-20 after:border-l-[20px] after:border-l-transparent after:border-solid after:border-b-[20px] 
        after:border-r-[20px] after:border-r-transparent after:border-b-gray-300 after:top-[-10px] after:left-[0px] after:absolute">
            <div className='flex justify-center'>
              <div className='mr-10 ml-4'>
                <h1 className='text-black mb-2 text-[15px] font-semibold'>SALE 50% TOÀN BỘ SP</h1>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Nam</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Nữ</p>
                </Link>
              </div>
              <div className='mr-10'>
                <h1 className='text-black mb-2 text-[15px] font-semibold'>BIG SALE THÁNG {currentMonth}</h1>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Áo sơ mi</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Áo thun</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Đầm</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Chân Váy</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Quần</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Áo khoác/ Vest</p>
                </Link>
              </div>
              <div className=''>
                <h1 className='text-black mb-2 text-[15px] font-semibold'>UP TO 75% ONLY ONLINE</h1>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Nam</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>Nữ</p>
                </Link>
              </div>
            </div>
          </div>
        </h1>
        <h1 className='mr-5 hover:text-[#AC2F33] relative group'>
          BỘ SƯU TẬP
          <div className="hidden group-hover:flex absolute top-[15px] left-0 z-10 w-[200px] rounded-md bg-gray-300 flex-col justify-center items-center space-y-2 p-4 mt-[18px]
        after:content-[''] after:h-[10px] after:w-[10px] after:z-20 after:border-l-[20px] after:border-l-transparent after:border-solid after:border-b-[20px] 
        after:border-r-[20px] after:border-r-transparent after:border-b-gray-300 after:top-[-10px] after:left-[0px] after:absolute">
            <div className='flex justify-center'>
              <div className='mr-10'>
                <h1 className='text-black mb-2 text-[15px] font-semibold'>NỮ</h1>
                <Link to="">
                  <p className='text-black font-thin mb-2'>THE FLOW</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>MOMENT OF BLISS</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>URBAN CHIC</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>ARTISANAL DELICATE</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>BLOSSOMS DELIGHT</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>THE WHISPER OF CLASSY</p>
                </Link>
                <Link to="">
                  <p className='text-black font-thin mb-2'>EXPRESS</p>
                </Link>
              </div>
            </div>
          </div>
        </h1>
        <h1 className='mr-5 hover:text-[#AC2F33] relative group'>
          VỀ CHÚNG TÔI
          <div className="hidden group-hover:flex absolute top-[15px] left-0 z-10 w-[250px] rounded-md bg-gray-300 flex-col justify-center items-center space-y-2 p-4 mt-[18px]
        after:content-[''] after:h-[10px] after:w-[10px] after:z-20 after:border-l-[20px] after:border-l-transparent after:border-solid after:border-b-[20px] 
        after:border-r-[20px] after:border-r-transparent after:border-b-gray-300 after:top-[-10px] after:left-[0px] after:absolute">
            <div className='flex justify-center'>
              <div className=''>
                <Link to="">
                  <h1 className='text-black mb-2 text-[15px] font-semibold'>Về Ivy Moda</h1>
                </Link>
                <Link to="">
                  <h1 className='text-black mb-2 text-[15px] font-semibold'>Fashion show</h1>
                </Link>
                <Link to="">
                  <h1 className='text-black mb-2 text-[15px] font-semibold'>Hoạt động cộng đồng</h1>
                </Link>
              </div>
            </div>
          </div>
        </h1>
      </div>
      <div className='flex justify-center items-center'>
        <img className='w-[140px] h-[45px]' src="./images/logoIvyModa.png" alt="IvyModa Logo" />
      </div>
      <div className='flex justify-center items-center px-5'>
        <div className="flex justify-center items-center rounded-md border border-gray-300 h-[37px] w-[320px] mr-7">
          <div className="flex justify-center items-center w-[100%]">
            <input
              className="flex items-center justify-center w-[100%] outline-none px-3 text-sm"
              type="text"
              placeholder="TÌM KIẾM SẢN PHẨM ..."
            // onChange={handleInputChange}
            />
            <img className="mr-3" src="./icons/search.svg" alt="search" />
          </div>
        </div>
        <div className="relative">
          <div className="group">
            <div className="h-[50px] flex justify-center items-center">
              <img className="cursor-pointer mr-1 rounded-full w-[35px] h-[35px] group" src="images/Shiba.jpg" alt="Avatar" />
              <img className="absolute mb-2 bottom-0 right-0" src="./icons/status.svg" alt="status" />
            </div>
            <div className="hidden group-hover:flex absolute top-[15px] right-0 z-10 w-[165px] rounded-md bg-[#0F60FF] flex-col justify-center items-center space-y-2 p-4 mt-[50px]
        after:content-[''] after:h-[10px] after:w-[10px] after:z-20 after:border-l-[20px] after:border-l-transparent after:border-solid after:border-b-[20px] 
        after:border-r-[20px] after:border-r-transparent after:border-b-[#0F60FF] after:top-[-10px] after:right-[0px] after:absolute">
              <p className="text-gray-300"></p>
              <p className="text-white hover:text-gray-300 cursor-pointer">Thông tin</p>
              <p className="text-white hover:text-gray-300 cursor-pointer">Cài đặt</p>
              <p className="text-white hover:text-gray-300 cursor-pointer">Đăng xuất</p>
            </div>
          </div>
        </div>
        <div className='px-7'>
          <img src="./icons/contact.svg" alt="HELP" />
        </div>
        <div className='relative'>
          <img src="./icons/cart.svg" alt="CART" />
          <span className="absolute flex flex-col rounded-lg w-4 h-4 text-[12px] text-[#fff] bg-[#EA5455] ml-8 justify-center items-center" style={{ top: '10%', transform: 'translateY(-0%)' }}>4</span>
        </div>
      </div>
    </div>
  );

}

export default Header;
