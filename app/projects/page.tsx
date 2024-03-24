import ProjectElement from '@/components/ui/ProjectElement';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Projects :: [.shovon]',
  description: 'Personal Portfolio || [.shovon]',
};

const ProjectsPage: React.FC = () => {
  const projects = [
    { id: 1, name: 'PitchBlack Recovery Project', description: 'PitchBlack Recovery Project is an open source custom recovery for android by developers from different countries with an aim to provide an advanced recovery with better customizations, themes and features.', image: '/assets/images/PitchBlackRecoveryProject.png', live: 'https://pitchblackrecovery.com/', source: 'https://github.com/PitchBlackRecoveryProject' },
    { id: 2, name: 'Typenspeed', description: 'A Django based web app to test your typing speed!', image: '/assets/images/tns.svg', live: 'https://typenspeed.ml/', source: 'https://github.com/enigma71/type-n-speed' },
    { id: 3, name: 'Registro', description: 'A simple web app made with flask for managing student\'s registration & courses information.', image: '/assets/images/pyrunner.png', live: '', source: 'https://github.com/shovon382/registro' },
    { id: 4, name: 'pyRunner', description: 'A telegram bot to run python codes. By providing a platform for running Python code within Telegram, this bot facilitates quick testing, learning, and experimenting with Python without the need for a separate development environment.', image: '/assets/images/pyrunner.png', live: '', source: 'https://github.com/shovon382/pyrunner' },
  ];
  return (
    <div className="dark:text-[#a9a9b3] text-[#222222] h-full w-full flex justify-center items-center">
      <div className="max-w-3xl lg:mx-auto lg:px-6 mx-6 py-12">
        <div className="border-b dark:border-b-[#4f5254] border-b-gray-300">
          <h1 className="font-bold md:text-[42px] text-[32px]">Projects</h1>
        </div>
        <div className="flex flex-col divide-y dark:divide-[#363839] divide-gray-300">
          {projects.map((project) => {
            return <ProjectElement key={project.id} title={project.name} description={project.description} image={project.image} live={project.live} source={project.source} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
