import random
a = input()
settt = set()
n = len(a)
nn = n * (n - 1) / 2
for i in range(0,nn):
  ran = int(random.uniform(0, n))
  c = a[0:ran];
  d = a[ran + 1:];
  e = c + d;
  ran1 = int(random.uniform(0, n - 1))
  # print(ran1)
  f = e[0:ran1]
  g = e[ran1 + 1:]
  h = f + g
  settt.add(h)
print(len(settt))