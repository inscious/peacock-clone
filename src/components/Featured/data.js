const featuredImages = [
    {
        title: "Violent Night",
        image: "https://imageservice.disco.peacocktv.com/uuid/76ca414d-0a0a-3dd6-99bf-e66b91611734/LAND_16_9/1280?language=eng&territory=US&proposition=NBCUOTT&version=7779621f-4f27-3bbe-8ad0-ca41ae88694a",
        titleImage:
            "https://imageservice.disco.peacocktv.com/uuid/76ca414d-0a0a-3dd6-99bf-e66b91611734/TITLE_TREATMENT/563/224?language=eng&territory=US&proposition=NBCUOTT&output-format=webp",
        watch: "Watch Now",
        genre: "Action",
        seasons: "",
        year: "2022",
        score: "73%",
    },
    {
        title: "Poker Face",
        image: "https://imageservice.disco.peacocktv.com/uuid/4c43e619-ea4b-3bab-b82f-923cff883231/LAND_16_9/1280?language=eng&territory=US&proposition=NBCUOTT&version=b4411186-7e0e-3442-994c-2601673b7ffd",
        titleImage:
            "https://imageservice.disco.peacocktv.com/uuid/4c43e619-ea4b-3bab-b82f-923cff883231/TITLE_TREATMENT/563/224?language=eng&territory=US&proposition=NBCUOTT&output-format=webp",
        watch: "Watch Now",
        genre: "Drama",
        seasons: "1 Season",
        year: "2022",
        score: "99%",
    },
    {
        title: "Brooklyn Nine-Nine",
        image: "https://imageservice.disco.peacocktv.com/uuid/caad458e-58a3-3490-82b6-3632c339530a/LAND_16_9/1280?language=eng&territory=US&proposition=NBCUOTT&version=e0688a8b-168c-3b27-acb1-5d391003eae6",
        titleImage:
            "https://imageservice.disco.peacocktv.com/uuid/caad458e-58a3-3490-82b6-3632c339530a/TITLE_TREATMENT/708/2500?language=eng&territory=US",
        watch: "Watch S7 E1",
        genre: "Comedy",
        seasons: "7 Seasons",
        score: "95%",
    },
    {
        title: "The Resort",
        image: "https://imageservice.disco.peacocktv.com/uuid/1e9baed1-661a-3d3b-8737-53d343e2fb2e/LAND_16_9/1280?language=eng&territory=US&proposition=NBCUOTT&version=e757f4c1-f205-35db-80e3-05c68161c625",
        titleImage:
            "https://imageservice.disco.peacocktv.com/uuid/1e9baed1-661a-3d3b-8737-53d343e2fb2e/TITLE_TREATMENT/563/224?language=eng&territory=US&proposition=NBCUOTT",
        watch: "Watch S1 E1",
        genre: "Comedy-Drama",
        seasons: "1 Season",
        score: "88%",
    },
    {
        title: "Love Island",
        image: "https://imageservice.disco.peacocktv.com/pcms/98231c84-104a-11ed-b0e7-43e83437d3c8/LAND_16_9/1280?territory=US&proposition=NBCUOTT&language=eng",
        titleImage:
            "https://imageservice.disco.peacocktv.com/pcms/686f5592-091b-11ed-b44a-5f5f39a4de12/AGG_SOURCE/563/224?territory=US&proposition=NBCUOTT&language=eng",
        watch: "Watch S4 E11",
        genre: "Reality",
        seasons: "1 Season",
        score: "N/A",
    },
    {
        title: "Secrets of Playboy",
        image: "https://imageservice.disco.peacocktv.com/uuid/340bb79e-4c9f-3b9d-9366-506d9a77d58d/LAND_16_9/1280?language=eng&territory=US&version=aac60af4-9340-32ff-9286-110695a767ac",
        titleImage:
            "https://imageservice.disco.peacocktv.com/uuid/340bb79e-4c9f-3b9d-9366-506d9a77d58d/TITLE_TREATMENT/563/224?language=eng&territory=US&proposition=NBCUOTT",
        watch: "Watch S1 E1",
        genre: "Documentary",
        seasons: "1 Season",
        score: "88%",
    },
    {
        title: "Southern Charm",
        image: "https://imageservice.disco.peacocktv.com/uuid/b2c9f217-e5a5-33e7-b9c9-1f4d245e2867/LAND_16_9/1280?language=eng&territory=US&proposition=NBCUOTT&version=5b4aad03-a6a0-3c38-ac78-a56e4b0a1ba1",
        titleImage:
            "https://imageservice.disco.peacocktv.com/uuid/b2c9f217-e5a5-33e7-b9c9-1f4d245e2867/TITLE_TREATMENT/563/224?language=eng&territory=US&proposition=NBCUOTT",
        watch: "Watch S1 E10",
        genre: "Reality",
        seasons: "8 Seasons",
        score: "N/A",
    },
    {
        title: "The Real House Wives of Beverly Hills",
        image: "https://imageservice.disco.peacocktv.com/pcms/7fcf93f2-b991-11ec-9ec8-efb6c6bbcea1/LAND_16_9/1280?territory=US&proposition=NBCUOTT&language=eng",
        titleImage:
            "https://imageservice.disco.peacocktv.com/uuid/10eecb3c-a753-3be9-8848-093b748818d6/TITLE_TREATMENT/563/224?language=eng&territory=US&proposition=NBCUOTT",
        watch: "Watch S12 E1",
        genre: "Reality",
        seasons: "12 Seasons",
        score: "N/A",
    },
];

