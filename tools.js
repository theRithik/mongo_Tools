mongoexport --db test --collection citId --type=csv --fields _id,name,country --out citId.csv
in csv type it gives _id as trouble so use json

////json

mongoexport --db test --collection citId --type=json --fields _id,name,country --out citId.json


mongoimport --db local --collection citId --file citId.json

