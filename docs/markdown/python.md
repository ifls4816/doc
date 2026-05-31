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
>>> 'Hi, %s, you have $%d.' % ('Mi# -*- coding: utf-8 -*-chael', 1000000)
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
    case ['gcc', file1, *files]: # *flies类似于rg
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
s = Student()
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
__slots__ # 参考上方

__len__ # 参考上方

__str__ # 定义控制台打印出来的内容
class Student(object):
    def __init__(self, name):
      self.name = name
    def __str__(self):
          return 'Student object (name: %s)' % self.name
print(Student('zs')) # Student object (name: zs)
# 只有print打印时才会触发__str__直接显示变量调用的是__repr__
# 可以 下如下的代码 让显示变量调用也打印
__repr__ = __str__ # 定义实例打出来的内容

__iter__ # 便利
#如果一个类想被用于for ... in循环，类似list或tuple那样，就必须实现一个__iter__()方法，该方法返回一个迭代对象
# # Python的for循环就会不断调用该迭代对象的__next__()方法拿到循环的下一个值，直到遇到StopIteration错误时退出循环。
class Fib(object):
    def __init__(self):
        self.a, self.b = 0, 1 # 初始化两个计数器a，b
    def __iter__(self):
        return self # 实例本身就是迭代对象，故返回自己
    def __next__(self):
        self.a, self.b = self.b, self.a + self.b # 计算下一个值
        if self.a > 100000: # 退出循环的条件
            raise StopIteration()
        return self.a # 返回下一个值
for n in Fib():
    print(n)

__getitem__ # 下标取值
class Fib(object):
    def __getitem__(self, n): 
        a, b = 1, 1
        for x in range(n):
            a, b = b, a + b
        return a
f = Fib()
f[1] # 相当于__getitem__函数的n参数传递了1 就能返回当前遍历的n的结果

__getattr__
class Student(object):
    def __init__(self, name):
        self.name = name
    def __getattr__(self, attr):
        if attr == 'age':
          # return 'no age'
          return lambda x : x + 1 # 也可以返回函数 调用方式就变为s.age('19')
s = Student('zs')
print(s.name) # zs
print(s.age(19)) # 访问class中不存在的属性会报错'Student' object has no attribute 'age'
print(s.sex) # 针对没定义的属性 __getattr__走默认函数返回也就是None
# 这里可以用__getattr__实现链式调用
class Chain(object):
    def __init__(self, path=''):
        self._path = path
    def __getattr__(self, path):
        return Chain('%s/%s' % (self._path, path))
    def __str__(self):
        return self._path
    __repr__ = __str__
# /status/user/timeline/list 不论传递什么参数 都会加一个/返回
print(Chain().status.user.timeline.list)

__call__ # 把实例当作函数去调用
class Student(object):
    def __init__(self, name):
        self.name = name
    def __call__(self):
        print('My name is %s.' % self.name)
s = Student('zs')
s() # 此时实例的调用就是调了call方法
# 判断对象是否可以被调用
callable 加了__call__是True 不加是False
```

### 14.5 枚举类

```py
from enum import Enum
Month = Enum('Month', ('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'))
Month.Jan
# 可以通过这样便利出来所有的Enum元素
for name, member in Month.__members__.items():
    print(name, '=>', member, ',', member.value) # value是Enum的默认赋值 从1开始
# Jan => Month.Jan , 1
# Feb => Month.Feb , 2
# Mar => Month.Mar , 3
# Apr => Month.Apr , 4
# May => Month.May , 5
# Jun => Month.Jun , 6
# Jul => Month.Jul , 7
# Aug => Month.Aug , 8
# Sep => Month.Sep , 9
# Oct => Month.Oct , 10
# Nov => Month.Nov , 11
# Dec => Month.Dec , 12


# 更精确地控制枚举类型
from enum import Enum, unique
@unique # 用来检查是否有重复值
class Weekday(Enum):
    Sun = 0 # Sun的value被设定为0
    Mon = 1
    Tue = 2
    Wed = 3
    Thu = 4
    Fri = 5
    Sat = 6
Weekday.Mon # <Weekday.Sun: 0>
Weekday.Mon.value # 0\

day1 = Weekday.Mon
if day1 == Weekday.Mon # True
Weekday(1) # <Weekday.Mon: 1>
day1 == Weekday(1) # True
Weekday(7) # ValueError: 7 is not a valid Weekday
for name, member in Weekday.__members__.items():
print(name, '=>', member)
# Sun => Weekday.Sun
# Mon => Weekday.Mon
# Tue => Weekday.Tue
# Wed => Weekday.Wed
# Thu => Weekday.Thu
# Fri => Weekday.Fri
# Sat => Weekday.Sat
```


### 14.6 元类

type()函数既可以返回一个对象的类型，又可以创建出新的类型
```py
class Hello(object):
    def hello(self, name='world'):
        print('Hello, %s.' % name)
