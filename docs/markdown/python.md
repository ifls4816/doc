# python3
> 环境安装 https://www.python.org/downloads/windows/

## hello world 

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


## 数据类型和变量

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

### python中的除法:
>>> 10 / 3
3.3333333333333335
>>> 9 / 3
3.0
>>> 10 // 3 # 称为地板除，两个整数的除法仍然是整数
3
>>> 10 % 3 # 取余
1



## 字符串和编码

### 字符串问题
- b'ABC' → 字节串（bytes）：计算机能直接看懂的二进制数据
- 'ABC' → 字符串（str）：人能看懂的文字
- 字符串长度 len('中文') # 2

### 编码
```py
#!/usr/bin/env python3
# -*- coding: utf-8 -*- 类似于html声明chartset一样 指定当前文件编码为utf-8
```

### 格式化

#### 字符串替换
>>> 'Hello, %s' % 'world'
'Hello, world'
>>> 'Hi, %s, you have $%d.' % ('Michael', 1000000)
'Hi, Michael, you have $1000000.'

#### 占位符
- %d	整数
- %f	浮点数
- %s	字符串
- %x	十六进制整数

格式化整数和浮点数还可以指定是否补0和整数与小数的位数
>>> '%2d-%02d' % (3, 1)  # %2d：表示两位数的整数，%02d：表示两位数的整数且不足两位时补0
' 3-01'
>>> '%.2f' % 3.1415926 # %.2f：表示小数点后两位的浮点数
'3.14'

#### format()

>>> 'Hello, {0}, 成绩提升了 {1:.1f}%'.format('小明', 17.125) # 0表示索引第一个 1表示索引第二个 1:.1f说明要格式化索引为1的参数 :号表示分隔符 取1位小数
'Hello, 小明, 成绩提升了 17.1%'

#### f-string

```py
age = 18
print(f'我的年龄是{age}')

age = 18.9999
print(f'{age:.2f}') # 打印: 19.00 取两位小数
```

## list和tuple

### list => 数组

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

### tuple 元组 同list 但是元素不可变

```py
t = (1, 2)
t1 = (1,) # 只有一个元素的tuple定义时必须加一个逗号,来消除歧义
t2 = (1, [2, 3]) # 元组中包含数组时 数组是可变的
```

## if

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


## match

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


## for循环

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

## dict(js object)和set

### dict

```py
d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
d['Michael'] # d['111'] 会报错
d.get('Michael') # get方法 d.get('111', -1) 默认返回None 指定后返回-1
'Michael' in d # 判断key是否存在
d.pop('Michael') # 删除key
# list能作为key
```

### set
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

## 函数

### 内置函数 max abs xxx

### 数据类型转换
```py
int('123') # 123
int(12.34) # 12
float('12.34') # 12.34
str(123) # '123'
bool(1) # True
bool('') # False
```

### 定义函数

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

### 函数的参数

#### 默认参数
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

#### 可变参数
```py
# 传入的参数个数是可变的
def calc(*numbers):
    sum = 0
    for n in numbers:
        sum = sum + n * n
    return sum
calc(1, 2) # 5
calc() # 0
# 传入数组或元组
nums = [1, 2, 3]
calc(*nums) # 解包 等同于calc(1,2,3)
```

### 关键字参数

```py
# 扩展函数的功能
def person(name, age, **other):
  print('name:', name, 'age:', age, 'other: ', other)

person('ls', 20, a=1, b=2, c=3)# name: ls age: 20 other:  {'a': 1, 'b': 2, 'c': 3}

dic = { 'a': 1, 'b':2 ,'c': 3}
person('zs', 18, **dic)# name: ls age: 20 other:  {'a': 1, 'b': 2, 'c': 3}
```
