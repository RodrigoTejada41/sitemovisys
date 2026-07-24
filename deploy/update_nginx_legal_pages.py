from pathlib import Path
import sys


MARKER_START = "    # BEGIN MOVISYS LEGAL STATIC ROUTES"
MARKER_END = "    # END MOVISYS LEGAL STATIC ROUTES"
ROUTES = """    # BEGIN MOVISYS LEGAL STATIC ROUTES
    location = /politica-de-privacidade {
        alias /var/www/movisys-site/current/politica-de-privacidade.html;
        default_type text/html;
        add_header Cache-Control "no-cache";
    }

    location = /termos-de-servico {
        alias /var/www/movisys-site/current/termos-de-servico.html;
        default_type text/html;
        add_header Cache-Control "no-cache";
    }
    # END MOVISYS LEGAL STATIC ROUTES"""


def update_config(content: str) -> str:
    if MARKER_START in content:
        before, remainder = content.split(MARKER_START, 1)
        _, after = remainder.split(MARKER_END, 1)
        return f"{before}{ROUTES}{after}"

    anchor = "    location / {\n"
    if content.count(anchor) != 1:
        raise ValueError("Bloco location / não encontrado de forma única.")

    return content.replace(anchor, f"{ROUTES}\n\n{anchor}", 1)


def main() -> None:
    if len(sys.argv) != 2:
        raise SystemExit("Uso: update_nginx_legal_pages.py <arquivo-nginx>")

    path = Path(sys.argv[1])
    original = path.read_text(encoding="utf-8")
    updated = update_config(original)
    path.write_text(updated, encoding="utf-8")


if __name__ == "__main__":
    main()
