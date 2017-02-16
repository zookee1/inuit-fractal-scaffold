#!/bin/bash
PROJECTDIR="$PWD"
SRCDIR="$PROJECTDIR/src/"
STARTERKIT="https://github.com/zookee1/atomic-design-fractal-scaffold"

if [ -d "$SRCDIR" ]; then
    printf '%s\n' "Removing src ($SRCDIR)"
    sudo rm -rf "$SRCDIR"
fi

git clone $STARTERKIT $SRCDIR
