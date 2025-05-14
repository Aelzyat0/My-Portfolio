import Socials from "@/components/HomeComponents/Socials";
import ProfilePic from "@/components/HomeComponents/ProfilePic";
import Stats from "@/components/HomeComponents/Stats";
import DownloadButton from "@/components/HomeComponents/DownloadButton";
import TypingEffect from "@/components/HomeComponents/TypingEffect";

export const metadata = {
  title: "Ahmed Elzyat | Welcome",
  description: "Ahmed Elzyat personal website",
  keywords: "Ahmed Elzyat, Ahmed Elzyat, Web Developer, Full Stack Developer, Software Engineer",
};

const Home = () => {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          <div className="order-2 text-center xl:text-left xl:order-none">
            <TypingEffect />
            <h1 className="mb-6 h1">
              Hello, I'm <br />{" "}
              <span className="text-accent">Ahmed Elzyat</span>
            </h1>

            <p className="max-w-[700px] mb-9 text-white/80 capitalize">
              I thrive on creating intuitive, visually appealing web apps that
              enhance user experience. From seamless interfaces to responsive,
              full-stack solutions, I love turning creative ideas into digital
              realities.
            </p>

            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <DownloadButton />
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles={"flex gap-6"}
                  iconStyles={
                    "w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  }
                />
              </div>
            </div>
          </div>
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <ProfilePic />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
