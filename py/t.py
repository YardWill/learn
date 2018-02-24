s = input()
l = len(s)
kk = 0
sett = set()

for i in range(0,l/2):
  for j in range(0,l/2):
    a = s[i:l-j]
    num = l-j-i
    for k in range(0,num):
      b = a[0:k + 1]
      c = a[k + 1:]
      d = b.replace('1','')
      e = len(d)
      if(e > (k)/2):
        f = c.replace('1','')
        g = len(f)
        if(e < (l - j - k)/2):
          jj = l - j - i
          if(jj > kk):
            kk = jj
          break

print(kk)

