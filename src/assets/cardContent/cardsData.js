const myStuff = [
    {
        title: "Lucy",
        genre: "Action",
        seasons: "",
        tomato: "66%",
        released: "2014",
        img: "https://imageservice.disco.peacocktv.com/uuid/8bb629c4-828b-34f4-b608-207d7b1ab062/TITLE_ART_16_9/400?language=eng&territory=US&proposition=NBCUOTT&version=589378f2-619a-3bd3-ae65-d694194442b1",
    },
    {
        title: "The Office: Superfan Episodes",
        genre: "Comedy",
        seasons: "6 Seasons",
        tomato: "",
        released: "",
        img: "https://imageservice.disco.peacocktv.com/pcms/c84c0346-9c16-11ed-a186-2faeccdc9245/LAND_16_9/400?territory=US&proposition=NBCUOTT&language=eng",
    },
    {
        title: "The 40-Year-Old Virgin ",
        genre: "Comedy",
        seasons: "",
        tomato: "",
        released: "2005",
        img: "https://imageservice.disco.peacocktv.com/uuid/b0729545-6a9a-336b-847e-50d5272c8e01/TITLE_ART_16_9/400?language=eng&territory=US&proposition=NBCUOTT&version=caf01100-27c0-3604-84b2-93330b5f1201",
    },
    {
        title: "Elysium",
        genre: "Sci-Fi",
        seasons: "",
        tomato: "",
        released: "2013",
        img: "https://imageservice.disco.peacocktv.com/uuid/d131a322-1421-3c5e-aeb7-74509720c5f6/TITLE_ART_16_9/400?language=eng&territory=US&version=9c4b4598-d911-331a-b476-372763c04110",
    },
    {
        title: "I, Robot",
        genre: "Sci-Fi",
        seasons: "",
        tomato: "",
        released: "2004",
        img: "https://imageservice.disco.peacocktv.com/uuid/52739ae8-e519-33bd-8bed-6491dcc3e565/TITLE_ART_16_9/400?language=eng&territory=US&proposition=NBCUOTT&version=6a1a3a03-f05c-3577-a21a-37a29d70f1af",
    },
];

