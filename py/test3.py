#coding = utf-8
import sys

if __name__ == "__main__":
    a = sys.stdin.readline()
    n = a.split('+')
    for i in range(len(n)):
        if n[i].find('*') != -1:
            print n[i]
            n1 = n[i].split('*')
            sum = 1
            for j in range(len(n1)):
                sum = sum * int(n1[j])
                print sum
            n[i] = sum
    suma = 0;
    print n
    for i in range(len(n)):
        suma = suma + int(n[i])
    print suma
            


    # print sum;
    # ans = 0
    # for i in range(n):
    #     line = sys.stdin.readline().strip()
    #     values = map(int, line.split())
    #     for v in values:
    #         ans += v
    # print ans