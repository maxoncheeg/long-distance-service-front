import { Link } from "react-router-dom";

interface INavLinkButtonProps {
    route: string;
    title: string;
}

export default function NavLinkButton({ route, title }: INavLinkButtonProps) {
    return (
        <Link
            className="flex-1 text-white h-full content-center block
            hover:bg-lds-accent-dark hover:border-b-[5px] border-lds-accent  hover:text-white
            hover:active:border-white hover:active:text-white
            transition-all duration-200"
            to={route}
        >
            {title}
        </Link>
    );
}
