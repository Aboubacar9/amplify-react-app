const Home = () => {

    return <h1>Aboubacar stagiaire Danone,<BR></BR> Le stage présenté ici consiste à réaliser un prototype d’Amazon Web Services (AWS)  , programmé en REACT, avec une base de données CloudShell et NODE ainsi que quelques courtes parties de code en PHP.

    L’objectif est de réaliser un prototype permettant à un site web de se connecter avec un compte présent sur le site du prototype, tel que les méthodes de connexions utilisées par AmazonCoudFront, qui permet de se connecter sur de nombreux sites web via son compte utilisateurs premium (AWS).
    
    Le dialogue entre l’utilisateurs Route53 et le sites web se fera à travers une API, qui gèrera les demandes d’accès et autorisera ou non l’écriture dans la base de données.
    
    La première partie du stage consiste à réaliser un site web de Sandboxdigital de test, qui contiendra des pages, simulant donc le premier site web qui demandera aux utilisateurs de  s’identifier et de se connecter.
    Celui-ci possèdera sa propre base de données en CloudShell qui contiendra les données concernant les pages et aussi les utilisateurs qui, au lieu de passer par le 2ème site, préfère prendre un abonnement au 1er site, et ont donc directement accès à l’entièreté du site client ou utilisateurs Danone.
    
    La deuxième partie du stage consiste alors à réaliser le 2eme site qui se chargera des connexions mais aussi de savoir quel utilisateurs à s’abonner aux Services Cloud AWS, afin de pouvoir diffuser les bons articles aux bons utilisateurs.
    Celui-ci possède également une base de données CloudShell qui contient les utilisateurs, les transactions que les utilisateurs ont fait afin d’accéder à leurs pages.
    
    La dernière partie du stage consiste à faire l’API qui permettre aux 2 sites de travailler ensemble afin de permettre de lire des pages sur le premier site en passant par la connexion sur le deuxième.
   </h1>;
};

export default Home;