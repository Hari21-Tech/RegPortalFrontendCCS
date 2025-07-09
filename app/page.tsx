import Nav from "./_components/Nav";

const Home: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-[url('/bg_image.png')] bg-[length:140%] bg-cover bg-top bg-no-repeat -z-10 md:min-h-[300vh] min-h-[150vh]" />
      <Nav />
      <h1 className="text-white text-[170px] pb-4 font-megarok flex justify-center">
        OBSCURA
      </h1>
    </div>
  );
};

export default Home;
