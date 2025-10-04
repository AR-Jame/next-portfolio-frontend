import { Dot } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="mt-24 h-screen container mx-auto">
            <h3 className="pt-6 text-center text-4xl font-semibold">About Me</h3>
            <div className="flex mt-10 gap-10">
                <div className="flex-1">
                    <Image height={700} width={700} className="h-[70vh] w-full object-contain" src={'/me.jpeg'} alt="Abdur Rahman" />
                </div>
                <div className={`flex-1 text-2xl tracking-wide leading-relaxed`}>
                    <h4>Hi, I am <b>Abdur Rahman</b>. I am a <b>web developer</b> from <em>Bangladesh. </em>
                        As a teenager, I love to explore new things and ideas. From there, I came to programming field. And I found that I fall in love with programming.
                        programming is both my past time and active hours. 
                        <br />
                        <br />
                        Essenseal Information about me -
                        <ul className="leading-snug text-xl font-extralight">
                            <li className="flex"><Dot />Name: Abdur Rahman</li>
                            <li className="flex"><Dot />Age: 17</li>
                            <li className="flex"><Dot />Location: Dhaka, Bangladesh</li>
                            <li className="flex"><Dot />Email: ar.jame333@gmail.com</li>
                        </ul>
                        <br />
                        My Experties in web devs -
                        <ul className="leading-snug text-xl">
                            <li className="flex"><Dot />Language: JavaScript, TypeScript, Python, SQL</li>
                            <li className="flex"><Dot />Frontend: React.js, Next.js, Redux.js, Tailwindcss</li>
                            <li className="flex"><Dot />Backend: Node.js, express.js, mongoose.js, prisma, GraphQL, RESTApi</li>
                            <li className="flex"><Dot />Database: Mongodb, PostgresSQL, Redis</li>
                            <li className="flex"><Dot />Other: Docker, AWS, Jsonwebtoken, </li>
                        </ul>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;