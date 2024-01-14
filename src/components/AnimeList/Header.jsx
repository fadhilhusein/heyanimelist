import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
            {
                linkHref && linkTitle ?
                <Link className="md:text-xl text-sm hover:text-color-accent text-color-primary transition-all" href={linkHref}>{linkTitle}</Link>
                :
                null
            }
        </div>
    )
}

export default Header