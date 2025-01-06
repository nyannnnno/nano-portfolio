import ProjectShowcase from "../components/project/ProjectShowcase";
import ProjectShowcase2 from "../components/project/ProjectShowcase2";
import ProjectShowcase3 from "../components/project/ProjectShowcase3";

function Project() {
    return (
        <>
            <header className="bg-white p-4 font-montserrat">
                <div className=" mt-10">
                    <ProjectShowcase />
                    <ProjectShowcase2 />
                    <ProjectShowcase3 />
                </div>
            </header>
        </>
    );
}

export default Project;