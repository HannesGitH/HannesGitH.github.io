cd tex
# luaotfload needs a writeable cache; the nix sandbox has no usable HOME and newer
# luaotfload versions don't accept relative cache paths, so use absolute ones
CACHE="$PWD/.cache"
mkdir -p "$CACHE/texmf-var"
chmod -R 777 "$CACHE"
env HOME="$CACHE" TEXMFHOME="$CACHE" TEXMFVAR="$CACHE/texmf-var" TEXMFCACHE="$CACHE/texmf-var" \
    latexmk -interaction=nonstopmode -pdf -lualatex \
    resume.tex
