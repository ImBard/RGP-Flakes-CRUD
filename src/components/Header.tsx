import { House } from "phosphor-react";
import { Logo } from "./Logo";

interface Button {
    onclick: any;
}

export function Header(props: Button) {
    return (
        <header className="w-full py-5 flex justify-end bg-gray-700 border-b border-gray-600">
            <Logo />

            <button className="mr-6" onClick={props.onclick}>
                <House size={24}/>
            </button>
        </header>
    )
}