import React from 'react';

const CategoryItem = ({ item }) => {
    return (
        <div>
            <img src={item.image} className='w-full mb-4'/>
            <div className='flex justify-between items-center'>
                <div>
                    <h6 className='text-lg font-bold'>{item.title}</h6>
                    <span className='text-[#7F7F7F] font-medium text-sm'>Explore Now!</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                    <path d="M18.9571 7.71798C19.2843 7.39075 19.2843 6.86022 18.9571 6.533L13.6247 1.20059C13.2975 0.873368 12.7669 0.873368 12.4397 1.20059C12.1125 1.52781 12.1125 2.05835 12.4397 2.38557L17.1796 7.12549L12.4397 11.8654C12.1125 12.1926 12.1125 12.7232 12.4397 13.0504C12.7669 13.3776 13.2975 13.3776 13.6247 13.0504L18.9571 7.71798ZM0.489258 7.9634L18.3646 7.9634V6.28758L0.489258 6.28758L0.489258 7.9634Z" fill="#797979" />
                </svg>
            </div>
        </div>
    );
};

export default CategoryItem;