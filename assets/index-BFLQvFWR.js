import{_ as L}from"./index-CXupB9Mu.js";import{d as A,r as i,c as x,o as m,w as h,e,b as n,aM as T,aL as U,p as E,q as C,u as R,F as I,T as M,K as $,Y as P,Z as O,cx as V,E as B,as as z,a6 as F,t as j,U as k,n as H}from"./index-DuSeLP2O.js";import{_ as D}from"./index-BKdEAPQW.js";import{_}from"./index.vue_vue_type_script_setup_true_lang-CNcKMeN3.js";const S={html:`<!DOCTYPE HTML>
<html>
<head>
<title>HTML Sample</title>
<meta charset="utf-8">
<style>
  h1 {
    font-family: Tahoma;
    font-size: 40px;
    font-weight: normal;
    margin: 50px;
    color: #a0a0a0;
  }

  button.Gray {
    font-family: Tahoma;
    font-size: 17px;
    font-weight: normal;
    margin-top: 100px;
    padding: 10px 50px;
    background-color: #727272;
    color: #fff;
    outline: 0;
    border: none;
    cursor: pointer;
  }

  button.Gray:hover {
    background-color: #898888;
  }
</style>
</head>
<body>
<!--This is the body section-->
<div class="Center">
  <h1>NAME OF SITE</h1>
</div>
<div>
  <button class="Gray" onclick="ButtonClick()">Click Me!</button>
</div>
<script>
  function ButtonClick(){
    // Example of comments in JavaScript
    window.alert("I'm an alert sample!");
  }
<\/script>
</body>
</html>
`,css:`html {
background-color: #e2e2e2;
margin: 0;
padding: 0;
}

body {
background-color: #fff;
border-top: solid 10px #000;
color: #333;
font-size: .85em;
font-family: "Segoe UI","HelveticaNeue-Light", sans-serif;
margin: 0;
padding: 0;
}

a:link, a:visited,
a:active, a:hover {
color: #333;
outline: none;
padding-left: 0;
padding-right: 3px;
text-decoration: none;
}

a:hover {
background-color: #c7d1d6;
}

h1, h2, h3,
h4, h5, h6 {
color: #000;
margin-bottom: 0;
padding-bottom: 0;
}
`,javascript:`/**
* 下载文件
* @param data 二进制数据
* @param name 文件名
* @param type 文件类型
*/
export function download(data, name, type) {
const blob = new Blob([data], { type: type || 'application/octet-stream' });
const url = window.URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = name;
a.style.display = 'none';
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
URL.revokeObjectURL(url);
}

/**
* 深度克隆
* @param value 对象
*/
export function cloneDeep(value) {
const cache = new WeakMap();
const clone = (value) => {
  if (typeof value !== 'object' || value === null) {
    return value;
  }
  if (cache.has(value)) {
    return cache.get(value);
  }
  const result = Array.isArray(value) ? [] : {};
  cache.set(value, result);
  for (const key of Reflect.ownKeys(value)) {
    result[key] = clone(value[key]);
  }
  return result;
};
return clone(value);
}
`,typescript:`/**
* 下载文件
* @param data 二进制数据
* @param name 文件名
* @param type 文件类型
*/
export function download(
data: Blob | ArrayBuffer | string,
name: string,
type?: string
) {
const blob = new Blob([data], { type: type || 'application/octet-stream' });
const url = window.URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = name;
a.style.display = 'none';
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
URL.revokeObjectURL(url);
}

/**
* 深度克隆
* @param value 对象
*/
export function cloneDeep(value?: any) {
const cache = new WeakMap();
const clone = (value?: any) => {
  if (typeof value !== 'object' || value == null) {
    return value;
  }
  if (cache.has(value)) {
    return cache.get(value);
  }
  const result = Array.isArray(value) ? [] : {};
  cache.set(value, result);
  for (const key of Reflect.ownKeys(value)) {
    result[key] = clone(value[key]);
  }
  return result;
};
return clone(value);
}
`,json:`{
"type": "team",
"test": {
  "testPage": "tools/testing/run-tests.htm",
  "enabled": true
},
"search": {
  "excludeFolders": [
    ".git",
    "node_modules",
    "tools/bin",
    "tools/counts",
    "tools/policheck",
    "tools/tfs_build_extensions",
    "tools/testing/jscoverage",
    "tools/testing/qunit",
    "tools/testing/chutzpah",
    "server.net"
  ]
}
}
`,scss:`$baseFontSizeInPixels: 14;

@function px2em ($font_size, $base_font_size: $baseFontSizeInPixels) {
@return ($font_size / $base_font_size) + em;
}

h1 {
font-size: px2em(36, $baseFontSizeInPixels);
}

h2  {
font-size: px2em(28, $baseFontSizeInPixels);
}

.class {
font-size: px2em(14, $baseFontSizeInPixels);
}

nav {
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li { display: inline-block; }

a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}

@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}
}
`,less:`@base: #f938ab;

.box-shadow(@style, @c) when (iscolor(@c)) {
border-radius: @style @c;
}

.box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {
.box-shadow(@style, rgba(0, 0, 0, @alpha));
}

.box {
color: saturate(@base, 5%);
border-color: lighten(@base, 30%);

div {
  .box-shadow((0 0 5px), 30%);
}
}

#header {
h1 {
  font-size: 26px;
  font-weight: bold;
}
}

@the-border: 1px;
@base-color: #111;
@red: #842210;

#header {
color: (@base-color * 3);
border-left: @the-border;
border-right: (@the-border * 2);
}

#footer {
color: (@base-color + #003300);
border-color: desaturate(@red, 10%);
}
`,handlebars:`<div class="entry">
<h1>{{title}}</h1>
{{#if author}}
<h2>{{author.firstName}} {{author.lastName}}</h2>
{{else}}
<h2>Unknown Author</h2>
{{/if}}
{{contentBody}}
</div>

{{#unless license}}
<h3 class="warning">WARNING: This entry does not have a license!</h3>
{{/unless}}

<div class="footnotes">
<ul>
  {{#each footnotes}}
  <li>{{this}}</li>
  {{/each}}
</ul>
</div>

<h1>Comments</h1>

<div id="comments">
{{#each comments}}
<h2><a href="/posts/{{../permalink}}#{{id}}">{{title}}</a></h2>
<div>{{body}}</div>
{{/each}}
</div>
`,razor:`@{
var total = 0;
var totalMessage = "";
@* a multiline
  razor comment embedded in csharp *@
if (IsPost) {
  // Retrieve the numbers that the user entered.
  var num1 = Request["text1"];
  var num2 = Request["text2"];

  // Convert the entered strings into integers numbers and add.
  total = num1.AsInt() + num2.AsInt();
  <italic><bold>totalMessage = "Total = " + total;</bold></italic>
}
}

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Add Numbers</title>
  <meta charset="utf-8" />
</head>
<body>
<p>Enter two whole numbers and then click <strong>Add</strong>.</p>
<form action="" method="post">
  <p><label for="text1">First Number:</label>
    <input type="text" name="text1" />
  </p>
  <p><label for="text2">Second Number:</label>
    <input type="text" name="text2" />
  </p>
  <p><input type="submit" value="Add" /></p>
</form>

@* now we call the totalMessage method
   (a multi line razor comment outside code) *@

<p>@totalMessage</p>

<p>@(totalMessage+"!")</p>

An email address (with escaped at character): name@@domain.com

</body>
</html>
`,java:`import java.util.Random;

public class Example {
public static void main (String[] args){
  // Generate a random number between 1-100. (See generateRandomNumber method.)
  int random = generateRandomNumber(100);
  System.out.println("Generated number: " + random + "\\n");

  // Loop between 1 and the number we just generated.
  for (int i=1; i<=random; i++){
    if (i % 3 == 0 && i % 5 == 0){
      System.out.println("FizzBuzz");
    } else if (i % 3 == 0){
      System.out.println("Fizz");
    } else if (i % 5 == 0){
      System.out.println("Buzz");
    } else {
      System.out.println(i);
    }
  }
}

/**
 * Generates a new random number between 0 and 100.
 * @param bound The highest number that should be generated.
 * @return An integer representing a randomly generated number between 0 and 100.
 */
private static int generateRandomNumber(int bound){
  Random randGen = new Random();
  int randomNum = randGen.nextInt(bound);
  if (randomNum < 1){
    randomNum = generateRandomNumber(bound);
  }
  return randomNum;
}
}
`,c:`#pragma warning(disable : 4532)
#pragma warning(disable : 4702)

#if defined(_WIN32)

#if defined(_M_SH)
#define WIN_CE
#endif

#if defined(_M_AMD64)
#define NEST_IN_FINALLY /* allow when __try nested in __finally OK */
#endif

#define NTSTATUS LONG
#define EXCEPTION_NESTED_CALL 0x10
#define RtlRaiseStatus(x) RaiseException((x), 0, 0, NULL)
#define RtlRaiseException(x)                                                   \\
RaiseException((x)->ExceptionCode, (x)->ExceptionFlags,                      \\
               (x)->NumberParameters, (x)->ExceptionInformation)
#define IN
#define OUT
#if !(defined(_M_IA64) || defined(_M_ALPHA) || defined(_M_PPC) ||              \\
    defined(_M_AMD64) || defined(_M_ARM) || defined(_M_ARM64))
#define i386 1
#endif
#define try __try
#define except __except
#define finally __finally
#define leave __leave

#endif

#define WIN32_LEAN_AND_MEAN

#include "stdio.h"
#if defined(_M_IA64) || defined(_M_ALPHA) || defined(_M_PPC) ||                \\
  defined(_M_AMD64) || defined(_M_ARM) || defined(_M_ARM64)
#include "setjmpex.h"
#else
#include "setjmp.h"
#endif
#include "float.h"
#include "windows.h"
#include "math.h"

#if !defined(STATUS_SUCCESS)
#define STATUS_SUCCESS 0
#endif
#if !defined(STATUS_UNSUCCESSFUL)
#define STATUS_UNSUCCESSFUL ((NTSTATUS)0xC0000001L)
#endif
`,cpp:`#include "pch.h"
#include "Direct3DBase.h"

using namespace Microsoft::WRL;
using namespace Windows::UI::Core;
using namespace Windows::Foundation;

// Constructor.
Direct3DBase::Direct3DBase()
{
}

// Initialize the Direct3D resources required to run.
void Direct3DBase::Initialize(CoreWindow^ window)
{
  m_window = window;

  CreateDeviceResources();
  CreateWindowSizeDependentResources();
}

// These are the resources that depend on the device.
void Direct3DBase::CreateDeviceResources()
{
  // This flag adds support for surfaces with a different color channel ordering than the API default.
  // It is recommended usage, and is required for compatibility with Direct2D.
  UINT creationFlags = D3D11_CREATE_DEVICE_BGRA_SUPPORT;

#if defined(_DEBUG)
  // If the project is in a debug build, enable debugging via SDK Layers with this flag.
  creationFlags |= D3D11_CREATE_DEVICE_DEBUG;
#endif

  // This array defines the set of DirectX hardware feature levels this app will support.
  // Note the ordering should be preserved.
  // Don't forget to declare your application's minimum required feature level in its
  // description.  All applications are assumed to support 9.1 unless otherwise stated.
  D3D_FEATURE_LEVEL featureLevels[] =
  {
      D3D_FEATURE_LEVEL_11_1,
      D3D_FEATURE_LEVEL_11_0,
      D3D_FEATURE_LEVEL_10_1,
      D3D_FEATURE_LEVEL_10_0,
      D3D_FEATURE_LEVEL_9_3,
      D3D_FEATURE_LEVEL_9_2,
      D3D_FEATURE_LEVEL_9_1
  };

  // Create the DX11 API device object, and get a corresponding context.
  ComPtr<ID3D11Device> device;
  ComPtr<ID3D11DeviceContext> context;
  DX::ThrowIfFailed(
      D3D11CreateDevice(
          nullptr,                    // specify null to use the default adapter
          D3D_DRIVER_TYPE_HARDWARE,
          nullptr,                    // leave as nullptr unless software device
          creationFlags,              // optionally set debug and Direct2D compatibility flags
          featureLevels,              // list of feature levels this app can support
          ARRAYSIZE(featureLevels),   // number of entries in above list
          D3D11_SDK_VERSION,          // always set this to D3D11_SDK_VERSION
          &device,                    // returns the Direct3D device created
          &m_featureLevel,            // returns feature level of device created
          &context                    // returns the device immediate context
          )
      );

  // Get the DirectX11.1 device by QI off the DirectX11 one.
  DX::ThrowIfFailed(
      device.As(&m_d3dDevice)
      );

  // And get the corresponding device context in the same way.
  DX::ThrowIfFailed(
      context.As(&m_d3dContext)
      );
}
`,php:`<?php
// The next line contains a syntax error:
if () {
return "The parser recovers from this type of syntax error";
}
?>
<html>
<head>
<title>Example page</title>
</head>
<body>
<script type="text/javascript">
// Some PHP embedded inside JS
// Generated <?=date('l, F jS, Y')?>
var server_token = <?=rand(5, 10000)?>
if (typeof server_token === 'number') {
  alert('token: ' + server_token);
}
<\/script>
<div>
Hello
<? if (isset($user)) { ?>
<b><?=$user?></b>
<? } else { ?>
<i>guest</i>
<? } ?>
!
</div>
</body>
</html>
`,python:`import banana

class Monkey:
  # Bananas the monkey can eat.
  capacity = 10
  def eat(self, n):
      """Make the monkey eat n bananas!"""
      self.capacity -= n * banana.size

  def feeding_frenzy(self):
      self.eat(9.25)
      return "Yum yum"
`,go:`package main

import "strings"
import "fmt"

// Returns the first index of the target string \`t\`, or
// -1 if no match is found.
func Index(vs []string, t string) int {
  for i, v := range vs {
      if v == t {
          return i
      }
  }
  return -1
}

// Returns \`true\` if the target string t is in the
// slice.
func Include(vs []string, t string) bool {
  return Index(vs, t) >= 0
}

func main() {
  // Here we try out our various collection functions.
  var strs = []string{"peach", "apple", "pear", "plum"}
  fmt.Println(Index(strs, "pear"))
  fmt.Println(Include(strs, "grape"))
}
`,kotlin:`const val POINTS_X_PASS: Int = 15
val EZPassAccounts: MutableMap<Int, Int> = mutableMapOf(1 to 100, 2 to 100, 3 to 100)
val EZPassReport: Map<Int, Int> = EZPassAccounts

// update points credit
fun updatePointsCredit(accountId: Int) {
  if (EZPassAccounts.containsKey(accountId)) {
      println("Updating $accountId...")
      EZPassAccounts[accountId] = EZPassAccounts.getValue(accountId) + POINTS_X_PASS
  } else {
      println("Error: Trying to update a non-existing account (id: $accountId)")
  }
}

fun accountsReport() {
  println("EZ-Pass report:")
  EZPassReport.forEach{
      k, v -> println("ID $k: credit $v")
  }
}

fun main() {
  accountsReport()
  updatePointsCredit(1)
  updatePointsCredit(1)
  updatePointsCredit(5)
  accountsReport()
}
`,ruby:`module Azure
module Blob
  class Blob

    def initialize
      @properties = {}
      @metadata = {}
      yield self if block_given?
    end

    attr_accessor :name
    attr_accessor :snapshot
    attr_accessor :properties
    attr_accessor :metadata
  end
end
end
`,rust:`fn main() {
  let greetings = ["Hello", "Hola", "Bonjour",
                   "Ciao", "こんにちは", "안녕하세요",
                   "Cześć", "Olá", "Здравствуйте",
                   "Chào bạn", "您好", "Hallo",
                   "Hej", "Ahoj", "سلام"];

  for (num, greeting) in greetings.iter().enumerate() {
      print!("{} : ", greeting);
      match num {
          0 =>  println!("This code is editable and runnable!"),
          1 =>  println!("¡Este código es editable y ejecutable!"),
          2 =>  println!("Ce code est modifiable et exécutable !"),
          3 =>  println!("Questo codice è modificabile ed eseguibile!"),
          4 =>  println!("このコードは編集して実行出来ます！"),
          5 =>  println!("여기에서 코드를 수정하고 실행할 수 있습니다!"),
          6 =>  println!("Ten kod można edytować oraz uruchomić!"),
          7 =>  println!("Este código é editável e executável!"),
          8 =>  println!("Этот код можно отредактировать и запустить!"),
          9 =>  println!("Bạn có thể edit và run code trực tiếp!"),
          10 => println!("这段代码是可以编辑并且能够运行的！"),
          11 => println!("Dieser Code kann bearbeitet und ausgeführt werden!"),
          12 => println!("Den här koden kan redigeras och köras!"),
          13 => println!("Tento kód můžete upravit a spustit"),
          14 => println!("این کد قابلیت ویرایش و اجرا دارد!"),
          _ =>  {},
      }
  }
}
`,lua:`    -- defines a factorial function
  function fact (n)
    if n == 0 then
      return 1
    else
      return n * fact(n-1)
    end
  end

  print("enter a number:")
  a = io.read("*number")        -- read a number
  print(fact(a))
`,bat:`rem *******Begin Comment**************
rem This program starts the superapp batch program on the network,
rem directs the output to a file, and displays the file
rem in Notepad.
rem *******End Comment**************
@echo off
if exist C:output.txt goto EMPTYEXISTS
setlocal
path=g:programssuperapp;%path%
call superapp>C:output.txt
endlocal
:EMPTYEXISTS
start notepad c:output.txt
`,ini:`# Example of a .gitconfig file

[core]
repositoryformatversion = 0
filemode = false
bare = false
logallrefupdates = true
symlinks = false
ignorecase = true
hideDotFiles = dotGitOnly

# Defines the master branch
[branch "master"]
remote = origin
merge = refs/heads/master
`,shell:`#!/bin/bash

# Link filedescriptor 10 with stdin
exec 10<&0
# stdin replaced with a file supplied as a first argument
exec < $1
# remember the name of the input file
in=$1

# init
file="current_line.txt"
let count=0

# this while loop iterates over all lines of the file
while read LINE
do
  # increase line counter
  ((count++))
  # write current line to a tmp file with name $file (not needed for counting)
  echo $LINE > $file
  # this checks the return code of echo (not needed for writing; just for demo)
  if [ $? -ne 0 ]
   then echo "Error in writing to file \${file}; check its permissions!"
  fi
done

echo "Number of lines: $count"
echo "The last line of the file is: \`cat \${file}\`"

# Note: You can achieve the same by just using the tool wc like this
echo "Expected number of lines: \`wc -l $in\`"

# restore stdin from filedescriptor 10
# and close filedescriptor 10
exec 0<&10 10<&-
`,vb:`Imports System
Imports System.Collections.Generic

Module Module1

  Sub Main()
      Dim a As New M8Ball

      Do While True

          Dim q As String = ""
          Console.Write("ask me about the future... ")
          q = Console.ReadLine()

          If q.Trim <> "" Then
              Console.WriteLine("the answer is... {0}", a.getAnswer(q))
          Else
              Exit Do
          End If
      Loop

  End Sub

End Module

Class M8Ball

  Public Answers As System.Collections.Generic.Dictionary(Of Integer, String)

  Public Sub New()
      Answers = New System.Collections.Generic.Dictionary(Of Integer, String)
      Answers.Add(0, "It is certain")
      Answers.Add(1, "It is decidedly so")
      Answers.Add(2, "Without a doubt")
      Answers.Add(3, "Yes, definitely")
      Answers.Add(4, "You may rely on ")
      Answers.Add(5, "As I see it, yes")
      Answers.Add(6, "Most likely")
      Answers.Add(7, "Outlook good")
      Answers.Add(8, "Signs point to yes")
      Answers.Add(9, "Yes")
      Answers.Add(10, "Reply hazy, try again")
      Answers.Add(11, "Ask again later")
      Answers.Add(12, "Better not tell you now")
      Answers.Add(13, "Cannot predict now")
      Answers.Add(14, "Concentrate and ask again")
      Answers.Add(15, "Don't count on it")
      Answers.Add(16, "My reply is no")
      Answers.Add(17, "My sources say no")
      Answers.Add(18, "Outlook not so")
      Answers.Add(19, "Very doubtful")
  End Sub

  Public Function getAnswer(theQuestion As String) As String
      Dim r As New Random
      Return Answers(r.Next(0, 19))
  End Function

End Class
`,yaml:`%TAG ! tag:clarkevans.com,2002:
--- !shape
# Use the ! handle for presenting
# tag:clarkevans.com,2002:circle
- !circle
center: &ORIGIN {x: 73, y: 129}
radius: 7
- !line
start: *ORIGIN
finish: { x: 89, y: 102 }
- !label
start: *ORIGIN
color: 0xFFEEBB
text: Pretty vector drawing.
`,xml:`<?xml version="1.0"?>
<configuration xmlns:xdt="http://schemas.microsoft.com/XML-Document-Transform">
<connectionStrings>
  <add name="MyDB"
    connectionString="value for the deployed Web.config file"
    xdt:Transform="SetAttributes" xdt:Locator="Match(name)"/>
</connectionStrings>
<system.web>
  <customErrors defaultRedirect="GenericError.htm"
    mode="RemoteOnly" xdt:Transform="Replace">
    <error statusCode="500" redirect="InternalError.htm"/>
  </customErrors>
</system.web>
</configuration>
`,mysql:`CREATE TABLE shop (
  article INT(4) UNSIGNED ZEROFILL DEFAULT '0000' NOT NULL,
  dealer  CHAR(20)                 DEFAULT ''     NOT NULL,
  price   DOUBLE(16,2)             DEFAULT '0.00' NOT NULL,
  PRIMARY KEY(article, dealer));
INSERT INTO shop VALUES
  (1,'A',3.45),(1,'B',3.99),(2,'A',10.99),(3,'B',1.45),
  (3,'C',1.69),(3,'D',1.25),(4,'D',19.95);
`,dockerfile:`FROM mono:3.12

ENV KRE_FEED https://www.myget.org/F/aspnetvnext/api/v2
ENV KRE_USER_HOME /opt/kre

RUN apt-get -qq update && apt-get -qqy install unzip

ONBUILD RUN curl -sSL https://raw.githubusercontent.com/aspnet/Home/dev/kvminstall.sh | sh
ONBUILD RUN bash -c "source $KRE_USER_HOME/kvm/kvm.sh \\
  && kvm install latest -a default \\
  && kvm alias default | xargs -i ln -s $KRE_USER_HOME/packages/{} $KRE_USER_HOME/packages/default"

# Install libuv for Kestrel from source code (binary is not in wheezy and one in jessie is still too old)
RUN apt-get -qqy install \\
  autoconf \\
  automake \\
  build-essential \\
  libtool
RUN LIBUV_VERSION=1.0.0-rc2 \\
  && curl -sSL https://github.com/joyent/libuv/archive/v\${LIBUV_VERSION}.tar.gz | tar zxfv - -C /usr/local/src \\
  && cd /usr/local/src/libuv-$LIBUV_VERSION \\
  && sh autogen.sh && ./configure && make && make install \\
  && rm -rf /usr/local/src/libuv-$LIBUV_VERSION \\
  && ldconfig

ENV PATH $PATH:$KRE_USER_HOME/packages/default/bin

# Extra things to test
RUN echo "string at end"
RUN echo must work 'some str' and some more
RUN echo hi this is # not a comment
RUN echo 'String with \${VAR} and another $one here'
`};function G(v,d,l){return`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>代码运行 - Ele Admin Plus</title>
    <style>
      ${v}
    </style>
    <script>
      !(function () {
        const originalConsoleMethods = {
  log: console.log,
  error: console.error,
  warn: console.warn
};
['log', 'error', 'warn'].forEach(function(methodName) {
  console[methodName] = function () {
    originalConsoleMethods[methodName].apply(console, arguments);
    parent.postMessage({ id: 'iframeConsole', code: [...arguments].flat().join(' '), type: methodName }, '*');
  };
});
window.onerror = function(message, source, lineno, colno, error) {
  const errorStack = \`\${message}
at (\${source}:\${lineno}:\${colno})\`;
  parent.postMessage({ id: 'iframeConsole', code: error.stack || errorStack, type: 'error' }, '*');
};

      })();
    <\/script>
  </head>
  <body>
    ${d}
    <script>
      !(function () {
        ${l}
      })();
    <\/script>
  </body>
</html>
`}const W={style:{display:"flex","align-items":"center","margin-bottom":"12px"}},Y={style:{flex:"1"}},q={style:{flex:"1"}},K={style:{border:"1px solid var(--el-border-color)"}},X=A({__name:"demo-basic",setup(v){const d=Object.keys(S),l=i(""),r=i("typescript"),p=i("vs-dark"),g=()=>{l.value=S[r.value]};return g(),(u,a)=>{const s=T,b=U,y=D;return m(),x(y,{header:"代码编辑器","body-style":{padding:"12px"}},{default:h(()=>[e("div",W,[a[3]||(a[3]=e("div",null,"主题：",-1)),e("div",Y,[n(b,{modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=o=>p.value=o),class:"ele-fluid","popper-options":{strategy:"fixed"}},{default:h(()=>[n(s,{value:"vs",label:"Visual Studio"}),n(s,{value:"vs-dark",label:"Visual Studio Dark"}),n(s,{value:"hc-light",label:"High Contrast"}),n(s,{value:"hc-black",label:"High Contrast Dark"})]),_:1},8,["modelValue"])]),a[4]||(a[4]=e("div",null," 语言：",-1)),e("div",q,[n(b,{modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=o=>r.value=o),class:"ele-fluid","popper-options":{strategy:"fixed"},onChange:g},{default:h(()=>[(m(!0),E(I,null,C(R(d),o=>(m(),x(s,{key:o,value:o,label:o},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])])]),e("div",K,[n(_,{modelValue:l.value,"onUpdate:modelValue":a[2]||(a[2]=o=>l.value=o),language:r.value,theme:p.value,style:{height:"460px"}},null,8,["modelValue","language","theme"])])]),_:1})}}}),Z={style:{border:"1px solid var(--el-border-color)"}},J=A({__name:"demo-diff",setup(v){const d=i(`/**
 * 下载文件
 * @param data 二进制数据
 * @param name 文件名
 * @param type 文件类型
 */
export function download(data, name, type) {
  const blob = new Blob([data], { type: type || 'application/octet-stream' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * 深度克隆
 * @param value 对象
 */
export function cloneDeep(value) {
  const cache = new WeakMap();
  const clone = (value) => {
    if (typeof value !== 'object' || value == null) {
      return value;
    }
    // 处理 Date 对象
    if (value instanceof Date) {
      return new Date(value);
    }
    // 处理 RegExp 对象
    if (value instanceof RegExp) {
      return new RegExp(value.source, value.flags);
    }
    // 处理函数
    if (typeof value === 'function') {
      return value;
    }
    // 处理循环引用
    if (cache.has(value)) {
      return cache.get(value);
    }
    const result = Array.isArray(value) ? [] : {};
    cache.set(value, result);
    for (const key of Reflect.ownKeys(value)) {
      result[key] = clone(value[key]);
    }
    return result;
  };
  return clone(value);
}
`),l=i("javascript"),r=i(`/**
 * 下载文件
 * @param data 二进制数据
 * @param name 文件名
 */
export function download(data, name) {
  const blob = new Blob([data], { type: 'application/octet-stream' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/**
 * 深度克隆
 * @param value 对象
 */
export function cloneDeep(value) {
  const cache = new WeakMap();
  const clone = (value) => {
    if (typeof value !== 'object' || value === null) {
      return value;
    }
    if (cache.has(value)) {
      return cache.get(value);
    }
    const result = Array.isArray(value) ? [] : {};
    cache.set(value, result);
    for (const key of Reflect.ownKeys(value)) {
      result[key] = clone(value[key]);
    }
    return result;
  };
  return clone(value);
}
`),p=i("javascript");return(g,u)=>{const a=D;return m(),x(a,{header:"代码差异对比","body-style":{padding:"12px"}},{default:h(()=>[e("div",Z,[n(_,{modelValue:d.value,"onUpdate:modelValue":u[0]||(u[0]=s=>d.value=s),language:l.value,original:r.value,"onUpdate:original":u[1]||(u[1]=s=>r.value=s),"original-language":p.value,diff:!0,style:{height:"460px"}},null,8,["modelValue","language","original","original-language"])])]),_:1})}}}),Q={class:"run-wrapper"},ee={class:"editor-wrapper"},te={class:"editor-item"},ne={class:"editor-item-header"},ae={class:"editor-item-body"},oe={class:"editor-item"},ie={class:"editor-item-body"},re={class:"editor-item"},se={class:"editor-item-body"},le={class:"result-wrapper"},de={class:"frame-header"},ce={class:"result-body"},ue={class:"console-wrapper"},me=A({__name:"demo-run",setup(v){const d=i(`<div style="text-align: center;padding-top: calc(50vh - 24px);">
  <div class="demo-btn" onclick="console.warn('点击了登录按钮');">登录</div>
  <div class="demo-btn" onclick="abcdefghijk">注册</div>
</div>
<canvas class="bg-canvas" id="bgCanvas"></canvas>
`),l=i(`html {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #001121;
}

.bg-canvas {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.6;
  pointer-events: none;
  z-index: -1;
}

.demo-btn {
  color: #01c1ec;
  background: rgba(1, 193, 236, 0.38);
  backdrop-filter: blur(4px);
  padding: 14px 42px;
  display: inline-block;
  clip-path: polygon(0 0, 90% 0, 100% 28%, 100% 100%, 10% 100%, 0 72%);
  transition: all 0.2s;
  letter-spacing: 8px;
  font-weight: bold;
  user-select: none;
  cursor: pointer;
}

.demo-btn:hover {
  color: #fff;
  background: rgba(1, 193, 236, 0.68);
}

.demo-btn + .demo-btn {
  margin-left: 12px;
}
`),r=i(`console.log('Hello World!');

const bgCanvas = document.getElementById('bgCanvas');
const ctx = bgCanvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
bgCanvas.width = width;
bgCanvas.height = height;

const points = Array.from({ length: 250 }).map(function () {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    xa: 2 * Math.random() - 1,
    ya: 2 * Math.random() - 1,
    max: 9000
  };
});

const cursor = { x: null, y: null, max: 20000 };

window.onmousemove = function (e) {
  cursor.x = e.clientX;
  cursor.y = e.clientY;
};

window.onmouseout = function () {
  cursor.x = null;
  cursor.y = null;
};

window.onresize = function () {
  width = window.innerWidth;
  height = window.innerHeight;
  bgCanvas.width = width;
  bgCanvas.height = height;
};

function move() {
  ctx.clearRect(0, 0, width, height);
  const data = [cursor].concat(points);
  points.forEach(function (item) {
    item.x += item.xa;
    item.y += item.ya;
    item.xa *= item.x > width || item.x < 0 ? -1 : 1;
    item.ya *= item.y > height || item.y < 0 ? -1 : 1;
    ctx.fillRect(item.x - 0.5, item.y - 0.5, 1, 1);
    data.forEach((p) => {
      if (item !== p && null !== p.x && null !== p.y) {
        const dX = item.x - p.x;
        const dY = item.y - p.y;
        const distance = dX * dX + dY * dY;
        if (distance < p.max) {
          if (p === cursor && distance >= p.max / 2) {
            item.x -= 0.03 * dX;
            item.y -= 0.03 * dY;
          }
          const level = (p.max - distance) / p.max;
          ctx.beginPath();
          ctx.lineWidth = level / 2;
          ctx.strokeStyle = 'rgba(1, 211, 255, ' + (level + 0.2) + ')';
          ctx.moveTo(item.x, item.y);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }
      }
    });
    data.splice(data.indexOf(item), 1);
  });
  window.requestAnimationFrame(move);
}

move();

console.log('Start Move.');
`),p=i(null),g=i(0),u=i(null),a=i([]),s=o=>{var f,w;if(!o){g.value++,k(()=>{s(!0)});return}a.value=[];const t=(w=(f=p.value)==null?void 0:f.contentWindow)==null?void 0:w.document;t&&(t.open(),t.write(G(l.value,d.value,r.value)),t.close())},b=o=>{o.data&&o.data.id==="iframeConsole"&&(a.value.push(o.data),k(()=>{var t,f;(f=(t=u.value)==null?void 0:t.scrollTo)==null||f.call(t,0,u.value.scrollHeight)}))};M(()=>{window.addEventListener("message",b),s(!0)}),$(()=>{window.removeEventListener("message",b)});const y=i(!1);return P(()=>{y.value&&(s(!0),y.value=!1)}),O(()=>{y.value=!0}),(o,t)=>{const f=B,w=D;return m(),x(w,{header:"代码运行","body-style":{padding:"12px"}},{default:h(()=>[e("div",Q,[e("div",ee,[e("div",te,[e("div",ne,[n(f,{class:"editor-item-icon"},{default:h(()=>[n(R(V))]),_:1}),t[4]||(t[4]=e("div",null,"HTML",-1))]),e("div",ae,[n(_,{modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=c=>d.value=c),language:"html",style:{height:"128px"}},null,8,["modelValue"])])]),e("div",oe,[t[5]||(t[5]=e("div",{class:"editor-item-header"},[e("div",{class:"editor-item-icon is-css"},"*"),e("div",null,"CSS")],-1)),e("div",ie,[n(_,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=c=>l.value=c),language:"css",style:{height:"220px"}},null,8,["modelValue"])])]),e("div",re,[t[6]||(t[6]=e("div",{class:"editor-item-header"},[e("div",{class:"editor-item-icon is-js"},"{}"),e("div",null,"JS")],-1)),e("div",se,[n(_,{modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=c=>r.value=c),language:"javascript",style:{height:"320px"}},null,8,["modelValue"])])])]),e("div",le,[e("div",de,[t[7]||(t[7]=e("div",{class:"frame-tool"},null,-1)),t[8]||(t[8]=e("div",{class:"frame-tool is-warning"},null,-1)),t[9]||(t[9]=e("div",{class:"frame-tool is-success"},null,-1)),t[10]||(t[10]=e("div",{style:{margin:"1.68px 2px 0 auto","font-size":"12px"}},"重新运行",-1)),e("div",{class:"frame-btn",onClick:t[3]||(t[3]=c=>s())},[n(f,{style:{transform:"scale(1.09) translate(0.38px, 0.48px)"}},{default:h(()=>[n(R(z))]),_:1})])]),e("div",ce,[(m(),E("iframe",{key:g.value,ref_key:"iframeRef",ref:p}))]),e("div",ue,[t[11]||(t[11]=e("div",{class:"console-header"},[e("span",{style:{"font-family":"Consolas","vertical-align":"-1px"}},[e("span",{style:{"font-size":"18px"}},">"),e("span",{style:{margin:"0 4px 0 -4px","vertical-align":"2px"}},"_")]),e("span",null,"Console")],-1)),e("div",{ref_key:"consoleBodyRef",ref:u,class:"console-body"},[(m(!0),E(I,null,C(a.value,(c,N)=>(m(),E("pre",{key:N,class:F(["console-item",{"is-error":c.type==="error"},{"is-warn":c.type==="warn"}])},j(c.code),3))),128))],512)])])])]),_:1})}}}),pe=H(me,[["__scopeId","data-v-9faa1069"]]),be=A({name:"ExtensionMonaco",__name:"index",setup(v){return(d,l)=>{const r=L;return m(),x(r,null,{default:h(()=>[n(X),n(J),n(pe)]),_:1})}}});export{be as default};
