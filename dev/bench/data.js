window.BENCHMARK_DATA = {
  "lastUpdate": 1628931848298,
  "repoUrl": "https://github.com/deantvv/pyo3",
  "entries": {
    "pytest-bench": [
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "584de688c3bb52c47d4a7a25aaef389556645319",
          "message": "Merge pull request #1779 from indygreg/setter-handle-del\n\nmacros: raise AttributeError on property deletion requests",
          "timestamp": "2021-08-14T08:57:33+01:00",
          "tree_id": "58f18cc1c30c4144fd631fc6a008204b1301ecb5",
          "url": "https://github.com/deantvv/pyo3/commit/584de688c3bb52c47d4a7a25aaef389556645319"
        },
        "date": 1628931827722,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7521502.02788679,
            "unit": "iter/sec",
            "range": "stddev: 4.263680263719353e-7",
            "extra": "mean: 132.95216783727656 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9182231.804195289,
            "unit": "iter/sec",
            "range": "stddev: 8.974985062002447e-8",
            "extra": "mean: 108.90598509432915 nsec\nrounds: 72993"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3224757.180045791,
            "unit": "iter/sec",
            "range": "stddev: 3.0724896875837286e-7",
            "extra": "mean: 310.10086780729233 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2083460.1586914717,
            "unit": "iter/sec",
            "range": "stddev: 5.135649201975622e-7",
            "extra": "mean: 479.9707812162703 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2743211.7320365855,
            "unit": "iter/sec",
            "range": "stddev: 5.260759539189615e-7",
            "extra": "mean: 364.53620707494 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1730181.33661209,
            "unit": "iter/sec",
            "range": "stddev: 6.046646753736963e-7",
            "extra": "mean: 577.9740994999329 nsec\nrounds: 100000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1669199.7017004855,
            "unit": "iter/sec",
            "range": "stddev: 3.9218973397393056e-7",
            "extra": "mean: 599.0894911983729 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1319664.6821398651,
            "unit": "iter/sec",
            "range": "stddev: 7.625763890822159e-7",
            "extra": "mean: 757.768252446124 nsec\nrounds: 74075"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1783966.2095811865,
            "unit": "iter/sec",
            "range": "stddev: 9.562855661283858e-7",
            "extra": "mean: 560.548733843559 nsec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1550186.0694689788,
            "unit": "iter/sec",
            "range": "stddev: 7.662445753093664e-7",
            "extra": "mean: 645.0838513484987 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1691200.5763987184,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024290515080855406",
            "extra": "mean: 591.2959195705947 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4674384.702493931,
            "unit": "iter/sec",
            "range": "stddev: 1.062807954278291e-7",
            "extra": "mean: 213.93189984268324 nsec\nrounds: 48783"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 4083567.7206673855,
            "unit": "iter/sec",
            "range": "stddev: 7.243503900573381e-7",
            "extra": "mean: 244.8839026077326 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7432215.91131999,
            "unit": "iter/sec",
            "range": "stddev: 1.2723215382914264e-7",
            "extra": "mean: 134.54937422857975 nsec\nrounds: 68028"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "584de688c3bb52c47d4a7a25aaef389556645319",
          "message": "Merge pull request #1779 from indygreg/setter-handle-del\n\nmacros: raise AttributeError on property deletion requests",
          "timestamp": "2021-08-14T08:57:33+01:00",
          "tree_id": "58f18cc1c30c4144fd631fc6a008204b1301ecb5",
          "url": "https://github.com/deantvv/pyo3/commit/584de688c3bb52c47d4a7a25aaef389556645319"
        },
        "date": 1628931827722,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7521502.02788679,
            "unit": "iter/sec",
            "range": "stddev: 4.263680263719353e-7",
            "extra": "mean: 132.95216783727656 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9182231.804195289,
            "unit": "iter/sec",
            "range": "stddev: 8.974985062002447e-8",
            "extra": "mean: 108.90598509432915 nsec\nrounds: 72993"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3224757.180045791,
            "unit": "iter/sec",
            "range": "stddev: 3.0724896875837286e-7",
            "extra": "mean: 310.10086780729233 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2083460.1586914717,
            "unit": "iter/sec",
            "range": "stddev: 5.135649201975622e-7",
            "extra": "mean: 479.9707812162703 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2743211.7320365855,
            "unit": "iter/sec",
            "range": "stddev: 5.260759539189615e-7",
            "extra": "mean: 364.53620707494 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1730181.33661209,
            "unit": "iter/sec",
            "range": "stddev: 6.046646753736963e-7",
            "extra": "mean: 577.9740994999329 nsec\nrounds: 100000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1669199.7017004855,
            "unit": "iter/sec",
            "range": "stddev: 3.9218973397393056e-7",
            "extra": "mean: 599.0894911983729 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1319664.6821398651,
            "unit": "iter/sec",
            "range": "stddev: 7.625763890822159e-7",
            "extra": "mean: 757.768252446124 nsec\nrounds: 74075"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1783966.2095811865,
            "unit": "iter/sec",
            "range": "stddev: 9.562855661283858e-7",
            "extra": "mean: 560.548733843559 nsec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1550186.0694689788,
            "unit": "iter/sec",
            "range": "stddev: 7.662445753093664e-7",
            "extra": "mean: 645.0838513484987 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1691200.5763987184,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024290515080855406",
            "extra": "mean: 591.2959195705947 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4674384.702493931,
            "unit": "iter/sec",
            "range": "stddev: 1.062807954278291e-7",
            "extra": "mean: 213.93189984268324 nsec\nrounds: 48783"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 4083567.7206673855,
            "unit": "iter/sec",
            "range": "stddev: 7.243503900573381e-7",
            "extra": "mean: 244.8839026077326 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7432215.91131999,
            "unit": "iter/sec",
            "range": "stddev: 1.2723215382914264e-7",
            "extra": "mean: 134.54937422857975 nsec\nrounds: 68028"
          }
        ]
      }
    ]
  }
}