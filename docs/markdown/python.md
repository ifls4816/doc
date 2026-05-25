# python3
> 环境安装 https://www.python.org/downloads/windows/

## 1. hello world 

```py
# 用户可以在终端/控制台输入的内容
name = input('please enter your name: ')
print('hello,', name)
# 可以通过'''xxx'''包裹换行的字符串 类似js中的``
print('''line1
line2
line3''')
# r表示内部的字符串默认不转义 就是要\n
print(r'''hello,\n
world''')
# 加上f就能当做模版字符串使用了
age = 18
print(f'''{age}
world''')
```


## 2. 数据类型和变量

- 整数
- 浮点数
- 字符串
- 布尔值
 > and、or和not 等同于js中的&& || !
 ```python
  age = input('输入年龄')
  if int(age) >= 18:
      print('adult')
  else:
      print('teenager')
 ```
- 空值
 > 空值是特殊的值，用None表示 非0 0是有意义的
- 变量
- 常量
  > 全部大写的变量名表示常量

### 2.1 python中的除法:
>>> 10 / 3
3.3333333333333335
>>> 9 / 3
3.0
>>> 10 // 3 # 称为地板除，两个整数的除法仍然是整数
3
>>> 10 % 3 # 取余
1



## 3. 字符串和编码

### 3.1 字符串问题
- b'ABC' → 字节串（bytes）：计算机能直接看懂的二进制数据
- 'ABC' → 字符串（str）：人能看懂的文字
- 字符串长度 len('中文') # 2

### 3.2 编码
```py
#!/usr/bin/env python3
# -*- coding: utf-8 -*- 类似于html声明chartset一样 指定当前文件编码为utf-8
```

### 3.3 格式化

#### 3.3.1 字符串替换
>>> 'Hello, %s' % 'world'
'Hello, world'
>>> 'Hi, %s, you have $%d.' % ('Michael', 1000000)
'Hi, Michael, you have $1000000.'

#### 3.3.2 占位符
- %d	整数
- %f	浮点数
- %s	字符串
- %x	十六进制整数

格式化整数和浮点数还可以指定是否补0和整数与小数的位数
>>> '%2d-%02d' % (3, 1)  # %2d：表示两位数的整数，%02d：表示两位数的整数且不足两位时补0
' 3-01'
>>> '%.2f' % 3.1415926 # %.2f：表示小数点后两位的浮点数
'3.14'

#### 3.3.3 format()

>>> 'Hello, {0}, 成绩提升了 {1:.1f}%'.format('小明', 17.125) # 0表示索引第一个 1表示索引第二个 1:.1f说明要格式化索引为1的参数 :号表示分隔符 取1位小数
'Hello, 小明, 成绩提升了 17.1%'

#### 3.3.4 f-string

```py
age = 18
print(f'我的年龄是{age}')

age = 18.9999
print(f'{age:.2f}') # 打印: 19.00 取两位小数
```

## 4. list和tuple

### 4.1 list => 数组

```py
arr = ['a','b','c','d','e','f']
print(arr[1]) # 正序的索引
print(arr[-1]) # 取倒数第一个
len(arr) # 6
arr.append('g') # 向后面添加g
arr.insert(1, '-a') # 往索引为1的位置添加-a
arr.pop() # 删除最后一个 返回当前删除的元素 
arr.pop(1) # 删除指定索引的元素 返回当前删除的元素
```

### 4.2 tuple 元组 同list 但是元素不可变

```py
t = (1, 2)
t1 = (1,) # 只有一个元素的tuple定义时必须加一个逗号,来消除歧义
t2 = (1, [2, 3]) # 元组中包含数组时 数组是可变的
```

## 5. if

```py
age = 3
if age >= 18:
    print('adult')
elif age >= 6:
    print('teenager')
else:
    print('kid')
# 转换问题 input输入为str 需要通过int转换才能对比
age = input('age: ')
nage = int(age)
if nage >= 18:
  print('ok')
else:
  print('no')
```


## 6. match

```py
score = 'B'
match score:
    case 'A':
        print('score is A.')
    case 'B':
        print('score is B.')
    case 'C':
        print('score is C.')
    case _: # _表示匹配到其他任何情况
        print('score is ???.')

age = 15
match age:
    case x if x < 10:
        print(f'< 10 years old: {x}')
    case 10:
        print('10 years old.')
    case 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18:
        print('11~18 years old.')
    case 19:
        print('19 years old.')
    case _:
        print('not sure.')


args = ['gcc', 'hello.c', 'world.c']
# args = ['clean']
# args = ['gcc']
match args:
    # 如果仅出现gcc，报错:
    case ['gcc']:
        print('gcc: missing source file(s).')
    # 出现gcc，且至少指定了一个文件:
    case ['gcc', file1, *files]: # *flies类似于...arg
        print('gcc compile: ' + file1 + ', ' + ', '.join(files))
    # 仅出现clean:
    case ['clean']:
        print('clean')
    case _:
        print('invalid command.')
```


