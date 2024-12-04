import { PiCatDuotone } from 'react-icons/pi';

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-1 py-[40px]">
      <div className="flex sm:items-center items-start gap-1 text-[#999] tracking-wider text-center">
        <PiCatDuotone className="sm:mt-0 mt-1" /> Arigatō Gozaimasu for visiting
      </div>
      <div className="text-[#999] tracking-wider text-center">© [.shovon] 2024</div>
    </div>
  );
};

export default Footer;
