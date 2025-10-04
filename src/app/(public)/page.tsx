import Image from "next/image";
import { highMount } from "../layout";

const HomePage = () => {
    return (
        <section className="min-h-screen pt-24 flex flex-col xs:min-h-svh xs:pt-16 bg-white text-black">
            <div className="grid grid-cols-18 grid-rows-1 grow">
                <div className="col-start-8 col-span-11 self-end text-6xl whitespace-pre-wrap">
                    <h1 className={`${highMount.className} opacity-75`}>      </h1>
                </div>
            </div>
            <div className="grid grid-cols-18 grid-rows-1 mt-5">
                <div className="col-start-1 col-span-7">
                    <div className="border border-gray-300">
                        <div className="p-12">
                            <div className="flex gap-9 mb-20 items-center">
                                <Image src="/vercel.svg" width={30} height={30} alt="" />
                                <div>
                                    <h1 className="text-2xl font-medium">Abdur Rahman</h1>
                                    <h3 className="font-bold text-gray-400">Full Stack Web Developer</h3>
                                </div>
                            </div>
                            <p className="text-2xl">“Working with Riotters has never felt like an agency-client relationship. Everyone from their team is very engaged and involved in the project, making them feel like they are an extension of our team.”</p>
                        </div>
                        <hr className="mb-10 text-gray-300" />
                        <div>
                            <p className="px-12 pb-10 text-2xl">Explore case studies</p>
                        </div>
                    </div>
                </div>
                <div className="relative col-start-8 col-span-11">
                    <Image
                        src="/Abdur Rahman.jpg"
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    )
};

export default HomePage;


// animate-fadeIn sm:col-span-full sm:text-3xl sm:pb-4 xs:pb-4 xs:text-2xl [&_em]:delay-[1s] opacity-0
