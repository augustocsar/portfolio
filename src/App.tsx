import { Bot, Cloud, Github, Layout, Linkedin, Mail, Users } from 'lucide-react';
import fotoPerfil from './assets/AugustoCesar.jpg';
import imgNotasFiscais from './assets/NotasFiscais.jpg';
import imgChatbotTelegram from './assets/Chatbot.jpg';
import imgFeedNoticias from './assets/FeedNoticias.png';
import imgAgentZaia from './assets/AgenteZaia.jpg';
import imgDreamSquad from './assets/DreamSquad.jpg';
import imgWorkflowApi from './assets/WorkflowApi.jpg';
import imgOciTerraform from './assets/OciTerraform.png';


function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Header - Idiomas */}
      <header className="max-w-6xl mx-auto p-6 flex justify-end gap-2">
        <button className="px-3 py-1 border border-red-500 text-red-500 font-bold rounded text-xs">PT</button>
        <button className="px-3 py-1 border border-gray-300 text-gray-400 font-bold rounded text-xs opacity-50">EN</button>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Título Estilo Mariana Lira */}
        <div className="flex justify-between items-end border-b-4 border-red-500 pb-2 mb-16">
          <h1 className="text-xl font-bold uppercase tracking-tight">
            Portfólio de Projetos <span className="text-gray-400 font-light lowercase text-lg">de Engenharia de IA & Sistemas Inteligentes</span>
          </h1>

          <div className="flex gap-4 mb-1">
            <a href="https://github.com/augustocsar" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/augustocsar/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Seção de Boas-Vindas (A ideia da Professora) */}
        <section className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-black leading-[1.1] mb-8 text-slate-700">
              Olá, seja muito bem-vindo(a) ao meu portfólio de Engenharia de IA.
            </h2>
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
              <p>
                Nesta página, eu demonstro minhas habilidades em resolver problemas complexos utilizando
                conceitos e ferramentas de <strong>Inteligência Artificial e Cloud Computing</strong>, através de projetos práticos e aplicações reais.
              </p>
              <p>
                Você também irá encontrar minhas experiências profissionais, habilidades técnicas e ferramentas envolvendo o universo dos
                <strong> Agentes Inteligentes, LLMs e infraestrutura escalável</strong>.
              </p>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md">
            <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-gray-100 aspect-square">
              <img
                src={fotoPerfil}
                alt="Augusto César"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </section>

        {/* Seção Sobre Mim - Estilização de Impacto */}
        <section className="py-20 border-t border-gray-100">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-black leading-[1.1] mb-8 text-slate-700">
              Sobre mim
            </h2>
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed text-justify">
              <p>
                Meu nome é <strong>Augusto César</strong>. Sou formado em Análise e Desenvolvimento de Sistemas e sigo expandindo minha base teórica na graduação em Ciência da Computação.
              </p>
              <p>
                Minha trajetória acadêmica é marcada pela busca constante por conhecimento profundo, o que me levou ao <strong>Mestrado em Ciência da Computação na UFS (PROCC)</strong> como aluno especial, onde foco em algoritmos e sistemas inteligentes.
              </p>
              <p>
                Com experiência prática em empresas como a <strong>Compass UOL</strong>, especializei-me em unir o desenvolvimento Fullstack com o poder da <strong>Engenharia de IA</strong>, criando agentes e fluxos de automação escaláveis utilizando <strong>Python, LangChain e AWS</strong>.
              </p>
              <p>
                Acredito que a tecnologia deve ser usada para simplificar processos complexos, e é essa mentalidade que aplico em cada solução que desenvolvo.
              </p>
            </div>
          </div>
        </section>

        {/* Seção Habilidades - Com Ícones Reais e Sem Erros */}
        <section className="py-20 border-t border-gray-100">
          <h2 className="text-5xl font-bold text-slate-700 mb-16 border-b-4 border-red-500 inline-block pb-2">
            Habilidades
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">

            {/* Bloco 1: IA & LLMs */}
            <div className="flex gap-8 items-start">
              <div className="min-w-20 h-20 border-2 border-gray-100 rotate-45 flex items-center justify-center bg-white shadow-sm hover:border-red-500 transition-colors">
                <div className="-rotate-45 text-red-500">
                  <Bot size={32} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-700 mb-6">IA, LLMs e Agentes</h3>
                <ul className="text-gray-500 space-y-3 list-disc pl-4 text-justify">
                  <li>Python com foco em Engenharia de IA</li>
                  <li>Orquestração de LLMs com LangChain e Agentes</li>
                  <li>Desenvolvimento de RAG com ChromaDB e Bancos Vetoriais</li>
                  <li>Amazon Textract para processamento inteligente de documentos</li>
                  <li>Modelos de linguagem via AWS Bedrock</li>
                  <li>NLP e Prompt Engineering avançado</li>
                </ul>
              </div>
            </div>

            {/* Bloco 2: Backend e Cloud */}
            <div className="flex gap-8 items-start">
              <div className="min-w-20 h-20 border-2 border-gray-100 rotate-45 flex items-center justify-center bg-white shadow-sm hover:border-red-500 transition-colors">
                <div className="-rotate-45 text-red-500">
                  <Cloud size={32} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-700 mb-6">Engenharia de Software e Cloud</h3>
                <ul className="text-gray-500 space-y-3 list-disc pl-4 text-justify">
                  <li>Construção de APIs robustas com FastAPI e Node.js</li>
                  <li>Infraestrutura AWS (S3, Lambda, EC2 e API Gateway)</li>
                  <li>Containerização de aplicações com Docker</li>
                  <li>Modelagem de Bancos de Dados SQL e NoSQL</li>
                  <li>Integrações de sistemas e automações em Python</li>
                  <li>Versionamento avançado com Git e GitHub</li>
                </ul>
              </div>
            </div>

            {/* Bloco 3: Frontend e UI */}
            <div className="flex gap-8 items-start">
              <div className="min-w-20 h-20 border-2 border-gray-100 rotate-45 flex items-center justify-center bg-white shadow-sm hover:border-red-500 transition-colors">
                <div className="-rotate-45 text-red-500">
                  <Layout size={32} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-700 mb-6">Desenvolvimento Frontend</h3>
                <ul className="text-gray-500 space-y-3 list-disc pl-4 text-justify">
                  <li>Interfaces modernas com React.js e TypeScript</li>
                  <li>Estilização performática com Tailwind CSS</li>
                  <li>Criação de Dashboards e visualização de dados</li>
                  <li>Consumo de APIs REST e WebSockets</li>
                  <li>Foco em UX para ferramentas de IA</li>
                </ul>
              </div>
            </div>

            {/* Bloco 4: Metodologias */}
            <div className="flex gap-8 items-start">
              <div className="min-w-20 h-20 border-2 border-gray-100 rotate-45 flex items-center justify-center bg-white shadow-sm hover:border-red-500 transition-colors">
                <div className="-rotate-45 text-red-500">
                  <Users size={32} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-700 mb-6">Trabalho e Metodologias</h3>
                <ul className="text-gray-500 space-y-3 list-disc pl-4 text-justify">
                  <li>Trabalho colaborativo em equipe com Metodologias Ágeis</li>
                  <li>Resolução de problemas complexos com clareza técnica</li>
                  <li>Escrita de documentação técnica detalhada</li>
                  <li>Experiência prática em ambientes de escala (Compass UOL)</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Experiência Profissional - Texto Refinado e Estilização Mantida */}
        <section className="py-20 border-t border-gray-100">
          <h2 className="text-5xl font-bold text-slate-700 mb-16 border-b-4 border-red-500 inline-block pb-2">
            Experiência Profissional
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Compass UOL */}
            <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-2xl hover:border-red-500 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-red-500 font-black text-sm uppercase tracking-widest">Compass UOL</span>
                  <h4 className="text-2xl font-bold text-slate-700 mt-1">Estagiário de Software & IA</h4>
                </div>
                <span className="text-gray-400 text-xs font-medium bg-gray-50 px-3 py-1 rounded-full">Dez 2024 — Mai 2025</span>
              </div>

              <ul className="text-gray-500 space-y-4 text-sm leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Desenvolvimento de sistemas escaláveis utilizando <strong>HTML5, CSS3, JavaScript e Python</strong>.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Desenvolvimento de integrações e construção de <strong>APIs REST</strong> com foco em escalabilidade.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Implementação de soluções de IA com <strong>Amazon Textract e NLP</strong> para processamento inteligente de documentos.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Criação de agentes e chatbots inteligentes integrando <strong>LangChain, ChromaDB e AWS Bedrock</strong>.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Orquestração de infraestrutura na <strong>AWS</strong> e containerização de aplicações com <strong>Docker</strong>.</span>
                </li>
              </ul>
            </div>

            {/* Jet Sales Brasil */}
            <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-2xl hover:border-slate-400 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-slate-500 font-black text-sm uppercase tracking-widest">Jet Sales Brasil</span>
                  <h4 className="text-2xl font-bold text-slate-700 mt-1">Estagiário de TI</h4>
                </div>
                <span className="text-gray-400 text-xs font-medium bg-gray-50 px-3 py-1 rounded-full">Mar 2024 — Ago 2024</span>
              </div>

              <ul className="text-gray-500 space-y-4 text-sm leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-slate-400 font-bold">•</span>
                  <span>Realizei integrações de sistemas utilizando <strong>n8n</strong>, conectando dados entre plataformas como CRMs e serviços de mensagens.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-400 font-bold">•</span>
                  <span>Automação de processos internos e fluxos de dados utilizando <strong>JavaScript e Python</strong>.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-400 font-bold">•</span>
                  <span>Manipulação de dados estruturados em <strong>JSON</strong> e elaboração de documentação técnica detalhada.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Seção de Projetos - Estilo Mariana Lira */}
        <section className="py-20 border-t border-gray-100">
          <h2 className="text-5xl font-bold text-slate-700 mb-16 border-b-4 border-red-500 inline-block pb-2">
            Projetos em Engenharia de IA
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Projeto 1: Processamento de Notas Fiscais com IA */}
            <div className="flex flex-col">
              <div className="rounded-xl overflow-hidden mb-8 shadow-lg border border-gray-100 aspect-video bg-slate-50">
                <img
                  src={imgNotasFiscais}
                  alt="Extração de dados com IA"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4">API de Extração Inteligente de Notas Fiscais</h3>

              <div className="space-y-4">
                <p className="text-gray-500 leading-relaxed text-justify">
                  Desenvolvimento de uma API REST serverless para processamento automatizado de notas fiscais eletrônicas.
                  O sistema realiza o upload de imagens para um <strong>Bucket S3</strong>, utiliza o <strong>Amazon Textract</strong> para transcrição
                  e aplica técnicas de <strong>NLP (NLTK) e LLMs</strong> para extrair, categorizar e estruturar os dados da nota em formato JSON.
                </p>

                <p className="text-gray-500 leading-relaxed text-justify">
                  A arquitetura foi desenhada para ser escalável e eficiente, utilizando <strong>AWS Lambda e API Gateway</strong>,
                  com logs monitorados via CloudWatch e classificação automática de arquivos baseada na forma de pagamento detectada.
                </p>
              </div>

              <h4 className="font-bold text-slate-700 mt-8 mb-4">As ferramentas utilizadas foram:</h4>
              <ul className="text-gray-500 space-y-2 list-disc pl-5 mb-8">
                <li>Python (AWS Lambda)</li>
                <li>Amazon Textract & S3</li>
                <li>NLP (NLTK) & LLM para refinamento</li>
                <li>API Gateway & CloudWatch</li>
                <li>JSON para estruturação de dados</li>
              </ul>

              <a
                href="https://github.com/augustocsar/APIRest-NFs"
                target="_blank"
                className="inline-block w-fit px-6 py-2 border-2 border-red-500 text-red-500 font-bold uppercase text-sm hover:bg-red-500 hover:text-white transition-all"
              >
                Saiba Mais
              </a>
            </div>

            {/* Projeto 2: Chatbot RAG para Documentos Jurídicos */}
            <div className="flex flex-col">
              <div className="rounded-xl overflow-hidden mb-8 shadow-lg border border-gray-100 aspect-video bg-slate-50">
                <img
                  src={imgChatbotTelegram}
                  alt="Chatbot RAG Telegram"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4">Chatbot para Consulta de Documentos Jurídicos</h3>

              <div className="space-y-4">
                <p className="text-gray-500 leading-relaxed text-justify">
                  Desenvolvimento de um sistema inteligente de consulta jurídica via <strong>Telegram</strong>, utilizando a arquitetura <strong>RAG (Retrieval-Augmented Generation)</strong>.
                  O sistema extrai conteúdo de PDFs complexos, processa o texto em chunks e gera <strong>embeddings semânticos</strong> para buscas precisas.
                </p>

                <p className="text-gray-500 leading-relaxed text-justify">
                  A solução utiliza o <strong>ChromaDB</strong> como banco vetorial e o <strong>AWS Bedrock (Amazon Titan)</strong> para fundamentar as respostas nos documentos recuperados.
                  Toda a orquestração é feita via <strong>LangChain</strong> e <strong>AWS Lambda</strong>, garantindo uma resposta contextualizada e segura em tempo real.
                </p>
              </div>

              <h4 className="font-bold text-slate-700 mt-8 mb-4">As ferramentas utilizadas foram:</h4>
              <ul className="text-gray-500 space-y-2 list-disc pl-5 mb-8">
                <li>Python & LangChain</li>
                <li>AWS Bedrock (Amazon Titan)</li>
                <li>ChromaDB (Vector Database)</li>
                <li>AWS Lambda & API Gateway</li>
                <li>Telegram Bot API</li>
                <li>PyPDFLoader & TextSplitter</li>
              </ul>

              <a
                href="https://github.com/augustocsar/Chatbot-telegram"
                target="_blank"
                className="inline-block w-fit px-6 py-2 border-2 border-red-500 text-red-500 font-bold uppercase text-sm hover:bg-red-500 hover:text-white transition-all"
              >
                Saiba Mais
              </a>
            </div>

            {/* Projeto 3: Feed de Notícias com RSS e Docker */}
            <div className="flex flex-col">
              <div className="rounded-xl overflow-hidden mb-8 shadow-lg border border-gray-100 aspect-video bg-slate-50">
                <img
                  src={imgFeedNoticias}
                  alt="Feed de Notícias RSS"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4">Feed de Notícias RSS com Docker & AWS EC2</h3>

              <div className="space-y-4">
                <p className="text-gray-500 leading-relaxed text-justify">
                  Desenvolvimento de uma aplicação Fullstack para visualização de feeds de notícias em tempo real via RSS do portal G1.
                  O projeto foca na portabilidade, sendo totalmente <strong>dockerizado</strong> para garantir que a aplicação execute de forma idêntica em qualquer ambiente.
                </p>

                <p className="text-gray-500 leading-relaxed text-justify">
                  A solução foi implantada na nuvem utilizando uma instância <strong>Amazon EC2</strong> para hospedagem e o <strong>S3</strong> para o armazenamento dos dados estruturados.
                  O projeto envolveu a configuração de conexões SSH, gerenciamento de containers com <strong>Docker Compose</strong> e resolução de desafios de rede e CORS.
                </p>
              </div>

              <h4 className="font-bold text-slate-700 mt-8 mb-4">As ferramentas utilizadas foram:</h4>
              <ul className="text-gray-500 space-y-2 list-disc pl-5 mb-8">
                <li>JavaScript (Node.js & Express)</li>
                <li>Docker & Docker Compose</li>
                <li>AWS EC2 (Hospedagem)</li>
                <li>AWS S3 (Storage)</li>
                <li>HTML5 & CSS3</li>
                <li>Versionamento com Git/GitHub</li>
              </ul>

              <a
                href="https://github.com/augustocsar/Feed-De-Noticias-Com-RSS"
                target="_blank"
                className="inline-block w-fit px-6 py-2 border-2 border-red-500 text-red-500 font-bold uppercase text-sm hover:bg-red-500 hover:text-white transition-all"
              >
                Saiba Mais
              </a>
            </div>

            {/* Projeto 4: Zaia Agent - Fullstack AI Agent */}
            <div className="flex flex-col">
              <div className="rounded-xl overflow-hidden mb-8 shadow-lg border border-gray-100 aspect-video bg-slate-50">
                <img
                  src={imgAgentZaia}
                  alt="Zaia Agent Fullstack"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4">Zaia Agent: Agente Inteligente Fullstack</h3>

              <div className="space-y-4">
                <p className="text-gray-500 leading-relaxed text-justify">
                  Uma aplicação completa que integra um <strong>Agente ReAct</strong> de alto desempenho com uma interface de chat moderna.
                  O backend utiliza o <strong>Gemini 2.0 Flash</strong> para orquestrar ferramentas de consulta climática, financeira e processamento de documentos jurídicos.
                </p>

                <p className="text-gray-500 leading-relaxed text-justify">
                  O frontend oferece uma experiência fluida com <strong>Streaming Real-time</strong> e upload de PDFs para análise via <strong>RAG</strong>, demonstrando domínio completo do ciclo de desenvolvimento de IA.
                </p>
              </div>

              <h4 className="font-bold text-slate-700 mt-8 mb-4">As ferramentas utilizadas foram:</h4>
              <ul className="text-gray-500 space-y-2 list-disc pl-5 mb-8">
                <li>Python (FastAPI) & React 19 (Vite)</li>
                <li>LangChain (Agente ReAct) & Gemini 2.0</li>
                <li>RAG com FAISS e Embeddings locais</li>
                <li>Streaming de respostas (SSE)</li>
                <li>TypeScript & CSS Modules</li>
              </ul>

              {/* Botões Empilhados - Padronizados */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Repositório Backend</span>
                  <a
                    href="https://github.com/augustocsar/backend-zaia-agent"
                    target="_blank"
                    className="inline-block w-fit px-6 py-2 border-2 border-red-500 text-red-500 font-bold uppercase text-sm hover:bg-red-500 hover:text-white transition-all"
                  >
                    Saiba Mais
                  </a>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Repositório Frontend</span>
                  <a
                    href="https://github.com/augustocsar/zaia-frontend-web"
                    target="_blank"
                    className="inline-block w-fit px-6 py-2 border-2 border-slate-800 text-slate-800 font-bold uppercase text-sm hover:bg-slate-800 hover:text-white transition-all"
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
            </div>

            {/* Projeto 5: DreamSquad AI Agent - Clean Architecture */}
            <div className="flex flex-col">
              <div className="rounded-xl overflow-hidden mb-8 shadow-lg border border-gray-100 aspect-video bg-slate-50">
                <img
                  src={imgDreamSquad}
                  alt="DreamSquad AI Agent"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4">DreamSquad AI: API de Agente com Clean Architecture</h3>

              <div className="space-y-4">
                <p className="text-gray-500 leading-relaxed text-justify">
                  Desenvolvimento de uma <strong>API RESTful</strong> robusta para orquestração de agentes inteligentes.
                  O projeto aplica os princípios de <strong>Clean Architecture</strong> para garantir uma separação clara de responsabilidades, facilitando a testabilidade e escalabilidade do sistema.
                </p>

                <p className="text-gray-500 leading-relaxed text-justify">
                  O agente utiliza o modelo <strong>Llama 3.2</strong> rodando localmente via <strong>Ollama</strong>, sendo capaz de realizar raciocínio lógico e execução de ferramentas (<em>Function Calling</em>).
                  A solução foi construída com <strong>FastAPI</strong> e o SDK <strong>Strands Agents</strong>, permitindo interações complexas e precisas.
                </p>
              </div>

              <h4 className="font-bold text-slate-700 mt-8 mb-4">As ferramentas utilizadas foram:</h4>
              <ul className="text-gray-500 space-y-2 list-disc pl-5 mb-8">
                <li>Python (FastAPI) & Clean Architecture</li>
                <li>Ollama & Llama 3.2 (Local LLM)</li>
                <li>Strands Agents SDK (Function Calling)</li>
                <li>Pydantic (Schemas & Settings)</li>
                <li>Arquitetura em Camadas (Services/API/Core)</li>
              </ul>

              <a
                href="https://github.com/augustocsar/dreamsquad-ai-agent"
                target="_blank"
                className="inline-block w-fit px-6 py-2 border-2 border-red-500 text-red-500 font-bold uppercase text-sm hover:bg-red-500 hover:text-white transition-all"
              >
                Saiba Mais
              </a>
            </div>

            {/* Projeto 6: AI Agent Workflow API - Bun & GraphQL */}
            <div className="flex flex-col">
              <div className="rounded-xl overflow-hidden mb-8 shadow-lg border border-gray-100 aspect-video bg-slate-50">
                <img
                  src={imgWorkflowApi}
                  alt="AI Agent Workflow API"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4">AI Agent Workflow: API de Alta Performance com Bun</h3>

              <div className="space-y-4">
                <p className="text-gray-500 leading-relaxed text-justify">
                  Desenvolvimento de uma infraestrutura backend ultra-rápida para o gerenciamento de agentes de IA, utilizando o runtime <strong>Bun</strong> e o framework <strong>ElysiaJS</strong>.
                  A API utiliza <strong>GraphQL Yoga</strong> para permitir queries complexas e aninhadas em uma única requisição.
                </p>

                <p className="text-gray-500 leading-relaxed text-justify">
                  O sistema conta com <strong>versionamento automático de prompts</strong>, histórico de execuções assíncronas e persistência de dados com <strong>SQLite e Drizzle ORM</strong>.
                  A arquitetura segue o <em>Service Pattern</em>, garantindo exclusões em cascata e integridade total dos dados.
                </p>
              </div>

              <h4 className="font-bold text-slate-700 mt-8 mb-4">As ferramentas utilizadas foram:</h4>
              <ul className="text-gray-500 space-y-2 list-disc pl-5 mb-8">
                <li>Bun (Runtime) & ElysiaJS</li>
                <li>GraphQL Yoga (Query Language)</li>
                <li>Drizzle ORM & SQLite</li>
                <li>Service Pattern (Arquitetura em Camadas)</li>
                <li>TypeScript Avançado</li>
              </ul>

              <a
                href="https://github.com/augustocsar/ai-agent-workflow-api"
                target="_blank"
                className="inline-block w-fit px-6 py-2 border-2 border-red-500 text-red-500 font-bold uppercase text-sm hover:bg-red-500 hover:text-white transition-all"
              >
                Saiba Mais
              </a>
            </div>

            {/* Projeto 7: OCI Cloud Infrastructure com Terraform */}
            <div className="flex flex-col">
              <div className="rounded-xl overflow-hidden mb-8 shadow-lg border border-gray-100 aspect-video bg-slate-50">
                <img
                  src={imgOciTerraform}
                  alt="Infraestrutura OCI com Terraform"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4">Cloud Infrastructure: IaC Modular com Terraform na OCI</h3>

              <div className="space-y-4">
                <p className="text-gray-500 leading-relaxed text-justify">
                  Provisionamento de uma infraestrutura de nuvem completa e escalável na <strong>Oracle Cloud Infrastructure (OCI)</strong> utilizando <strong>Terraform</strong>.
                  O projeto aplica os conceitos de <strong>Infraestrutura como Código (IaC)</strong> através de uma arquitetura modularizada, separando as camadas de rede e computação.
                </p>

                <p className="text-gray-500 leading-relaxed text-justify">
                  A solução gerencia automaticamente a criação de <strong>VCNs, Subnets Públicas, Gateways e Security Lists</strong>, além do provisionamento de instâncias Ubuntu configuradas com <strong>Nginx</strong>.
                  O foco principal foi a segurança, com regras rígidas de firewall e autenticação via chaves SSH.
                </p>
              </div>

              <h4 className="font-bold text-slate-700 mt-8 mb-4">As ferramentas utilizadas foram:</h4>
              <ul className="text-gray-500 space-y-2 list-disc pl-5 mb-8">
                <li>Terraform (Infraestrutura como Código)</li>
                <li>OCI (Oracle Cloud Infrastructure)</li>
                <li>Módulos Terraform (Network & Compute)</li>
                <li>Linux Server (Ubuntu & Nginx)</li>
                <li>Segurança de Rede (Firewall & Security Lists)</li>
              </ul>

              <a
                href="https://github.com/augustocsar/oci-terraform-lab"
                target="_blank"
                className="inline-block w-fit px-6 py-2 border-2 border-red-500 text-red-500 font-bold uppercase text-sm hover:bg-red-500 hover:text-white transition-all"
              >
                Saiba Mais
              </a>
            </div>

          </div>
        </section>

        {/* Seção Entre em contato - Estilo Mariana Lira */}
        <section className="py-20 border-t border-gray-100 mt-20">
          <h2 className="text-4xl font-bold text-slate-700 mb-12 border-b-4 border-red-500 inline-block pb-1">
            Entre em contato
          </h2>
          
          <div className="space-y-10">
            <p className="text-gray-500 text-lg">
              Sinta-se à vontade para entrar em contato.
            </p>

            <div className="space-y-6">
              {/* E-mail */}
              <div className="flex items-center gap-4 group">
                <div className="text-red-500">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <a 
                  href="mailto:augustocsar97@gmail.com" 
                  className="text-gray-500 hover:text-red-500 border-b border-dotted border-gray-400 hover:border-red-500 transition-all text-lg"
                >
                  augustocsar97@gmail.com
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4 group">
                <div className="text-red-500">
                  <Linkedin size={24} strokeWidth={1.5} />
                </div>
                <a 
                  href="https://linkedin.com/in/augustocsar/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-500 hover:text-blue-600 border-b border-dotted border-gray-400 hover:border-blue-600 transition-all text-lg"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;