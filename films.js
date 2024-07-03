const filmsTab = [
    {
        id: 1,
        title: "Nausicaä de la Vallée du Vent",
        original_title: "風の谷のナウシカ",
        image: "https://m.media-amazon.com/images/M/MV5BZTI3NmJmYTQtNDg4NS00M2VlLTgzZDAtZWIwZDcyOWY5YzIzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        description: "Sur une Terre ravagée par la folie des hommes durant les 'sept jours de feu', une poignée d'humains a réussi à survivre dans une vallée protégée par le vent. Ce peuple agricole est pourtant menacé par une forêt toxique qui ne cesse de prendre de l'ampleur, forêt où seuls survivent des insectes géants et mutants.",
        director: "Hayao Miyazaki",
        release_date: "1984",
        running_time: "116",
        people: "A voir",
    },
    {
        id: 2,
        title: "Le Château dans le cie",
        original_title: "天空の城ラピュタ",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
        description: " Qui est vraiment Sheeta, la petite fille porteuse d'un médaillon aux pouvoirs magiques qui suscite bien des convoitises ? Retenue prisonnière à bord d'un dirigeable, l'enfant affronte une bande de pirates de l'air dirigés par la très pittoresque Dora, puis une armée de militaires à la solde de Muska, un gentleman machiavélique trop poli pour être honnête. Réfugiée dans un village de mineurs où elle rencontre le jeune Pazu, Sheeta va découvrir le secret de ses origines. Et elle prouvera que l'histoire de Laputa, l'île merveilleuse flottant dans les airs, n'était pas une légende...",
        director: "Hayao Miyazaki",
        release_date: "1986",
        running_time: "124",
        people: [
        "https://ghibliapi.vercel.app/people/598f7048-74ff-41e0-92ef-87dc1ad980a9",
        "https://ghibliapi.vercel.app/people/fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
        "https://ghibliapi.vercel.app/people/3bc0b41e-3569-4d20-ae73-2da329bf0786",
        "https://ghibliapi.vercel.app/people/40c005ce-3725-4f15-8409-3e1b1b14b583",
        "https://ghibliapi.vercel.app/people/5c83c12a-62d5-4e92-8672-33ac76ae1fa0",
        "https://ghibliapi.vercel.app/people/e08880d0-6938-44f3-b179-81947e7873fc",
        "https://ghibliapi.vercel.app/people/2a1dad70-802a-459d-8cc2-4ebd8821248b"
        ],
    },
    {
        id: 3,
        title: "Le Tombeau des lucioles",
        original_title: "火垂るの墓",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qG3RYlIVpTYclR9TYIsy8p7m7AT.jpg",
        description: "Japon, été 1945. Les bombardiers américains arrosent Kobé de plusieurs milliers de tonnes de bombes incendiaires. Un jeune adolescent et sa petite sœur perdent leurs parents. Ils se réfugient dans leur famille proche mais cruelle. Leur quête désespérée d'un monde meilleur les amènera à traverser autant les ruines du Japon ensanglanté par la fin de cette guerre qu'à affronter l'indifférence et la cruauté des adultes...",
        director: "Isao Takahata",
        release_date: "1988",
        running_time: "89",
        people: [
        "https://ghibliapi.vercel.app/people/"
        ],
    },
    {
        id: 4,
        title: "Mon voisin Totoro",
        original_title: "となりのトトロ",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
        description: "Par un jour ensoleillé, Tatsuo Kusakabe emménage dans une maison de campagne non habitée depuis longtemps située près d'une forêt avec ses deux filles, Satsuki et Mei. Ces dernières, heureuses d'arriver dans leur nouvelle maison, découvrent que celle-ci semble hantée et habitée par des noiraudes, autrement appelées les susuwatari, qui une fois écrasées deviennent de la suie. Les filles font également la connaissance de Kanta, un enfant qui semble ne pas les apprécier et assez intimidé par rapport à leur venue. En attendant l'arrivée de leur mère, hospitalisée, les filles vont découvrir cette nouvelle vie à la campagne et feront la connaissance de leur nouveau voisin...",
        director: "Hayao Miyazaki",
        release_date: "1988",
        running_time: "86",
        people: [
        "https://ghibliapi.vercel.app/people/986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
        "https://ghibliapi.vercel.app/people/d5df3c04-f355-4038-833c-83bd3502b6b9",
        "https://ghibliapi.vercel.app/people/3031caa8-eb1a-41c6-ab93-dd091b541e11",
        "https://ghibliapi.vercel.app/people/87b68b97-3774-495b-bf80-495a5f3e672d",
        "https://ghibliapi.vercel.app/people/d39deecb-2bd0-4770-8b45-485f26e1381f",
        "https://ghibliapi.vercel.app/people/591524bc-04fe-4e60-8d61-2425e42ffb2a",
        "https://ghibliapi.vercel.app/people/c491755a-407d-4d6e-b58a-240ec78b5061",
        "https://ghibliapi.vercel.app/people/f467e18e-3694-409f-bdb3-be891ade1106",
        "https://ghibliapi.vercel.app/people/08ffbce4-7f94-476a-95bc-76d3c3969c19",
        "https://ghibliapi.vercel.app/people/0f8ef701-b4c7-4f15-bd15-368c7fe38d0a"
        ],
    },
    {
        id: 5,
        title: "Kiki la petite sorcière",
        original_title: "魔女の宅急便",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7nO5DUMnGUuXrA4r2h6ESOKQRrx.jpg",
        description: "Dans la famille de KIKI, on est sorcière de mère en fille. Mais pour avoir droit à ce titre, il faut partir faire son apprentissage dans une ville inconnue durant un an.Un soir, accompagnée de son chat JIJI, après avoir embrassé ses parents, KIKI enfourche le vieux balai de sa mère et met le cap vers le Sud, 'pour voir la mer'... Commence alors l'apprentissage de notre jeune et espiègle KIKI, qui décroche un emploi de livreuse chez une sympathique boulangère... ",
        director: "Hayao Miyazaki",
        release_date: "1989",
        running_time: "102",
        people: [
        "https://ghibliapi.vercel.app/people/2409052a-9029-4e8d-bfaf-70fd82c8e48d",
        "https://ghibliapi.vercel.app/people/7151abc6-1a9e-4e6a-9711-ddb50ea572ec",
        "https://ghibliapi.vercel.app/people/1c1a8054-3a34-4185-bfcf-e8011506f09a",
        "https://ghibliapi.vercel.app/people/bc838920-7849-43ea-bfb8-7d5e98dc20b6",
        "https://ghibliapi.vercel.app/people/33f5fea9-c21b-490b-90e0-c4051c372826",
        "https://ghibliapi.vercel.app/people/d1de1c0e-3fcd-4cef-94eb-bb95cc2314aa"
        ],
    },
    {
        id: 6,
        title: "Porco Rosso",
        original_title: "紅の豚",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/byKAndF6KQSDpGxp1mTr23jPbYp.jpg",
        description: "En Italie, à la fin des années 20. Refusant de devenir un héros de la nation, Marco, un pilote hors pair, accepte volontairement de subir un mauvais sort qui le transforme en cochon. A la même période, bon nombre de pilotes désoeuvrés ont formé un gang de pirates de l'air, pour mieux pouvoir détrousser les riches vacanciers amateurs de croisières nautiques.",
        director: "Hayao Miyazaki",
        release_date: "1992",
        running_time: "93",
        people: [
        "https://ghibliapi.vercel.app/people/"
        ],
    },
    {
        id: 7,
        title: "Pompoko",
        original_title: "平成狸合戦ぽんぽこ",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kowo9E1e1JcWLXj9cCvAOFZcy5n.jpg",
        movie_banner: "https://image.tmdb.org/t/p/original/jScPd0u0jeo66l8gwDl7W9hDUnM.jpg",
        description: "Dans une montagne située à Tama, au sud de Tokyo, les Tanukis mènent une vie tranquille au côté des paysans humains sans les ennuyer. Un jour, une dispute éclate entre deux clans autour de la nourriture qui se raréfie. La cause de cette pénurie est la déforestation de la montagne de Tama causée par les humains pour l’aménagement d’une nouvelle ville, suite à leur forte expansion démographique. Commence alors le combat des Tanukis pour protéger leur espace vital : ils décident de s’unir et de résister aux Hommes en utilisant leur pouvoir de métamorphose.",
        director: "Isao Takahata",
        release_date: "1994",
        running_time: "119",
        people: [
        "https://ghibliapi.vercel.app/people/"
        ],
    },
    {
        id: 8,
        title: "Princesse Mononoke",
        original_title: "もののけ姫",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jHWmNr7m544fJ8eItsfNk8fs2Ed.jpg",
        description: "Ashitaka, un jeune guerrier japonais, affronte un sanglier géant et furieux qui attaque son village. Il tue la bête, mais se retrouve atteint par un mal mystérieux. Sur le conseil des sages, il part vers l'Ouest, à la recherche de ce qui a transformé l'animal en démon. Au cours de son périple, il rencontre San, une jeune fille qui vit avec les loups. Ashitaka apprend que les humains sont à l'origine de tous ces maux, car ils détruisent la forêt, qu'ils exploitent pour alimenter leurs forges.",
        director: "Hayao Miyazaki",
        release_date: "1997",
        running_time: "134",
        people: [
        "https://ghibliapi.vercel.app/people/ba924631-068e-4436-b6de-f3283fa848f0",
        "https://ghibliapi.vercel.app/people/ebe40383-aad2-4208-90ab-698f00c581ab",
        "https://ghibliapi.vercel.app/people/030555b3-4c92-4fce-93fb-e70c3ae3df8b",
        "https://ghibliapi.vercel.app/people/ca568e87-4ce2-4afa-a6c5-51f4ae80a60b",
        "https://ghibliapi.vercel.app/people/e9356bb5-4d4a-4c93-aadc-c83e514bffe3",
        "https://ghibliapi.vercel.app/people/34277bec-7401-43fa-a00a-5aee64b45b08",
        "https://ghibliapi.vercel.app/people/91939012-90b9-46e5-a649-96b898073c82",
        "https://ghibliapi.vercel.app/people/20e3bd33-b35d-41e6-83a4-57ca7f028d38",
        "https://ghibliapi.vercel.app/people/8bccdc78-545b-49f4-a4c8-756163a38c91",
        "https://ghibliapi.vercel.app/people/116bfe1b-3ba8-4fa0-8f72-88537a493cb9"
        ],
    },
    {
        id: 9,
        title: "Le Voyage de Chihiro",
        original_title: "千と千尋の神隠し",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        description: "Au cours d'un voyage en voiture, la famille de Chihiro,10 ans, fait une halte dans un parc à thème qui semble abandonné. Ses parents découvrent des mets succulents dans un restaurant et commencent à manger. Ils se retrouvent alors transformés en cochons. Prise de panique, Chihiro s'enfuit et rencontre l'énigmatique Haku, qui lui explique le fonctionnement de l'univers dans lequel elle vient de pénétrer. Pour sauver ses parents, la fillette va devoir faire face à la terrible sorcière Yubaba.",
        director: "Hayao Miyazaki",
        release_date: "2001",
        running_time: "124",
        people: [
        "https://ghibliapi.vercel.app/people/8228751c-bdc1-4b8d-a6eb-ca0eb909568f"
        ],
    },
    {
        id: 10,
        title: "Le Royaume des chats",
        original_title: "猫の恩返し",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/avPMO5cnaGHgLaNiAIhy33WoQLm.jpg",
        description: "Une lycéenne nommée Haru sauve un chat qui a été renversé par un camion. Le chat s'avère être le prince du royaume des chats, et Haru se voit offrir de nombreux cadeaux en échange de son heroïsme, y compris une demande en mariage.",
        director: "Hiroyuki Morita",
        release_date: "2002",
        running_time: "75",
        people: [
        "https://ghibliapi.vercel.app/people/"
        ],
    },
    {
        id: 11,
        title: "Le Château ambulant",
        original_title: "ハウルの動く城",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/TkTPELv4kC3u1lkloush8skOjE.jpg",
        description: "Sophie, une orpheline de 18 ans, travaille dur dans la boutique de chapelier que lui a laissée son père. Un jour, en ville, elle croise Hauru, un magicien très séduisant, mais faible de caractère. Une sorcière, se méprenant sur leurs sentiments, change Sophie en une vieille femme de 90 ans. Désespérée, Sophie erre dans la campagne quand elle aperçoit un étrange château qui se déplace sur d'immenses pattes.",
        director: "Hayao Miyazaki",
        release_date: "2004",
        running_time: "119",
        people: [
        "https://ghibliapi.vercel.app/people/"
        ],
    },
    {
        id: 12,
        title: "Ponyo sur la falaise",
        original_title: "崖の上のポニョ",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mikKSEdk5kLhflWXbp4S5mmHsDo.jpg",
        description: "Le petit Sosuke, cinq ans, habite un village construit au sommet d'une falaise qui surplombe la mer intérieure. Un beau matin, alors qu'il joue sur la plage en contrebas, il découvre une petite fille poisson rouge nommée Ponyo, piégée dans un pot de confiture. Sosuke la sauve, et décide de la garder avec lui dans un seau. Ponyo est aussi fascinée par Sosuke que ce dernier l'est par elle.",
        director: "Hayao Miyazaki",
        release_date: "2008",
        running_time: "100",
        people: [
        "https://ghibliapi.vercel.app/people/"
        ],
    },
    {
        id: 13,
        title: "Le vent se lève",
        original_title: "風立ちぬ",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jfwSexzlIzaOgxP9A8bTA6t8YYb.jpg",
        description: "Au Japon, dans les années 1910, le jeune Jiro Horikoshi est fasciné par les réalisations du concepteur d'avions Giovanni Caproni. Dans ses rêves, il s'envole dans l'azur et le rencontre. Il voudrait devenir pilote, mais il sait que sa vue déficiente ne le lui permettra jamais. Le temps venu, il décide d'entreprendre des études en génie aéronautique et les réussit brillamment. En 1927, il est engagé dans une prestigieuse entreprise d'ingénierie.",
        director: "Hayao Miyazaki",
        release_date: "2013",
        running_time: "126",
        people: [
        "https://ghibliapi.vercel.app/people/"
        ],
    },
];

module.exports = filmsTab;