# #!/usr/bin/env python3

# # print('hello world!')
# # print('The quick brown fox', 'jumps over', 'the lazy dog')
# # print(100+300)
# # name = input('please enter your name: ')
# # print('hello,', name)

# # 请利用print()输出1024 * 768 = xxx：

# # TODO:
# # print('1024 * 768 =',0.1*0.3)
# # print('I\'m learning\nPython.')
# # print(r'\\\t\\')
# # print('''line1
# # line2
# # line3''')
# # print(r'''hello,\n
# # world''')
# # print(True and -1)
# # print(1 == 2)
# # age = input('输入年龄')
# # if int(age) >= 18:
# #     print('adult')
# # else:
# #     print('teenager')
# # int a = 123 # a是整数
# # print(a)
# # a = 'ABC' # a变为字符串
# # print(a)
# # a = 'ABC'
# # b = a
# # a = 'XYZ'
# # print(9 / 3)
# # n = 123
# # f = 456.789
# # s1 = 'Hello, world'
# # s2 = 'Hello, \'Adam\''
# # s3 = r'Hello, "Bart"'
# # s4 = r'''Hello,
# # Bob!'''

# # print(f'''
# # n:{n}
# # f:{f}
# # s1:{s1}
# # s2:{s2}
# # s3:{s3}
# # s4:{s4}
# # ''')
# # x = '中文'
# # print(x)
# # print('Hi, %s, you have $%d.' % ('Michael', 1000000))
# # print('%2d-%02d' % (3.22, 1))
# # print('%.2f' % 3.1415926)
# # age = 18
# # print(f'我的年龄是{age}')
# # 小明的成绩从去年的72分提升到了今年的85分，
# # 请计算小明成绩提升的百分点，
# # 并用字符串格式化显示出'xx.x%'，只保留小数点后1位：
# # age = 18.9999
# # print(f'{age:.2f}')

# # arr = ['a','b','c','d','e','f']
# # arr.pop(1)
# # print(arr)

# # age = input('age: ')
# # nage = int(age)
# # if nage >= 18:
# #   print('ok')
# # else:
# #   print('no')
# # arr = list(range(101))
# # print(arr)
# # sum = 0
# # for item in arr:
# #   sum = sum + item 
# # print(range(101))
# # L = ['Bart', 'Lisa', 'Adam']

# # for name in L:
# #   print(f'hello, {name}!')
# # n = 1
# # while n <= 100:
# #   if n > 11:
# #     break
# #   print(n)
# #   n = n + 1
# # print('END')
# # d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
# # # print(d['Michael'])
# # # print(d.get('Michael1'))
# # # print(d['Michael1'])
# # # print('Michael1' in d)
# # # d.pop('Michael')
# # # print(d)
# # t = 1
# # d[t] = 2
# # print(d)
# # s1 = {1,2,3,4} # 字面量
# # s2 = set([1,2,3,4]) # 和上方一样
# # print(s1)
# # print(s2)


# # # print(s1==s2)
# # def my_abs(num):
# #     if num >=0:
# #       return num
# #     else:
# #       return -num

# # print(my_abs(0))

# # def my_test():
#   # print(111)

# # print(my_test())

# # def my_abs(num):
# #   if num > 0:
# #     return num
# #   else:
# #     return -num

# # def nop(num1, num2):
# #   return num1 + num2
# #   pass
# # print(nop('1' , 1))
# # def my_abs (num):
# #   if not isinstance(num, (int, float)):
# #     raise TypeError('bad operand type')
# #   if num >= 0:
# #     return num
# #   else:
# #     return -num

# # print(my_abs('1'))
# # import math

# # def move(x, y, step, angle=0):
# #     nx = x + step * math.cos(angle)
# #     ny = y - step * math.sin(angle)
# #     return nx, ny

# # def calc(*nums):
# #   print(nums)
# #   print(nums[0])

# # # nums = [1, 2, 3]
# # calc(1,2,3)

# # def person(name, age, **other):
# #   print('name:', name, 'age:', age, 'other: ', other)

# # person('ls', 20, a=1, b=2, c=3)

# # dic = { 'a': 1, 'b':2 ,'c': 3}
# # person('zs', 18, **dic)

# # def person(name, age, **other):
# #   print('name:', name, 'age:', age, 'other: ', other)

# # # person('ls', 20, a=1, b=2, c=3)

# # dic = { 'a': 1, 'b': 2 , 'c':3 }
# # person('ls', 20, **dic)

# def persion(name,age, *, gender, job):
#     print(name, age, gender, job)


# persion('zs', 18, gender='男', job='无业')


# def person(name, age, *, gender = '男', job):
#     print(name,age,gender,job)

# person('zs', 18, job='无业')

# def f1(a, b, c=0, *args, **kw):
#     print('a =', a, 'b =', b, 'c =', c, 'args =', args, 'kw =', kw)

# # dic = { 'aa': 1, 'bb': 2 }
# # f1(1, 2, 3, 'a', 'b', 'c', **dic)

# # f1(1, 2, d= 99, ext=None)
# args = (1, 2, 3, 4)
# kw = {'d': 99, 'x': '#'}
# f1(*args, **kw)

# def f2(a, b, c=0, *, d, **kw):
#     print('a =', a, 'b =', b, 'c =', c, 'd =', d, 'kw =', kw)

# args = (1,2,3)
# kw = {'d':1111, 'x': '#'}
# f2(*args, **kw)

# def fact(n):
#     print(n)
#     if n==1:
#         return 1
#     return n * fact(n - 1)

# fact(5)

# L = ['Michael', 'Sarah', 'Tracy', 'Bob', 'Jack']

