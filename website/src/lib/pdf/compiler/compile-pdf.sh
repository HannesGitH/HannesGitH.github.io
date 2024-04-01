cd tex
mkdir -p .cache/texmf-var
chmod -R 777 .cache
env TEXMFHOME=.cache TEXMFVAR=.cache/texmf-var \
    latexmk -interaction=nonstopmode -pdf -lualatex \
    resume.tex