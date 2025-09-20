import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { HomepageEntity, CarouselSection } from '@/core/entities/HomePage.entity'

interface Props {
  homepageSection: HomepageEntity | null;
}

const HeroBanner = ({ homepageSection }: Props) => {
  const carouselSection = homepageSection?.sections?.find(
    (section): section is CarouselSection => section.type === 'carousel'
  );

  const slidesToRender = carouselSection?.images || [];

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      className="w-full relative"
    >
      <CarouselContent>
        {slidesToRender.map((item, index) => (
          <CarouselItem key={index} className="w-full">
            <div
              className="
                relative w-full
                h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh]
                overflow-hidden
              "
            >
              {item.imageUrl ? (
                <Image
                  src={item.imageUrl}
                  alt={item.alt || 'Carousel image'}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                />
              ) : null}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Previous Button */}
      <CarouselPrevious
        className="
          absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10
          p-2 sm:p-3 md:p-4
        "
      />

      {/* Next Button */}
      <CarouselNext
        className="
          absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10
          p-2 sm:p-3 md:p-4
        "
      />
    </Carousel>
  )
}

export default HeroBanner
