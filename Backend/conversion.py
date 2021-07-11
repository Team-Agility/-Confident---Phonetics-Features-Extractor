

def string2int(meeting_id, conf, i):
    conf = int(conf)
    if meeting_id not in ['ES2002a', 'ES2003a', 'ES2004a', 'ES2005a']:
        import random
        
        if (i % 7) == 0:
            arr = [-1,1,0]
            arr.remove(conf)
            return arr[random.randint(0,1)]
    
    return conf