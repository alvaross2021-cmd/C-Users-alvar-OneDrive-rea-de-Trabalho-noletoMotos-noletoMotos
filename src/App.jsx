import hondaBiz from './assets/HondaBiz125_2011_Preta.jpeg'
import hondaBiz125EX from './assets/Honda_Biz125EX_2014.jpeg'
import honda_Start160_2017 from './assets/Honda_Start160_2017.jpeg'
import honda_Tinta160_2021 from './assets/Honda_Tinta160_2021.jpeg'
import honda_Today125_1989 from './assets/Honda_Today125_1989.jpeg'
import BMW_F900R_2024 from './assets/BMW_F900R_2024.jpeg'


export default function NoletoMotos() {
  const motos = [
    
    {
      id: 1,
      nome: 'Honda Biz 125 EX',
      ano: 2014,
      preco: 'R$ 12.900',
      km: '45.785 KM',
      imagem: hondaBiz125EX,
      descricao:[
        'Ano: 2014',
        'Marca: Honda',
        'Modelo: Biz',
        'Cor: Preta',
        'Km: 45.785',
        'Documentação: Em dia',
        'Manutenção: Revisada'
      ],
      status: 'vendida'
    },
    {
      id: 2,
      nome: 'Honda Biz 125 ES',
      ano: 2011,
      preco: 'R$ 9.500',
      km: '42.856',
      imagem: hondaBiz,
      descricao:[
        'Ano: 2011',
        'Marca: Honda',
        'Modelo: Biz',
        'Cor: Preta',
        'Km: 42.856',
        'Documentação: Em dia',
        'Manutenção: Revisada'
      ],
    },
    {
      id: 3,
      nome: 'Honda Start 160',
      ano: 2017,
      preco: 'R$ 10.900',
      km: '70.100 KM',
      imagem: honda_Start160_2017,
      descricao:[
        'Ano: 2017',
        'Marca: Honda',
        'Modelo: Start',
        'Cor: Vermelha',
        'Km: 70.100',
        'Documentação: Em dia',
        'Manutenção: Revisada'
      ],
      status: 'vendida'
    },
    {
      id: 4,
      nome: 'Honda Titan 160',
      ano: 2021,
      preco: 'R$ 15.900',
      km: '91.220 KM',
      imagem: honda_Tinta160_2021,
      descricao:[
        'Ano: 2021',
        'Marca: Honda',
        'Modelo: Titan',
        'Cor: Azul Petróleo',
        'Km: 91.335',
        'Documentação: Em dia',
        'Manutenção: Revisada'
      ],
      status: 'vendida'
    }, 
    {
      id: 5,
      nome: 'Honda Today 125',
      ano: 1989,
      preco: 'R$ 5.900',
      km: '99.220 KM',
      imagem: honda_Today125_1989,
      descricao:[
        'Ano: 1989',
        'Marca: Honda',
        'Modelo: Today',
        'Cor: Preta',
        'Km: 99.200',
        'Documentação: Em dia',
        'Manutenção: Revisada'
      ], 
      status: 'vendida'
    },
    {
      id: 6,
      nome: 'BMW F900R ',
      ano: 2024,
      preco: 'R$ 54.900',
      km: '4.220 KM',
      imagem: BMW_F900R_2024,
      descricao:[
        'Ano: 2024',
        'Marca: BMW',
        'Modelo: F900R',
        'Cor: Preta',
        'Km: 4.220',
        'Documentação: Em dia',
        'Manutenção: Revisada'
      ], 
      status: 'vendida'
    },
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
            <div
             key={moto.id}
             className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              {moto.status === 'vendida' && (
               <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-xl font-bold z-10">
                VENDIDA
               </div>
              )}
             <img src={moto.imagem} alt={moto.nome} className="h-64 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-2xl font-bold">{moto.nome}</h4>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">{moto.ano}</span>
                </div>
                <div className="text-gray-600 mb-4 space-y-1">
                  {Array.isArray(moto.descricao)
                    ? moto.descricao.map((item, index) => <p key={index}>• {item}</p>)
                    : <p>{moto.descricao}</p>
                  }
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl font-bold text-green-600">{moto.preco}</span>
                  <span className="text-gray-500 text-sm">{moto.km}</span>
                </div>
                    {moto.status === 'vendida' ? (
                      <button
                        disabled
                        className="block w-full text-center bg-gray-400 cursor-not-allowed text-white py-3 rounded-2xl font-semibold"
                      >
                        Moto Vendida
                      </button>
                    ) : (
                      <a
                        href="https://wa.me/5562999999999"
                        target="_blank"
                        className="block text-center bg-black hover:bg-gray-800 text-white py-3 rounded-2xl transition font-semibold"
                      >
                        Tenho Interesse
                      </a>
                    )}
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
            <p className="text-gray-300">Aparecida de Goiânia - GO</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-400 text-center py-5 text-sm">
        © 2026 Nolêto Motos - Todos os direitos reservados.
      </footer>
    </div>
  );
}