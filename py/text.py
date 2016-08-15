# def sanjia(n):
# 	m = 1
# 	b = '1'
# 	c = '0'
# 	for i in range(1,n):
# 		c = c + '0'
# 	print(c,b)
# 	while m <= n:
# 		m += 1
# 		for k in range(1,m):
# 			c = c[0:n - m + 1]
# 		b = b + '11'
# 		print(c,b)

# sanjia(6)

# def hang(n,m):
# 	c = ''
# 	b = ''
# 	for i in range(1,n - m + 1):
# 		c = c + '0'
# 	for j in range(1,2 * m):
# 		b = b + '1'
# 	print(c + b)

# def sanjiao(n):
# 	for i in range(1,n + 1):
# 		hang(n,i)

# sanjiao(6)

# for i in range(1,1):
# 	print(i)

def fb(n):
	if n == 0:
		return 0
	elif n == 1:
		return 1
	else:
		return fb(n-1)+fb(n-2)

a = int(input())
flag = True
i = 1
for i in range(1,1000000):
	c = fb(i) - a
	if c >= 0:
		b = a - fb(i-1)
		if b < c:
			print(b)
		else:
			print(c)
		break;
	i += 1

















