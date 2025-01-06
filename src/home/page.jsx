import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "../components/home/Experience";
import { UI } from "../components/home/UI";

function Home() {
    return (
        <>
            <header className="bg-white p-4 font-montserrat">
                <div className="container mx-auto grid h-full gap-6 min-h-[80vh] w-full grid-cols-1 lg:grid-cols-2 items-center lg:mt-20">
                    <div className="flex justify-center items-center order-2 lg:order-none sm:ml-5  ">
                        <h1
                            color="blue-gray"
                            className="mb-4 sm:pb-10 lg:text-5xl !leading-tight text-3xl"
                            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
                        >
                            Hi, I'm <span className="italic">nano</span>
                            <br /> a{" "}
                            <span className="relative inline-block">
                                <span className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#1c47f581] z-0"></span>
                                <span className="relative z-10">front-end developer</span>
                            </span>{" "}
                            &{" "}
                            <span className="relative inline-block">
                                <span className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#1c47f581] z-0"></span>
                                <span className="relative z-10">UX/UI designer</span>
                            </span>{" "}
                        </h1>
                    </div>

                    <div className="relative flex justify-center items-center w-full h-full -pb-5 ">
                        <UI />
                        <Canvas
                            shadows
                            className="w-full h-[1000px] lg:h-[1000px]"
                            dpr={[1, 2]}
                            camera={{
                                position: [1, 1, 9],
                                fov: 3,
                            }}
                        >
                            <group position-y={0}>
                                <Suspense fallback={null}>
                                    <Experience />
                                </Suspense>
                            </group>
                        </Canvas>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Home;