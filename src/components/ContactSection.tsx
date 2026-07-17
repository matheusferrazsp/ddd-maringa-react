import React, { useState } from 'react';
import { Phone, MapPin, Clock, ShieldAlert, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    servico: 'Dedetização Geral',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, meu nome é *${formData.nome}*. Telefone: ${formData.telefone}. Gostaria de orçamento para: *${formData.servico}*. Mensagem: ${formData.mensagem}`;
    const url = `https://wa.me/+5511940724379?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const whatsappUrl = "https://wa.me/+5511940724379?text=Ol%C3%A1%2C%20gostaria%20de%20receber%20um%20or%C3%A7amento%20gratuito.";

  return (
    <section id="contato" className="section-padding" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        <div className="contact__layout">
          
          {/* Left Column - Contact Info & Address */}
          <div>
            <span className="section-tag">Fale Conosco</span>
            <h2 className="section-title">
              Adoraríamos <span className="gradient-text-emerald">Ouvir Você</span>
            </h2>
            <p className="section-subtitle">
              Entre em contato conosco e tire suas dúvidas. Plantão emergencial 24 horas todos os dias da semana, incluindo domingos e feriados.
            </p>

            <div className="contact__info-list">
              <a href="tel:11940724379" className="contact__info-item">
                <div className="contact__info-icon contact__info-icon--emerald">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="contact__info-label">Telefone Principal (24h)</span>
                  <span className="contact__info-value">(11) 94072-4379</span>
                </div>
              </a>

              <a href="tel:11960972283" className="contact__info-item">
                <div className="contact__info-icon contact__info-icon--cyan">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="contact__info-label">Telefone Secundário</span>
                  <span className="contact__info-value">(11) 96097-2283</span>
                </div>
              </a>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact__info-item">
                <div className="contact__info-icon contact__info-icon--emerald">
                  <img src="/images/logos/whatsapp.svg" alt="WhatsApp" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <span className="contact__info-label">Atendimento WhatsApp</span>
                  <span className="contact__info-value">Orçamento Imediato Online</span>
                </div>
              </a>

              <div className="contact__info-item">
                <div className="contact__info-icon contact__info-icon--amber">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="contact__info-label">Nosso Endereço Base</span>
                  <span className="contact__info-value">Rua Maringá, 278 - Embu das Artes - SP</span>
                  <span className="contact__info-sub">Atendemos toda a Grande São Paulo</span>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon contact__info-icon--purple">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="contact__info-label">Horário de Funcionamento</span>
                  <span className="contact__info-value">Domingo à Domingo — 24 Horas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Form */}
          <div>
            <div className="contact__form-card">
              
              <div className="contact__form-header">
                <div className="contact__form-header-icon">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="contact__form-title">Solicite um Orçamento Rápido</h3>
                  <p className="contact__form-subtitle">Preencha e receba atendimento imediato pelo WhatsApp do nosso técnico</p>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="contact__form-grid">
                  <div>
                    <label className="form-label">Seu Nome Completo</label>
                    <input 
                      type="text" 
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Ex: Carlos Oliveira" 
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="form-label">Seu Telefone / WhatsApp</label>
                    <input 
                      type="tel" 
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999" 
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Serviço de Interesse</label>
                  <select 
                    name="servico"
                    value={formData.servico}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Dedetização Geral">Dedetização Geral</option>
                    <option value="Desentupimento Profissional">Desentupimento Profissional</option>
                    <option value="Controle de Cupins (Descupinização)">Controle de Cupins (Descupinização)</option>
                    <option value="Controle de Percevejos">Controle de Percevejos</option>
                    <option value="Controle de Mosquitos e Pernilongos">Controle de Mosquitos e Pernilongos</option>
                    <option value="Controle de Roedores (Desratização)">Controle de Roedores (Desratização)</option>
                    <option value="Manejo de Pombos">Manejo de Pombos</option>
                    <option value="Inspeção Preventiva">Inspeção Preventiva / Outros</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Detalhes do Problema ou Local</label>
                  <textarea 
                    name="mensagem"
                    rows={4}
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Conte se é casa, apartamento, comércio e há quanto tempo notou o problema..." 
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-emerald" style={{ width: '100%', padding: '0.75rem' }}>
                  <img src="/images/logos/whatsapp-white.svg" alt="WhatsApp" className="w-4 h-4 flex-shrink-0 object-contain" />
                  <span>Enviar Orçamento no WhatsApp</span>
                </button>
              </form>

              <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                <ShieldAlert className="w-4 h-4" style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                <span>Seus dados são utilizados exclusivamente para agendar a visita técnica.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