## 7. for循环

```py
# 求和
arr = list(range(101)) # range()生成一个整数序列 list()转换成数组
print(arr)
sum = 0
for item in arr:
  sum = sum + item 
print(sum)

# while循环
while n <= 100:
    if n > 10: # 当n = 11时，条件满足，执行break语句
        break # break语句会结束当前循环
        # continue 跳出当前循环 同js
    print(n)
    n = n + 1
print('END')
```

## 8. dict(js object)和set

### 8.1 dict

```py
d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
d['Michael'] # d['111'] 会报错
d.get('Michael') # get方法 d.get('111', -1) 默认返回None 指定后返回-1
'Michael' in d # 判断key是否存在
d.pop('Michael') # 删除key
# list能作为key
```

### 8.2 set
> 和dict类似 只是不存值 是key的集合 key不能重复

```py
s = {1,2,3,4} # 字面量
s = set([1,2,3,4]) # 和上方一样
s.add(5) # 添加元素
s.remove(5) # 删除元素
# 取交集并集
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s1 & s2 # {2, 3}
s1 | s2 # {1, 2, 3, 4}
```

## 9. 函数

### 9.1 内置函数 max abs xxx

### 9.2 数据类型转换
```py
int('123') # 123
int(12.34) # 12
float('12.34') # 12.34
str(123) # '123'
bool(1) # True
bool('') # False
```

### 9.3 定义函数

```py
# 函数没返回值时return None
def my_abs(num):
    if num >=0:
      return num
    else:
      return -num
print(my_abs(0))
# 从文件导入函数
from xxx import my_abs
# 空函数 用来占位 缺少pass会导致语法报错
def nop():
    pass
# isinstance 判断类型
def my_abs(x):
    if not isinstance(x, (int, float)):
        raise TypeError('bad operand type')
    if x >= 0:
        return x
    else:
        return -x
# 返回多个值 返回的是一个tuple元组(x, y)形式
return x, y
```

### 9.4 函数的参数

#### 9.4.1 位置参数

#### 9.4.2 默认参数
```py
# 默认参数 同js
def sum(a, b = 1):
  return a + b
# 问题:
def func(L=[]):  # 定义时，L 就已经是 [] 了
    L.append(1)
    print(L)
func()  # 第一次 [1]
func()  # 第二次 [1, 1]
func()  # 第三次 [1, 1, 1]
# 应改为:
def func(L=None):
    if L is None:
        L = []  # 每次调用都创建新的！
    L.append(1)
    print(L)
# 原因
1.默认参数只在函数定义时创建一次
2.列表、字典是可变对象，改了就不会复原
3.想每次都用新空列表，默认值写 None，内部再初始化
```

#### 9.4.3 可变参数
```py
# 传入的参数个数是可变的
def calc(*numbers):
  for item in numbers:
    print(item) # 1 2 3
  # print(*numbers) # 1,2,3
calc(1,2,3)
# 传入数组或元组
nums = [1, 2, 3]
calc(*nums) # 解包 等同于calc(1,2,3)
```

#### 9.4.4 关键字参数
```py
# 扩展函数的功能
def person(name, age, **other):
  print('name:', name, 'age:', age, 'other: ', other)

person('ls', 20, a=1, b=2, c=3)# name: ls age: 20 other:  {'a': 1, 'b': 2, 'c': 3}

dic = { 'a': 1, 'b':2 ,'c': 3}
person('zs', 18, **dic)# name: ls age: 20 other:  {'a': 1, 'b': 2, 'c': 3}
```

#### 9.4.5 命名关键字参数
```py
# 关键字参数传递时不受限制 可通过命名关键字约束
# 命名关键字参数使用*分割，*后面的参数被视为命名关键字参数。
def persion(name,age, *, gender, job):
    print(name, age, gender, job)
# 方式1
dic = {'gender': '男', 'job': '无业'}
persion('zs', 18, **dic)
# 方式2
persion('zs', 18, gender='男', job='无业')

# 如果函数中已经有命名关键字的*号了 后面默认都是命名关键字
def person(name, age, *args, city, job):
    print(name, age, args, city, job)

#  命名关键字可也以配合缺省值使用
def person(name, age, *, gender = '男', job):
    print(name,age,gender,job)
person('zs', 18, job='无业')
```


#### 9.4.6 参数组合

> 组合的顺序: 位置参数、默认参数、可变参数、命名关键字参数和关键字参数。

