import Image from "next/image";

type Props = Record<string, never>;

const SocialMediaIcons = (props: Props) => {
  return (
    <div className={`my-10 flex justify-center gap-7 md:justify-start`}>
      <a
        className={`transition duration-500 hover:opacity-50`}
        href="https://www.linkedin.com/in/orr-shalev/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="linkedin-link"
          src={`/assets/linkedin.svg`}
          width={40}
          height={40}
        ></Image>
      </a>
      <a
        className={`transition duration-500 hover:opacity-50`}
        href="https://www.github.com/orrshalev/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="github-link"
          src={`/assets/github.svg`}
          width={40}
          height={40}
        ></Image>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
