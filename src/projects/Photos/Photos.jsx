import React, { useEffect, useState } from 'react';
import './index.css';

function Collection({ name, images }) {
  return (
    <div className="collection">
      <img className="collection__big" src={images[0]} alt="Item" />
      <div className="collection__bottom">
        <img className="collection__mini" src={images[1]} alt="Item" />
        <img className="collection__mini" src={images[2]} alt="Item" />
        <img className="collection__mini" src={images[3]} alt="Item" />
      </div>
      <h4>{name}</h4>
    </div>
  );
}

const categories = [
    { "name": "Все" },
    { "name": "Море" },
    { "name": "Горы" },
    { "name": "Архитектура" },
    { "name": "Города" }
  ]

export function Photos() {
  const [categoryId, setCategoryId] = useState(0)
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const [collection, setCollection] = useState([])

  const getCollection = async () => {
    setIsLoading(true)

    const category = categoryId ? `category=${categoryId}` : ''

    const res = await fetch(`https://65158043dc3282a6a3ce8662.mockapi.io/photos_colections?page=${page}&limit=3&${category}`,
  )
    const cole = await res.json()
    setCollection(cole)
    setIsLoading(false)
  }

  useEffect(() => {
    getCollection()
  }, [categoryId, page])


  return (
    <div className="Photos">
      <h1 className='mb-3 dark:text-slate-50'>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {
            categories.map((cats, i) => <li 
              key={cats.name}
              onClick={() => setCategoryId(i)}
              className={categoryId === i ? "active" : ''}
              >
                {cats.name}
              </li>)
          }
        </ul>
        <input 
         value={searchValue}
         onChange={(e) => setSearchValue(e.target.value)}
         className="search-input"
         placeholder="Поиск по названию"
        />
      </div>
      <div className="content">
        {
          isLoading 
          ? <h2>Loading...</h2>
          : collection.filter(col => col.name.toLowerCase().includes(searchValue.toLowerCase()))
          .map(col =>
            <Collection
              key={col.name}
              name={col.name}
              images={col.photos}
            />
          )
          
        }

      </div>
      <ul className="pagination">
        {[...Array(3)].map((_, i) => (
          <li 
            key={i}
            onClick={() => setPage(i + 1)}
            className={page === (i + 1) ? "active" : ''}
          >{i + 1}</li>
        ))}
      </ul>
    </div>
  );
}