from hello import Hello
h = Hello()
h.hello() # Hello world
print(type(Hello)) # <class 'type'> 这里用到type创建了class 所以判断构造函数的类型就是 class 'type'
# 通过type创建class
def fn(self, name='world'): # 先定义函数
    print('Hello, %s.' % name)

# 参数1 class名称  
# 参数2 继承的父类集合，注意Python支持多重继承，如果只有一个父类，别忘了tuple的单元素写法
# 参数3 要绑定的方法
Hello = type('Hello', (object,), dict(hello=fn)) # 创建Hello class
h = Hello()
h.hello() # Hello, world.
print(type(Hello)) # <class 'type'>
print(type(h)) # <class '__main__.Hello'>
# 通过type()函数创建的类和直接写class是完全一样的，因为Python解释器遇到class定义时，仅仅是扫描一下class定义的语法，然后调用type()函数创建出class。
```

```py
# metaclass
# 除了使用type()动态创建类以外，要控制类的创建行为，还可以使用metaclass。
# metaclass允许创建类或者修改类。换句话说，可以把类看成是metaclass创建出来的“实例”。
具体使用参考：
https://liaoxuefeng.com/books/python/oop-adv/meta-class/index.html
```
 
## 15 错误 调试 测试

### 15.1 错误处理

#### 15.1.1 try

```py
# 基础使用
try:
    print('try...')
    r = 10 / 0
    print('result:', r) # 这里不会打印
except ZeroDivisionError as e:
    print('except:', e) # except: division by zero
finally:
    print('finally...')
print('END')

# 全部
try:
    print('try...')
    r = 10 / int('2')
    print('result:', r)
except ValueError as e: # 第一个except触发了 第二个就不会触发
    print('ValueError:', e)
except ZeroDivisionError as e:
    print('ZeroDivisionError:', e)
else:
    print('no error!') # 没进入except 会走这里
finally:
    print('finally...')
print('END')

# 多个函数组合时 不需要每一个都捕获
def foo(s):
    return 10 / int(s)
def bar(s):
    return foo(s) * 2
def main():
    try:
        bar('0')
    except Exception as e:
        print('Error:', e) # Error: division by zero
    finally:
        print('finally...')
main()
```

#### 15.1.2 调用栈


```py
def foo(s):
    return 10 / int(s)
def bar(s):
    return foo(s) * 2
def main():
    bar('0')
main()
# 控制台能打印完整的报错信息
# Traceback (most recent call last):
#   File "D:\1\personCode\doc\docs\markdown\python\hello.py", line 553, in <module>
#     main()
#     ~~~~^^
#   File "D:\1\personCode\doc\docs\markdown\python\hello.py", line 551, in main
#     bar('0')
#     ~~~^^^^^
#   File "D:\1\personCode\doc\docs\markdown\python\hello.py", line 548, in bar
#     return foo(s) * 2
#            ~~~^^^
#   File "D:\1\personCode\doc\docs\markdown\python\hello.py", line 545, in foo
#     return 10 / int(s)
#            ~~~^~~~~~~~
# ZeroDivisionError: division by zero
```


#### 15.1.2 记录错误

```py
# logging
import logging
def foo(s):
    return 10 / int(s)
def bar(s):
    return foo(s) * 2
def main():
    try:
        bar('0')
    except Exception as e:
        logging.exception(e) # 这里会正常打印调用栈信息 且不会打断代码的执行
main()
print('END')
```

#### 15.1.3 抛出错误

```py
class FooError(ValueError):
    pass
def foo(s):
    n = int(s)
    if n==0:
        raise FooError('invalid value: %s' % s) # 自定义错误
    return 10 / n
foo('0')


def foo(s):
    n = int(s)
    if n==0:
        raise ValueError('invalid value: %s' % s)
    return 10 / n
def bar():
    try:
        foo('0')
    except ValueError as e:
        print('ValueError!') # 打印错误后向上抛出 这里并不清楚错误来源和处理办法
        raise
bar()
```

### 15.2 调试

```py
# print

# 断言
def foo(s):
    n = int(s)
    # n不为0时 满足断言条件 不触发错误 n0为0时才打印
    assert n != 0, 'n is zero!' # AssertionError: n is zero!
    return 10 / n

def main():
    foo('0')
main()
# 大写字母O 不是零
# 运行时可以通过python -O err.py来排除断言引发的错误
# 关闭后 断言可当作pass看

# logging 能记录错误
import logging
logging.basicConfig(level=logging.INFO)

# pdb
s = '0'
n = int(s)
print(10 / n)
python -m pdb err.py
l # 查看当前代码执行到哪行了
n # next下一步
p s # s是代码的变量也就是0
p n # n是变量 0
q # 结束调试

# pdb.set_trace()
import pdb
s = '0'
n = int(s)
pdb.set_trace() # 运行到这里会自动暂停 js debugger
print(10 / n)
```

## 16 IO编程

### 16.1 文件读写

#### 16.1.1读
```py
f = open('./test.txt', 'r', encoding='gbk',  errors='ignore') # r代表只读 errors=ignore可忽略编码不规范引发的错误
f.read() # 接收参数size 避免内存爆掉 单位字节
f.readline() # 读一行内容
f.readlines() # 读取所有内容 按行返回list
for line in f.readlines():
    print(line.strip()) # 把末尾的'\n'删掉
