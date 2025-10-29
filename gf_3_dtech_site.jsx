import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

export default function GF3DTech() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
  };

  const produtos = [
    { nome: 'Dinossauro 3D', cor: 'Verde', imagem: 'https://example.com/dino.jpg' },
    { nome: 'Torre de Xadrez', cor: 'Azul', imagem: 'https://example.com/torre.jpg' },
    { nome: 'Suporte Técnico', cor: 'Laranja', imagem: 'https://example.com/suporte.jpg' },
    { nome: 'Vaso Espiral', cor: 'Cinza', imagem: 'https://example.com/vaso.jpg' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 relative">
      {/* Cabeçalho */}
      <header className="flex justify-between items-center p-6 shadow-md">
        <img src="/logo-gf3d.png" alt="GF3D TECH" className="h-12" />
        <nav className="space-x-6 text-blue-700 font-medium">
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* Seção Principal */}
      <section id="home" className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Produtos Impressos em 3D</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-6">
          Transforme suas ideias em realidade com produtos personalizados e de alta qualidade.
        </p>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-6 py-3 rounded-2xl">
          Conheça nossos produtos
        </Button>
      </section>

      {/* Sobre a Empresa */}
      <section id="sobre" className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-blue-800 text-center mb-8">Sobre a GF3D TECH</h2>
        <div className="max-w-4xl mx-auto text-center text-lg text-gray-700 leading-relaxed">
          <p>
            A <strong>GF3D TECH</strong> é especializada na criação de produtos personalizados através da impressão 3D. 
            Unimos tecnologia e criatividade para transformar ideias em objetos reais, com alto nível de precisão e acabamento profissional.
          </p>
          <p className="mt-4">
            Nosso objetivo é oferecer soluções inovadoras tanto para o público criativo quanto para empresas que necessitam de protótipos, peças sob medida e brindes personalizados.
          </p>
        </div>
      </section>

      {/* Catálogo de Produtos */}
      <section id="catalogo" className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-blue-800 text-center mb-10">Catálogo de Produtos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {produtos.map((produto, index) => (
            <Card key={index} className="shadow-lg hover:shadow-2xl transition rounded-2xl">
              <CardContent className="p-4 text-center">
                <img src={produto.imagem} alt={produto.nome} className="w-full h-40 object-cover rounded-xl mb-3" />
                <h3 className="font-semibold text-blue-700">{produto.nome}</h3>
                <p className="text-sm text-gray-500">Cor: {produto.cor}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-blue-800 text-center mb-8">Entre em Contato</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl"
            required
          />
          <textarea
            name="message"
            placeholder="Mensagem"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl h-32"
          ></textarea>
          <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-2xl">
            Enviar
          </Button>
        </form>

        {/* Botão de WhatsApp */}
        <div className="text-center mt-10">
          <a
            href="https://wa.me/5517988199964"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl text-lg shadow-md transition"
          >
            <MessageCircle className="w-6 h-6" /> Fale conosco pelo WhatsApp
          </a>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="text-center py-6 bg-blue-800 text-white">
        <p>© 2025 GF3D TECH - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
