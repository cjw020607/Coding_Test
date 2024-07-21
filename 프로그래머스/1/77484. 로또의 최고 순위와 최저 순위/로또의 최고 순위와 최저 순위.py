def solution(lottos, win_nums):
    result=[]
    set_lottos=set(lottos)
    set_win_nums=set(win_nums)
    left=list((set_lottos-set_win_nums))
    if 0 in left:
        left.remove(0)
    correct=list(set_lottos&set_win_nums)
    ll=len(left)
    lc=len(correct)
    if ll==6:
        ll-=1
    if lc==0:
        lc+=1
    return [ll+1,7-lc]