f.close() # 读取会占用资源 必须关闭

try:
    f = open('/path/to/file', 'r')
    print(f.read())
finally: # 避免读取出错后不调用close的情况
    if f:
        f.close()
# 等同于try finally 不用手动close了 with是关键字
with open('/path/to/file', 'r') as f:
    print(f.read())
```

#### 16.1.2写

```py
f = open('./test.txt', 'w') # w: write 直接覆盖
f = open('./test.txt', 'a') # a: append 追加写入
f.write('hello') # 默认不会立即触发写 会放到内存中后续处理
f.close() # 调用close会立即写入

# 立即读写
with open('./test.txt', 'w') as f:
  f.write('Hello, world!')
```

### 16.2 StringIO和BytesIO

#### 16.2.1 StringIO
StringIO顾名思义就是在内存中读写str。
```py
from io import StringIO
f = StringIO()
#  f = StringIO('Hello!\nHi!\nGoodbye!') 也可以直接初始化
f.write('hello') # 5
f.write(' ') # 1
f.write('world!') # 6
# getvalue 获取写入后的str
print(f.getvalue()) # hello world!
```

#### 16.2.2 BytesIO
StringIO处理str BytesIO处理二进制

```py
from io import BytesIO
f = BytesIO()
f.write('中文'.encode('utf-8')) # 写入的不是str 而是经过二进制编码的bytes
print(f.getvalue()) # b'\xe4\xb8\xad\xe6\x96\x87'
```

### 16.3 操作文件和目录

```py
import os
os.name # nt=windows posix=linux/unix/macos
os.environ # 环境变量
os.environ.get('key') # 获取某个环境变量的值
os.environ.get('PATH')
os.path.abspath('.')  # 查看当前目录的绝对路径
p = os.path.join(os.path.abspath('.'), 'testdir') # 在当前目录创建一个testdir 首先把新目录的完整路径表示出来 这部还是在拼接路径 没有创建文件
os.mkdir(p) # 创建目录
os.rmdir(p) # 删除目录

# 路径处理: 不同系统的路径不一致 不能直接拼接字符串
os.path.join() # 合并路径采用
os.path.split() # 拆分路径采用
os.rename('test.txt', 'test.py') # 重命名文件
os.remove('test.py') # 删除文件
import shutil
shutil.copy('原文件.txt','目标文件.txt')

```

### 16.4 序列化
我们把变量从内存中变成可存储或传输的过程称之为序列化，在Python中叫pickling
序列化之后，就可以把序列化后的内容写入磁盘，或者通过网络传输到别的机器上。

```py
# pickle
import pickle
d = dict(name='Bob', age=20, score=88)
# dumps 把任意对象序列化成一个bytes
pickle.dumps(d) # b'\x80\x03}q\x00(X\x03\x00\x00\x00ageq\x01K\x14X\x05\x00\x00\x00scoreq\x02KXX\x04\x00\x00\x00nameq\x03X\x03\x00\x00\x00Bobq\x04u.' 
pickle.dump()
f = open('dump.txt', 'wb') # w:write b:binary
pickle.dump(d, f)
f.close() # 会生成一个二进制文件

f = open('dump.txt', 'rb')
d = pickle.load(f) # {'age': 20, 'score': 88, 'name': 'Bob'}
f.close()
```


```py
# JSON json就是标准的js对象
| JSON类型 | Python类型 |
|---------|-----------|
| {} | dict |
| [] | list |
| "string" | str |
| 1234.56 | int或float |
| true/false | True/False |
| null | None |
# 将py对象转换为json对象
import json
d = dict(name='Bob', age=20, score=88)
json.dumps(d) # '{"name": "Bob", "age": 20, "score": 88}' =js的JSON.stringify
# 将json转为py对象
json_str = '{"age": 20, "score": 88, "name": "Bob"}'
json.loads(json_str) # {'age': 20, 'score': 88, 'name': 'Bob'} =js的JSON.parse

# 将class表示的对象转换成json
class Student(object):
    def __init__(self, name, age, score):
        self.name = name
        self.age = age
        self.score = score
s = Student('Bob', 20, 88)
# class上的__dict__属性
print(json.dumps(s, default=lambda obj: obj.__dict__属性)) # {"name": "Bob", "age": 20, "score": 88}

# 将json转换回class
def dict2student(d):
    return Student(d['name'], d['age'], d['score'])
json_str = '{"age": 20, "score": 88, "name": "Bob"}'
print(json.loads(json_str, object_hook=dict2student)) # <__main__.Student object at 0x000001CD73A3C910>
```


## 17 进程和线程

```py

```

### 17.1 多进程

```py

```

### 17.2 多线程

```py

```

### 17.3 ThreadLocal

```py

```

### 17.4 进程vs线程

```py

```

### 17.5 分布式进程

```py

```

