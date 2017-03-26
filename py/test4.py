#coding = utf-8
import sys

if __name__ == "__main__":
    n = int(sys.stdin.readline().strip())
    str = sys.stdin.readline().split(' ')

    arr = [];

    for i in range(n):
        flag = False
        if i == 0:
            arr.append(str[i])
        else:
            for j in range(len(arr)):
                if (int(arr[j]) == int(str[i])):
                    flag = True
                    break
        if flag != True:
            arr.append(str[i])
    print ' '.join(arr)[2]