# nodejs-process-big-file.

## CLI.

### Process big file

1. Download and extract the file https://drive.google.com/file/d/1ZQZQB5uyl_O3iK2O3GX4f_x0urrvNMJS/view?usp=sharing to the source code folder. The file content should be under gitignore.
2. Create a script what will try to read the file content to memory. Write to readme.md stack trace and what error you had.

### stack trace
With code:
```javascript
const data = fs.readFileSync('free_company_dataset.csv', 'utf-8')

console.log(data.length)
```
Output is:
```shell
node:buffer:599
    slice: (buf, start, end) => buf.utf8Slice(start, end),
                                    ^

Error: Cannot create a string longer than 0x1fffffe8 characters
    at Object.slice (node:buffer:599:37)
    at Buffer.toString (node:buffer:818:14)
    at Object.readFileSync (node:fs:512:41)
    at Object.<anonymous> (C:\workspace\newtech\nodejs\foxminded\1-6-process-big-file\main.js:5:17)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
    at Module.load (node:internal/modules/cjs/loader:1037:32)
    at Module._load (node:internal/modules/cjs/loader:878:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47 {
  code: 'ERR_STRING_TOO_LONG'
}

Node.js v18.12.1

Process finished with exit code 1
```
With code:
```javascript
const data = fs.readFileSync('free_company_dataset.csv')

console.log(data.length)
```
Output is:
```shell
1486146955

Process finished with exit code 0
```
