import Image from "next/image";

export function Button() {
    return (
        <a
            href="https://api.whatsapp.com/send?phone=5542988113456&text=Ol%C3%A1%20Evandro,%20tudo%20bem?%20"
            className="w-full sm:max-w-md transition hover:-translate-y-1 flex items-center justify-center gap-3 text-sm px-8 py-4 text-white rounded-md bg-[#0daa4f] uppercase font-semibold"
        >
            <Image
                src="/images/wpp.png"
                alt="Whastapp ícone"
                width={20}
                height={20}
                className="hidden sm:block"
            />
            <span>Quero falar com um <span className="hidden sm:inline-block">consultor!</span></span>
        </a>
    )
}