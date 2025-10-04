import projects from "@/data/projectData"
import Image from "next/image";
import Link from "next/link";
const ProjectPage = () => {
    return (
        <div className="mt-24">
            <hr className="mt-[30vh] mb-10 mr-[10%]" />
            <div className="mx-[5%] xl:mx-[10%]">
                <p className="text-4xl lg:text-7xl xl:text-8xl">Building modern, fast, secure, scalable Web applications that really helps clients.</p>
            </div>
            <hr className="mt-10 ml-[10%]" />
            <div className="mx-[5%] grid grid-cols-1 xl:grid-cols-2 gap-8 mt-28">
                {
                    projects.map(project => (
                        <div key={project.id} className="w-full">
                            <Image src={project.image} alt={project.name} width={1000} height={1000} className="ml-0" />
                            <h3 className="text-4xl my-3">{project.name}</h3>
                            <p className="text-xl max-w-lg">{project.description}</p>
                            <p className="mt-4 mb-0.5">Key Features</p>
                            <ul>
                                {
                                    project.features.map((feature, idx) => (
                                        <li key={idx}>{idx + 1}. {feature}</li>
                                    ))
                                }
                            </ul>
                            <p className="mt-4 mb-0.5">Tech Stack</p>
                            <p>{project.techStack}</p>
                            <div className="space-x-3 mt-6">
                                <Link href={project.liveLink}><button className="px-6 bg-[#B49FEE] text-white py-3 rounded-sm hover:bg-[#a68cee] active:scale-95 transition">Live Link</button></Link>
                                <Link href={project.GitHubLink}><button className="px-6 bg-[#f89f9f] text-white py-3 rounded-sm hover:bg-[#ef8686] active:scale-95 transition">Github Link</button></Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProjectPage;