import React from "react";

const NAV_MENU = [
    { name: "home", href: "/home" },
    { name: "experience", href: "/project" },
    { name: "about", href: "/about" },
    { name: "blog", href: "/blog" },
];

function NavItem({ children, href }) {
    return (
        <li>
            <a
                href={href || "#"}
                className="font-medium font-montserrat text-gray-900 hover:underline hover:underline-offset-8"
            >
                {children}
            </a>
        </li>
    );
}

export function Navbar() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen((cur) => !cur);

    React.useEffect(() => {
        const resizeListener = () => window.innerWidth >= 960 && setOpen(false);
        window.addEventListener("resize", resizeListener);
        return () => window.removeEventListener("resize", resizeListener);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#d2ff52] via-[#d7dad0] to-[#7e94ee] bg-opacity-20">
            <div className="container mx-auto flex items-center justify-between py-4">
                <ul className="hidden lg:flex items-center gap-16">
                    {NAV_MENU.map(({ name, href }) => (
                        <NavItem key={name} href={href}>
                            {name}
                        </NavItem>
                    ))}
                </ul>

                <button
                    onClick={handleOpen}
                    className="ml-auto lg:hidden text-gray-900 flex flex-col items-center justify-center w-8 h-10 space-y-1 mr-10"
                >
                    <span
                        className={`block w-6 h-[3px] bg-gray-900 transition-all duration-300 transform ${open ? "rotate-45 translate-y-[8px]" : ""}`}
                    ></span>
                    <span className={`block w-6 h-[3px] bg-gray-900 transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
                    <span
                        className={`block w-6 h-[3px] bg-gray-900 transition-all duration-300 transform ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
                    ></span>
                </button>
            </div>
            {open && (
                <div className="navmobile mx-auto px-5 pt-2 pb-5 overflow-hidden" style={{ maxHeight: open ? '500px' : '0', transition: 'max-height 3s ease-in-out' }}>
                    <ul className="flex flex-col gap-6">
                        {NAV_MENU.map(({ name, href }) => (
                            <NavItem key={name} href={href}>
                                {name}
                            </NavItem>
                        ))}
                    </ul>
                </div>
            )}
        </nav>

    );
}

export default Navbar;
