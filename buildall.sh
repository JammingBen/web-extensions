ls -d ./*/ | xargs -n1 sh -c 'if [ -e $0Makefile ]; then echo "Building $0" ; cd $0 ; make release; fi'