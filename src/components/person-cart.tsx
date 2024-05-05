import Image from "next/image"
import { ReactNode } from "react"

interface PersonCardProps {
    image: string
    name: string
    children: ReactNode
}

export function PersonCard({ children, image, name }: PersonCardProps) {
    return (
        <div className="flex sm:flex-row flex-col items-center gap-8 max-w-4xl">
            <div className="">
                <Image
                    src={`/images/${image}.png`}
                    alt={`Imagem de ${name}`}
                    width={440}
                    height={440}
                />
            </div>
            <div className="flex flex-col gap-4 text-left">
                <h4 className="play text-3xl font-bold text-deep-blue">{name}</h4>
                {children}
            </div>
        </div>
    )
}