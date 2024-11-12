* Crear entorn de proves per provar canvis:

Els primers cops que ho iniciem tenim que fer un npm install ja que al github no s'hi queden els arxius necesaris degut al .gitignore

Arrancar npm en local per visualitzar web:
npm start

Per parar: 
npm stop o ctrl+c al terminal




* Aplicar canvis:

Si hem fet canvis al resumeData.json podem fer un cp de l'arxiu cap al bucket:
aws s3 cp resumeData.json s3://sprat-curriculum/resumeData.json

Els canvis en la resta d'arxius ho apliquem al git i al fer commit es replicarà a l'app d'Amplify.
