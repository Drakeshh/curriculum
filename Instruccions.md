Executar web per visualitzar:
npm start


- Exemple amb l'arxiu resumeData.json, ho podriem fer amb la folder entera

Fem un cp del arxiu resumeData.json cap al escriptori. Seguidament executem la següent comanda per copiar l'arxiu al bucket:

aws s3 cp resumeData.json s3://sprat-curriculum/resumeData.json upload: ./resumeData.json to s3://sprat-curriculum/resumeData.json