import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <div className="dark:bg-[#1b1c1d] bg-[#fafafa] sticky top-0">
      <div className="h-[68px] max-w-3xl lg:mx-auto lg:px-6 mx-6 flex items-center justify-between">
        <Link href="/" className='font-mono dark:text-[#a9a9b3] text-[#222222] text-lg font-bold '>&gt; $ {" "}
          <span className="relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:dark:bg-[#1b1c1d] before:bg-[#fafafa] after:absolute after:inset-0 after:w-2 after:animate-caret after:bg-sky-500">cd /home/{' '}</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/about" className="dark:text-[#a9a9b3] text-[#222222] hover:underline transition-all duration-300">
            About
          </Link>
          <Link href="/projects" className="dark:text-[#a9a9b3] text-[#222222]  hover:underline transition-all duration-300">
            Projects
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