# r = []
# n = 3
# for idx, item in enumerate(L):
#   if idx < 3:
#     r.append(item)
# print(r)
# from collections.abc import Iterable
# dic = {'a':1,'b':2}
# for i, value in enumerate(dic):
#     print(i,value)
# [1x1, 2x2, 3x3, ..., 10x10]
# L = []
# for item in range(1, 11):
#     L.append(item * item)
# print(L)

# def add(x, y, f):
#     return f(x) + f(y)

# def my_add(n):
#     return abs(n)
# print(add(1,2, my_add))

# def f(x,y):
#     print('x',x)
#     print('y',y)
#     return x * x
# r = map(f, [1,2,3,4,5,6])
# print(list(r))
# from functools import reduce
# def add(x, y):
#     print(x,y) # 1 2 / 3 3 / 6 4 / 10 5
#     return x + y
# reduce(add, [1,2,3,4,5]) # 15
# from functools import reduce
# def fn(x, y):
#     print(x,y) # 1 3  / 13 5 / 135 7 / 1357 / 9
#     return x * 10 + y
# print(reduce(fn, [1, 3, 5, 7, 9]))

# from functools import reduce
# def fn(x, y):
#      return x * 10 + y

# def char2num(s):
#      digits = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}
#      return digits[s]

# print(reduce(fn, map(char2num, '13579')))
# def normalize(name):
#     return name[0].upper() + name[1:].lower()

# # 测试:
# L1 = ['adam', 'LISA', 'barT']
# L2 = list(map(normalize, L1))
# print(L2)

# from functools import reduce
# def prod(L):
#     def fn (x, y):
#       return x * y
#     return reduce(fn, L)
# print('3 * 5 * 7 * 9 =', prod([3, 5, 7, 9]))
# if prod([3, 5, 7, 9]) == 945:
#     print('测试成功!')
# else:
#     print('测试失败!')
# from functools import reduce

# def str2float(s):
#     pass

# print('str2float(\'123.456\') =', str2float('123.456'))
# if abs(str2float('123.456') - 123.456) < 0.00001:
#     print('测试成功!')
# else:
#     print('测试失败!')

# nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# # 筛选偶数：能被2整除
# res = list(filter(lambda x: x % 2 == 0, nums))
# print(res)

# def fn (x):
#   return x> 1
# print(list(filter(fn, [1,2,3])))
# L = [('Bob', 75), ('Adam', 92), ('Bart', 66), ('Lisa', 88)]

# def by_name(t):
#     return t[1]
# def by_score(t):
#     return -t[1] # 处理正序反序

# L2 = sorted(L, key=by_name)
# L2 = sorted(L, key=by_score)
# print(L2)

# def inc():
#     x = 0
#     def fn():
#         nonlocal x
#         x = x + 1
#         return x
#     return fn

# f = inc()
# print(f()) # 1
# print(f()) # 2

# def inc():
#   x = 0
#   def fn():
#     return x + 1
#   return fn
# f = inc()

# print(f())

# def inc():
#     x = 0
#     def fn():
#         nonlocal x
#         x = x + 1
#         return x
#     return fn
# f = inc()
# print(f()) # 1
# print(f()) # 2

# def createCounter():
#     x = 0
#     def counter():
#         nonlocal x
#         x = x + 1
#         return x
#     return counter

# # 测试:
# counterA = createCounter()
# print(counterA(), counterA(), counterA(), counterA(), counterA()) # 1 2 3 4 5
# counterB = createCounter()
# if [counterB(), counterB(), counterB(), counterB()] == [1, 2, 3, 4]:
#     print('测试通过!')
# else:
#     print('测试失败!')

# def is_odd(n):
#     return n % 2 == 1

# L = list(filter(lambda n : n % 2 == 1, range(1, 20)))

# print(L)


# def log(func):
#     def wrapper(*args, **kw):
#         print('call %s():' % func.__name__)
#         return func(*args, **kw)
#     return wrapper

# @log
# def now():
#     print('2024-6-1')

# now()

# 装饰器传递参数
# def log(text):
#     def decorator(func):
#         def wrapper(*args, **kw):
#             print('%s %s():' % (text, func.__name__))
#             return func(*args, **kw)
#         return wrapper
#     return decorator
# @log('execute')
# def now():
#     print(now.__name__)
#     print('2024-6-1') 
# now() # execute now():     2024-6-1

# import time, functools

# def metric(fn):
#     print('%s executed in %s ms' % (fn.__name__, 10.24))
#     return fn

# # 测试
# @metric
# def fast(x, y):
#     time.sleep(0.0012)
#     return x + y

# @metric
# def slow(x, y, z):
#     time.sleep(0.1234)
#     return x * y * z

# f = fast(11, 22)
# s = slow(11, 22, 33)
# if f != 33:
#     print('测试失败!')
# elif s != 7986:
#     print('测试失败!')

# import functools
# int2 = functools.partial(int, base=2)
# print(int2('1000000'))

# kw = { 'base': 2 }
# print(int('10010', **kw))

# class Student(object):
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
# stu = Student('zs', 19)

# class Student(object):
#     count = 0

#     def __init__(self, name):
#         self.name = name
#         Student.count = Student.count + 1

# # 测试:
# if Student.count != 0:
#     print('测试失败!')
# else:
#     bart = Student('Bart')
#     if Student.count != 1:
#         print('测试失败!')
#     else:
#         lisa = Student('Bart')
#         if Student.count != 2:
#             print('测试失败!')
#         else:
#             print('Students:', Student.count)
#             print('测试通过!')
class Student(object):
    def __init__(self, name):
        self.name = name
    def __str__(self):
        return 'Student object (name: %s)' % self.name
    __repr__ = __str__
print(Student('Michael'))