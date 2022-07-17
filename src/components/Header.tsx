import { House } from "phosphor-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

interface Button {
    link: string
}

export function Header(props: Button) {
    return (
        <header className="w-full py-5 flex justify-end bg-gray-700 border-b border-gray-600">
            <Logo />
            <Link to={props.link} className="mr-6">
                <House size={24}/>
            </Link>
        </header>
    )
}