# Auditoria de paridade com SKI.EXE

Esta auditoria compara a implementação web com `SKI.EXE`,
`recovered/ski_recovered.c` e os relatórios em `../docs`. O executável não
contém o fonte C original completo: chamadas indiretas e partes das tabelas de
curso ainda estão marcadas como não resolvidas. Por isso, “exato” abaixo só é
usado quando há bytes, tabelas ou fluxo de controle recuperados como evidência.

## Itens conferidos

| Área | Situação | Evidência/decisão |
| --- | --- | --- |
| Recursos | Exato | Os 86 bitmaps `1..86` são carregados, sem substituição dos sprites originais. |
| Estado → sprite | Exato | Os 58 valores recuperados em `STATE_TO_SPRITE` seguem a tabela `DS:00CC`. |
| Tipos de objeto | Exato na base | Tipos `0..17` seguem `DS:0144`; rivais usam um tipo separado para não alterar a colisão original. |
| Câmera e âncora | Exato | Projeção ortográfica e jogador ancorado em `largura/2, altura/3`, como `sub_56DE/sub_0966`. |
| Direções por teclado | Exato | `TURN_TRANSITION`, numpad, setas e ciclos de manobra seguem `DS:0158` e `CS:5AFA`. |
| Mouse | Adaptado por solicitação | Conserva os estados originais, mas usa o eixo vertical como direção principal conforme solicitado. |
| Touch | Extensão web | Pressionar/mover controla a direção; toque curto inicia salto; cancelar o gesto não salta. |
| Queda e recuperação | Corrigido | Mantém `CRASHED → RECOVERING → STRAIGHT` e adiciona proteção curta contra repetir a mesma colisão AABB. O original evita a repetição pelo teste de cruzamento entre quadros. |
| Física do jogador | Proporcional | Perfis preservam relações de aceleração/curva, normalizados para simulação fixa de 60 Hz. O original usa ticks de aproximadamente 40 ms. |
| Aleatoriedade | Exato | LCG `seed * 0x343FD + 0x269EC3`, resultado de 15 bits e seleção inteira por módulo, recuperados de `entry_ord_05/sub_0375`. |
| HUD | Exato no conteúdo | Tempo, distância, velocidade e estilo usam as unidades e formatos recuperados. O HTML substitui a janela GDI original. |
| Recordes | Restaurado | As três provas mantêm até dez resultados; `localStorage` substitui o `entpack.ini` usado por `sub_1F10`. |
| Provas | Exato nas fronteiras | Início `0x0280`, finais `0x21C0/0x4100`, faixas laterais e penalidade de 5000 ms conferem com `sub_22D1/sub_24FA/sub_25F7`. |
| Bandeiras | Extensão solicitada | Conservam aprovação/erro e penalidade; a recompensa visual/de estilo foi adicionada por solicitação e não existe como regra comprovada no binário. |
| Objetos estáticos | Conferido | Moguls, pedras, tocos, bumps, árvores, rampas, placas, manchas, torre e cadeiras usam os IDs/tipos recuperados. |
| Cachorro | Exato na máquina de estados | Estados `0x1B..0x1E`, alternância, alerta e criação da mancha seguem `sub_2D27`. Temporização é normalizada para 60 Hz. |
| Esquiador NPC | Exato nos estados | Estados `0x16..0x1A` e colisão seguem `sub_2C37/sub_30AC`; movimento usa escala web equivalente. |
| Acrobata | Exato nos estados | Estados `0x1F..0x26`, alternância e prêmio comprovado de 20 pontos seguem `sub_2EC9/sub_30AC`. |
| Colisões | Melhor esforço documentado | Ramos de tipos e sprites conhecidos foram implementados. Dez chamadas far sem relocação continuam opacas no decompilado, então seus efeitos exatos não podem ser afirmados. |
| Spawn | Exato nas regiões, aproximado nos pesos | Entrada fora da tela e bandas das três provas seguem `sub_15F6/sub_1A31`; os pesos gerais são aproximações porque os quatro seletores ainda não foram completamente traduzidos. |
| Yeti | Fiel ao comportamento conhecido | Aparece após 2000 m, persegue, anima com sprites `68..81` e encerra a partida. Detalhes internos dos tipos `5..8` seguem parcialmente não resolvidos. |
| Neve, trilhas, efeitos e rivais | Extensões modernas | Isolados da tabela de objetos original e sem alterar os recursos ou transições recuperados. |

## Correções resultantes desta revisão

- A recuperação não pode mais cair em um ciclo ao permanecer sobre o mesmo obstáculo.
- Apenas uma colisão de queda é resolvida por quadro.
- A proteção termina automaticamente depois que o jogador teve tempo de sair do obstáculo.
- O gerador pseudoaleatório agora usa o algoritmo do executável original e é semeado a cada partida.
- Redimensionar limpa coordenadas antigas de mouse/touch, como o reset de mouse de `sub_56DE`.
- Touch longo/movido direciona; touch curto e imóvel pula; `pointercancel` nunca produz salto.

## Limite da auditoria

Não é tecnicamente correto declarar paridade bit a bit enquanto as chamadas
listadas em `../docs/UNRESOLVED_FAR_CALLS.md` e os seletores de spawn não forem
totalmente identificados. As aproximações estão isoladas e registradas acima,
para que uma recuperação futura possa substituí-las sem afetar as extensões web.
