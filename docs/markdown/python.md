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

> 通过列表生成式，我们可以直接创建一个列表, 但这样咱内存, 生成器可不必创建完整的list，从而节省大量的空间
```py
L = [x * x for x in range(10)] # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# 相比列表生成式 只是把[]换成了()
g = (x * x for x in range(10)) # <generator object <genexpr> at 0x1022ef630>
for n in g:
    print(n) # 0 1 4 9 16 25 36 49 64 81
```


### 10.5 迭代器

> 可迭代对象 Iterable：能被 for 循环遍历的东西（列表、字符串、字典）

```py
# 判断是否可迭代
from collections.abc import Iterable
isinstance([], Iterable) # True
isinstance('abc', Iterable) # True
isinstance((x for x in range(10)), Iterable) # True
isinstance(100, Iterable) # False
```

> 迭代器 Iterator：凡是可作用于next()函数的对象都是Iterator类型，它们表示一个惰性计算的序列

```py
# 判断是否为迭代对象
from collections.abc import Iterator
isinstance((x for x in range(10)), Iterator) # True
isinstance([], Iterator) # False
isinstance({}, Iterator) # False
isinstance('abc', Iterator) # False
```

> 生成器 Generator：简化版的迭代器，用 yield 写，业务最常用

```py
# 一边循环一边计算，不占内存 是迭代器的一种
def gen():
    yield 1
    yield 2
    yield 3
g = gen()
next(g)  # 1
next(g)  # 2
```

## 11 函数式编程

### 11.1 高阶函数

> 一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。

```py
def add(x, y, f):
    return f(x) + f(y)
print(add(-5, 6, abs))
```

#### 11.1.1 map/reduce

```py
# map: 函数接收两个参数，一个是函数，一个是Iterable，map将传入的函数依次作用到序列的每个元素，并把结果作为新的Iterator返回。
def f(x):
    return x * x
# 返回的是一个惰性Iterator 需要调用list()计算出来
list(map(f, [1, 2, 3, 4, 5, 6, 7, 8, 9])) 
# 把数组中的数字转为字符串
list(map(str, [1, 2, 3, 4, 5, 6, 7, 8, 9]))

# reduce: 把一个函数作用在一个序列[x1, x2, x3, ...]上，这个函数必须接收两个参数，reduce把结果继续和序列的下一个元素做累积计算，其效果就是
reduce(f, [x1, x2, x3, x4]) = f(f(f(x1, x2), x3), x4)

from functools import reduce
def add(x, y):
    print(x,y) # 1 2 / 3 3 / 6 4 / 10 5
    return x + y
reduce(add, [1,2,3,4,5]) # 15
# 求和也可用sum
sum([1,2,3,4,5]) # 15

def fn(x, y):
    print(x,y) # 1 3  / 13 5 / 135 7 / 1357 / 9
    return x * 10 + y
print(reduce(fn, [1, 3, 5, 7, 9])) # 13579

# 结合使用
from functools import reduce
def fn(x, y):
     return x * 10 + y

def char2num(s):
     digits = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}
     return digits[s]
# map(char2num, '13579')输出 map object 通过list转换后可见[1, 3, 5, 7, 9]
# 等同于print(reduce(fn, [1, 3, 5, 7, 9])) 
# 实现了将字符串转换成了数字 也就是int('13579)
print(reduce(fn, map(char2num, '13579'))) # 13579

# 练习
# 1.变为首字母大写，其他小写的规范名字
def normalize(name):
    return name[0].upper() + name[1:].lower()
# 测试:
L1 = ['adam', 'LISA', 'barT']
L2 = list(map(normalize, L1))
print(L2)

# 2. 输入数组求积
from functools import reduce
def prod(L):
    def fn (x, y):
      return x * y
    return reduce(fn, L)
print('3 * 5 * 7 * 9 =', prod([3, 5, 7, 9]))
if prod([3, 5, 7, 9]) == 945:
    print('测试成功!')
else:
    print('测试失败!')
```

#### 11.1.2 filter

```py
def fn (x):
  return x> 1
list(filter(fn, [1,2,3]))
```

#### 11.1.3 sorted

