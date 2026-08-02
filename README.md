# Flamingo Berlin — MkDocs

Faqe e thjeshtë në shqip, e ndërtuar me MkDocs Material.

## Nisja lokale

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Hapni `http://127.0.0.1:8000`.

## Ndërtimi

```bash
mkdocs build --strict
```

Përditësoni `site_url`, `repo_url` dhe lidhjet e rrjeteve sociale në `mkdocs.yml` para publikimit.
