# Projeto Organizado e Clean Code

Skill para orientar a criação, organização, modularização, refatoração e evolução de projetos de software com **clean code**, baixo acoplamento, separação de responsabilidades, testes e documentação proporcional.

A skill ajuda a IA a tomar decisões arquiteturais de forma pragmática: começa pelo contexto do projeto, escolhe uma estrutura adequada à complexidade, separa módulos por capacidades do negócio e evita aplicar padrões ou camadas sem necessidade.

## Conteúdo do repositório

```text
.
├── SKILL.md
└── references/
    └── decision-heuristics.md
```

## Instalação no Manus

### Opção 1: adicionar pela interface

1. Abra este repositório no GitHub: [IgorsSantana/projeto-organizado-clean-code](https://github.com/IgorsSantana/projeto-organizado-clean-code).
2. Baixe o arquivo [`SKILL.md`](https://raw.githubusercontent.com/IgorsSantana/projeto-organizado-clean-code/main/SKILL.md) e, quando aplicável, o diretório `references/`.
3. No Manus, abra a área de **Skills** ou **My Skills**.
4. Escolha a opção para adicionar ou importar uma skill.
5. Envie o pacote da skill contendo `SKILL.md` e o diretório `references/`.
6. Ative a skill e inicie uma nova tarefa de criação ou organização de projeto.

> Quando a interface do Manus oferecer um arquivo `.skill` para download ou importação, prefira esse formato. A estrutura do pacote deve preservar `SKILL.md` na raiz.

### Opção 2: usar o repositório como fonte

Se a sua configuração do Manus aceitar repositórios ou arquivos externos como fonte de skill, use:

```text
https://github.com/IgorsSantana/projeto-organizado-clean-code
```

Ou use diretamente o arquivo bruto:

```text
https://raw.githubusercontent.com/IgorsSantana/projeto-organizado-clean-code/main/SKILL.md
```

Depois de importar, confirme que a skill aparece com o nome `projeto-organizado-clean-code`.

## Instalação em outras IAs

Cada plataforma utiliza um mecanismo diferente. A regra geral é fornecer o conteúdo de `SKILL.md` como **instrução de sistema**, **instrução de projeto**, **regra personalizada**, **base de conhecimento** ou **arquivo de contexto**.

### Método universal

1. Baixe [`SKILL.md`](https://raw.githubusercontent.com/IgorsSantana/projeto-organizado-clean-code/main/SKILL.md).
2. Copie também [`references/decision-heuristics.md`](https://raw.githubusercontent.com/IgorsSantana/projeto-organizado-clean-code/main/references/decision-heuristics.md), quando a plataforma permitir arquivos auxiliares.
3. Adicione o conteúdo nas instruções persistentes da IA, nas regras do projeto ou no prompt de sistema.
4. Preserve o frontmatter YAML do início do arquivo, especialmente `name` e `description`, caso a plataforma reconheça metadados de skills.
5. Teste a ativação com um pedido como:

```text
Use a skill projeto-organizado-clean-code para criar a estrutura inicial deste projeto.
Antes de escrever código, apresente o contexto, as suposições, os módulos,
a árvore de diretórios, as dependências entre módulos, o plano incremental
e a estratégia de testes.
```

### ChatGPT, Claude, Gemini e assistentes com instruções de projeto

1. Abra as instruções personalizadas, configurações do projeto ou área equivalente.
2. Cole o conteúdo de `SKILL.md` como uma regra de comportamento.
3. Se houver suporte a arquivos, carregue `SKILL.md` e `references/decision-heuristics.md`.
4. Instrua a IA a aplicar a skill quando o pedido envolver criação, estruturação, refatoração ou modularização de um projeto.

Exemplo de instrução de ativação:

```text
Quando eu pedir para criar, estruturar, refatorar ou expandir um projeto de software,
use as instruções do arquivo SKILL.md desta skill. Adapte a arquitetura ao contexto,
evite overengineering e sempre apresente módulos, dependências, plano de implementação
e validação antes ou junto da implementação.
```

### Cursor, Windsurf, Cline e agentes de código

1. Baixe o repositório para a máquina do projeto:

```bash
git clone https://github.com/IgorsSantana/projeto-organizado-clean-code.git
```

2. Coloque o conteúdo de `SKILL.md` no arquivo de regras aceito pela ferramenta. Exemplos comuns incluem arquivos de regras do projeto, instruções de workspace ou arquivos de contexto do agente.
3. Mantenha `references/decision-heuristics.md` no mesmo diretório ou inclua seu conteúdo nas regras quando a ferramenta não suportar referências de arquivos.
4. Reforce no prompt da tarefa que o agente deve seguir a skill.

Não presuma o nome exato do arquivo de regras: ele varia conforme a versão e a configuração da ferramenta. Consulte a documentação da sua instalação.

### APIs de modelos de linguagem

Ao usar a skill por API, leia os arquivos e envie seu conteúdo na mensagem de sistema ou de instrução do agente. Um fluxo conceitual é:

```text
system:
  [conteúdo de SKILL.md]

user:
  Crie um novo projeto de [descrição]. Siga a skill, explique as decisões,
  proponha a estrutura modular e implemente uma primeira fatia vertical.
```

Não envie segredos, tokens ou credenciais junto com os arquivos da skill. A skill contém apenas instruções e referências públicas.

## Como usar depois da instalação

Peça explicitamente a aplicação da skill ou descreva uma tarefa que corresponda ao gatilho dela:

```text
Use a skill projeto-organizado-clean-code para iniciar um backend de pedidos em TypeScript.
```

```text
Aplique a skill para reorganizar este projeto existente sem quebrar o comportamento.
Inspecione primeiro a árvore, os pontos de entrada, as dependências e os testes.
```

```text
Aplique a skill para revisar a arquitetura, identificar acoplamentos indevidos,
propor módulos e criar um plano de refatoração incremental.
```

Para obter melhores resultados, informe a stack, o objetivo do produto, os usuários, as integrações, os requisitos de segurança e desempenho, o tamanho da equipe e as restrições conhecidas.

## Resultado esperado

Ao aplicar a skill, a IA deve normalmente entregar:

1. Contexto, escopo e suposições.
2. Decisão arquitetural proporcional ao projeto.
3. Mapa de módulos e responsabilidades.
4. Árvore de diretórios.
5. Direção das dependências e contratos entre módulos.
6. Plano incremental de implementação.
7. Estratégia de testes e comandos de validação.
8. Riscos, trade-offs e próximos passos.

## Validação local

Para validar a skill no ambiente Manus:

```bash
python /home/ubuntu/skills/skill-creator/scripts/quick_validate.py projeto-organizado-clean-code
```

A validação verifica o formato e os metadados obrigatórios do pacote. Em outras plataformas, confirme manualmente que `SKILL.md` está presente, que o frontmatter é válido e que o conteúdo das referências auxiliares está acessível.

## Atualizações

Para atualizar a skill, baixe ou faça pull da versão mais recente:

```bash
git clone https://github.com/IgorsSantana/projeto-organizado-clean-code.git
# ou, em uma cópia existente:
git pull origin main
```

Após uma atualização, recarregue a skill ou reinicie a sessão da IA para garantir que as novas instruções sejam usadas.

## Licença e uso

Este repositório contém instruções para agentes de IA. Adapte as recomendações à linguagem, framework, domínio, equipe e requisitos do projeto. A skill é uma orientação técnica, não uma obrigação de usar Clean Architecture, CQRS, microserviços ou qualquer padrão específico.
