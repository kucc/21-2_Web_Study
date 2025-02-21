import React, { useContext } from 'react';

import router from 'next/router';

import { Card, ErrorLayout } from '@components';

import { SimplePlaceType } from 'interfaces';

import { DistanceValueContext } from '@contexts';
import { decodeImageLink } from '@util';

import { StyledCardContainer, StyledDistance, StyledReview, StyledStar } from './styled';
import { CardArrayProps } from './type';

const ChipArray = ({ places }: { places: any }) => {
  const { sendDistance } = useContext(DistanceValueContext);
  if (places) {
    return (
      <React.Fragment>
        {places.map((place: SimplePlaceType, key: number) => {
          if (place) {
            const {
              id,
              placeName,
              images,
              ratingNumber,
              commentCount,
              distance,
              placeDescription,
            } = place;

            let distanceString = '';
            if (distance < 1000) {
              distanceString = `${distance.toFixed()}m`;
            } else {
              distanceString = `${(distance / 1000).toFixed(1)}km`;
            }

            const ChipGroupList = [
              {
                icon: <StyledStar />,
                label: ratingNumber,
              },
              {
                icon: <StyledReview />,
                label: commentCount,
              },
              {
                icon: <StyledDistance />,
                label: distanceString,
              },
            ];

            const imageLink =
              images.length > 0
                ? decodeImageLink(images[0].path.data)
                : `pictures/default-place.png`;

            return (
              <Card
                imageSource={imageLink}
                key={`card_${key}`}
                title={placeName}
                description={placeDescription}
                ChipGroupList={ChipGroupList}
                onClick={() => {
                  sendDistance(distanceString);
                  router.push(`/place/${id}`);
                }}
              />
            );
          } else {
            return (
              <ErrorLayout isNavbar={false} mainTextArray={['아직 등록된 장소가 없어요 ㅠㅠ']} />
            );
          }
        })}
      </React.Fragment>
    );
  } else {
    return <ErrorLayout isNavbar={false} mainTextArray={['아직 등록된 장소가 없어요 ㅠㅠ']} />;
  }
};

export const CardArray = ({ places, style }: CardArrayProps) => {
  return (
    <StyledCardContainer style={style}>
      <ChipArray places={places} />
    </StyledCardContainer>
  );
};
