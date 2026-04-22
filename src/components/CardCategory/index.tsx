import tenisBranco from "/assets/tenis-branco.jpg";
import tenisCinza from "/assets/tenis-cinza.jpg";
import tenisColorido from "/assets/tenis-colorido.jpg";
import tenisFuturista from "/assets/tenis-futurista.jpg";

const categories = [
    { name: "Casual", image: tenisBranco },
    { name: "Esporte", image: tenisCinza },
    { name: "Moderno", image: tenisColorido },
    { name: "Futurista", image: tenisFuturista },
];

export const CardCategory = () => {
    return (
        <section
            className="
                container flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-2
                lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:w-auto
                m-auto mb-10
            "
        >
            {categories.map((category, index) => (
                <div
                    key={index}
                    className="
                        shrink-0 w-[95%] h-125 rounded-[20px] flex flex-col justify-center items-center gap-2.5 overflow-hidden relative snap-center
                        md:w-1/2
                        lg:w-auto lg:shrink
                    "
                    style={{
                        backgroundImage: `url(${category.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Overlay escuro */}
                    <div className="absolute inset-0 bg-black/30 rounded-[20px]" />

                    {/* Botão */}
                    <div className="relative">
                        <button>{category.name}</button>
                    </div>
                </div>
            ))}
        </section>
    )
}