```py
sorted([36, 5, -12, 9, -21])
# 接收一个key 按绝对值大小排序
sorted([36, 5, -12, 9, -21], key=abs)
# 忽略大小写后排序
sorted(['bob', 'about', 'Zoo', 'Credit'], key=str.lower) # ['about', 'bob', 'Credit', 'Zoo'] 不会改变原来的数组元素 只是排序顺序
# 反向排序参数
sorted(['bob', 'about', 'Zoo', 'Credit'], key=str.lower, reverse=True)

# 排序
L = [('Bob', 75), ('Adam', 92), ('Bart', 66), ('Lisa', 88)]
def by_name(t):
    return t[1]
def by_score(t):
    return -t[1] # 处理正序反序
L2 = sorted(L, key=by_name)
L2 = sorted(L, key=by_score)
print(L2)
```


### 11.2返回函数

```py
def lazy_sum(*args):
    def sum():
        ax = 0
        for n in args:
            ax = ax + n
        return ax
    return sum
f1 = lazy_sum(1, 3, 5, 7, 9)
f2 = lazy_sum(1, 3, 5, 7, 9)
f1==f2 # False
```

#### 11.2.1 闭包

> 参考js

```py
def count():
    fs = []
    for i in range(1, 4):
        # 内部的函数引用了外部的变量i
        # 但是函数没有调用 for循环已经执行完了 等f调用时 i已经变为3了
        def f():
             return i*i
        fs.append(f)
    return fs

f1, f2, f3 = count()
f1() # 9
f2() # 9
f3() # 9

# 处理:
def count():
    def f(j):
        def g():
            return j*j
        return g
    fs = []
    for i in range(1, 4):
        fs.append(f(i)) # f(i)立刻被执行 g中引用的j值也就正常了
    return fs
f1, f2, f3 = count()
f1() # 1
f2() # 4
f3() # 9


# nonlocal
# 使用闭包，就是内层函数引用了外层函数的局部变量。只读情况下没问题
def inc():
  x = 0
  def fn():
    return x + 1
  return fn
f = inc()
print(f()) # 1
print(f()) # 1
# 如果需要修改 x会被当做fn的局部变量处理 不会出外层函数找 就导致x没有初始化 导致报错:
# cannot access local variable 'x' where it is not associated with a value
# 因为x没初始化 直接计算x+1就异常了 需要加一个nonlocal告诉py 要去非本地变量 要去外层找
def inc():
    x = 0
    def fn():
        # nonlocal x
        x = x + 1
        return x
    return fn
f = inc()
print(f()) # 1
print(f()) # 2
```

### 11.3 匿名函数

```py
list(map(lambda x: x * x, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
# lambda x: x * x 相当于
def f(x):
    return x * x
# 可以用变量接收
f = lambda x: x * x
# 也可当做返回值
def f():
    return lambda x: x * x
```

### 11.4 装饰器

```py
# 基础使用
# 由于log()是一个decorator，返回一个函数，所以，原来的now()函数仍然存在，只是现在同名的now变量指向了新的函数，于是调用now()将执行新函数，即在log()函数中返回的wrapper()函数
def log(func):
    def wrapper(*args, **kw):
        print('call %s():' % func.__name__)
        return func(*args, **kw)
    return wrapper
@log
def now():
    print('2024-6-1') # call now()     2024-6-1
now()
# 装饰器传递参数
def log(text):
    def decorator(func):
        def wrapper(*args, **kw):
            print('%s %s():' % (text, func.__name__))
            return func(*args, **kw)
        return wrapper
    return decorator
@log('execute')
def now():
    print('2024-6-1') 
now() # execute now():     2024-6-1
# 本质上就是
log('execute')(now)

# 注意:
# 此时的now.__name__ 已经变成wrapper了 
# 因为最后返回的就是wrapper函数 需要用functools.wraps保留原函数信息
@log('execute')
def now():
    print(now.__name__) # wrapper
    print('2024-6-1') 
# 所以完整的案例需要改为
def log(text):
    def decorator(func):
        @functools.wraps(func) # 把wrapper名字改为func
        def wrapper(*args, **kw):
            print('%s %s():' % (text, func.__name__))
            return func(*args, **kw)
        return wrapper
    return decorator
```

### 11.5 偏函数

> 当函数的参数个数太多，需要简化时，使用functools.partial可以创建一个新的函数，这个新函数可以固定住原函数的部分参数，从而在调用时更简单。 functools.partial就是帮助我们创建一个偏函数的

