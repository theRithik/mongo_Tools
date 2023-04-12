mongoexport --db test --collection citId --type=csv --fields _id,name,country --out citId.csv
in csv type it gives _id as trouble so use json

////json

mongoexport --db test --collection citId --type=json --fields _id,name,country --out citId.json


mongoimport --db local --collection citId --file citId.json


/// mongodump -o path to dump

mongodump -o pathtodump --db dbname

mongodump -o pathtodump --db dbname --c colletionname

mongodump -o C:\Program Files\MongoDB\Server\4.4\bin --db testdb

mongorestore -o C:\Program Files\MongoDB\Server\4.4\bin

mongorestore pathofdump


bsondump --outfile=citId.json filepath were the bson file is located
bsondump --outfile=citId.json C:\Program Files\MongoDB\Server\4.4\data

////MONGOFILES
mongofiles -d gridfs put desktop/apis/june/diljits.mp4
