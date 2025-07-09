import CcsLogo from "./_components/CcsLogo";

export default function Page() {
  return (
    <div 
      className="relative min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/bg_image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* Main content */}
      <div className="flex flex-col items-center relative z-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24">
        {/* CCS Logo */}
        <div className="w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 xl:w-56 xl:h-32 mb-4 md:mb-6">
          <CcsLogo className="w-full h-full" />
        </div>
        
        {/* Presents */}
        <h2 className="text-white text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-megarok text-center leading-none tracking-wider drop-shadow-2xl mb-4 md:mb-6 lg:mb-8">
          PRESENTS
        </h2>
        
        {/* Title */}
        <h1 className="text-white text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[250px] font-megarok text-center leading-none tracking-wider drop-shadow-2xl mb-8">
          OBSCURA
        </h1>
        
        {/* Countdown */}
        <div className="flex flex-row font-megarok justify-center items-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl space-x-4 md:space-x-6 lg:space-x-8 mb-16">
          <div className="flex items-center flex-col text-white drop-shadow-lg">
            <div className="font-bold">2</div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase tracking-wider mt-1">DAYS</p>
          </div>
          <img src="/hourglass.png" className="w-8 sm:w-12 md:w-16 lg:w-20 xl:w-24 filter drop-shadow-lg" />
          <div className="flex items-center flex-col text-white drop-shadow-lg">
            <div className="font-bold">24</div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase tracking-wider mt-1">HOURS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
