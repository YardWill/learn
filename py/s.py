h = 10
n = h/2
c = 0
for i in range(1,n):
  a = i + i * i;
  if a < h:
    c = i
  else:
    break
print(c)

