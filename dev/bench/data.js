window.BENCHMARK_DATA = {
  "lastUpdate": 1631365237575,
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
          "distinct": true,
          "id": "0c5ac220de0227a209b2acb2111731ba99db0548",
          "message": "Merge pull request #1863 from davidhewitt/more-conversions\n\nconversions: move more features inside the module",
          "timestamp": "2021-09-07T22:19:46+01:00",
          "tree_id": "0457eeeb2f5109a6c8d3a2a5e951616adfd45101",
          "url": "https://github.com/deantvv/pyo3/commit/0c5ac220de0227a209b2acb2111731ba99db0548"
        },
        "date": 1631365218775,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 6900187.546155189,
            "unit": "iter/sec",
            "range": "stddev: 4.3448114177625955e-8",
            "extra": "mean: 144.92359712137377 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8479696.090298865,
            "unit": "iter/sec",
            "range": "stddev: 7.633697011922996e-9",
            "extra": "mean: 117.92875468074008 nsec\nrounds: 80646"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2882221.7298405906,
            "unit": "iter/sec",
            "range": "stddev: 4.3058622748413914e-8",
            "extra": "mean: 346.95456968021966 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1924335.207507113,
            "unit": "iter/sec",
            "range": "stddev: 5.933539385903287e-8",
            "extra": "mean: 519.659982366314 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2708396.6592188836,
            "unit": "iter/sec",
            "range": "stddev: 3.051565230550918e-8",
            "extra": "mean: 369.2221361284064 nsec\nrounds: 131579"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1737082.1405600605,
            "unit": "iter/sec",
            "range": "stddev: 8.261049669843536e-8",
            "extra": "mean: 575.6780158237755 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1628721.5620861372,
            "unit": "iter/sec",
            "range": "stddev: 3.858540550686918e-8",
            "extra": "mean: 613.9784867334338 nsec\nrounds: 81301"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1416710.9304039597,
            "unit": "iter/sec",
            "range": "stddev: 4.580492893671164e-8",
            "extra": "mean: 705.8602983423107 nsec\nrounds: 71429"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1620582.9086906668,
            "unit": "iter/sec",
            "range": "stddev: 4.1431162503942994e-8",
            "extra": "mean: 617.0619192867078 nsec\nrounds: 81301"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1493410.342103116,
            "unit": "iter/sec",
            "range": "stddev: 4.153847180154961e-8",
            "extra": "mean: 669.6083265312417 nsec\nrounds: 73530"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2105710.4444574076,
            "unit": "iter/sec",
            "range": "stddev: 5.1008819157123e-8",
            "extra": "mean: 474.8991024065132 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4234720.34581465,
            "unit": "iter/sec",
            "range": "stddev: 2.2772061768311922e-8",
            "extra": "mean: 236.14310233889054 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5384694.154885985,
            "unit": "iter/sec",
            "range": "stddev: 1.854257849764174e-8",
            "extra": "mean: 185.71156898340473 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6836168.778105471,
            "unit": "iter/sec",
            "range": "stddev: 8.721167945098785e-9",
            "extra": "mean: 146.28076521495217 nsec\nrounds: 64936"
          }
        ]
      }
    ],
    "pyo3-bench": [
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
        "date": 1628932295334,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 96440,
            "range": "± 5943",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 257412,
            "range": "± 18045",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2890382,
            "range": "± 168738",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5681922,
            "range": "± 418487",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3519856,
            "range": "± 224553",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8521905,
            "range": "± 813886",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14008068,
            "range": "± 1128138",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6978166,
            "range": "± 699681",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 116,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 115,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1662162,
            "range": "± 83899",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1679341,
            "range": "± 102331",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 799588,
            "range": "± 64950",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4992,
            "range": "± 21721",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3911,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1833755,
            "range": "± 203459",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7407833,
            "range": "± 562602",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11246823,
            "range": "± 917158",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5028275,
            "range": "± 317900",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 957741,
            "range": "± 88325",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1722052,
            "range": "± 134143",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 519380,
            "range": "± 52181",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}