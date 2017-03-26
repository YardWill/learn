#coding = utf-8
import sys

if __name__ == "__main__":
    n = sys.stdin.readline().split(' ')
    w = int(n[0])
    x = int(n[1])
    y = int(n[2])
    z = int(n[3])
    sum = (x-w) * (z-y)
    arr = []
    
    for i in range(sum):
      for j in range(len(arr)):
        if arr[j] == sub:
          sum = sum - 1
        else:
          arr.push()
          break


    print sum;
    # ans = 0
    # for i in range(n):
    #     line = sys.stdin.readline().strip()
    #     values = map(int, line.split())
    #     for v in values:
    #         ans += v
    # print ans