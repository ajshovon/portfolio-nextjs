import Image from "next/image";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaCodeBranch } from "react-icons/fa6";

interface ProjectInt {
    // key: number,
    title: string,
    description: string,
    image: string,
    live: string,
    source: string,
}

const ProjectElement = ({title,description,image,live,source}:ProjectInt ) => {
  return (
   
        <div className="flex md:flex-row flex-col md:gap-0 gap-3 items-center py-6" >
            <Image src={image} width={136} height={136} alt={`${{title}} Image`} className="mx-8 rounded-md" />
            <div className="dark:text-[#a9a9b3] text-[#222222]">
                <h2 className="md:text-2xl text-xl mb-1">{title}</h2>
                <div className="flex items-center gap-2 mb-4">
                    {live && <a href={live} className="font-medium rounded-full bg-blue-500 text-white px-3 py-0.5 flex items-center text-sm" target="_blank"><AiOutlineThunderbolt /> Live</a>}
                    <a href={source} className="font-medium rounded-full bg-violet-500 text-white px-3 py-0.5 flex items-center text-sm" target="_blank"> <FaCodeBranch /> Source</a>
                </div>
                <p>{description}</p>
            </div>
        </div>
     

  );
};

export default ProjectElement;
