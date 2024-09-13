# java 入门

## HelloWorld

```java
public class HelloWorld {
      public static void main(String[] args){
          //在控制台上打印hello world程序
          System.out.println("hello world!");
      }
}
```

```shell
javac HelloWorld.java
java HelloWorld
```

## 包的使用

Cat.java

```java
package org.idea.java.demo.cat;


public class Cat {
    public static void main(String[] args) {
        System.out.println("hello cat");
    }
}
```

> 注意 此处编译命令有所改变

```shell
javac -d . Cat.java  # 该命令会根据package的包路径生成一个cat目录
java Cat
```

## 类的基本组成

### 类中的方法调用

```java
public class CounterUtil {

    public int getMaxNumber(int a, int b) {
        if (a > b) {
            return a;
        }
        return b;
    }

    //下边这段就是所谓的main函数了
    public static void main(String[] args) {
        //通过new关键字来创建一个新的对象counterUtil
        CounterUtil counterUtil = new CounterUtil();
        //使用counterUtil对象的getMaxNumber方法
        int c = counterUtil.getMaxNumber(1, 2);
        System.out.println(c);
    }
}
```

### 构造函数

```java
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void Hello () {
      String h = this.name + " " + this.age + "say hello";
      System.out.println(h);
    }

    public static void main(String[] args) {
      Person person = new Person("zs", 30);
      System.out.println(person.name);
      System.out.println(person.age);
      person.Hello();
    }
}
```

### 继承

```java
public class Student {
    private String name;
    private String gender;
    private int age;
    public Student(String name,String gender,int age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getName() {
        return this.name;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public String getGender() {
        return this.gender;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public int getAge() {
        return this.age;
    }
}
public class GraduateStudent extends Student {
    private String major;
    public GraduateStudent(String name,String gender,int age,String major) {
        super(name,gender,age);
        this.major = major;
    }
    public void setMajor(String major) {
        this.major = major;
    }
    public String getMajor() {
        return this.major;
    }
}

```

### 接口

```java
// MyInterface.java
public interface MyInterface {
    public void method1();
    public void method2();
}
```

```java
// MyClass.java
public class MyClass implements MyInterface {

    @Override
    public void method1() {
        System.out.println("This is method1 implementation.");
    }

    @Override
    public void method2() {
        System.out.println("This is method2 implementation.");
    }

    public void myOwnMethod() {
        System.out.println("This is my own method.");
    }
     public static void main(String[] args) {
        MyClass myClass = new MyClass();
        myClass.method1();
     }
}

```

```shell
javac MyInterface.java # 编译接口java
javac MyClass.java # 编辑主java
java MyClass # 运行主java
```

## java 基本数据类型

- 整数类型：byte, short, int, long，用于存储整数值。
- 浮点类型：float, double，用于存储带小数的数值。
- 字符类型：char，用于单个字符的存储。
- 布尔类型：boolean，用于存储 true/false 值。

### 类型转换

```java
public class Test {

    public static void main(String[] args) {
        double b = 2.5;
(int)        int a =  b;
        System.out.println(a); // 输出为2: 显示转成了类型 丢失了精度
    }

}
```

## 输入和输出

```java
import java.util.Scanner;

public class Foo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); // 用户输入name
        System.out.println("input your name");
        String name = scanner.next();
        System.out.println("hello"+name+"!"); // 输出: hello xxx !
    }
}

public class Test {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("请输入数字：");
        int num = scanner.nextInt(); // Scanner 支持int类型输入
        System.out.println("您输入的数字是：" + num);
    }
}

public class Foo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("请输入姓名：");
        String name = scanner.next("[a-zA-Z]+"); // Scanner支持正则输入 不符合正则规则会报错
        System.out.println("您输入的姓名是：" + name);
    }
}
```

## 修饰符

### public、private、protected

> 同 js 的 public、private、protected

- public 修饰符用于指定类、方法、变量可以被任何类访问。 (任何)
- protected 修饰符用于指定类、方法、变量可以被同一个包中的类以及所有子类访问。 (同包/同文件)
- private 修饰符用于指定类、方法、变量只能被同一个类中的方法访问。 (同类)

```java
public class Test {
    public int a; //可以被任何类访问
    protected int b; //可以被同一个包中的类以及所有子类访问
    private int c; //只能被同一个类中的方法访问
}


public class Test2 {
    public static void main(String args[]) {
        Test test = new Test();
        test.a = 1; //可以访问
        //test.b = 2; //不能访问
        //test.c = 3; //不能访问
    }
}


public class Test3 extends Test {
    public static void main(String args[]) {
        Test3 test3 = new Test3();
        test3.a = 1; //可以访问
        test3.b = 2; //可以访问
        //test3.c = 3; //不能访问
    }
}
```

### static

```java
public class Student {
    public static String name = "Tom";
}
// String studentName = Student.name;
```

