import os
dirNow = os.path.abspath('.')
tstr = '├── '
lstr = '└── '
istr = '|   '

def getList(dir):
  childList = os.listdir(dir);
  strNow = istr + lstr
  for item in childList:
    pathNow = os.path.join(dir, item)
    print(os.path.relpath(pathNow))
    if(os.path.isdir(pathNow)):
      getList(pathNow)

getList(dirNow)