const peacockPicks = [
    {
        title: "America's Got Talent: All Stars",
        genre: "Reality",
        seasons: "1 Season",
        tomato: "",
        img: "https://imageservice.disco.peacocktv.com/pcms/674e52a8-8b8e-11ed-b90f-f7686db951f0/LAND_16_9/400?territory=US&proposition=NBCUOTT&language=eng",
    },
    {
        title: "Yellowstone",
        genre: "Drama",
        seasons: "4 Seasons",
        tomato: "84%",
        img: "https://imageservice.disco.peacocktv.com/uuid/51aab181-4250-3334-8c75-fe55da453fe9/TITLE_ART_16_9/400?language=eng&territory=US&proposition=NBCUOTT&version=781cc818-cbc1-317f-a786-1e908dd9b491&output-format=webp",
    },
    {
        title: "The Traitors",
        genre: "Competition",
        seasons: "1 Season",
        tomato: "95%",
        img: "https://imageservice.disco.peacocktv.com/uuid/d31d5fdb-ec8d-394b-9ab3-6cf3418795d0/TITLE_ART_16_9/400?language=eng&territory=US&proposition=NBCUOTT&version=05ce5d43-04db-3196-987f-b414a5d5e52c",
    },
    {
        title: "Chucky",
        genre: "Horror",
        seasons: "1 Season",
        tomato: "91%",
        img: "https://imageservice.disco.peacocktv.com/uuid/f2c74a87-d049-3e74-b01b-8e09660cc838/TITLE_ART_16_9/400?language=eng&territory=US&proposition=NBCUOTT&version=3d40b6bc-1a1c-3e3b-b876-690c510e2713&personaid=e2ce4e1482c298af5c91a780ca4d6511cade82942b7b16265f7fe7e266b9d1e6&userid=1dcb0d2fbd343c905e34deed51364eea518cc9d1&contentid=&pageidentifier=browse&rail=peacock-picks&device=computer/pc",
    },
    {
        title: "Resident Alien",
        genre: "Sci-Fi, Comedy",
        seasons: "2 Seasons",
        tomato: "94%",
        img: "https://imageservice.disco.peacocktv.com/pcms/93b2f39a-197d-11ed-a515-b781d0b2cb15/LAND_16_9/400?territory=US&proposition=NBCUOTT&language=eng&personaid=e2ce4e1482c298af5c91a780ca4d6511cade82942b7b16265f7fe7e266b9d1e6&userid=1dcb0d2fbd343c905e34deed51364eea518cc9d1&contentid=&pageidentifier=browse&rail=peacock-picks&device=computer/pc",
    },
    {
        title: "Killer Couples",
        genre: "Documentary",
        seasons: "16 Seasons",
        tomato: "",
        img: "https://imageservice.disco.peacocktv.com/uuid/faf1d521-1e0a-311e-a89b-b541a200f247/TITLE_ART_16_9/400?language=eng&territory=US&proposition=NBCUOTT&version=68fbafbe-898a-3a48-af15-48b2c0ccd7b8&personaid=e2ce4e1482c298af5c91a780ca4d6511cade82942b7b16265f7fe7e266b9d1e6&userid=1dcb0d2fbd343c905e34deed51364eea518cc9d1&contentid=&pageidentifier=browse&rail=peacock-picks&device=computer/pc",
    },
    {
        title: "The Resort",
        genre: "Comedy-Drama",
        seasons: "1 Season",
        tomato: "87%",
        img: "https://imageservice.disco.peacocktv.com/pcms/a8eb9606-0e77-11ed-be98-c35c91ce68b5/LAND_16_9/400?territory=US&proposition=NBCUOTT&language=eng&personaid=e2ce4e1482c298af5c91a780ca4d6511cade82942b7b16265f7fe7e266b9d1e6&userid=1dcb0d2fbd343c905e34deed51364eea518cc9d1&contentid=&pageidentifier=browse&rail=peacock-picks&device=computer/pc",
    },
    {
        title: "That 70's Show",
        genre: "Comedy",
        seasons: "8 Seasons",
        tomato: "91%",
        img: "https://imageservice.disco.peacocktv.com/uuid/0bfffeb2-cda9-36cf-a442-a59ada372ce1/TITLE_ART_16_9/400?language=eng&territory=US&proposition=NBCUOTT&version=aeb89e98-719e-30b5-8a94-f3e11ac1fd30",
    },
];

const forYou = [
    {
        title: "The Office",
        genre: "Comedy",
        seasons: "9 Seasons",
        tomato: "81%",
        img: "https://imageservice.disco.peacocktv.com/pcms/7da0ae1a-5904-11ec-8988-d33b4336515c/AGG_SOURCE/400?territory=US&proposition=NBCUOTT&language=eng",
    },
    {
        title: "Parks and Recreation",
        genre: "Comedy",
        seasons: "7 Seasons",
        tomato: "93%",
        img: "https://imageservice.disco.peacocktv.com/uuid/1df4e4cf-7617-3117-9e2a-62ffbf833d5c/TITLE_ART_16_9/400?language=eng&territory=US&proposition=NBCUOTT&version=40ee2f4a-1871-3a3d-95c4-38b95b40a494",
    },
    {
        title: "Step Brothers",
        genre: "Comedy",
        seasons: "",
        released: "2008",
        tomato: "55%",
        img: "https://imageservice.disco.peacocktv.com/uuid/a9ab19b6-2fcd-361f-9a89-c336a6cbc2f1/TITLE_ART_16_9/400?language=eng&territory=US&proposition=NBCUOTT&version=82487a19-a7ad-3935-819c-3566cf4d1666",
    },
    {
        title: "Violent Night",
        genre: "Action",
        seasons: "",
        released: "2022",
        tomato: "73%",
        img: "https://imageservice.disco.peacocktv.com/pcms/6b000216-8c6a-11ed-b760-4740678a9e22/LAND_16_9/400?territory=US&proposition=NBCUOTT&language=eng",
    },
    {
        title: "Lucy",
        genre: "Action",
        seasons: "",
        tomato: "66%",
        img: "https://imageservice.disco.peacocktv.com/uuid/8bb629c4-828b-34f4-b608-207d7b1ab062/TITLE_ART_16_9/400?language=eng&territory=US&proposition=NBCUOTT&version=589378f2-619a-3bd3-ae65-d694194442b1",
    },
    {
        title: "That 70's Show",
        genre: "Comedy",
        seasons: "8 Seasons",
        tomato: "91%",
        img: "https://imageservice.disco.peacocktv.com/uuid/0bfffeb2-cda9-36cf-a442-a59ada372ce1/TITLE_ART_16_9/400?language=eng&territory=US&proposition=NBCUOTT&version=aeb89e98-719e-30b5-8a94-f3e11ac1fd30",
    },
    {
        title: "Yellowstone",
        genre: "Drama",
        seasons: "4 Seasons",
        tomato: "84%",
        img: "https://imageservice.disco.peacocktv.com/uuid/51aab181-4250-3334-8c75-fe55da453fe9/TITLE_ART_16_9/400?language=eng&territory=US&proposition=NBCUOTT&version=781cc818-cbc1-317f-a786-1e908dd9b491&output-format=webp",
    },
];

