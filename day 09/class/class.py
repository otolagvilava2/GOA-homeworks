
list = [-5,2,-6,24,-6,15,-3256,236]


count_n = 0
count_p = 0


for i in list:
    if i > 0:
        count_p += 1
    elif i < 0:
        count_n +=1
print(count_n,count_p)