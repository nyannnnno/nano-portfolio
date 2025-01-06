import { Canvas } from '@react-three/fiber';
import { Experience } from "../components/about/Experience";
import DownloadCVButton from "../components/about/DownloadCV";
import Scrollingtext from "../components/about/Scrollingtext";
import Skills from "../components/about/Skills";
import Hobby from "../components/about/Hobby";
import Scrollingtext2 from "../components/about/Scrollingtext2";

function About() {
    return (
        <div className="bg-white w-full h-auto">
            <div className="container font-montserrat mx-auto grid h-full gap-6 min-h-[80vh] w-full grid-cols-1 lg:grid-cols-2 items-center -pb-4 lg:pt-14 md:pt-12 pt-24">
                <div className="relative flex justify-center items-center w-full h-full lg:pt-8">
                    <div
                        className="absolute top-0 lg:left-0  w-[200px] h-[200px] md:w-[200px] md:h-[200px] lg:w-[600px] lg:h-[600px] bg-no-repeat bg-cover bg-center z-20 -mt-6"
                        style={{
                            backgroundImage: 'url(./images/aboutbg.png)',
                        }}
                    />
                    <Canvas
                        shadows
                        className="absolute top-0 left-0 w-full h-[300px] md:h-[400px] lg:h-[1000px]"
                        dpr={[1, 2]}
                        camera={{
                            position: [1, 1, 9],
                            fov: 3,
                        }}
                    >
                        <Experience />
                    </Canvas>
                </div>
                <div className=" w-full flex flex-col items-center font-montserrat">
                    <div className="mb-4">
                        <div className="lg:text-5xl !leading-tight text-4xl text-center md:mt-5">
                            nano
                        </div>
                        <div className="w-full max-w-lg mb-4 lg:text-3x text-xl ">
                            <div className="text-center font-semibold">July 10th, 2003</div>
                        </div>
                        <div className="w-full max-w-lg flex flex-col text-lg mb-4 mt-5">
                            <div className="w-full max-w-lg text-lg">
                                <div className="font-semibold mt-2">Email </div>
                                <div className="">nanometer107@gmail.com</div>
                            </div>
                        </div>
                        <div class="w-full max-w-lg text-lg">
                            <div class="font-semibold">Education</div>
                            <p class="mt-2 ">Senior High School 2015 - 2020</p>
                            <p class="text-base">Triamudom Suksa Nomklao School, Bangkok</p>
                            <p class="text-base">English - Chinese Program</p>

                            <p class="mt-2 ">Bachelor’s Degree 2021 - 2024</p>
                            <p class="text-base">Bangkok University, Pathum Thani</p>
                            <p class="text-base">Information technology and innovation</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-20 lg:pt-16 md:pt-16 pt-10'>
                < Scrollingtext />
            </div>
            <div className='pt-10 justify-center'>
                < Skills />
            </div>
            <div className='-pt-10 justify-center'>
                < Hobby />
            </div>
            <div className=''>
                < Scrollingtext2 />
            </div>
        </div>
    );
}

export default About;


