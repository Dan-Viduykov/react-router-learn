import { FC, ReactNode } from "react";
import { Link, useMatch } from "react-router-dom";
import './CustomLink.css'

interface CustomLinkProps {
    children?: ReactNode | ReactNode[];
    to: string
    props?: any
}

const CustomLink: FC<CustomLinkProps> = ({children, to, ...props}) => {
    const match = useMatch(to);

    return (
        <Link
            to={to}
            style={{
                color: match ? 'var(--color-active)' : 'white',
            }}
            {...props} >
            {children}
        </Link>
    )
}

export default CustomLink