argpath=$(realpath $1)
mkdir .tmp
cd .tmp

if [ -z $1 ]; then echo "Specify argument";
else
    unzip -o $argpath
    mkdir -p ../scss/icomoon
    mkdir -p ../fonts
    cp -Rf fonts/* ../fonts/
    cp -f style.scss ../scss/icomoon/_icomoon.scss
    cp -f variables.scss ../scss/icomoon/_variables.scss
    rm -r *
fi

cd ..
rmdir .tmp