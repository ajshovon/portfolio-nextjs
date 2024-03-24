import type { Metadata } from 'next';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

export const metadata: Metadata = {
  title: '[.shovon]',
  description: 'Personal Portfolio || [.shovon]',
};

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col gap-8 justify-center items-center dark:text-[#a9a9b3] text-[#222222]">
      <h1 className="font-bold md:text-[42px] text-[32px]">Jubayer Ahmad Shovon</h1>
      <div className="text-center">
        <p>Tech lover, otaku, geeky!</p>
        <p>Dhaka, Bangladesh</p>
        <div className="flex items-center justify-center gap-4 text-2xl mt-4">
          <a className="text" href="https://redirect.shovon.me/github" target="_blank" title="GitHub" rel="noopener">
            <AiFillGithub />
          </a>
          <a href="https://redirect.shovon.me/linkedin" target="_blank" title="LinkedIn" rel="noopener">
            <AiFillLinkedin />
          </a>
          <a href="mailto:mail@shovon.me" target="_blank" title="Email" rel="noopener">
            <AiFillMail />
          </a>
        </div>
      </div>
    </main>
  );
}
