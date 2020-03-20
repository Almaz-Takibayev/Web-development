import math 
a=int(input())
b=int(input())
for i in range(a,b):
	if math.sqrt(i)%1==0:
		print(i)
