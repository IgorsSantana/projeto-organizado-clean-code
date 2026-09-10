---
name: projeto-organizado-clean-code
description: Planejamento e criação de projetos organizados, modulares e sustentáveis, aplicando clean code, separação de responsabilidades, dependências bem direcionadas, testes e documentação proporcional. Use ao iniciar, estruturar, refatorar ou expandir qualquer projeto de software, especialmente quando houver necessidade de dividir por módulos, definir pastas, arquitetar camadas ou melhorar a manutenibilidade.
---

# Projeto Organizado e Clean Code

Use esta skill para transformar uma ideia em um projeto compreensível, modular e evolutivo. Priorize **simplicidade, coesão, baixo acoplamento e evolução incremental**. Não aplique uma arquitetura complexa apenas por preferência: adapte a estrutura ao domínio, ao tamanho da equipe, ao risco e ao horizonte do projeto.

## Objetivos

- Tornar cada parte do sistema fácil de localizar, entender, testar e alterar.
- Separar regras de negócio de detalhes externos, como framework, banco, filas e provedores.
- Evitar dependências circulares, módulos “Deus”, duplicação e abstrações prematuras.
- Criar uma base que melhore a saúde do código a cada mudança, sem buscar perfeição paralisante.

## Fluxo obrigatório

1. **Entender o contexto.** Identifique objetivo, usuários, casos de uso, restrições, stack existente, integrações, requisitos não funcionais e tamanho da equipe. Se algo for desconhecido, registre a suposição e escolha a opção reversível.
2. **Mapear o domínio.** Liste capacidades ou funcionalidades do negócio, entidades relevantes, comandos, consultas, eventos, regras e fronteiras naturais. Prefira módulos orientados a capacidades do negócio, não somente a tipos técnicos.
3. **Escolher o nível de estrutura.**
   - Projeto pequeno ou protótipo: estrutura simples por funcionalidade, sem criar camadas artificiais.
   - Aplicação média: monólito modular, com módulos de negócio isolados e camadas internas quando justificadas.
   - Sistema grande, equipes independentes ou deploys realmente independentes: avalie serviços separados; não adote microserviços apenas para “organizar pastas”.
4. **Definir limites e dependências.** Para cada módulo, declare responsabilidade, API pública, dados que possui, eventos que publica/consome e dependências permitidas. Faça as dependências apontarem para abstrações e para dentro do núcleo de negócio; impeça referências circulares.
5. **Projetar a árvore inicial.** Crie somente diretórios necessários. Use nomes consistentes, previsíveis e próximos da linguagem do domínio.
6. **Implementar por fatias verticais.** Entregue um caso de uso completo de ponta a ponta, mantendo o núcleo testável, em vez de criar todas as camadas vazias antes de haver comportamento real.
7. **Validar continuamente.** Execute formatter, linter, type-check, testes unitários e de integração relevantes, build e análise de dependências. Corrija problemas antes de acumular novas funcionalidades.
8. **Revisar a estrutura.** A cada mudança relevante, verifique se o módulo continua coeso, se o acoplamento aumentou e se a árvore ainda comunica o sistema. Refatore em pequenos passos.
9. **Documentar decisões.** Registre decisões arquiteturais importantes, convenções, comandos para executar o projeto, variáveis de ambiente e limites que não são óbvios.

## Estrutura padrão recomendada

Use esta estrutura como ponto de partida; ajuste à stack e ao contexto:

```text
project/
├── src/                         # código de produção
│   ├── modules/                 # capacidades do negócio
│   │   ├── users/
│   │   │   ├── domain/          # entidades, valores, regras e eventos
│   │   │   ├── application/     # casos de uso, portas e contratos
│   │   │   ├── infrastructure/  # persistência e integrações do módulo
│   │   │   └── presentation/    # handlers, controllers, schemas
│   │   └── billing/
│   ├── shared/                  # somente utilidades genuinamente compartilhadas
│   └── config/                  # configuração e composição da aplicação
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/
│   ├── decisions/               # ADRs ou decisões arquiteturais
│   └── architecture.md
├── scripts/                     # automação de desenvolvimento e operações
├── .env.example
├── README.md
└── [arquivos de build, lint e dependências]
```

Para um projeto pequeno, reduza para `src/<feature>/` e `tests/`; não crie `domain/application/infrastructure` sem necessidade real. Para um frontend, agrupe por feature e mantenha componentes de apresentação separados de estado, regras e acesso a dados. Para um backend, mantenha transporte, casos de uso, domínio e adaptadores claramente distinguíveis.

## Regras de modularização

- Um módulo deve ter **uma razão principal para mudar** e representar uma capacidade coerente.
- Mantenha detalhes internos privados. Exponha apenas funções, classes, tipos ou endpoints necessários.
- Prefira chamadas explícitas entre módulos ou eventos bem definidos; não acesse tabelas, estado ou arquivos internos de outro módulo diretamente.
- Evite `shared` como depósito geral. Promova algo para compartilhado apenas quando houver pelo menos dois consumidores estáveis e uma semântica realmente comum.
- Coloque interfaces perto de quem precisa da abstração; coloque implementações de infraestrutura nas bordas.
- Centralize composição e injeção de dependências em um ponto claro, sem espalhar instanciação de serviços pelo domínio.
- Separe leitura e escrita apenas quando isso reduzir complexidade; não introduza CQRS, event sourcing ou padrões equivalentes por moda.
- Prefira um monólito modular bem delimitado a microserviços distribuídos sem maturidade operacional.

