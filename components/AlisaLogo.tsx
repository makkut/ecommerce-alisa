interface AlisaLogoProps {
  size: string | number | undefined;
  color?: boolean;
  white?: boolean;
}

const AlisaLogo: React.FC<AlisaLogoProps> = ({ size, color, white }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 67 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {color && (
        <defs>
          <linearGradient id="a" y1="100%">
            <stop stopColor="#C926FF" offset="0" />
            <stop stopColor="#4A26FF" offset="1" />
          </linearGradient>
        </defs>
      )}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.255 66.51C51.6212 66.51 66.51 51.6212 66.51 33.255C66.51 14.8888 51.6212 0 33.255 0C14.8888 0 0 14.8888 0 33.255C0 51.6212 14.8888 66.51 33.255 66.51ZM33.2169 49.0147C25.8164 48.9847 18.5559 47.3758 15.8308 44.6892C9.05774 38.0214 25.5179 12.4616 33.2244 12.4241C40.9121 12.4616 57.3722 38.0214 50.5992 44.6892C47.8779 47.3758 40.6173 48.9847 33.2169 49.0147Z"
        fill={color ? "url(#a)" : white ? "#fff" : "#000"}
      />
    </svg>
  );
};

export default AlisaLogo;
