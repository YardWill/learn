import os
dirNow = os.path.abspath('.')
tstr = '├── '
strNow = ''

def getList(dir):
  childList = os.listdir(dir);
  global strNow
  strNow = tstr + strNow
  for item in childList:
    pathNow = os.path.join(dir, item)
    print(strNow + os.path.relpath(pathNow,dir))
    if(os.path.isdir(pathNow)):
      getList(pathNow)
      strNow = strNow[4:]

getList(dirNow)