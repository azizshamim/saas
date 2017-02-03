#!/usr/bin/env bash

echo "Testing the synchronocity of these calls"

echo "5 calls, should return > 5 seconds"
time for delay in 1000 1000 1000 1000 2000;do curl -X POST -d "{ \"foo\": \"$delay\" }" -H "Content-Type: application/json" http://localhost:3000/sleep/$delay; done

echo "5 calls, should return < 5 seconds"
time echo -e "1000\n1000\n1000\n3000\n3000" | xargs -P 5 -I delay curl -X POST -d "{ \"foo\": \"delay\" }" -H "Content-Type: application/json" http://localhost:3000/sleep/delay
