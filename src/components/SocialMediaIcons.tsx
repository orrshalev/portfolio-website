import Image from "next/image";

type IconProps = {
  src: string;
  alt: string;
  href: string;
};

const Icon = ({ src, alt, href }: IconProps) => (
  <a
    className={`transition duration-500 hover:opacity-50`}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <Image alt={alt} src={src} width={40} height={40}></Image>
  </a>
);

const SocialMediaIcons = () => {
  return (
    <div className={`my-10 flex justify-center gap-7 md:justify-start`}>
      <Icon
        alt="linkedin-link"
        src="/assets/svg/linkedin.svg"
        href="https://www.linkedin.com/in/orr-shalev/"
      />
      <Icon
        alt="github-link"
        src="/assets/svg/github.svg"
        href="https://www.github.com/orrshalev/"
      />
      <Icon
        alt="twitter-link"
        src="/assets/svg/twitter.svg"
        href="https://twitter.com/ShalevOrr"
      />
      <Icon
        alt="discord-link"
        src="/assets/svg/discord.svg"
        href="http://discordapp.com/users/243883379928334336"
      />
    </div>
  );
};

export default SocialMediaIcons;