```java
public class Student {
    public static int count = 0;

    public Student() {
        count++;
    }

    public static void main(String[] args) {
        Student s1 = new Student(); // 注意: 此处new的过程中 会调用与clas Student同名的方法Student 触发count++
        Student s2 = new Student();

        System.out.println("Student count: " + Student.count);
    }
}
```

### final

> final 修饰符是一种 Java 关键字，用于修饰类、变量和方法，用来限定其不能被继承、修改或删除。可以用来保护代码和数据的安全性。

> final 修饰符在以下几种场景中可以具体使用： 1. 类：当声明一个类为 final 时，它就成为一个不可变类，不能被其它类继承。 2. 方法：当声明一个方法为 final 时，它就不能被子类重写。 3. 变量：当声明一个变量为 final 时，它就成为一个常量，不能被修改。

- 保护值不被改变

```java
public class MyClass {
  public final int MAX_VALUE = 100;
  public int value;

  public MyClass(int value) {
    this.value = value;
  }

  public void increaseValue() {
    if (this.value < MAX_VALUE)
      this.value++;
  }
}
```

- 禁止类被继承

```java
public final class MyClass {
  // class definition
}
```

- 禁止类中的方法被重写

```java
public class MyClass {
  public final void doSomething() {
    // 继承MyClass时 doSomething不可被重写
  }
}
```

## 内部类外部类

```java
// 外部类
public class User {
    private String name;
    private String tel;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getTel() {
        return tel;
    }
    public void setTel(String tel) {
        this.tel = tel;
    }
    // 内部类: 内部类可以访问外部类的所有成员变量和方法，即使它们是私有的
    private class innerUser {
        private Integer id;
        private String address;
        public Integer getId() {
            return id;
        }
        public void setId(Integer id) {
            this.id = id;
        }
        public String getAddress() {
            return address;
        }
        public void setAddress(String address) {
            this.address = address;
        }
    }
    public static void main(String[] args) {
        User user = new User();
        user.setName("name");
        user.setTel("189127678888");
        // 内部类的使用
        User.innerUser innerUser = user.new innerUser();
        innerUser.setAddress("shenzhen");
        innerUser.setId(1);
        System.out.println(user.getName());
        System.out.println(user.getTel());
        System.out.println(innerUser.getAddress());
        System.out.println(innerUser.getId());
        System.out.println(innerUser.getAddress());
    }
}
```

## 重写和重载

- 重写（overriding）是指子类对父类的允许访问的方法进行重新编写，返回值和形参都不能改变。
- 重载（overloading）是指在一个类里面，定义多个同名的方法，但是他们的参数列表不同，根据参数个数不同或参数类型不同而区分开来，使用的时候可以根据参数的不同调用不同的方法。

```java
// 重写
class Vehicle {
  public void run(){
    System.out.println("222");
  }
}

class Car extends Vehicle {
  @Override
  public void run(){
    System.out.println("111");
  }
  public static void main (String[] arg) {
    Vehicle v = new Car();
    v.run();
  }
}
// 重载
class Vehicle {
  public void run(){
    System.out.println("车在行驶");
  }
  public void run(String name){
    System.out.println(name + "在行驶");
  }
}


class Car extends Vehicle {
  @Override
  public void run(){
    System.out.println("汽车在行驶");
  }
  public void run(String name,int speed){
    System.out.println(name + "在以" + speed + "的速度行驶");
  }
}
```

## 数组

- 一维数组

```java
class Car  {
  public static void main(String[] args) {
    int[] myArray = new int[6];
      myArray[0] = 10;
      myArray[1] = 20;
      myArray[2] = 30;
      myArray[3] = 40;
      myArray[4] = 50;
    int val = myArray[4]
    System.out.println(myArray[5]);
  }
}
```

- 二维数组

```java
class Car  {
  public static void main(String[] args) {
    String[][] students = {
        {"zs", "18", "1"},
        {"ss", "20", "2"},
        {"aa", "19", "1"},
        {"cc", "17", "2"},
        {"ff", "22", "1"}
      };
    for (int i = 0; i < students.length; i++) {
      System.out.println("name:" + students[i][0] + ",age:" + students[i][1] + ",geder:" + students[i][2]);
    }
  }
}
```

## 循环

```java
// for循环
int sum = 0;
for (int i = 0; i <= 100; i++) {
  sum = sum + i;
}
System.out.println(sum);
// while循环: 只包含一个条件，当该条件为真时，循环体就会被执行。例如下边这段代码：
int sum = 0;
int i = 0;
while (i <= 100) {
  sum = sum + i;
  i++;
}
System.out.println(sum);
// do-while循环: 先进入循环体 然后再检查条件
int i = 1;
int sum = 0;
do {
  sum = sum + i;
  i++;
} while (i<10) {
  System.out.println(sum);
};
// break continue 同js
// break：当遇到break语句时，就会终止当前的循环，跳出循环，继续执行其他代码。
for (int i=0; i<10; i++) {
  if (i == 5) {
      break;
  }
    System.out.println(i);
}
// continue：当遇到continue语句时，就会终止当前的循环，跳过当前循环，进入下一个循环，继续执行其他代码。
for (int i=0; i<10; i++) {
  if (i == 5) {
      continue;
  }
  System.out.println(i);
}
```

