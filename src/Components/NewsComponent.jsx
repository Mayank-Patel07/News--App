import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

export default function NewsComponent(props) {
  let { pageSize, category, setProgress, colorname } = props;

  // This state is used to show articles and its initial state is blank array
  const [articles, setArticles] = useState([]);

  // This state is used to set a page no. of articles and by default its initial value is 1
  const [page, setPage] = useState(1);

  // This state is used to show the total number of articles present in the API
  const [totalResults, settotalResults] = useState(0);

  // Fetching or Getting a data from server (News API)

  const Fetching_Data_From_Server = async () => {
    setProgress(0);
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY2}&page=${page}&pageSize=${pageSize}`;
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY1
    }&page=${page}&pageSize=${pageSize}`;
    setProgress(30);
    let data = await fetch(url);
    let newdata = await data.json();
    setProgress(70);
    setProgress(100);

    // changing the state of the articles from [] to newdata.articles
    setArticles(newdata.articles);

    // changing the state of the articles from 0 to newdata.totalResults
    settotalResults(newdata.totalResults);

    // console.log(newdata);
  };

  // This is hook and it will be called when the page is loaded
  useEffect(() => {
    Fetching_Data_From_Server();
  }, []);

  // This Function will be called when we want to show the loading spinner
  // Fetching or Getting a data from server (News API)
  const fetchData = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY2}&page=${
    //   page + 1
    // }&pageSize=${pageSize}`;
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY1
    }&page=${page + 1}&pageSize=${pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let newdata = await data.json();

    // changing the state of the articles from [] to articles.concat(newdata.articles)
    // In this state we are concating the previous loaded articles with the new articles
    setArticles(articles.concat(newdata.articles));

    // changing the state of the articles from 0 to total No. of articles
    settotalResults(newdata.totalResults);
  };

  return (
    <>
      <h2 className="text-light text-center" style={{ marginTop: "70px" }}>
        {" "}
        Today's News Top Headlines{" "}
      </h2>

      {/* Adding a infinite scroll until and unless the we have finish the all data (articles) */}
      <InfiniteScroll
        dataLength={articles.length} // Setting the length of articles
        next={fetchData} // next takes a function and according to the function we will show the data
        scrollableTarget="scrollableDiv"
        hasMore={articles.length !== 35} // It is used to stop scrolling when the data has been fetched
        loader={<Loader />} // Main thing what we actually want show it can either be a image , tag or something
      >
        <div className="container ">
          <div className="row  ">
            {/* Using array's advance function Map Itrate the data (articles) */}
            {articles.map((element) => {
              let {
                title,
                description,
                urlToImage,
                url,
                publishedAt,
                author,
                source,
              } = element;
              return (
                // Set the value of the key it is required
                <div className="col-md-4" key={url ? url : title}>
                  {/* Item we want to iteate with api element (title , description , urlToImage etc) */}
                  <NewsItem
                    title={
                      title.slice(0, 70)
                        ? title.slice(0, 70)
                        : "Title is not available"
                    }
                    description={
                      description
                        ? description.slice(0, 70)
                        : "Description is not available"
                    }
                    // time={publishedAt.slice(0, 10)}
                    time={new Date(publishedAt).toGMTString().slice(0, 26)}
                    colorname={colorname}
                    author={author ? author : "Author name is not available"}
                    source={source}
                    urlToImage={
                      urlToImage
                        ? urlToImage
                        : "https://img.etimg.com/thumb/msid-102726945,width-300,height-225,imgsize-11438,,resizemode-75/har-ghar-tiranga-abhiyan-2-0-commences-tricolour-available-at-post-offices-and-online-at-rs-25.jpg"
                    }
                    url={url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}
