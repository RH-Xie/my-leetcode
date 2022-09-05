# my-leetcode
Leetcode local files for backup. Take notes on smart solutions and keep optimizing codes before good enough.

Files fetched from Leetcode CN, written in `TypeScript`. More languages'll be tried if possible.

## Usage

Take VSCode for example. Install [leetcode extension](https://marketplace.visualstudio.com/items?itemName=LeetCode.vscode-leetcode) for fetching questions.

With two terminals, testing will be more efficient.
```powershell
# One for watching files changes.
tsc -w
```
`.js` will be updated when file changes.
```powershell
# The other for running codes locally, require node.js installed.
node 1.两数之和.js
```
Run codes locally when test input not in `Test examples`.