#! /bin/sh
python xlsx2tsv.py CSB.xlsx 1 > csb_raw
python csb.py
python sublist2.py
python combiner.py
cp full.json ../www/full.js
open ../www/index.html