const justAdded = [
    {
        title: "Accident, Suicide or Murder",
        genre: "Documentary",
        seasons: "1 Season",
        tomato: "",
        released: "",
        img: "https://imageservice.disco.peacocktv.com/uuid/a7a0c3cb-918d-3f30-943e-737dde1cdb6f/TITLE_ART_16_9/400?language=eng&territory=US&version=aa740f49-a470-373c-8645-23aaee03e16b",
    },
    {
        title: "The Vow",
        genre: "Romance",
        seasons: "",
        tomato: "",
        released: "2012",
        img: "https://imageservice.disco.peacocktv.com/uuid/a9df0d32-7a26-3d9f-a032-5837a3418bd2/TITLE_ART_16_9/400?language=eng&territory=US&proposition=NBCUOTT&version=f1d85e43-867d-31dd-aeda-2ce44f63de0a",
    },
    {
        title: "Elysium",
        genre: "Sci-Fi",
        seasons: "",
        tomato: "",
        released: "2013",
        img: "https://imageservice.disco.peacocktv.com/uuid/d131a322-1421-3c5e-aeb7-74509720c5f6/TITLE_ART_16_9/400?language=eng&territory=US&version=9c4b4598-d911-331a-b476-372763c04110",
    },
    {
        title: "Identity Thief",
        genre: "Comedy",
        seasons: "",
        tomato: "",
        released: "2013",
        img: "https://imageservice.disco.peacocktv.com/uuid/91e49de8-1455-331a-bbd1-43c3181affb8/TITLE_ART_16_9/400?language=eng&territory=US&version=e076f00d-0bd2-3527-9015-1c84ed1f6693",
    },
    {
        title: "47 Ronin",
        genre: "Action & Adventure",
        seasons: "",
        tomato: "",
        released: "2013",
        img: "https://imageservice.disco.peacocktv.com/uuid/97eea180-84de-3cc8-beef-153c9270d621/TITLE_ART_16_9/400?language=eng&territory=US&proposition=NBCUOTT&version=23161f7d-f108-3af3-968f-59d99e81d9cd",
    },
    {
        title: "I, Robot",
        genre: "Sci-Fi",
        seasons: "",
        tomato: "",
        released: "2004",
        img: "https://imageservice.disco.peacocktv.com/uuid/52739ae8-e519-33bd-8bed-6491dcc3e565/TITLE_ART_16_9/400?language=eng&territory=US&proposition=NBCUOTT&version=6a1a3a03-f05c-3577-a21a-37a29d70f1af",
    },
];

