# Heurísticas de decisão

Use estas perguntas para evitar overengineering:

| Situação | Preferência inicial |
|---|---|
| Protótipo, CRUD pequeno ou equipe reduzida | Estrutura simples por feature e poucas camadas |
| Regras de negócio relevantes e crescimento esperado | Monólito modular com domínio e casos de uso explícitos |
| Muitas integrações externas | Portas no núcleo e adaptadores na infraestrutura |
| Times que precisam deployar independentemente | Avaliar serviços separados após medir o custo operacional |
| Código compartilhado por vários módulos | Extrair somente semântica estável e pequena |
| Módulo com muitos imports externos | Revisar fronteira, API pública e acoplamento |
| Teste difícil de escrever | Separar efeitos colaterais e dependências concretas |
| Arquivo ou classe grande | Dividir por responsabilidade, não mecanicamente por tamanho |

Pergunte sempre: “qual mudança futura esta decisão facilita?” e “qual complexidade ela introduz agora?”.
