import Link, { LinkProps } from "next/link";
import { LucideIcon } from 'lucide-react';

interface ButtonComponentProps {
    text: string;
    icon?: LucideIcon;
    link?: LinkProps["href"];
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ text, icon: Icon, link }) => {
    const content = (
        <>
            {text}
            {Icon && <Icon className="inline-block" />}
        </>
    );

    const baseClass = "flex flex-row text-sm items-center border border-color py-1 px-6 rounded-full gap-2 hover:bg-customPurple transition duration-300 group";

    if (link) {
        return (
            <Link href={link}>
                <a className={baseClass}>{content}</a>
            </Link>
        );
    }

    return (
        <button className={baseClass}>
            {content}
        </button>
    );
}

export default ButtonComponent;
