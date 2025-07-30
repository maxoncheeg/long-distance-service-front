import { useLocation, useNavigate } from "react-router-dom";

interface INavLinkColorButtonProps {
    route: string;
    title: string;
}


export function NavLinkColorButton({ route, title }: INavLinkColorButtonProps) {
    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()

        navigate(route, { state: { from: location.pathname  } });
    }

    return (
        <button
            className="flex-1 text-white h-full content-center bg-lds-accent block text-center
            hover:bg-lds-accent-dark hover:border-b-[5px] border-white  hover:text-white
            hover:active:bg-lds-accent hover:active:text-white
            transition-all duration-200"
            onClick={handleClick}
        >
            {title}
        </button>
    );
}
