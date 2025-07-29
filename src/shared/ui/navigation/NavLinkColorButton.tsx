import { Link } from "react-router-dom";

interface INavLinkColorButtonProps {
    route: string;
    title: string;
}

export default function NavLinkColorButton({ route, title }: INavLinkColorButtonProps) {
    return (
        <Link
            className="flex-1 text-white h-full content-center bg-lds-accent block text-center
            hover:bg-lds-accent-dark hover:border-b-[5px] border-white  hover:text-white
            hover:active:bg-lds-accent hover:active:text-white
            transition-all duration-200"
            to={route}
        >
            {title}
        </Link>
    );
}
