# Spectre 👻

Very minimal custom Javascript runtime built on top of V8.
It is just me playing around with the V8 while learning C++ and how Javascript truly works.

# Usage

(current configuration in Makefile targets <b>arm64</b> -> in particular <b>Apple M1</b>)

Current custom API:

```js
    print(something: String) // prints to stdout
    ghostify(filepath: String) // loads a file
    read(filepath: String) // reads the content of a file
    haunt(...) // profiler (IN PROGRESS - studying V8 memory management)
```

Two ways to try them out:

- ./spectre <FILENAME>

  <img src="https://i.ibb.co/487Kc6b/Schermata-2022-06-12-alle-15-22-33.png" width=400>

- ./spectre (to start the shell)

  <img src="https://i.ibb.co/SdPT0TT/Schermata-2022-06-12-alle-15-20-14.png" width=400>

# Build and Run

Clone V8 repo inside <b>./deps</b> following the official<a href="https://v8.dev/docs/source-code">docs</a>. (For Apple M1 - arm64, there's a build pipeline in the Makefile) - from project root directory:

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

To build d8 follow the instructions in the docs (for Apple M1 Makefile has a pipeline for it)

<a href="https://docs.google.com/document/d/1g8JFi8T_oAE_7uAri7Njtig7fKaPDfotU6huOa1alds/edit#heading=h.ub0khl7umpqe">V8 Api changelog</a>