```py
int('12345') # 123456 默认10进制
int('12345', base=8) # 5349 设置为8进制
def int2(x, base=2): # 封装默认参数
    return int(x, base)
# functools.partial带的方法
import functools
int2 = functools.partial(int, base=2)
# 两个int2完全一致
max2 = functools.partial(max, 10)
max2(5, 6, 7)
# 实际上会把10作为*args的一部分自动加到左边
# 等同于
args = (10, 5, 6, 7)
max(*args)
```


## 12 模块

```py
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
' a test module '
__author__ = 'Michael Liao'
import sys
def test():
    args = sys.argv
    if len(args)==1:
        print('Hello, world!')
    elif len(args)==2:
        print('Hello, %s!' % args[1])
    else:
        print('Too many arguments!')
if __name__=='__main__': # 只有是主模块时 __name__才为__main__ 其他地方导入时 __name__则变成了导入时的模块名 import hi.hi name为hi.hi
    test()
 # 获取触发命令的名称 如: Python3 hi.py 则argv是['hi.py']
# Python3 hi.py ifls  则argv是['hi.py','ifls']
print(sys.argv)

```

### 12.1 作用域

```py
fn = int # fn作用域是public
#py中没有办法私有变量和js一样 约定俗称的办法也是采用_ 如 _fn
import hi.my_hi
hi.my_hi.fn()
hi.my_hi._fn() # 程序也能正常运行 但不建议这么做

```


### 12.2 第三方模块

```py
# 安装常用模块
Anaconda官网: https://www.anaconda.com/download/
# 虚拟环境:
# py第三方的包默认安装在系统的Python环境下 可以通过创建虚拟环境实现类似node_modules隔离
python -m venv my_venv
# 激活:
source my_venv/bin/activate
# 然后安装 此时安装的numpy就是在my_venv目录下的
pip install numpy
```

## 13 面向对象编程

### 13.1 类和实例

```py
class Student(object):
    # 相当于js的constructor 定义属性
    # init第一个参数固定为self 顺手写成this也行 更靠近js
    # name score必填
    def __init__(self, name, score):
        self.name = name
        self.score = score
    # 定义方法
    def print_score(self): # 此处self参数调用时不用传递
      print('name',self.name,'socre',self.score)

stu = Student('zs', 180)
stu.name # 'zs'
stu.score # 180
stu.print_score()
```

### 13.2 访问限制

```py
class Student(object):
    def __init__(self, name, score):
        self.__name = name # 加上__即变成私有属性 在实例中就不能访问了
        self.__score = score
    #获取时只能通过定义方法来获取

    def get_name(self):
        return self.__name
    def set_score(self, value):
        self.__score = value

    def print_score(self):
        print('%s: %s' % (self.__name, self.__score))
  
# 有self._name情况发生 _name是可以访问的 约定俗成中不要访问name
# 其实self.__name也可以通过 stu._Student__name访问 但不建议
```


### 13.3 继承和多态

```py
class Animal(object):
    def run(self):
        print('Animal is running...')
# class的参数直接传递构造函数即可继承
class Dog(Animal):
    pass
class Cat(Animal):
    pass

# 多态
# 多态（Polymorphism） ：同一个方法名，在不同的对象上有不同的行为。
# 简单说： 不同的对象，收到同一个消息（调用同一个方法），做出不同的反应 。
class Animal:
    def speak(self):
        pass
class Dog(Animal):
    def speak(self):
        return "汪汪汪!"
class Cat(Animal):
    def speak(self):
        return "喵喵喵!"
class Duck(Animal):
    def speak(self):
        return "嘎嘎嘎!"
# 多态：同一个函数，接收不同的对象，表现不同
def make_speak(animal):
    print(animal.speak())
# 使用
dog = Dog()
cat = Cat()
duck = Duck()
make_speak(dog)   # 汪汪汪!
make_speak(cat)   # 喵喵喵!
make_speak(duck)  # 嘎嘎嘎!
```

### 13.4 获取对象信息

- type()
```py
# 基本类型判断
type(123) # <class 'int'>
type('str') # <class 'str'>
type(None) # <class 'NoneType'>
type(abs) # <class 'builtin_function_or_method'>
type(lambda x: x) # <class 'function'>
type((x for x in range(10))) # <class 'generator'>
type(123) == int # True
type('123') == str # True
import types
type(lambda x: x) == types.FunctionType # True
type(abs)==types.BuiltinFunctionType # True
type(lambda x: x)==types.LambdaType # True
types.FunctionType == types.LambdaType # True
type((x for x in range(10)))==types.GeneratorType # True
```

