import React from 'react';
import New from './Content/new';
import ImageSlider from './imageSlider';
import Online from './Content/online';
import { Link } from 'react-router-dom';

const Home = () => {
  const deal = [
    {
      url: "https://pubcdn.ivymoda.com/files/news/2024/03/15/8eb86e893f88a6f1ef5228931455c482.jpg",
      href: "",
      title: "Set nàng công sở thời thượng"
    },
    {
      url: "https://pubcdn.ivymoda.com/files/news/2024/03/15/25005856e4a1feafc79b2345ed583110.jpg",
      href: "",
      title: "Set nàng công sở dịu dàng"
    },
    {
      url: "https://pubcdn.ivymoda.com/files/news/2024/03/15/84fe72b1174f55e730190d8cd7d35413.jpg",
      href: "",
      title: "Set trẻ trung năng động chào ngày mới"
    },
    {
      url: "https://pubcdn.ivymoda.com/files/news/2024/03/15/f5b5cddce9c774ce3e1a2d4cee998778.jpg",
      href: "",
      title: "Set nhẹ nhàng, tươi mới đón gió xuân"
    }
  ]
  const slides = [
    { url: "https://pubcdn.ivymoda.com/files/news/2024/03/13/c34373665212055c5ba83964be78eee3.jpg", title: "Slide1" },
    { url: "https://pubcdn.ivymoda.com/files/news/2024/03/21/8474a5e33bed841dcc44edc14bbdc541.jpg", title: "Slide2" },
    { url: "https://pubcdn.ivymoda.com/files/news/2024/03/11/f00d3b57d5f821850a978119f97617e8.jpg", title: "Slide3" },
    { url: "https://pubcdn.ivymoda.com/files/news/2024/03/11/824db95ef632b7133f437915fa738500.jpg", title: "Slide4" }
  ];

  const banner = [
    {
      href: "",
      url: "https://pubcdn.ivymoda.com/files/news/2024/03/15/1ced4bd12fb0f7d4d285190637665478.jpg"
    },
    {
      href: "",
      url: "https://pubcdn.ivymoda.com/files/news/2024/03/15/34652a0b35bff20a7bf4fd0304a41b5a.jpg"
    }
  ]

  const gallery = [
    {
      href: "",
      url: "https://pubcdn.ivymoda.com/files/news/2024/03/14/63dadf4881dfafb82974878ce10ff320.jpg"
    },
    {
      href: "",
      url: "https://pubcdn.ivymoda.com/files/news/2024/03/14/dcd418cefdaf25e2aff92e49104808ec.jpg"
    },
    {
      href: "",
      url: "https://pubcdn.ivymoda.com/files/news/2024/03/14/7a48afb677191c72a20c2614d6dd560f.jpg"
    },
    {
      href: "",
      url: "https://pubcdn.ivymoda.com/files/news/2024/03/14/f282dbe5eba604c00722f095cb7c6f9d.jpg"
    },
    {
      href: "",
      url: "https://pubcdn.ivymoda.com/files/news/2024/03/14/026b731cd563eb954a3f32771fdd1389.jpg"
    }
  ]
  return (
    <div className='w-full'>
      <div className='flex justify-between items-center mb-5'>
        <div className='flex-1 text-[16px] font-semibold bg-[#D73831] text-[#fff] px-[50px] py-3 flex justify-center items-center'>
          <h1>SALE ALL 50% + THÊM 10% HĐ TỪ 2 SP</h1>
        </div>
        <div className='flex-1 text-[16px] font-bold bg-[#DC633A] text-[#fff] px-[50px] py-3 flex justify-center items-center'>
          <h1>SALE UPTO 75%</h1>
        </div>
        <div className='flex-1 text-[16px] font-bold bg-[#AC2F33] text-[#fff] px-[50px] py-3 flex justify-center items-center'>
          <h1>NEW ARRIVAL + GIẢM 10% HĐ TỪ 2 SP</h1>
        </div>
      </div>
      <div className='relative'>
        <div className='w-full mx-auto relative'>
          <ImageSlider slides={slides} />
        </div>
      </div>
      <div>
        <New />
      </div>
      <div>
        <Online />
      </div>
      <div>
        <h1 className='text-center tracking-wider uppercase font-semibold text-3xl leading-10 font-montserrat text-gray-900 pt-5 pb-3'>COMBO SÀNH ĐIỆU - DEAL HỜI</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {deal.map(item => (
            <div key={item.url}>
              <Link to={item.href}>
                <img className=' w-full h-[240px] px-3 rounded-tl-[70px] rounded-br-[70px]' src={item.url} alt="deal image" />
                <p className='text-lg px-3 py-2 hover:text-[red]' >{item.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          {banner.map(item => (
            <div key={item.url}>
              <Link to={item.href}>
                <img className='w-full h-[270px] my-3 px-3 rounded-tl-[70px] rounded-br-[70px]' src={item.url} alt="deal image" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className='text-center tracking-wider uppercase font-semibold text-3xl leading-10 font-montserrat text-gray-900 pt-5 pb-3'>GALLERY</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {gallery.map((item, index) => (
            <div key={index} className="my-3 px-3">
              <Link to={item.href}>
                <img className='w-full h-[240px] rounded-md' src={item.url} alt="deal image" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
