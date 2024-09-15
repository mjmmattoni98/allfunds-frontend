"use client";

import NewCard, { NewSchema } from "@/components/component/NewCard";
import { useEffect, useState } from "react";
import EmptyItem from "./EmptyItem";
import Loading from "./Loading";

const url = "https://allfunds-backend.onrender.com/api/";

async function getData(): Promise<NewSchema[]> {
  let data = await fetch(url + "news");
  let newsData = await data.json();
  newsData = newsData.map((news: any) => {
    return {
      id: news._id,
      title: news.title,
      description: news.description,
      date: new Date(news.date),
      content: news.content,
      author: news.author,
    };
  });

  return newsData;
}

async function getDataArchived(): Promise<NewSchema[]> {
  let data = await fetch(url + "news/archived");
  let newsData = await data.json();
  newsData = newsData.map((news: any) => {
    return {
      id: news._id,
      title: news.title,
      description: news.description,
      date: new Date(news.date),
      content: news.content,
      author: news.author,
      archiveDate: new Date(news.archiveDate),
    };
  });

  return newsData;
}

type NewListProps = {
  isArchived: boolean;
};

export default function NewsList({ isArchived }: Readonly<NewListProps>) {
  const [news, setNews] = useState<NewSchema[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      if (isArchived) {
        const newsData = await getDataArchived();
        setNews(newsData);
      } else {
        const newsData = await getData();
        setNews(newsData);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const handleAction = async (id: string) => {
    setIsLoading(true);
    if (isArchived) {
      // Remove the item from the archive
      await fetch(url + `news/${id}`, {
        method: "DELETE",
      });

      // Fetch the updated list
      const updatedNews = await getDataArchived();
      setNews(updatedNews);
    } else {
      // Archive the item
      await fetch(url + `news/${id}/archive`, {
        method: "PUT",
      });

      // Fetch the updated list
      const updatedNews = await getData();
      setNews(updatedNews);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col gap-4">
      {isLoading ? (
        <Loading />
      ) : news.length === 0 ? (
        isArchived ? (
          <EmptyItem
            title="No hay noticias archivadas"
            description="Parece que no tienes noticias archivadas."
          />
        ) : (
          <EmptyItem
            title="No hay noticias"
            description="No hay noticias en este momento."
          />
        )
      ) : (
        news.map((newSchema) => (
          <NewCard
            key={newSchema.id}
            newSchema={newSchema}
            onAction={handleAction}
          />
        ))
      )}
    </div>
  );
}
