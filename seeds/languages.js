
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries.
    knex('languages').del(),

    // Inserts seed entries.
    // These are the languages supported by Highlight.js.
    knex('languages').insert({
      name: '1C',
      code: '1c'
    }),
    knex('languages').insert({
      name: 'ActionScript',
      code: 'actionscript'
    }),
    knex('languages').insert({
      name: 'Apache',
      code: 'apache'
    }),
    knex('languages').insert({
      name: 'AppleScript',
      code: 'applescript'
    }),
    knex('languages').insert({
      name: 'ARM Assembly',
      code: 'armasm'
    }),
    knex('languages').insert({
      name: 'AsciiDoc',
      code: 'asciidoc'
    }),
    knex('languages').insert({
      name: 'AspectJ',
      code: 'aspectj'
    }),
    knex('languages').insert({
      name: 'AutoHotkey',
      code: 'autohotkey'
    }),
    knex('languages').insert({
      name: 'AVR Assembler',
      code: 'avrasm'
    }),
    knex('languages').insert({
      name: 'Axapta',
      code: 'axapta'
    }),
    knex('languages').insert({
      name: 'Bash',
      code: 'bash'
    }),
    knex('languages').insert({
      name: 'Brainfuck',
      code: 'brainfuck'
    }),
    knex('languages').insert({
      name: 'C/AL',
      code: 'cal'
    }),
    knex('languages').insert({
      name: 'Cap’n Proto',
      code: 'capnproto'
    }),
    knex('languages').insert({
      name: 'Ceylon',
      code: 'ceylon'
    }),
    knex('languages').insert({
      name: 'Clojure',
      code: 'clojure'
    }),
    knex('languages').insert({
      name: 'Clojure REPL',
      code: 'clojure-repl'
    }),
    knex('languages').insert({
      name: 'CMake',
      code: 'cmake'
    }),
    knex('languages').insert({
      name: 'CoffeeScript',
      code: 'coffeescript'
    }),
    knex('languages').insert({
      name: 'C++',
      code: 'cpp'
    }),
    knex('languages').insert({
      name: 'C#',
      code: 'cs'
    }),
    knex('languages').insert({
      name: 'CSS',
      code: 'css'
    }),
    knex('languages').insert({
      name: 'D',
      code: 'd'
    }),
    knex('languages').insert({
      name: 'Dart',
      code: 'dart'
    }),
    knex('languages').insert({
      name: 'Delphi',
      code: 'delphi'
    }),
    knex('languages').insert({
      name: 'Diff',
      code: 'diff'
    }),
    knex('languages').insert({
      name: 'Django',
      code: 'django'
    }),
    knex('languages').insert({
      name: 'DNS Zone file',
      code: 'dns'
    }),
    knex('languages').insert({
      name: 'Dockerfile',
      code: 'dockerfile'
    }),
    knex('languages').insert({
      name: 'DOS .bat',
      code: 'dos'
    }),
    knex('languages').insert({
      name: 'Dust',
      code: 'dust'
    }),
    knex('languages').insert({
      name: 'Elixir',
      code: 'elixir'
    }),
    knex('languages').insert({
      name: 'ERB (Embedded Ruby)',
      code: 'erb'
    }),
    knex('languages').insert({
      name: 'Erlang',
      code: 'erlang'
    }),
    knex('languages').insert({
      name: 'Erlang REPL',
      code: 'erlang-repl'
    }),
    knex('languages').insert({
      name: 'FIX',
      code: 'fix'
    }),
    knex('languages').insert({
      name: 'Fortran',
      code: 'fortran'
    }),
    knex('languages').insert({
      name: 'F#',
      code: 'fsharp'
    }),
    knex('languages').insert({
      name: 'G-code (ISO 6983)',
      code: 'gocode'
    }),
    knex('languages').insert({
      name: 'Gherkin',
      code: 'gherkin'
    }),
    knex('languages').insert({
      name: 'GLSL',
      code: 'glsl'
    }),
    knex('languages').insert({
      name: 'Go',
      code: 'go'
    }),
    knex('languages').insert({
      name: 'Gradle',
      code: 'gradle'
    }),
    knex('languages').insert({
      name: 'Groovy',
      code: 'groovy'
    }),
    knex('languages').insert({
      name: 'Haml',
      code: 'haml'
    }),
    knex('languages').insert({
      name: 'Handlebars',
      code: 'handlebars'
    }),
    knex('languages').insert({
      name: 'Haskell',
      code: 'haskell'
    }),
    knex('languages').insert({
      name: 'Haxe',
      code: 'haxe'
    }),
    knex('languages').insert({
      name: 'HTTP',
      code: 'http'
    }),
    knex('languages').insert({
      name: 'Inform 7',
      code: 'inform7'
    }),
    knex('languages').insert({
      name: 'Ini',
      code: 'ini'
    }),
    knex('languages').insert({
      name: 'Java',
      code: 'java'
    }),
    knex('languages').insert({
      name: 'JavaScript',
      code: 'javascript'
    }),
    knex('languages').insert({
      name: 'JSON',
      code: 'json'
    }),
    knex('languages').insert({
      name: 'Julia',
      code: 'julia'
    }),
    knex('languages').insert({
      name: 'Kotlin',
      code: 'kotlin'
    }),
    knex('languages').insert({
      name: 'Lasso',
      code: 'lasso'
    }),
    knex('languages').insert({
      name: 'Less',
      code: 'less'
    }),
    knex('languages').insert({
      name: 'Lisp',
      code: 'lisp'
    }),
    knex('languages').insert({
      name: 'LiveCode',
      code: 'livecodeserver'
    }),
    knex('languages').insert({
      name: 'LiveScript',
      code: 'livescript'
    }),
    knex('languages').insert({
      name: 'Lua',
      code: 'lua'
    }),
    knex('languages').insert({
      name: 'Makefile',
      code: 'makefile'
    }),
    knex('languages').insert({
      name: 'Markdown',
      code: 'markdown'
    }),
    knex('languages').insert({
      name: 'Mathematica',
      code: 'mathematica'
    }),
    knex('languages').insert({
      name: 'Matlab',
      code: 'matlab'
    }),
    knex('languages').insert({
      name: 'MEL',
      code: 'mel'
    }),
    knex('languages').insert({
      name: 'Mercury',
      code: 'mercury'
    }),
    knex('languages').insert({
      name: 'Mizar',
      code: 'mizar'
    }),
    knex('languages').insert({
      name: 'Monkey',
      code: 'monkey'
    }),
    knex('languages').insert({
      name: 'Nginx',
      code: 'nginx'
    }),
    knex('languages').insert({
      name: 'Nimrod',
      code: 'nimrod'
    }),
    knex('languages').insert({
      name: 'Nix',
      code: 'nix'
    }),
    knex('languages').insert({
      name: 'NSIS',
      code: 'nsis'
    }),
    knex('languages').insert({
      name: 'Objective C',
      code: 'objectivec'
    }),
    knex('languages').insert({
      name: 'OCaml',
      code: 'ocaml'
    }),
    knex('languages').insert({
      name: 'OpenSCAD',
      code: 'openscad'
    }),
    knex('languages').insert({
      name: 'Oxygene',
      code: 'oxygene'
    }),
    knex('languages').insert({
      name: 'Parser3',
      code: 'parser3'
    }),
    knex('languages').insert({
      name: 'Perl',
      code: 'perl'
    }),
    knex('languages').insert({
      name: 'pf',
      code: 'pf'
    }),
    knex('languages').insert({
      name: 'PHP',
      code: 'php'
    }),
    knex('languages').insert({
      name: 'PowerShell',
      code: 'powershell'
    }),
    knex('languages').insert({
      name: 'Processing',
      code: 'processing'
    }),
    knex('languages').insert({
      name: 'Python profile',
      code: 'profile'
    }),
    knex('languages').insert({
      name: 'Prolog',
      code: 'prolog'
    }),
    knex('languages').insert({
      name: 'Protocol Buffers',
      code: 'protobuf'
    }),
    knex('languages').insert({
      name: 'Puppet',
      code: 'puppet'
    }),
    knex('languages').insert({
      name: 'Python',
      code: 'python'
    }),
    knex('languages').insert({
      name: 'Q',
      code: 'q'
    }),
    knex('languages').insert({
      name: 'R',
      code: 'r'
    }),
    knex('languages').insert({
      name: 'RenderMan RIB',
      code: 'rib'
    }),
    knex('languages').insert({
      name: 'Roboconf',
      code: 'roboconf'
    }),
    knex('languages').insert({
      name: 'RenderMan RSL',
      code: 'rsl'
    }),
    knex('languages').insert({
      name: 'Ruby',
      code: 'ruby'
    }),
    knex('languages').insert({
      name: 'Oracle Rules Language',
      code: 'ruleslanguage'
    }),
    knex('languages').insert({
      name: 'Rust',
      code: 'rust'
    }),
    knex('languages').insert({
      name: 'Scala',
      code: 'scala'
    }),
    knex('languages').insert({
      name: 'Scheme',
      code: 'scheme'
    }),
    knex('languages').insert({
      name: 'Scilab',
      code: 'scilab'
    }),
    knex('languages').insert({
      name: 'SCSS',
      code: 'scss'
    }),
    knex('languages').insert({
      name: 'Smali',
      code: 'smali'
    }),
    knex('languages').insert({
      name: 'Smalltalk',
      code: 'smalltalk'
    }),
    knex('languages').insert({
      name: 'SML',
      code: 'sml'
    }),
    knex('languages').insert({
      name: 'SQL',
      code: 'sql'
    }),
    knex('languages').insert({
      name: 'Stata',
      code: 'stata'
    }),
    knex('languages').insert({
      name: 'STEP Part 21 (ISO 10303-21)',
      code: 'step21'
    }),
    knex('languages').insert({
      name: 'Stylus',
      code: 'stylus'
    }),
    knex('languages').insert({
      name: 'Swift',
      code: 'swift'
    }),
    knex('languages').insert({
      name: 'Tcl',
      code: 'tcl'
    }),
    knex('languages').insert({
      name: 'TeX',
      code: 'tex'
    }),
    knex('languages').insert({
      name: 'Thrift',
      code: 'thrift'
    }),
    knex('languages').insert({
      name: 'TP',
      code: 'tp'
    }),
    knex('languages').insert({
      name: 'Twig',
      code: 'twig'
    }),
    knex('languages').insert({
      name: 'TypeScript',
      code: 'typescript'
    }),
    knex('languages').insert({
      name: 'Vala',
      code: 'vala'
    }),
    knex('languages').insert({
      name: 'VB.NET',
      code: 'vbnet'
    }),
    knex('languages').insert({
      name: 'VBScript in HTML',
      code: 'vbscript-html'
    }),
    knex('languages').insert({
      name: 'VBScript',
      code: 'vbscript'
    }),
    knex('languages').insert({
      name: 'Verilog',
      code: 'verilog'
    }),
    knex('languages').insert({
      name: 'VHDL',
      code: 'vhdl'
    }),
    knex('languages').insert({
      name: 'Vim Script',
      code: 'vim'
    }),
    knex('languages').insert({
      name: 'Intel x86 Assembly',
      code: 'x86asm'
    }),
    knex('languages').insert({
      name: 'XL',
      code: 'xl'
    }),
    knex('languages').insert({
      name: 'HTML, XML',
      code: 'xml'
    })
  );
};
