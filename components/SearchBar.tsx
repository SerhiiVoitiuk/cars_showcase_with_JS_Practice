"use client"

import React, { useState } from "react";
import Image from 'next/image'

import { SearchManufacturer } from "./";
import { useRouter } from "next/navigation";


const SearchButton = ({ otherClasese }: { otherClasese: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasese}`}>
    <Image 
      src='/magnifying-glass.svg'
      alt="search"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);


const SearchBar = ({ setManufacturer, setModel }: {setManufacturer: any, setModel: any}) => {
  const [searchManufacturer, setSearchManufacturer] = useState('');
  const [searchModel, setSearchModel] = useState(''); 
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === '' && searchModel === '') {
      return alert('Please fill in the search bar')
    }

    setModel(searchModel)
    setManufacturer(searchManufacturer)
  };

  // const updateSearchParams = (searchModel: string, searchManufacturer: string) => {
  //   const searchParams = new URLSearchParams(window.location.search);

  //   if (searchModel) {
  //     searchParams.set('model', searchModel)
  //   } else {
  //     searchParams.delete('model')
  //   }

  //   if (searchManufacturer) {
  //     searchParams.set('manufacturer', searchManufacturer)
  //   } else {
  //     searchParams.delete('manufacturer')
  //   }

  //   const newPathname = `${window.location.pathname}?${searchParams.toString()}`

  //   router.push(newPathname);
  // };

  return (
    <form 
      className='searchbar' 
      onSubmit={handleSearch}
    >
      <div className='searchbar__item'>
        <SearchManufacturer 
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />

        <SearchButton 
          otherClasese='sm:hidden'
        />
      </div>

      <div className="searchbar__item">
        <Image 
          src='/model-icon.png'
          alt="model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />

        <input 
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className='searchbar__input'
        />
        <SearchButton 
          otherClasese='sm:hidden'
        />
      </div>
      <SearchButton 
          otherClasese='max-sm:hidden'
        />
    </form>
  )
}

export default SearchBar