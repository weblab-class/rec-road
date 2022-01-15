import numpy as np
#compute_score
#compute_score

weights = {'course evals': 0.1, 'votes': 0.25, 'prev classes': 0.15, 'neighbor scores': 0.5}

with open('./firehose-master/new_scripts/full.json', 'r') as f:
    classes = json.load(f)

#have an adj

def init_classes(prev_classes):
    '''
    prev_classes is a list of previously taken classes (includes ASEs)
    returns dictionaries of each of the different score denominations
    '''
    course_evals = {key: classes[key]['ra']/7 for key in classes}
    votes = {key: 0.5 for key in classes}
    prev_class_scores = {key: 1 if(key in prev_classes) else 0 for key in classes}
    neighbor_score = {}
    for key in classes:
        neighbor_score[key] = np.mean([weights['votes']*votes[neighbor]+weights['prev classes']*prev_class_scores[neighbor] for neighbor in adj[key]])/0.4
    return course_evals, votes, prev_class_scores, neighbor_score


#const init_classes = (prev_classes) => {
#}

    
def compute_score(upvoted_class, )

