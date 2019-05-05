 char str1[]="I love China!",str2[20],*p1,*p2;
 p1=str1;   //将str1的地址传递给指针p1 
 p2=str2;   //将str2的地址传递给指针p2
 for (; *p1!='\0';p1++,p2++)
  *p2=*p1;   //将str1的值传递给str2 
 *p2='\0';     //为啥要将指针p2对应的值设为空？ 
 p1=str1;     
 p2=str2;
 cout<<"str1 is:"<<p1<<endl; //如果要输出p1所对应的str1的地址 怎么写？ 
 cout<<"str2 is:"<<p2<<endl;
 return 0;
