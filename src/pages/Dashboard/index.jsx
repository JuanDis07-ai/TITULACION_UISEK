import React, { useState } from 'react';
import Header from '../../components/common/Header';
import EditText from '../../components/ui/EditText';

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState('Inicio');

  const menuItems = [
    {
      id: 'inicio',
      name: 'Inicio',
      icon: '/images/img_frame_black_900.svg',
      count: null,
      isSelected: true
    },
    {
      id: 'diccionario',
      name: 'Diccionario Instirtucional',
      icon: '/images/img_frame_black_900_16x16.svg',
      count: '23',
      isSelected: false
    },
    {
      id: 'gestion',
      name: 'Gestion',
      icon: '/images/img_frame_16x16.svg',
      count: '23',
      isSelected: false
    },
    {
      id: 'usuarios',
      name: 'Usuarios',
      icon: '/images/img_frame_1.svg',
      count: '23',
      isSelected: false
    },
    {
      id: 'reportes',
      name: 'Reportes',
      icon: '/images/img_frame_2.svg',
      count: null,
      isSelected: false
    },
    {
      id: 'procesos',
      name: 'Procesos',
      icon: '/images/img_frame_3.svg',
      count: '23',
      isSelected: false
    }
  ];

  const handleMenuClick = (menuId) => {
    setSelectedMenu(menuId);
  };

  return (
    <div className="flex flex-row justify-start items-start w-full bg-global-3">
      {/* Sidebar */}
      <div className="hidden lg:flex flex-col justify-start items-center w-full lg:w-[20%] border-b border-r border-[#e4e4e7]">
        {/* Logo Section */}
        <div className="flex flex-row justify-center items-center w-full p-2 border-b border-r border-[#e4e4e7]">
          <img 
            src="/images/img_rectangle_3.png" 
            alt="ECU 911 Logo" 
            className="w-[206px] h-[52px]"
          />
        </div>

        {/* User Profile Dropdown */}
        <div className="flex flex-row justify-start items-center w-full mt-[6px] mr-[6px] p-[6px] bg-global-3 border border-[#e4e4e7] rounded-[4px] shadow-[0px_1px_2px_#0000000c]">
          <div className="flex flex-row justify-start items-center flex-1">
            <img 
              src="/images/img_ellipse_20x20.png" 
              alt="User Avatar" 
              className="w-[20px] h-[20px] rounded-[10px]"
            />
            <span className="ml-2 text-sm font-geist font-medium leading-[19px] text-global-1">
              Andres Sosa (admin)
            </span>
          </div>
          <img 
            src="/images/img_icon_caretdoublevertical.svg" 
            alt="Dropdown" 
            className="w-[12px] h-[12px]"
          />
        </div>

        {/* Navigation Menu */}
        <div className="flex flex-col gap-1 justify-start items-center w-full mr-[6px] p-[10px]">
          {menuItems?.map((item, index) => (
            <div key={item?.id} className="w-full">
              {index === 0 ? (
                <EditText
                  placeholder={item?.name}
                  leftImage={{
                    src: item?.icon,
                    width: 16,
                    height: 16
                  }}
                  className="gap-2 bg-global-3 border-0 rounded-[6px] shadow-[0px_1px_2px_#0000000c]"
                />
              ) : (
                <div 
                  className="flex flex-row justify-center items-center w-full p-[6px] cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => handleMenuClick(item?.id)}
                >
                  <div className="flex flex-row justify-start items-center flex-1">
                    <img 
                      src={item?.icon} 
                      alt={`${item?.name} Icon`} 
                      className="w-[16px] h-[16px]"
                    />
                    <span className="ml-2 text-sm font-geist font-medium leading-[19px] text-center text-global-1">
                      {item?.name}
                    </span>
                  </div>
                  {item?.count && (
                    <span className={`text-sm font-geist font-semibold leading-[19px] text-right px-1 ${
                      item?.id === 'diccionario' ?'text-global-3 bg-global-1 rounded-[4px]' :'text-global-2'
                    }`}>
                      {item?.count}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Mobile Menu Button */}
      <button 
        className="block lg:hidden fixed top-4 left-4 z-50 p-3 bg-global-3 border border-[#e4e4e7] rounded-md shadow-md"
        aria-label="Open menu"
      >
        <div className="w-6 h-0.5 bg-global-1 mb-1"></div>
        <div className="w-6 h-0.5 bg-global-1 mb-1"></div>
        <div className="w-6 h-0.5 bg-global-1"></div>
      </button>
      {/* Main Content */}
      <div className="flex flex-col justify-start items-center w-full lg:w-[80%]">
        {/* Header */}
        <div className="w-full border-b border-[#e4e4e7]">
          <Header />
        </div>

        {/* Content Area */}
        <div className="flex flex-col gap-[18px] justify-start items-center w-full p-4 lg:p-0">
          {/* Page Title */}
          <div className="flex flex-row justify-start items-center w-full mt-[30px] mx-4 lg:mx-8 mb-4 lg:mb-0">
            <h1 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-geist font-bold leading-[26px] sm:leading-[32px] md:leading-[36px] lg:leading-[39px] text-left text-global-1">
              Inicio
            </h1>
          </div>

          {/* Divider Line */}
          <div className="w-full h-[1px] bg-[#e2e8f0] mx-4 lg:mx-8"></div>

          {/* Main Image/Content */}
          <div className="flex flex-row justify-center items-center w-full px-4 lg:px-8">
            <img 
              src="/images/img_document.png" 
              alt="ECU 911 Quality Policy" 
              className="w-full max-w-[1088px] h-auto rounded-[16px] shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;