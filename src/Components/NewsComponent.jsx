import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

export default function NewsComponent(props) {
  let { pageSize, category, setProgress, colorname } = props;

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const Fetching_Data_From_Server = async () => {
    setProgress(0);
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY2}&page=${page}&pageSize=${pageSize}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY1}&page=${page}&pageSize=${pageSize}`;
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=b216979c955a48e48508a99cac539d27&page=${page}&pageSize=${pageSize}`;
    setProgress(30);
    let data = await fetch(url);
    let newdata = await data.json();
    setProgress(70);
    setProgress(100);
    setArticles(newdata.articles);
    settotalResults(newdata.totalResults);
    // console.log(newdata);
  };

  useEffect(() => {
    Fetching_Data_From_Server();
  }, []);

  const fetchData = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY2}&page=${
    //   page + 1
    // }&pageSize=${pageSize}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY1}&page=${page+1}&pageSize=${pageSize}`;
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=b216979c955a48e48508a99cac539d27&page=${page+1}&pageSize=${pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let newdata = await data.json();
    setArticles(articles.concat(newdata.articles));
    settotalResults(newdata.totalResults);
  };

  return (
    <>
      <h2 className="text-light text-center" style={{ marginTop: "70px" }}>
        {" "}
        Today's News Top Headlines{" "}
      </h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        scrollableTarget="scrollableDiv"
        hasMore={articles.length !== 35}
        loader={<Loader />}
      >
        <div className="container ">
          <div className="row  ">
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
                <div className="col-md-4" key={url ? url : title}>
                  <NewsItem
                    title={title.slice(0, 70) ? title.slice(0, 70) : "Title is not available"}
                    description={description ? description.slice(0, 70) : "Description is not available"}
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