## Direção de dependências

Use a regra: **detalhes dependem de políticas; políticas não dependem de detalhes**.

```text
presentation -> application -> domain
infrastructure -> application/domain (por portas ou contratos)
composition root -> todos os adaptadores necessários
```

O domínio não deve depender de framework, banco, HTTP, filesystem, fila ou provedor externo. Quando o caso de uso precisar de um recurso externo, defina uma porta/contrato no núcleo e implemente o adaptador na infraestrutura. Se a stack não permitir isolamento físico, imponha a regra por convenção, lint, aliases e testes de arquitetura.

## Clean code na prática

- Nomeie por intenção e domínio; prefira `calculateInvoiceTotal` a `processData`.
- Mantenha funções pequenas e com uma responsabilidade; extraia quando isso melhorar a leitura, não apenas para reduzir linhas.
- Reduza níveis de aninhamento com retornos antecipados, guard clauses e objetos que encapsulem regras.
- Evite booleanos mágicos, números soltos, strings repetidas e comentários que apenas repetem o código.
- Comente o **porquê** de decisões não óbvias, limitações, invariantes e workarounds.
- Trate erros de forma explícita e consistente; não capture exceções sem poder agir sobre elas.
- Valide entradas nas bordas e mantenha invariantes dentro do domínio.
- Prefira composição a hierarquias extensas de herança.
- Elimine duplicação sem criar uma abstração genérica antes de entender o padrão; duas implementações parecidas podem ser mais claras que uma abstração prematura.
- Mantenha funções puras quando possível e isole efeitos colaterais.
- Não misture refatoração ampla com mudança funcional sem necessidade; faça mudanças pequenas e revisáveis.

## Testes e qualidade

Associe testes à responsabilidade do código:

- **Domínio:** testes unitários rápidos para regras, invariantes e casos-limite.
- **Aplicação:** testes de casos de uso usando dublês para portas externas.
- **Infraestrutura:** testes de contrato e integração para banco, filas, APIs e armazenamento.
- **Apresentação:** testes de handlers/componentes e alguns fluxos E2E críticos.

Não busque cobertura numérica isolada. Priorize comportamento importante, caminhos de erro, regressões e limites entre módulos. Antes de considerar uma entrega pronta, rode os comandos disponíveis para formatar, analisar tipos, lintar, testar e gerar o build; se algum comando não existir, registre isso.

## Checklist antes de entregar

- [ ] O objetivo e as suposições estão documentados.
- [ ] A árvore de diretórios reflete funcionalidades e não apenas tipos técnicos.
- [ ] Cada módulo tem responsabilidade, API pública e dependências claras.
- [ ] Não existem dependências circulares nem imports atravessando detalhes internos.
- [ ] O domínio está independente de frameworks e integrações quando isso for viável.
- [ ] Configuração, segredos e efeitos externos estão nas bordas.
- [ ] Há testes para regras de negócio e para integrações críticas.
- [ ] Formatter, linter, type-check, testes e build foram executados ou suas limitações foram registradas.
- [ ] README explica instalação, execução, testes, configuração e estrutura.
- [ ] Decisões relevantes têm ADR ou explicação equivalente.
- [ ] A mudança melhora ou preserva a saúde geral do código; não busca perfeição cosmética.

## Como responder ao criar ou estruturar um projeto

Apresente, na ordem:

1. Contexto, escopo e suposições.
2. Decisão arquitetural e por que ela é proporcional ao projeto.
3. Mapa de módulos e responsabilidades.
4. Árvore de diretórios proposta.
5. Regras de dependência e contratos entre módulos.
6. Plano incremental de implementação.
7. Estratégia de testes e comandos de validação.
8. Riscos, trade-offs e próximos passos.

Ao modificar um projeto existente, inspecione primeiro a árvore, os pontos de entrada, dependências, scripts de qualidade e testes. Preserve convenções úteis já existentes; proponha migração gradual em vez de reorganização destrutiva.

## Referências consultadas

- [Martin Fowler — Software Architecture Guide](https://martinfowler.com/architecture/): arquitetura como decisões importantes e design que favorece evolução.
- [Google Engineering Practices — The Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html): priorizar melhoria contínua da saúde do código em vez de perfeição.
- [Milan Jovanović — Clean Architecture Folder Structure](https://milanjovanovic.tech/blog/clean-architecture-folder-structure): exemplo de separação entre domínio, aplicação, infraestrutura e apresentação, com alerta para adaptar a granularidade.

As referências são princípios orientadores, não uma obrigação de reproduzir uma arquitetura específica. Use julgamento técnico e valide as escolhas contra o contexto real.
