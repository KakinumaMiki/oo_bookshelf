#!/bin/bash
for file in ./code*; do
  echo "=== {$file}を実行します =========="
  node $file
  echo "=== {$file}を実行しました =========="
done