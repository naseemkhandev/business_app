import Image from "next/image";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const TeamCard = ({ imgSrc, name, title }) => {
  return (
    <div className="relative flex flex-col gap-1 md:hover:shadow-lg rounded-xl md:py-10 team-card md:cursor-pointer">
      <Image
        src={imgSrc}
        width={130}
        height={130}
        alt="team member"
        className="drop-shadow-2xl w-20 sm:w-32 md:mb-5 mb-3 rounded-full border-2 border-rose-500 mx-auto"
      />
      <h2 className="text-base sm:text-xl font-semibold text-center">{name}</h2>
      <p className="text-center sm:text-base text-sm">{title}</p>
      <div className="flex md:flex-col gap-3 md:absolute md:bottom-12 md:right-8 md:translate-y-10 icons md:transition-all md:duration-500 md:opacity-0 mx-auto md:mx-0 md:text-rose-600">
        <Link
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100017192357822&sk"
        >
          <FacebookRoundedIcon className="text-xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
        </Link>
        <Link target="_blank" href="https://github.com/NaseemKhan005">
          <GitHubIcon className="text-xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/naseem-khan-275275258/"
        >
          <LinkedInIcon className="text-xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
        </Link>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section className="container mx-auto px-5 md:px-16 lg:px-24">
      <span className="service-name text-center ">OUR TEAM</span>
      <h2 className="title text-center md:w-1/2 mx-auto">
        The most qualified and talented individuals
      </h2>

      <div className="mx-auto grid grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-8 mt-16">
        <TeamCard
          imgSrc={"/team/1.png"}
          name="Saimon Harmer"
          title="CEO and Founder"
        />
        <TeamCard imgSrc={"/team/2.png"} name="Aaron Nunez" title="Founder" />
        <TeamCard
          imgSrc={"/team/3.png"}
          name="Aaron Nunez"
          title="Web Designer"
        />
        <TeamCard
          imgSrc={"/team/4.png"}
          name="Lina Jutila"
          title="Web Developer"
        />
        <TeamCard
          imgSrc={"/team/5.png"}
          name="Saimon Harmer"
          title="CEO and Founder"
        />
        <TeamCard
          imgSrc={"/team/6.png"}
          name="Aaron Nunez"
          title="Web Designer"
        />
      </div>
    </section>
  );
};

export default Team;
