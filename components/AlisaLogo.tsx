interface AlisaLogoProps {
  size: string | number | undefined;
  color?: boolean;
}

const AlisaLogo: React.FC<AlisaLogoProps> = ({ size, color }) => {
  return (
    <svg
      version="1.1"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 370 370"
    >
      {color && (
        <defs>
          <linearGradient id="a" y1="100%">
            <stop stopColor="#C926FF" offset="0" />
            <stop stopColor="#4A26FF" offset="1" />
          </linearGradient>
        </defs>
      )}
      <g fill="none" fillRule="evenodd">
        <rect x="77" y="72" width="215" height="199" fill="#fff" />
        <g fill={color ? "url(#a)" : "#000"} fillRule="nonzero">
          <path d="m185 370c-102.1726791 0-185-82.827322-185-185 0-102.1726791 82.8273209-185 185-185 102.172678 0 185 82.8273209 185 185 0 102.172678-82.827322 185-185 185zm-84.712048-125.291756c13.280956 13.215631 48.657764 21.151333 84.712048 21.290433 36.053183-0.1391 71.431092-8.074802 84.712048-21.290433 32.99656-32.83426-47.212004-158.628094-84.670772-158.8110057-37.54132 0.1829117-117.7498848 125.9767457-84.753324 158.8110057z" />
        </g>
      </g>
    </svg>
  );
};

export default AlisaLogo;
