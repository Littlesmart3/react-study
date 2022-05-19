#!/usr/bin/env sh

# 双引号才会转义
if [ "$1" != 'dev' ] && [ "$1" != 'test' ] && [ "$1" != 'prod' ]; then
  echo "[$1]环境变量为空或者不在取值范围"
  exit 0
fi

# 指定运行端口
PORT=6800

cross-env NODE_ENV=$1 PORT=$PORT vite

# 并行执行两个命令
# concurrently -n=vue,ele -c=green,blue "PORT=$PORT vite --force --mode $1" "PORT=$PORT node -r ts-node/register script/build-main --mode=$1 --watch"
