#!/usr/bin/env bash
# Menu ASCII dos unblockers identificados no catálogo local. Requer Node.js.
set -u
root="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
data="$root/scripts/unblockers-data.cjs"
if ! command -v node >/dev/null 2>&1; then
  printf 'Este menu precisa do Node.js instalado.\n' >&2; exit 1
fi
printf '\n+----------------------------------------+\n|            U N B L O C K E R S         |\n+----------------------------------------+\n'
printf 'Selecao por nome; servicos nao verificados.\n\n'
while :; do
  node "$data" --list || exit 1
  printf '\nEscolha uma colecao (0 para sair): '
  IFS= read -r collection || exit 0
  [[ "$collection" == 0 ]] && exit 0
  if [[ ! "$collection" =~ ^[0-9]+$ ]] || ! urls="$(node "$data" --urls "$collection")"; then
    printf 'Colecao invalida.\n\n'; continue
  fi
  printf '\n%s\n\n' "$urls"
  printf 'Digite o numero do link para abrir, ou 0 para voltar: '
  IFS= read -r choice || exit 0
  [[ "$choice" == 0 ]] && continue
  if [[ ! "$choice" =~ ^[0-9]+$ ]]; then printf 'Numero invalido.\n'; continue; fi
  url="$(printf '%s\n' "$urls" | awk -F '\t' -v n="$choice" '$1 == n {print $2; exit}')"
  if [[ -z "$url" ]]; then printf 'Numero invalido.\n'; continue; fi
  printf 'Abrindo: %s\n' "$url"
  if command -v xdg-open >/dev/null 2>&1; then xdg-open "$url" >/dev/null 2>&1 &
  elif command -v open >/dev/null 2>&1; then open "$url"
  else printf 'Abra o endereco acima no navegador.\n'; fi
  printf '\n'
done