- isinstance()

> 判断类型 99% 用 isinstance  只有需要严格确认 “是不是精确这个类” 才用 type  isinstance支持继承 type精确类型 不认继承


```py
isinstance('a', str)
isinstance(123, int)
isinstance(b'a', bytes)
# 判断xx是否为list或者tuple中的一种
isinstance([1, 2, 3], (list, tuple)) # True
isinstance((1, 2, 3), (list, tuple)) # True 
```

- dir() 
> 获得一个对象的所有属性和方法

```py
dir('ABC')# ['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isascii', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'removeprefix', 'removesuffix', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']

len('ABC') # 实质上就是在调用对象方法的__len__
# 也可以类似于js重写对象方法似的 重写__len__
class MyDog(object):
    def __init__(self, name):
        self.name = name
    def __len__(self):
        return 100
    def bark(self): # 注意 bark中哪怕使用self 也要写
        print('wolf wolf')
dog = MyDog('ww')
len(dog) # 100

hasattr(dog, 'name') # 判断dog上是否有name属性 区别于dict的get方法
getattr(dog, 'name') # 获取属性值
getattr(dog,'11', 404) # 404 不写404会报错
setattr(dog, 'age', 18) # 添加age属性 等同于 dog.age = 18
hasattr(dog, 'bark') # True 获取属性
# 能直接写 dog.name就不用hasattr(dog, 'name')
# 只有不确定某个属性或方法是否存在时 用来判断
```

### 13.5 实例属性和类属性

```py
class Student(object):
    def __init__(self, name):
        self.name = name
s = Student('Bob')
s.score = 90

# 可以给类自己加一个name属性
class Student(object):
    name = 'Student'
Student.name # Student
s = Student()
s.name # Student
s.name = '1' # s.name = 1
# 此时Student.name # Student 不变
del s.name # 如果删除实例的name属性 
# 向实例添加方法需要使用MethodType
from types import MethodType
s.set_age = MethodType(set_age, s)
s.set_age(25)
# 注意 直接通过 s.set_age = set_age的形式不能有效传递self 导致set_age(25)时会报错

```

## 14 面向对象高级编程
> 重继承、定制类、元类

### 14.1 使用__slots__

```py
from types import MethodType
class Student(object):
    pass
s.name = 'zs'
def set_score(self, score):
     self.score = score
s.set_age = MethodType(set_age, s)
s.set_age(25)
# 但是 s1 是不能获取的
s1 = Student()
s1.set_age(25) # 无此方法
# 可以直接通过类上挂方法实现
Student.set_age = set_age
# 但是这种动态的类需要限制
class Student(object):
    __slots__ = ('name', 'age') # 用tuple定义允许绑定的属性名称
# 此时添加非name或age就报错了
# 仅对当前类起作用 继承的无效
```

### 14.2 @property装饰器

> 给属性做限制
```py
class Student(object):
    @property # 实例上读取score时 走这里 等同于getter
    def score(self):
        return self._score # 注意 方法名和这里的_score不要重名 会导致栈溢出

    @score.setter # 实例上设置score时 走这里
    def score(self, value):
        if not isinstance(value, int):
            raise ValueError('score must be an integer!')
        if value < 0 or value > 100:
            raise ValueError('score must between 0 ~ 100!')
        self._score = value

    @property # 也可以只设置property 不设置setter 说明他不可写
    def age(self):
        return 18
```


### 14.3 多重继承

```py
class Bat(Mammal, Flyable): # 继承两个类
    pass
# 一般多重继承都通过mxinin混入实现
# 最佳实践清单：
# 每个MixIn 仅实现 1 个功能。
# 永远不单独实例化 MixIn 。
# 优先级高的 MixIn 放在继承列表靠前位置。
# 避免在 MixIn 中定义  __init__ 。
class MyTCPServer(TCPServer, ForkingMixIn):
    pass
```

### 14.4 定制类

```py
__slots__
__len__
__str__ # 定义控制台打印出来的内容<__main__.Student object at 0x109afb190>
__repr__ = __str__ # 定义实例打出来的内容
__iter__
__getattr__

```
