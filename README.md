# Spectre 👻

Very minimal custom Javascript runtime built on top of V8.

# Usage

(current configuration in Makefile targets <b>arm64</b> -> in particular <b>Apple M1</b>)

Current custom API:

```js
    print(something: String) // prints to stdout
    ghostify(filepath: String) // loads a file
    read(filepath: String) // reads the content of a file
```

Two ways to try them out:

- ./spectre <FILENAME>

  <img src="https://i.ibb.co/5M3M7Dk/Schermata-2022-06-11-alle-02-13-17.png" width=400>

- ./spectre (to start the shell)

  <img src="https://i.ibb.co/3yp1Yhz/Schermata-2022-06-11-alle-02-19-55.png" width=400>

# Build and Run

On Apple M1 just clone V8 repo inside <b>./deps</b> (docs: <a href="https://v8.dev/docs/source-code">Checking out the V8 source code</a>) and from project root directory:

```bash
# Build v8 from source (Apple M1 - arm64)
$ make v8
# Build Specre shell
$ make spectre
# Launch
$ make launch
# Play with javascript files
$ make launch-test
```

<a href="https://docs.google.com/document/d/1g8JFi8T_oAE_7uAri7Njtig7fKaPDfotU6huOa1alds/edit#heading=h.ub0khl7umpqe">V8 Api changelog</a>
