import json
import re


#nope i give up 
#someone else get me an adjacency list


with open('./firehose-master/new_scripts/full.json', 'r') as f:
    classes = json.load(f) #each class is saved as a string
 
adj = {key: [] for key in classes}

for key in classes:
    prereqs = classes['pr']




