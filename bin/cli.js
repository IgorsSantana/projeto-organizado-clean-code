#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

const packageRoot = path.resolve(__dirname, '..');
const defaultTarget = path.resolve(process.cwd(), '.ai', 'skills', 'projeto-organizado-clean-code');

function printHelp() {
  console.log(`Projeto Organizado e Clean Code\n\nUso:\n  npx projeto-organizado-clean-code install [--target <diretório>]\n  npx projeto-organizado-clean-code help\n\nOpções:\n  install              Copia SKILL.md e references/ para o diretório de destino.\n  --target <diretório> Define onde a skill será instalada.\n  --force              Substitui arquivos existentes no destino.\n  help                 Exibe esta ajuda.\n\nPor padrão, a skill é instalada em:\n  .ai/skills/projeto-organizado-clean-code/`);
}

function parseArgs(args) {
  const options = { command: args[0] || 'install', target: defaultTarget, force: false };
  for (let index = 1; index < args.length; index += 1) {
    const argument = args[index];
    if (argument === '--force') {
      options.force = true;
    } else if (argument === '--target') {
      if (!args[index + 1]) throw new Error('Informe um diretório após --target.');
      options.target = path.resolve(process.cwd(), args[++index]);
    } else if (argument === '--help' || argument === '-h') {
      options.command = 'help';
    } else {
      throw new Error(`Opção desconhecida: ${argument}`);
    }
  }
  return options;
}

function copyFile(source, destination, force) {
  if (fs.existsSync(destination) && !force) {
    throw new Error(`O arquivo já existe: ${destination}\nUse --force para substituir arquivos existentes.`);
  }
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
}

function install(options) {
  const files = [
    ['SKILL.md', 'SKILL.md'],
    ['references/decision-heuristics.md', 'references/decision-heuristics.md'],
  ];

  for (const [sourceRelative, destinationRelative] of files) {
    copyFile(
      path.join(packageRoot, sourceRelative),
      path.join(options.target, destinationRelative),
      options.force,
    );
  }

  console.log(`Skill instalada em: ${options.target}`);
  console.log('Arquivos: SKILL.md e references/decision-heuristics.md');
  console.log('Para atualizar uma instalação existente, execute novamente com --force.');
}

try {
  const options = parseArgs(process.argv.slice(2));
  if (options.command === 'help') {
    printHelp();
  } else if (options.command === 'install') {
    install(options);
  } else {
    throw new Error(`Comando desconhecido: ${options.command}`);
  }
} catch (error) {
  console.error(`Erro: ${error.message}`);
  process.exitCode = 1;
}
