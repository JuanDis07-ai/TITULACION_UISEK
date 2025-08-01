import React from 'react';
import EditText from '../ui/EditText';

const Header = () => {
  return (
    <header className="w-full bg-global-3 px-4 sm:px-6 lg:px-[26px] py-4">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          {/* Search Section */}
          <div className="w-full sm:w-[46%] shadow-[0px_1px_2px_#0000000c]">
            <EditText
              placeholder="Buscar ........."
              leftImage={{
                src: "/images/img_frame_black_900.svg",
                width: 16,
                height: 16
              }}
              className="border border-[#e4e4e7] rounded-[4px] bg-global-3"
            />
          </div>

          {/* User Profile Section */}
          <div className="flex flex-row gap-4 sm:gap-[24px] justify-center items-center w-auto">
            {/* Notification Icon */}
            <div className="flex justify-center items-center">
              <img 
                src="/images/img_frame.svg" 
                alt="Notifications" 
                className="w-[20px] h-[20px] cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>

            {/* User Profile */}
            <div className="flex flex-row gap-2 sm:gap-[12px] justify-center items-center">
              <img 
                src="/images/img_ellipse.png" 
                alt="User Avatar" 
                className="w-[32px] h-[32px] rounded-[16px] cursor-pointer hover:opacity-80 transition-opacity"
              />
              <span className="text-sm font-geist font-medium leading-[19px] text-global-1 hidden sm:block">
                Andres Sosa (admin)
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;