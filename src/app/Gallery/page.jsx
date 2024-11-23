import React from 'react'

const page = () => {
  return (
    <div>
      <div className="text-white flex justify-center items-center lg:text-[45px] font-bold"
        style={{
            width: "100%",
            height: "50vh",
            backgroundImage: `
              linear-gradient(to bottom, rgba(0, 0, 0, 0.81), rgba(0, 0, 0, 1.2)),
              url('/images/galleryBg.png')
              `,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
        
          }}
      >
Meet the People Who Power Us.      </div>
    </div>
  )
}

export default page