const onlyOnPeacock = [
    {
        title: "The Tonight Show Starring Jimmy Fallon",
        genre: "Comedy",
        seasons: "2 Seasons",
        tomato: "",
        img: "https://imageservice.disco.peacocktv.com/uuid/235b4808-4b44-3098-a7a2-78fe3ecbb25b/TITLE_ART_16_9/400?language=eng&territory=US&proposition=NBCUOTT&version=4371c5c8-4ef3-3a3c-9d89-0987202b5b31",
        // logo: "https://imageservice.disco.peacocktv.com/logo/skychb_nbclogo_darknow/AGG_SOURCE/40/24?proposition=NBCUOTT&territory=US",
    },
    {
        title: "La Brea",
        genre: "Drama",
        seasons: "2 Seasons",
        tomato: "",
        img: "https://imageservice.disco.peacocktv.com/pcms/ffe2f05c-3f15-11ed-9228-1bd0113db94b/LAND_16_9/400?territory=US&proposition=NBCUOTT&language=eng",
        logo: "https://imageservice.disco.peacocktv.com/logo/skychb_nbclogo_darknow/AGG_SOURCE/40/24?proposition=NBCUOTT&territory=US",
    },
    {
        title: "Two and a Half Men",
        genre: "Comedy",
        seasons: "12 Seasons",
        tomato: "65%",
        img: "https://imageservice.disco.peacocktv.com/uuid/4ae83fd9-e4a2-32c3-b298-05d8440f3c55/TITLE_ART_16_9/400?language=eng&territory=US&proposition=NBCUOTT&version=91369ba7-21d7-3a99-b67b-0aabb092cc3b",
    },
    {
        title: "Quantum Leap",
        genre: "Sci-Fi",
        seasons: "1 Season",
        tomato: "",
        img: "https://imageservice.disco.peacocktv.com/pcms/975b7cbc-38d9-11ed-aaf5-1fab0d19059c/LAND_16_9/400?territory=US&proposition=NBCUOTT&language=eng",
    },
    {
        title: "That 70's Show",
        genre: "Comedy",
        seasons: "8 Seasons",
        tomato: "91%",
        img: "https://imageservice.disco.peacocktv.com/uuid/0bfffeb2-cda9-36cf-a442-a59ada372ce1/TITLE_ART_16_9/400?language=eng&territory=US&proposition=NBCUOTT&version=aeb89e98-719e-30b5-8a94-f3e11ac1fd30",
    },
    {
        title: "Brooklyn Nine-Nine",
        genre: "Comedy",
        seasons: "8 Seasons",
        tomato: "95%",
        img: "https://imageservice.disco.peacocktv.com/uuid/caad458e-58a3-3490-82b6-3632c339530a/TITLE_ART_16_9/400?language=eng&territory=US&proposition=NBCUOTT&version=bbee86f7-b8ae-35fd-9d7c-a101add9ee70",
    },
    {
        title: "Yellowstone",
        genre: "Drama",
        seasons: "4 Seasons",
        tomato: "84%",
        img: "https://imageservice.disco.peacocktv.com/uuid/51aab181-4250-3334-8c75-fe55da453fe9/TITLE_ART_16_9/400?language=eng&territory=US&proposition=NBCUOTT&version=781cc818-cbc1-317f-a786-1e908dd9b491&output-format=webp",
    },
    {
        title: "The Office",
        genre: "Comedy",
        seasons: "9 Seasons",
        tomato: "81%",
        img: "https://imageservice.disco.peacocktv.com/pcms/7da0ae1a-5904-11ec-8988-d33b4336515c/AGG_SOURCE/400?territory=US&proposition=NBCUOTT&language=eng",
    },
    {
        title: "The Voice",
        genre: "Competition",
        seasons: "1 Season",
        tomato: "",
        img: "https://imageservice.disco.peacocktv.com/uuid/e95955a6-3665-35e5-92e8-b4a7d0929739/TITLE_ART_16_9/400?language=eng&territory=US&proposition=NBCUOTT&version=cde88f67-73f7-3415-b77c-8319e32a2a87",
    },
];

export { peacockPicks, myStuff, justAdded, forYou, onlyOnPeacock };