const rotten =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAAE5UlEQVR4Ae3bY5wjWxrH8V86FXRUubbv2LZt27Zt27Zt27Zt2/Zk51nks5m207X74j/TCOrb59RxyNU4f7iFOMY8tHEc5WtjTPne2xI+L/KTISEN7GsZoboklLaO0SSWL/iFwc7XgnRnkPMVVr719/Gg8JshCX+ZMvOnkg6wR6+STWup7oGV5LN383jMd6Y/KGubwAD1mcfjhqpvKGsfh4MvowVWQkn7cA9EH+d9wCK/I6W5AgMdL+TnAaa9eoIvUKMHFhQa2zd5ADL41iOtpUagSEll23QS+xYHLF6FRcUpJUU520Saqttp4zhMS3WfVFEy+zail3rbjeih3mKI+jZQaC5Le6+7Z7HzFcVsg6XxkYsMlwxUnwJGr8IS25SD3s574YV0Rxqrto4j9HU+pL/jMZIu6mVaqHupZJtBbks7YpmyAJZIwZLEXIqh6nu5uCjLYMdLKtlnyh89wrCAhZbqfpo4tiH3p7SY/RyPohTeyLGZb0x/R1przFf8SD5rF6lyUQGWai+jtgjF8rUxhgwApFpFCqq/+iRpQ+uh9qV89m3MwsVbCXlyLRmPZufh1PysHG5qoh6gD1eslKQgw+Xe7WS/GuDvhjk/0k49V62KYe/mbFx2gSuoHIfdcYzECJ97Np+1c7BLsp16Qf4PDCMXuCcj19uW8dlbobJ5d6VPaVfaZ++inJx5/yNv3ZCQ5VkZI8VChQUUUlkq091xNbglVrym8YC8ceoG1kMBl6rDXVoRkXYKzUOOLWzvE+wq28t5b3oBTv7nDVuU8tkT0GMbltfvi0ispItC6xBX4x/N/DI1O3ualNfvzVDXso/26nm6O27Q1/mEzvYr0nAMLcwRl4H3//1m9crr/cf2cTxyfe+uphGa2gaqhqQamw/BttC80Z/N7McF9/n8dkNWLkU81J236RRSBws7Ucfw0LzJpSQ8kEbo80brSBpuRjzQM/fhwjdgCxRbyEje0L5BvOa+JximvpOGqFAt875luTgvP4+qjNYzMEAsYHpAGKqb81PwqryLa+Jvf7HSdMuDtJS5MMkPFjC+hjsaw0re/go/eGCrmqmgMaQ7nRVaeWB3wXqtYs/DITf2C1DlZtYqVvIL/IhgSxkpqmWopKKBMgh2oJ6eWseO0TEIwW6BlVrH7oA1CPYWnNY69jacRbBv4b7GsZJnCFbjSHe0jv0/9rXWoW/g3v9Ma3wJjiBY6YO0jl0PSxDsOB1DtY7tptAWwZY1UkLr2JwmsiDY3+B7jWOfAGYEK5E9E41C3UszbmxDhdpaxeY2kc0Dq8IXLniuNehJ2Ovv6uJgPb21hi1ppLAn1rN0H2sFKutqge4I1DdQQyPYV3+b+CtQLKDbAWujO7a+Qq1gbWxJv/sErkZX6CwdE0K0P5vYQKLo2Dpvg1WAMURYSQ4TWV3wMrpA98JGwBLq0zJZFTJ8gEfeDl0MMwFzmI8GxTDx5yU46qXQDz0VOgC68DuVCpbJOkZ5E1R21zMopI2w43xZFDJ6wcrGqwF6enwH1og/uwhKHQNVoqB7eivdym8mfo/0Y/OAsYKBUgdhS0Qin8F12Y+SnTiv+IyADM3kmMIR2O6C92EF3oVzk3SMkOkZ4OM9H4jwpzHLZiKznDabo2OilPx9uOjPJOP9S7h1Evauh8UD9HQvZ6S4u5qGc/4ByO9ajaTGPhUAAAAASUVORK5CYII=";

export { featuredImages, rotten };
