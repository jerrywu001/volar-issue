# volar issue with functional component

> open src/App.vue check the effect

## issue one description

> it is a basic functional component

When use volar latest version. Ts static checker not work.

![issue](./issue.png)

**but volar@0.40.x worked.**
![issue-ok](./issue-ok.png)

### functional component

> see src/components/List.tsx

## use it

> see src/App.vue


## issue two description

![sandpack ts type](./sandpack.png)

It worked with volar@0.40.x. Like that:

![ok 1](./sandpack-ok0.png)

![ok 2](./sandpack-ok.png)

**But latest volar not work.**

![fail](./sandpack-fail0.png)

![fail](./sandpack-fail.png)

