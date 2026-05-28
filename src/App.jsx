export default function NoletoMotos() {
  const motos = [
    {
      id: 1,
      nome: 'Honda CB 500F',
      ano: 2022,
      preco: 'R$ 39.900',
      km: '12.000 KM',
      imagem: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop',
      descricao: 'Moto esportiva, revisada e pronta para rodar.'
    },
    {
      id: 2,
      nome: 'Yamaha MT-07',
      ano: 2023,
      preco: 'R$ 49.900',
      km: '8.000 KM',
      imagem: 'https://images.unsplash.com/photo-1517846693594-1567da72af75?q=80&w=1200&auto=format&fit=crop',
      descricao: 'Excelente desempenho e conforto para viagens.'
    },
    {
      id: 3,
      nome: 'BMW S1000RR',
      ano: 2024,
      preco: 'R$ 119.900',
      km: '2.000 KM',
      imagem: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=1200&auto=format&fit=crop',
      descricao: 'Super esportiva premium com baixa quilometragem.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-black text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-wide">Nolêto Motos</h1>
            <p className="text-sm text-gray-300">Sua próxima moto está aqui.</p>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#inicio" className="hover:text-red-500 transition">Início</a>
            <a href="#motos" className="hover:text-red-500 transition">Motos</a>
            <a href="#contato" className="hover:text-red-500 transition">Contato</a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="relative h-[500px] flex items-center justify-center text-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1600&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 px-4 text-white max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">Encontre a moto perfeita</h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8">Modelos esportivos, urbanos e premium com as melhores condições.</p>
          <a href="#motos" className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-2xl font-semibold shadow-lg">Ver catálogo</a>
        </div>
      </section>

      <section id="motos" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">Motos em destaque</h3>
          <p className="text-gray-600 text-lg">Confira algumas das melhores opções disponíveis.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {motos.map((moto) => (
            <div key={moto.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
              <img src={moto.imagem} alt={moto.nome} className="h-64 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-2xl font-bold">{moto.nome}</h4>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">{moto.ano}</span>
                </div>
                <p className="text-gray-600 mb-4">{moto.descricao}</p>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl font-bold text-green-600">{moto.preco}</span>
                  <span className="text-gray-500 text-sm">{moto.km}</span>
                </div>
                <a href="https://wa.me/5562999999999" target="_blank" className="block text-center bg-black hover:bg-gray-800 text-white py-3 rounded-2xl transition font-semibold">Tenho Interesse</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1529429617124-aee711a5ac1c?q=80&w=1200&auto=format&fit=crop" alt="Loja" className="rounded-3xl shadow-2xl" />
          <div>
            <h3 className="text-4xl font-bold mb-6">Sobre a Nolêto Motos</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">Trabalhamos com motos revisadas, documentação segura e atendimento especializado.</p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">Nosso objetivo é entregar qualidade, confiança e as melhores oportunidades para nossos clientes.</p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold transition">Falar com vendedor</button>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-2xl font-bold mb-4">Nolêto Motos</h4>
            <p className="text-gray-300">Especializada em motos esportivas, urbanas e premium.</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4">Contato</h4>
            <p className="text-gray-300">(62) 99999-9999</p>
            <p className="text-gray-300">contato@nolemotors.com</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4">Endereço</h4>
            <p className="text-gray-300">Goiânia - GO</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-400 text-center py-5 text-sm">
        © 2026 Nolêto Motos - Todos os direitos reservados.
      </footer>
    </div>
  );
}