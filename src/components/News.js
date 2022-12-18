import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "google-news-au",
                "name": "Google News (Australia)"
            },
            "author": "7NEWS",
            "title": "A-League pitch invasion: Football Australia vows to find wild fans behind ‘absolute disgrace’",
            "description": "The Melbourne derby descended into chaos in one of the ugliest scenes in the competition’s history.",
            "url": "https://7news.com.au/sport/soccer/a-league-match-abandoned-after-fans-attack-goalkeeper-in-violent-pitch-invasion-c-9196263",
            "urlToImage": "https://images.7news.com.au/publication/C-9196263/251be597757d18124dfaa46763c5b4719f2407ad-16x9-x0y80w2863h1610.jpg?imwidth=1200",
            "publishedAt": "2022-12-17T23:00:00+00:00",
            "content": "Football Australia plans to use the full force of its powers to sanction individuals involved in the A-League Men Melbourne derby pitch invasion that delivered one of Australian sports darkest nights… [+3889 chars]"
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "How family unity has helped Mbappe to stardom",
            "description": "As Kylian Mbappe looks to win his second World Cup aged just 23, French football writer Julien Laurens looks at the striker's journey to the top.",
            "url": "http://www.bbc.co.uk/sport/football/63998649",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/6C7C/production/_128027772_mbappe2.png",
            "publishedAt": "2022-12-17T21:52:27.8019099Z",
            "content": "<table><tr><th>Fifa World Cup final, Sunday 18 December, kick-off 15:00 GMT</th></tr>\r\n<tr><td>Coverage: Live on BBC One, BBC iPlayer, BBC Radio 5 Live, BBC Sounds and the BBC Sport website and app</… [+5532 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Tom Peck",
            "title": "Whatever happens on Sunday, it will be the start of football’s grim new era",
            "description": "The game is clinging to its past because it doesn’t have the courage to look into its future",
            "url": "http://www.independent.co.uk/voices/football-world-cup-final-sportswashing-qatar-b2246737.html",
            "urlToImage": "https://static.independent.co.uk/2022/12/16/11/1448997750.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2022-12-16T17:09:32Z",
            "content": "Sign up for the View from Westminster email for expert analysis straight to your inbox\r\nGet our free View from Westminster email\r\nSport, like gold, is an unreactive element. It cannot be alloyed, com… [+4345 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Field YatesESPN Insider ",
            "title": "Fantasy football Week 15 tips: Mike Evans, J.K. Dobbins",
            "description": "Field Yates discusses top storylines for this big fantasy playoff week, including how to value a star wideout and backfield conundrums galore.",
            "url": "http://espn.go.com/fantasy/football/insider/story/_/id/35252287/mike-evans-jk-dobbins-playoffs-dandre-swift-jerick-mckinnon",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1206%2Fr1102795_1296x729_16%2D9.jpg",
            "publishedAt": "2022-12-15T11:44:00Z",
            "content": "Each week during the 2022 NFL season, Field Yates will help fantasy football managers by providing the precise intel needed on the most important, fantasy-relevant storylines. Field's Rolodex is vast… [+11725 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
            "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
            "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
            "publishedAt": "2020-04-27T07:20:43Z",
            "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
        }
    ]
    constructor() {
        super();
        console.log("im a constructor from news");
        this.state =
        {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>Daily Dose - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="my title" description="my description" imageUrl="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/6C7C/production/_128027772_mbappe2.png" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="my title" description="my description" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="my title" description="my description" />
                    </div>

                </div>

            </div>
        )
    }
}

export default News
