Arrancar npm en local per visualitzar web:
npm start

Per parar: 
npm stop o ctrl+c al terminal



Si hem fet canvis al resumeData.json podem fer un cp de l'arxiu cap al bucket:

aws s3 cp resumeData.json s3://sprat-curriculum/resumeData.json