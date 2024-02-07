import {Accordion, AccordionItem} from "@nextui-org/react";

function RecRedesDD() {
  
  return (
    <div >
        <div className="container m-8 rounded-2xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between p-8">
            <div className="md:w-1/3">
                {/* Conteúdo da primeira coluna */}
                <h1 className="text-4xl font-bold text-center text-primary-focus pr-4">Mais sobre as redes</h1>
                <p className="text-lg font-slate-500 text-center mt-4 pr-4">Você consegue imaginar o uso das redes sociais associados à educação? Vamos conhecer algumas redes e explorar seu potencial para atividades pedagógicas.</p>
                
            </div>
            <div className="w-full md:w-2/3 mt-8 md:mt-0">
                
                <Accordion variant='bordered'>
                    <AccordionItem key="1" aria-label="Accordion 1" title="Instagram">
                        <p className="text-slate-800 py-2">O Instagram é uma rede social cujo conteúdo é fortemente visual, isto é, fotos e vídeos curtos. Os usuários podem inserir efeitos e legendas nos vídeos, assim como fazer um breve texto associado ao material postado.</p>
                        <p className="text-slate-800 py-2">A rede social é bem fácil de usar e possui diversos recursos para criação e organização de conteúdo. Para conhecer alguns recursos que o Instagram possui e para saber como usá-los clique aqui para um guia completo ou aqui para um guia resumido.</p>
                        <p className="text-slate-800 py-2">O Instagram também pode ser um poderoso aliado para as atividades em sala de aula. Confira aqui algumas ideias para o uso desta ferramenta com os alunos.</p>
                    </AccordionItem>
                    
                    <AccordionItem key="2" aria-label="Accordion 2" title="Facebook">
                        <p className="text-slate-800 py-2">Atualmente, o Facebook é a maior rede social do planeta, isto é, a que possui o maior número de usuários. A rede está estruturada na forma de páginas, onde cada usuário possui seu espaço, e nele pode postar e compartilhar fotos, vídeos, textos e gifs. Outros usuários podem se adicionar como amigos ou “curtir” e “seguir” páginas de seu interesse.</p>
                        <p className="text-slate-800 py-2">O Facebook é fácil de usar e apresenta diversos tipos de ferramentas e recursos. Para aprender a usar esta rede social você pode assistir um vídeo instrutivo aqui ou ler um tutorial completo aqui.</p>
                        <p className="text-slate-800 py-2">O Facebook pode ser usado em sala de aula para ajudar a criar aulas e atividades mais interativas e desafiadoras que aumentam o engajamento do estudante. Você pode conferir algumas inspirações clicando aqui, aqui e aqui. O Facebook é uma ferramenta que pode propiciar muitos benefícios para a sala de aula, clique aqui e confira algumas razões para usá-lo.</p>
                    </AccordionItem>
                    
                    <AccordionItem key="3" aria-label="Accordion 3" title="Youtube">
                        <p className="text-slate-800 py-2">O YouTube é a segunda maior rede social do planeta, e um dos motivos deste sucesso é que o material utilizado para criação e divulgação de conteúdos é apenas vídeos. Os usuários possuem canais onde podem postar conteúdo produzido por eles próprios e criar e organizar playlists, ou listas com conteúdos de outros canais. Os usuários podem se inscrever nos canais uns dos outros. A criação de vídeos é por conta do usuário, o YouTube funciona como (um repositor).</p>
                        <p className="text-slate-800 py-2">O YouTube é uma plataforma fácil de usar, tanto para quem cria quanto para quem busca conteúdo. Se você usa a rede para buscar conteúdo, pode usar estas dicas para otimizar sua pesquisa. Caso você queira criar um canal para postar seus vídeos ou organizar playlists, você pode assistir a este vídeo. Se você tem interesse em produzir vídeos (ou desafiar seus estudantes para tal), confira aqui uma lista de programas para edição.</p>
                        <p className="text-slate-800 py-2">Por ser uma plataforma de vídeos, o YouTube é uma ferramenta muito útil de apoio ao professor. Você pode clicar aqui e aqui para descobrir algumas razões pelas quais a rede é uma das favoritas dos professores. Confira algumas dicas e ideias para uso desta rede em sala de aula neste texto aqui e também neste vídeo e neste vídeo.</p>
                    </AccordionItem>

                    <AccordionItem key="4" aria-label="Accordion 3" title="Twitter">
                        <p className="text-slate-800 py-2">O Twitter é uma famosa rede social no formato de microblog, isso é, permite rápida atualização de conteúdo em sequência. Seu principal tipo de post é na forma de texto com o limite de 280 caracteres, mas também podemos postar imagens, vídeos e gifs. A rede está estruturada em perfis, onde cada usuário possui o seu e pode seguir aqueles que mais interessam.</p>
                        <p className="text-slate-800 py-2">Como todas as redes sociais listadas aqui, o Twitter também é fácil de usar, possui diversas ferramentas e funções intuitivas. Você pode acessar tutoriais de criação de conta e uso da rede aqui e aqui. Para entender melhor o funcionamento da rede, sua dinâmica e códigos, você pode acessar este texto.</p>
                        <p className="text-slate-800 py-2">Esta rede também é uma ótima escolha para apoiar o trabalho do professor em sala de aula. Você pode se inspirar com algumas ideias aqui, aqui e aqui.</p>
                    </AccordionItem>

                    <AccordionItem key="5" aria-label="Accordion 3" title="TikTok">
                    <p className="text-slate-800 py-2">O TikTok é uma rede social relativamente nova no mercado e que tem crescido rapidamente. Seu grande atrativo é o formato dos posts, que são vídeos de até 15 segundos acompanhados de músicas e cheios de efeitos. Esta rede tornou-se um fenômeno entre os jovens. Os usuários criam um perfil e podem seguir outros usuários. Atualmente a rede só pode ser utilizada em celulares.</p>
                    <p className="text-slate-800 py-2">Para auxiliar você a criar seu perfil e navegar por esta rede, você pode ler este tutorial ou assistir a este vídeo, que explica desde a criação de conta até a criação e postagem de conteúdo.</p>
                    <p className="text-slate-800 py-2">O TikTok traz alguns desafios para o educador, pois, além de ser uma novidade cheia de funcionalidades, como transmitir um conteúdo de maneira efetiva em pouco tempo? Por incrível que pareça, alunos e professores recorreram a esta rede, que agora também é sucesso na educação. Surgiu então a chamada “pedagogia do TikTok” (você pode ler mais sobre isso aqui) e a integração da rede social com a educação já é uma realidade (como descrito pelo SEBRAE).</p>
                    <p className="text-slate-800 py-2">Para inspirar você a usar esta ferramenta em sala de aula, separamos este vídeo e este texto, ambos cheios de dicas para usar este app.</p>
                    </AccordionItem>

                    <AccordionItem key="6" aria-label="Accordion 3" title="Whatzapp">
                    <p className="text-slate-800 py-2">O aplicativo de mensagens mais utilizado no Brasil também se enquadra como uma rede social. A ferramenta foi criada visando a troca de mensagens textuais entre usuários de celulares, porém, com o tempo, agora é possível compartilhar fotos, vídeos e gifs. Para utilizar a rede social é necessário um número de telefone e um aparelho celular. Pode-se acessar o Whatsapp pelo computador como uma forma de suporte ao celular.</p>
                    <p className="text-slate-800 py-2">O Whatsapp é fácil de usar, porém, mesmo sendo um grande conhecido, apresenta funcionalidades que alguns usuários podem não conhecer como formatar características textuais das mensagens ou criar linhas de transmissão com contatos. Apresentamos este texto com um tutorial detalhado sobre o uso desta rede.</p>
                    <p className="text-slate-800 py-2">Dentro da sala de aula, o Whatsapp pode servir tanto para auxiliar o professor com questões associadas ao conteúdo assim como otimizar a comunicação com os estudantes. Separamos alguns textos que trazem sugestões de uso do aplicativo dentro da escola e da sala de aula, você pode conferir aqui, aqui e aqui.</p>
                    <p className="text-slate-800 py-2">O uso do Whatsapp em sala de aula é possível, desde que feito com sabedoria e moderação, uma vez que envolve uma ferramenta de comunicação direta entre alunos e professores. Para evitar transtornos, é possível definir configurações no aplicativo, veja neste vídeo.</p>
                    </AccordionItem>
                </Accordion>
            </div>
            </div>
    </div>
  );
}

export default RecRedesDD;




