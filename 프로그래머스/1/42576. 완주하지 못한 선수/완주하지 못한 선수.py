from collections import Counter
# def solution(participant, completion):
#     a=Counter(participant)
#     b=Counter(completion)
#     for p in participant:
#         if a[p]!=b[p]:
#             return p

def solution(participant, completion):
    return list(Counter(participant) -Counter(completion))[0]

# def solution(participant, completion):
#     a=list(set(participant)-set(completion))
#     if len(a)!=0:
#         return a[0]
#     return Counter(participant).most_common(1)[0][0]

# def solution(participant,completion):
#     l=len(completion)
#     for i in range(l):
#         participant.remove(completion[i])

#     return participant[0]