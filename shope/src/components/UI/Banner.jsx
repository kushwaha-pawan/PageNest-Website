// import React from 'react';
// import './Banner.css'; 

// const Banner = () => {
//   return (
//     <div className="banner">
//       <img
//         src={bannerImg}
//         alt={title}
//         className="banner-image"
//       />
//     </div>
//   );
// };

// export default Banner;



import React from 'react';
import './Banner.css'; 

const Banner = ({ bannerImg, title }) => {
  return (
    <div className="banner">
      <img
        src={bannerImg}
        alt={title}
        className="banner-image"
      />
    </div>
  );
};

export default Banner;
