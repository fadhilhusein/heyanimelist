import Image from "next/image";
import Link from "next/link";

const AnimeList = ({api}) => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 px-4">
            {api.data?.map((anime) => {
                return (
                    <Link key={`${anime.mal_id}`} href={`/${anime.mal_id}`} className="cursor-pointer shadow text-color-primary hover:text-color-accent transition-all bg-color-secondary rounded-md overflow-hidden">
                        <Image 
                            className="w-full max-h-64 object-cover" 
                            src={anime.images.webp.image_url} 
                            alt="..." 
                            width="350" 
                            height="350"
                        />
                        <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
                    </Link>
                )
            })}
        </div>
    )
};

export default AnimeList;