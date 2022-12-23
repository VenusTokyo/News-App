import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 9,
        category: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);

        this.state =
        {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `Daily Dose- ${this.props.category}`
    }
    async updateNews() {
        this.props.setProgress(0)
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })

        let data = await fetch(url);
        this.props.setProgress(30)

        let parsedData = await data.json()
        this.props.setProgress(70)
       
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false

        })
        this.props.setProgress(100)

    }
    async componentDidMount() {

        this.updateNews()
    }

    // handleNextClick = async () => {
    //     this.setState({ page: this.state.page + 1 });
    //     this.updateNews()

    // }
    // handlePrevClick = async () => {
    //     this.setState({ page: this.state.page - 1 });
    //     this.updateNews()
    // }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })

        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=df3b674ce85e488bb1dd1b8acfbfde5d&page=${this.state.page}&pageSize=${this.props.pageSize}`
        
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
           

        })
    };
    render() {
        return (
            <>
                <h1 className="text-center my-4">Daily Dose - Top {this.props.category} Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">

                        <div className="row">
                            {this.state.articles.map((element) => {

                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={!element.author ? "Unknown" : element.author} source={element.source.name} date={element.publishedAt} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="d-flex justify-content-between">

                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </>
        )
    }
}

export default News
