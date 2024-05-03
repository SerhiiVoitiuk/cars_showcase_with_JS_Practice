"use client"

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@/types";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utiles";


const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  // const router = useRouter();

  const handleNAvigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);

    // const newPathName = updateSearchParams('limit', `${newLimit}`);

    // router.push(newPathName)
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton 
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNAvigation}
        />
      )}
    </div>
  )
}

export default ShowMore