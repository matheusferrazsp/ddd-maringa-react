import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

export const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    document.title = "Política de Privacidade | Dedetizadora Maringá";
  }, []);

  return (
    <div style={{ paddingTop: "8rem", paddingBottom: "5rem", minHeight: "100vh", backgroundColor: "var(--bg-primary)" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <div style={{
          backgroundColor: "#fff",
          borderRadius: "1.5rem",
          padding: "3rem",
          boxShadow: "var(--shadow-tech)",
          border: "1px solid var(--border-subtle)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
            <div style={{
              width: "3rem", height: "3rem", borderRadius: "0.75rem",
              background: "rgba(0, 168, 255, 0.1)", color: "#00a8ff",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>
              Política de Privacidade
            </h1>
          </div>
          
          <div style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem" }}>
            <p style={{ marginBottom: "1.5rem" }}><strong>Última atualização: {new Date().toLocaleDateString('pt-BR')}</strong></p>
            
            <h2 style={{ color: "var(--text-primary)", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>1. Introdução</h2>
            <p style={{ marginBottom: "1rem" }}>
              A <strong>Dedetizadora e Desentupidora Maringá</strong> tem o compromisso de proteger a sua privacidade e os seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos as informações dos visitantes e clientes que utilizam o nosso site.
            </p>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>2. Dados que Coletamos</h2>
            <p style={{ marginBottom: "0.5rem" }}>Podemos coletar as seguintes informações:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}><strong>Informações de Contato:</strong> Quando você entra em contato conosco via WhatsApp ou formulários, podemos coletar seu nome, número de telefone e o motivo do contato.</li>
              <li style={{ marginBottom: "0.5rem" }}><strong>Dados de Navegação:</strong> Informações sobre como você utiliza nosso site, endereço IP, tipo de navegador, tempo de visita e páginas acessadas, geralmente coletados por meio de cookies e ferramentas de analytics.</li>
            </ul>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>3. Como Usamos Seus Dados</h2>
            <p style={{ marginBottom: "0.5rem" }}>Utilizamos suas informações para:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>Prestar o atendimento solicitado (como orçamentos e agendamento de visitas técnicas).</li>
              <li style={{ marginBottom: "0.5rem" }}>Melhorar a experiência de navegação no nosso site.</li>
              <li style={{ marginBottom: "0.5rem" }}>Veicular anúncios e campanhas de marketing direcionadas para usuários que já demonstraram interesse em nossos serviços.</li>
              <li style={{ marginBottom: "0.5rem" }}>Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>4. Compartilhamento de Informações</h2>
            <p style={{ marginBottom: "0.5rem" }}>Não vendemos nem alugamos seus dados pessoais para terceiros. Suas informações podem ser compartilhadas apenas com:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}><strong>Fornecedores de Serviços:</strong> Plataformas de análise de dados (ex: Google, Meta) e provedores de hospedagem que nos auxiliam na operação do site, sob acordos de confidencialidade.</li>
              <li style={{ marginBottom: "0.5rem" }}><strong>Autoridades Legais:</strong> Quando exigido por lei ou para proteger os direitos da nossa empresa.</li>
            </ul>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>5. Uso de Cookies</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Utilizamos cookies e pixels de rastreamento para entender o comportamento dos usuários em nosso site, otimizar campanhas de publicidade e medir a eficácia dos nossos anúncios. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades.
            </p>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>6. Seus Direitos (LGPD)</h2>
            <p style={{ marginBottom: "0.5rem" }}>De acordo com a Lei Geral de Proteção de Dados, você tem o direito de:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>Solicitar acesso, correção ou exclusão dos dados que temos sobre você.</li>
              <li style={{ marginBottom: "0.5rem" }}>Solicitar a anonimização de dados desnecessários ou excessivos.</li>
            </ul>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>7. Contato</h2>
            <p style={{ marginBottom: "2.5rem" }}>
              Se tiver qualquer dúvida sobre esta Política de Privacidade ou desejar exercer seus direitos, entre em contato através do nosso WhatsApp: <strong>(11) 94072-4379</strong> ou no endereço: Rua Maringá, 278 - Embu das Artes - SP.
            </p>
            
            <div style={{ paddingTop: "2rem", borderTop: "1px solid var(--border-subtle)", textAlign: "center" }}>
              <Link to="/" style={{ color: "#00a8ff", fontWeight: 700, textDecoration: "none" }}>
                &larr; Voltar para a Página Inicial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