```py
def f1(a, b, c=0, *args, **kw):
    print('a =', a, 'b =', b, 'c =', c, 'args =', args, 'kw =', kw)

def f2(a, b, c=0, *, d, **kw):
    print('a =', a, 'b =', b, 'c =', c, 'd =', d, 'kw =', kw)

>>> f1(1, 2)
a = 1 b = 2 c = 0 args = () kw = {}
>>> f1(1, 2, c=3)
a = 1 b = 2 c = 3 args = () kw = {}
>>> f1(1, 2, 3, 'a', 'b')
a = 1 b = 2 c = 3 args = ('a', 'b') kw = {}
>>> f1(1, 2, 3, 'a', 'b', x=99)
a = 1 b = 2 c = 3 args = ('a', 'b') kw = {'x': 99}
>>> f2(1, 2, d=99, ext=None)
a = 1 b = 2 c = 0 d = 99 kw = {'ext': None}
# 通过tuple dict调用
>>> args = (1, 2, 3, 4)
>>> kw = {'d': 99, 'x': '#'}
>>> f1(*args, **kw)
a = 1 b = 2 c = 3 args = (4,) kw = {'d': 99, 'x': '#'}

>>> args = (1, 2, 3)
>>> kw = {'d': 88, 'x': '#'}
>>> f2(*args, **kw)
a = 1 b = 2 c = 3 d = 88 kw = {'x': '#'}
```

### 9.5 递归函数

```py
def fact(n):
    if n==1:
        return 1
    return n * fact(n - 1)
# 尾递归优化
def fact(n):
    return fact_iter(n, 1)

def fact_iter(num, product):
    if num == 1:
        return product
    return fact_iter(num - 1, num * product)
```

## 10. 高级特性

### 10.1 切片

```py
L = ['Michael', 'Sarah', 'Tracy', 'Bob', 'Jack']
# 取前三个元素
r = []
n = 3
for idx, item in enumerate(L): # enumerate 遍历列表时，同时拿到下标 + 元素
  if idx < n:
    r.append(item)
print(r)

# 或者 这种实现循环次数少
for item in range(3)
  r.append(L[i])

# 切片（Slice）
# 表示，从索引0开始取，直到索引3为止，但不包括索引3  0可简写[:3] 
L[0:3] # ['Michael', 'Sarah', 'Tracy']
L[1:3] # ['Sarah', 'Tracy']
L[-2:] # 取倒数两个元素 ['Bob', 'Jack']
L[-2:-1] # ['Bob'] 从倒数第二个开始取 取到倒数第一 不含倒数第一

# 扩展操作
L = list(range(100))

L[:10] # 前十个 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
L[-10:] # 后十个 [90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
L[10:20] # 前11-20个数 [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
L[:10:2] # 前10个数，每两个取一个 [0, 2, 4, 6, 8]
L[::5] # 所有数，每5个取一个 [0, 5, 10,..]
L[:] # 浅拷贝L

# tuple也是list一种
(0, 1, 2, 3, 4, 5)[:3] # (0, 1, 2)

# 字符串也可以
'ABCDEFG'[:3] # 'ABC'
'ABCDEFG'[::2] # 'ACEG' 隔两个取一个
```

### 10.2 迭代

```py
# dict迭代
d = {'a': 1, 'b': 2, 'c': 3} 
for key in d:
  print(key) # a b c 注意:对象是无序的 可能顺序有变化
for value in d.values:
  print(vlaue) # 1 2 3
for k, v in d.items():
  print(k,v) # a 1 b 2 c 3

# 字符串迭代
for ch in 'ABC':
  print(ch) # A B C

# 判断是否可迭代
from collections.abc import Iterable
isinstance('abc', Iterable) # True
isinstance(123, Iterable) # False

# key value同时获取
for i, value in enumerate(['A', 'B', 'C']):
    print(i, vlaue) # 0 A    1 B      2 C
```

### 10.3 列表生成式

```py 
list(range(1, 11)) # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 生成[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
L = []
for item in range(1, 11):
  L.append(item * item)
print(L)

[x * x for x in range(1, 11)] # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# 两层循环
[m + n for m in 'ABC' for n in 'XYZ'] # ['AX', 'AY', 'AZ', 'BX', 'BY', 'BZ', 'CX', 'CY', 'CZ']

# 多个变量
d = {'x': 'A', 'y': 'B', 'z': 'C' }
[k + '=' + v for k, v in d.items()] # ['y=B', 'x=A', 'z=C']

# 改小写
L = ['Hello', 'World', 'IBM', 'Apple']
[s.lower() for s in L] # ['hello', 'world', 'ibm', 'apple']

L1 = ['Hello', 'World', 18, 'Apple', None]
L2 = [s.lower() for s in L1 if isinstance(s, str)]
# L1中的str元素转小写 但是存在非字符串类型 通过if判断排除掉

```

### 10.4 生成器

```py

```