## 条件判断

- if else
- switch

## 运算符

> 参考 js 运算符

## 字符串类型变量

```java
String str = "Hello World";
// 检索子串
str.indexOf("World"); // 返回6
// 替换子串
str.replace("Hello", "Hi"); // 返回"Hi World"
// 分割字符串
str.split(" "); // 返回["Hello", "World"]
```

> 常用方法

- 返回此字符串的长度 int length() str.length(); // 返回 11
- 获取指定位置的字符 char charAt(int index) str.charAt(0); // 返回'H'
- 截取子串 String substring(int beginIndex) str.substring(0, 5); // 返回"Hello"
- 转换大小写 String toUpperCase() str.toUpperCase(); // 返回"HELLO WORLD"
- 查找子串 int indexOf(int ch) str.indexOf("World"); // 返回 6
- 检查字符串开头 boolean startsWith(String prefix) str.startsWith("Hello"); // 返回 true
- 检查字符串结尾 boolean endsWith(String suffix) str.endsWith("World"); // 返回 true
- 去除字符串头尾空格 String trim() str.trim(); // 返回"Hello World"
- 比较两个字符串 boolean equals(Object anObject) str.equals("Hello World"); // 返回 true

> equal 和== equla 判断两个字符串内容是否相等 ==判断两个变量是否指向同一个对象

```java
String str1 = "Hello World";
String str2 = new String("Hello World");
// 使用equal方法
System.out.println(str1.equals(str2)); //true
// 使用==操作符
System.out.println(str1 == str2); //false
```

## Java 中常用的包装类

> 直接声明的基本数据类型，如 int、float、double 等，在 Java 中称为基本数据类型。而包装类，如 Integer、Float、Double 等，在 Java 中称为引用数据类型。 区别于 js, 基本数据类型中没有方法, 只有包装类中能调用方法

- Byte：表示一个字节，取值范围为-128~127。
- Short：表示一个短整型，取值范围为-32768~32767。
- Integer：表示一个整型，取值范围为-2147483648~2147483647。
- Long：表示一个长整型，取值范围为-9223372036854775808~9223372036854775807。
- Float：表示单精度浮点数，取值范围为 1.4e-45~3.4028235e38。
- Double：表示双精度浮点数，取值范围为 4.9e-324~1.7976931348623157e308。
- Boolean：表示布尔值，取值范围为 true 和 false。
- Character：表示字符，取值范围为 0~65535。

### 拆箱和装箱

- 拆箱: 包装转为基本
- 装箱: 基本转为包装

```java
String str = "111";
byte b = Byte.valueOf(str); // 把字符串转换为byte
Byte bb = Byte.valueOf(b); // 把byte转换为Byte

short s = Short.valueOf(str); // 把字符串转换为short
Short ss = Short.valueOf(s); // 把short转换为Short

int i = Integer.valueOf(str); // 把字符串转换为int
Integer ii = Integer.valueOf(i); // 把int转换为Integer

long l = Long.valueOf(str); // 把字符串转换为long
Long ll = Long.valueOf(l); // 把long转换为Long

float f = Float.valueOf(str); // 把字符串转换为float
Float ff = Float.valueOf(f); // 把float转换为Float

double d = Double.valueOf(str); // 把字符串转换为double
Double dd = Double.valueOf(d); // 把double转换为Double

boolean b = Boolean.valueOf(str); // 把字符串转换为boolean
Boolean bb = Boolean.valueOf(b); // 把boolean转换为Boolean

char c = Character.valueOf(str); // 把字符串转换为char
Character cc = Character.valueOf(c); // 把char转换为Character
```

## 哈希表介绍

### HashMap

类似于 js 中的 map

```java
import java.util.HashMap;

class Car  {
  public static void main(String[] args) {
    HashMap<String, String> map = new HashMap<String, String>();
    // 添加元素
    map.put("1", "One");
    map.put("2", "Two");
    map.put("3", "Three");
    // 删除元素
    map.remove("1");
    System.out.println(map); // {1=One, 2=Two, 3=Three}
    // 获取元素
    String value = map.get("1");
    System.out.println(value); // one 删除后为null
    String v = map.get("5"); // 不存在的元素也为null
    System.out.println(v);
    // 判断是否存在某个key
    if (map.containsKey("1")) {
      System.out.println("map contains key 1");
    }
  }
}
```

### Hashtable
Hashtable 是一种线程安全的 HashMap 实现，可以让多个线程同时访问哈希表
```java
put get remove containsKey方法同HashMap一致
```

### LinkedHashMap
LinkedHashMap可以使用链表来维护记录的插入顺序，从而提供有序的访问
```java
put get remove containsKey方法同HashMap一致
```

### TreeMap
TreeMap可以按照排序键来存储和访问记录
```java
put get remove containsKey方法同HashMap一致
```

## 日期类型的介绍