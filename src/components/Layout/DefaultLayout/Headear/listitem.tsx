import React from 'react';
import { Link } from 'react-router-dom';

interface ListItemProps {
  title: string;
  href: string;
  content: string[];
  hoveredTitle: string | null;
  setHoveredTitle: React.Dispatch<React.SetStateAction<string | null>>;
}

const ListItem = ({ title, href, content, hoveredTitle, setHoveredTitle }: ListItemProps) => {
  const isHovered = hoveredTitle === title;

  return (
    <div className='' onMouseEnter={() => setHoveredTitle(title)} onMouseLeave={() => setHoveredTitle(null)}>
      <Link to={href} className="flex flex-wrap w-full h-full items-center pr-7">
        <h1 className="font-semibold hover:text-[#AC2F33]">{title}</h1>
      </Link>
      {isHovered && (
        <div className="absolute top-[50px] z-10 w-full rounded-md bg-gray-100 flex-col justify-center items-center space-y-2 p-4 mt-[50px]">
          {/* Sử dụng map để hiển thị từng phần tử trong mảng content */}
          {content.map((item, index) => (
            <p key={index} className="text-black cursor-pointer text-2xl">{item}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListItem;








