interface YandexLogoProps {
  size: string | number | undefined;
}

const YandexLogo: React.FC<YandexLogoProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_207_5868)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.0062 0H0V25.0062H25.0062V0ZM16.8773 20.0175H14.2652V7.0431H13.0994C10.9622 7.0431 9.8396 8.1225 9.8396 9.72002C9.8396 11.5334 10.6168 12.3754 12.2143 13.4548L13.5312 14.3399L9.73166 20.0175H6.90362L10.3145 14.9443C8.35002 13.5411 7.24903 12.1811 7.24903 9.87114C7.24903 6.97833 9.25672 5.01382 13.0778 5.01382H16.8773V20.0175Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_207_5868">
          <rect width="25.0062" height="25.0062" rx="12.5031" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default YandexLogo;
