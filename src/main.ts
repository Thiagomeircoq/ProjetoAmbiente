import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <section class="bg-slate-50 relative">
        <div class="custom-shape-divider-top absolute w-full overflow-hidden -z-1">
            <img src="../public/images/wave.svg" alt="Ondas" class="w-full h-auto">
        </div>
        <div class="container mx-auto relative">
            <div class="flex flex-col-reverse md:flex-row h-screen gap-10 items-center justify-center p-5">
                <div class="w-full md:w-1/2 text-center md:text-left">
                    <h2 class="text-cyan-600 font-bold text-2xl md:text-7xl">
                        Energia Limpa e <br class="hidden md:block"> Acessível para Todos
                    </h2>
                    <p class="text-cyan-800 text-sm md:text-3xl mt-4">
                        O impacto Crucial da Sustentabilidade Energética
                    </p>
                    <p class="mt-4 text-lg text-cyan-900">
                        A transição para fontes de energia renováveis é fundamental para garantir um futuro sustentável.
                        Energias como a solar e eólica não apenas reduzem as emissões de carbono, mas também promovem o
                        acesso global a eletricidade limpa, beneficiando tanto o meio ambiente quanto as comunidades ao
                        redor do mundo.
                    </p>
                    <div class="mt-10">
                        <a href="#vantagens" class="bg-cyan-600 text-white font-bold py-3 px-5 rounded-lg hover:bg-cyan-700">VEJA
                            MAIS</a>
                    </div>
                </div>
                <div class="w-full md:w-1/2 relative">
                    <img src="../public/images/energy.svg" alt="Planeta Sustentável" class="mx-auto">
                </div>
            </div>
        </div>
    </section>

    <section class="bg-gray-100 relative" id="vantagens">
        <div class="container mx-auto py-20">
            <div class="min-h-screen flex flex-col justify-center gap-10">
                <div class="p-4">
                    <h1 class="font-bold text-stone-700 text-2xl">Vantagens</h1>
                </div>
                <div class="p-10">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                        <div
                            class="shadow-sm bg-white rounded-lg overflow-hidden flex flex-col items-center text-center h-full">
                            <div class="w-full py-4">
                                <h2 class="text-cyan-500 font-bold text-xl">Reciclagem</h2>
                            </div>
                            <div class="flex-grow flex items-start justify-center">
                                <img src="../public/images/reciclagem.svg" alt="Reciclagem" class="mx-auto mb-4 w-full">
                            </div>
                            <div class="p-6">
                                <p class="text-stone-600 text-md">
                                    A reciclagem de materiais como vidro, plástico e metal contribui para a energia
                                    limpa ao reduzir a necessidade de produzir novos produtos a partir de
                                    matérias-primas virgens. Isso economiza energia e recursos naturais, promovendo um
                                    ambiente mais limpo e sustentável.
                                </p>
                            </div>
                        </div>

                        <div
                            class="shadow-sm bg-white rounded-lg overflow-hidden flex flex-col items-center text-center h-full">
                            <div class="w-full py-4">
                                <h2 class="text-cyan-500 font-bold text-xl">Energia Eólica e Solar</h2>
                            </div>
                            <div class="flex-grow flex items-start justify-center">
                                <img src="../public/images/eolica.svg" alt="Energia Eólica e Solar"
                                    class="mx-auto mb-4 w-full">
                            </div>
                            <div class="p-6">
                                <p class="text-stone-600 text-md">
                                    Combinar energia eólica e solar representa uma abordagem eficaz para a energia
                                    limpa. Esses recursos renováveis fornecem energia sustentável e reduzem a emissão de
                                    poluentes, contribuindo para um futuro mais limpo.
                                </p>
                            </div>
                        </div>

                        <div
                            class="shadow-sm bg-white rounded-lg overflow-hidden flex flex-col items-center text-center h-full">
                            <div class="w-full py-4">
                                <h2 class="text-cyan-500 font-bold text-xl">Natureza</h2>
                            </div>
                            <div class="flex-grow flex items-start justify-center">
                                <img src="../public/images/arvores.svg" alt="Natureza" class="mx-auto mb-4 w-full">
                            </div>
                            <div class="p-6">
                                <p class="text-stone-600 text-md">
                                    Conexão entre a natureza, a sustentabilidade e a vida. Ela nos lembra da importância
                                    de cuidar do nosso planeta, preservando os recursos naturais para um futuro saudável
                                    e sustentável.
                                </p>
                            </div>
                        </div>

                        <div
                            class="shadow-sm bg-white rounded-lg overflow-hidden flex flex-col items-center text-center h-full">
                            <div class="w-full py-4">
                                <h2 class="text-cyan-500 font-bold text-xl">Protegendo a Vida Animal</h2>
                            </div>
                            <div class="flex-grow flex items-start justify-center">
                                <img src="../public/images/vida_animal.svg" alt="Protegendo a Vida Animal"
                                    class="mx-auto mb-4 w-full">
                            </div>
                            <div class="p-6">
                                <p class="text-stone-600 text-md">
                                    A energia limpa desempenha um papel vital na proteção da vida animal, reduzindo a
                                    poluição do ar e da água, minimizando a destruição de habitats e combatendo as
                                    mudanças climáticas. Isso ajuda a preservar ecossistemas e a biodiversidade,
                                    garantindo um ambiente saudável para todas as formas de vida no nosso planeta.
                                </p>
                            </div>
                        </div>

                        <div
                            class="shadow-sm bg-white rounded-lg overflow-hidden flex flex-col items-center text-center h-full">
                            <div class="w-full py-4">
                                <h2 class="text-cyan-500 font-bold text-xl">Salvando os Oceanos</h2>
                            </div>
                            <div class="flex-grow flex items-start justify-center">
                                <img src="../public/images/oceanos.svg" alt="Salvando os Oceanos"
                                    class="mx-auto mb-4 w-full">
                            </div>
                            <div class="p-6">
                                <p class="text-stone-600 text-md">
                                    A energia limpa é fundamental para a preservação dos oceanos, pois reduz a poluição
                                    marinha e a acidificação dos oceanos, protege a vida marinha e combate o aumento do
                                    nível do mar devido às mudanças climáticas.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-slate-50 relative">
        <div class="container mx-auto py-20">
            <div class="min-h-screen flex flex-col justify-center gap-10">
                <div class="p-4">
                    <h1 class="font-bold text-stone-700 text-2xl">Tipos de Energia</h1>
                </div>
                <div class="p-10">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div
                            class="shadow-sm bg-white rounded-3xl overflow-hidden flex flex-col items-center text-center h-full">
                            <div class="w-full py-4">
                                <h2 class="text-cyan-500 font-bold text-xl">Energia Solar</h2>
                            </div>
                            <div class="flex-grow flex items-start justify-center">
                                <img src="../public/images/panel.svg" alt="Energia Solar"
                                    class="mx-auto mb-4 w-40 h-40">
                            </div>
                            <div class="p-6">
                                <p class="text-stone-600 text-md">
                                    A energia solar é uma fonte renovável que usa a luz do sol para produzir
                                    eletricidade de forma limpa e sustentável, contribuindo para um futuro mais verde e
                                    acessível.
                                </p>
                            </div>
                        </div>

                        <div
                            class="shadow-sm bg-white rounded-3xl overflow-hidden flex flex-col items-center text-center h-full">
                            <div class="w-full py-4">
                                <h2 class="text-cyan-500 font-bold text-xl">Energia Eólica</h2>
                            </div>
                            <div class="flex-grow flex items-start justify-center">
                                <img src="../public/images/eolic.svg" alt="Energia Eólica"
                                    class="mx-auto mb-4 w-40 h-40">
                            </div>
                            <div class="p-6">
                                <p class="text-stone-600 text-md">
                                    A energia eólica utiliza o vento para produzir eletricidade de maneira limpa e
                                    sustentável.
                                </p>
                            </div>
                        </div>

                        <div
                            class="shadow-sm bg-white rounded-3xl overflow-hidden flex flex-col items-center text-center h-full">
                            <div class="w-full py-4">
                                <h2 class="text-cyan-500 font-bold text-xl">Energia Hidrelétrica</h2>
                            </div>
                            <div class="flex-grow flex items-start justify-center">
                                <img src="../public/images/hidro.svg" alt="Energia Hidrelétrica"
                                    class="mx-auto mb-4 w-40 h-40">
                            </div>
                            <div class="p-6">
                                <p class="text-stone-600 text-md">
                                    A energia hidrelétrica utiliza a força da água em movimento, como em rios e quedas
                                    d'água, para gerar eletricidade de forma limpa e eficiente.
                                </p>
                            </div>
                        </div>

                        <div
                            class="shadow-sm bg-white rounded-3xl overflow-hidden flex flex-col items-center text-center h-full">
                            <div class="w-full py-4">
                                <h2 class="text-cyan-500 font-bold text-xl">Energia Maremotriz</h2>
                            </div>
                            <div class="flex-grow flex items-start justify-center">
                                <img src="../public/images/lamper.svg" alt="Energia Maremotriz"
                                    class="mx-auto mb-4 w-40 h-40">
                            </div>
                            <div class="p-6">
                                <p class="text-stone-600 text-md">
                                    A energia maremotriz usa o movimento das marés oceânicas para gerar eletricidade de
                                    forma limpa e sustentável.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;