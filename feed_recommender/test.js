const a = {1:'a', 2:'b', 3:'c', 4:'d', 5:'e'};

let b = {}
for (let key in a){
    b[key]=a[key]^2


}
